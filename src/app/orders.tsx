import { showToast } from '@/components/customToast'
import EmptyList from '@/components/emptyList'
import OrderForm from '@/components/forms/order'
import Header from '@/components/header'
import MyModal from '@/components/MyModal'
import { useAuth } from '@/context/authContext'
import { deleteOrder, getUserOrders } from '@/models/order'
import { s } from '@/styles/app/menus'
import { colors } from '@/styles/colors'
import { OrderType } from '@/types'
import { capitalizeName, formatDateDistanceToNow } from '@/utils/functions'
import Feather from '@expo/vector-icons/Feather'
import { useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import {
	Alert,
	FlatList,
	Pressable,
	SafeAreaView,
	Text,
	View,
	TextInput,
	ScrollView,
	ActivityIndicator,
} from 'react-native'

export default function Orders() {
	const [orders, setOrders] = useState<OrderType[]>([])
	const [search, setSearch] = useState('')
	const [visible, setVisible] = useState(false)
	const { data } = useAuth()
	const [isLoading, setIsLoading] = useState(true)

	const getOrders = async () => {
		// vai depender do login
		setIsLoading(true)
		await getUserOrders(data?.id || 0)
			.then(response => {
				setOrders(response)
			})
			.catch(error => {
				// Se for um erro de validação, pega a mensagem específica
				const errorMessage = error?.error?.message || 'Erro ao carregar pedidos'
				// apresenta do Erros
				showToast({ type: 'error', title: 'Erro', message: errorMessage })
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	const handleDelete = (id: number) => {
		Alert.alert(
			'Excluir Pedido',
			'Deseja excluir esse pedido?',
			[
				{
					text: 'Sim',
					onPress: async () => {
						await deleteOrder(id)
							.then(_ => {
								showToast({ type: 'success', title: 'Sucesso', message: 'Excluido com sucesso.' })
								getOrders()
							})
							.catch(error => {
								// Se for um erro de validação, pega a mensagem específica
								const errorMessage = error?.error?.message || 'Erro ao eliminar'
								// apresenta do Erros
								showToast({ type: 'error', title: 'Erro', message: errorMessage })
							})
					},
				},
				{ text: 'Não', onPress: () => {}, style: 'cancel' },
			],
			{ cancelable: false },
		)
	}

	const filteredOrders = search
		? orders.filter(order => order.blood_type.name.toLowerCase().includes(search.toLowerCase()))
		: orders

	useEffect(() => {
		getOrders()
	}, [])

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size='large' color={colors.main.base} />
			</View>
		)
	}

	return (
		<View style={s.container}>
			<Header title='Meus Pedidos' onClick={() => setVisible(true)} onSearchChange={setSearch} searchValue={search} />
			{filteredOrders.length === 0 ? (
				<EmptyList text='Nenhum pedido encontrado' />
			) : (
				<SafeAreaView style={{ backgroundColor: '#FFFFFF', width: '100%', height: '100%', marginTop: 20 }}>
					<FlatList
						data={filteredOrders}
						style={{ backgroundColor: '#F2F4F7' }}
						renderItem={({ item }) => {
							return (
								<View
									style={[
										s.item,
										{
											marginBottom: 10,
											backgroundColor: '#FFFFFF',
										},
									]}
								>
									<View style={s.middle}>
										<Text ellipsizeMode='tail' numberOfLines={2} style={[s.title, { marginBottom: 10, fontSize: 14 }]}>
											{capitalizeName(item.description)}
										</Text>
										<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
											<Feather name='map-pin' color={colors.main.dark} /> {item.donate_location}
										</Text>
										<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
											<Feather name='droplet' color={colors.main.dark} /> Tipo Sanguíneo: {item.blood_type.name}
										</Text>
										<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
											<Feather name='alert-circle' color={colors.main.dark} /> Urgência: {capitalizeName(item.urgency)}
										</Text>
									</View>
									<View style={[s.containerButton, { backgroundColor: colors.secondary.blue, padding: 10 }]}>
										<Pressable onPress={() => handleDelete(item.id)}>
											<Feather color={colors.secondary.blueDark} size={20} name='trash' />
										</Pressable>
									</View>
								</View>
							)
						}}
						keyExtractor={item => item.id.toString()}
					/>
				</SafeAreaView>
			)}
			<MyModal title='Criar Pedido' visible={visible} onClose={() => setVisible(false)}>
				<OrderForm refreshOrders={getOrders} onClose={() => setVisible(false)} />
			</MyModal>
		</View>
	)
}
