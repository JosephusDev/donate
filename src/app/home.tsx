import { showToast } from '@/components/customToast'
import { getOrder } from '@/models/order'
import { s } from '@/styles/app/menus'
import { colors } from '@/styles/colors'
import { OrderType } from '@/types'
import { capitalizeName, capitalizeText, formatedName } from '@/utils/functions'
import { Feather } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { format } from 'date-fns'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Link } from 'expo-router'
import { useAuth } from '@/context/authContext'

export default function Home() {
	const [imageUri, setImageUri] = useState('')
	const [orders, setOrders] = useState<OrderType[]>([])
	const [search, setSearch] = useState('')
	const { data } = useAuth()

	useEffect(() => {
		const fetchImage = async () => {
			const localImage = await AsyncStorage.getItem('imagem')
			if (localImage) {
				setImageUri(localImage)
			}
		}
		fetchImage()
	}, [])

	const getOrders = async () => {
		await getOrder()
			.then(response => {
				console.log(response)
				setOrders(response)
			})
			.catch(error => {
				// Se for um erro de validação, pega a mensagem específica
				const errorMessage = error?.error?.message || 'Erro ao carregar pedidos.'
				// apresenta do Erros
				showToast({ type: 'error', title: 'Erro', message: errorMessage })
			})
	}
	const filteredOrders = search
		? orders?.filter(
				v =>
					v.blood_type.name.toLowerCase().includes(search.toLowerCase()) ||
					v.donate_location.toLowerCase().includes(search.toLowerCase()),
			)
		: orders

	useEffect(() => {
		getOrders()
	}, [])

	return (
		<ScrollView style={{ flex: 1, padding: 20 }}>
			<View style={s.headerHome}>
				{imageUri ? (
					<Image style={[s.avatar, { width: 50, height: 50 }]} src={imageUri} />
				) : (
					<View style={[s.avatar, { width: 50, height: 50 }]}>
						<Text style={s.title}>{formatedName(data?.fullname || '')}</Text>
					</View>
				)}
				<TextInput
					value={search}
					onChangeText={setSearch}
					placeholderTextColor={colors.gray[500]}
					style={s.searchHome}
					placeholder='O que estás a procurar?'
				/>
			</View>
			<View style={{ marginBottom: 30 }}>
				{filteredOrders.map(item => (
					<View key={item.id.toString()} style={s.itemHome}>
						<View style={{ width: '100%', gap: 10 }}>
							<View style={s.author}>
								<View style={s.authorAvatar}>
									<Feather name='user' size={20} color={colors.gray[500]} />
								</View>
								<Text ellipsizeMode='tail' numberOfLines={1} style={s.title}>
									{capitalizeName(item.user.fullname)}
								</Text>
							</View>
							<View style={s.postContainer}>
								<Text style={s.post}>{item.description}</Text>
							</View>
							<View style={s.postFooter}>
								<View>
									<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
										<Feather name='map-pin' /> {item.donate_location}
									</Text>
									<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
										<Feather name='calendar' /> {format(item.date, 'dd/MM/yyyy')}
									</Text>
									<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
										<Feather name='alert-circle' /> Urgência: {capitalizeName(item.urgency)}
									</Text>
									<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
										<Feather name='droplet' /> Tipo Sanguíneo: {item.blood_type.name}
									</Text>
								</View>
								<View style={s.postMessageButton}>
									<View style={[s.authorAvatar, { padding: 10, width: 50, height: 50 }]}>
										<Link href={`/(chat)/chat/${item.user_id}`}>
											<Feather name='message-circle' size={30} color={colors.gray[500]} />
										</Link>
									</View>
								</View>
							</View>
						</View>
					</View>
				))}
			</View>
		</ScrollView>
	)
}
