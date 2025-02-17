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
import { capitalizeName } from '@/utils/functions'
import Feather from '@expo/vector-icons/Feather'
import { useEffect, useState } from 'react'
import { Alert, FlatList, Pressable, SafeAreaView, Text, View } from 'react-native'

export default function Orders() {
	const [orders, setOrders] = useState<OrderType[]>([])
	const [search, setSearch] = useState('')
	const [visible, setVisible] = useState(false)
	const { data } = useAuth()

	const getOrders = async () => {
		// vai depender do login
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
	return (
		<View style={s.container}>
			<Header title='Pedidos' onClick={() => setVisible(true)} onSearchChange={setSearch} searchValue={search} />
			{filteredOrders.length === 0 ? (
				<EmptyList text='Nenhum pedido encontrado' />
			) : (
				<SafeAreaView style={{ backgroundColor: '#F5F5F5', width: '100%', marginTop: 20 }}>
					<FlatList
						data={filteredOrders}
						renderItem={({ item }) => {
							return (
								<View
									style={[
										s.item,
										{
											marginBottom: 10,
											backgroundColor: '#FFFFFF',
											borderRadius: 5,
											borderLeftWidth: 1,
											borderLeftColor: colors.main.light,
										},
									]}
								>
									<View style={s.middle}>
										<Text ellipsizeMode='tail' numberOfLines={1} style={s.title}>
											{capitalizeName(item.description)}
										</Text>
										<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
											<Feather name='map-pin' /> {item.donate_location}
										</Text>
										<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
											<Feather name='droplet' /> Tipo Sanguíneo: {item.blood_type.name}
										</Text>
										<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
											<Feather name='alert-circle' /> Urgência: {capitalizeName(item.urgency)}
										</Text>
									</View>
									<View style={s.containerButton}>
										<Pressable onPress={() => handleDelete(item.id)}>
											<Feather color={colors.main.dark} size={20} name='trash' />
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
