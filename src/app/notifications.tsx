import { showToast } from '@/components/customToast'
import EmptyList from '@/components/emptyList'
import Header from '@/components/header'
import { useAuth } from '@/context/authContext'
import { getNotifications } from '@/models/order'
import { s } from '@/styles/app/menus'
import { notificationType } from '@/types'
import { capitalizeName } from '@/utils/functions'
import Feather from '@expo/vector-icons/Feather'
import { Link } from 'expo-router'
import { Bell } from 'lucide-react-native'
import { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'

export default function Notification() {
	const [notifications, setNotifications] = useState<notificationType[]>()
	const { data } = useAuth()
	const getData = async () => {
		// vai depender do login
		await getNotifications(data?.id || 0)
			.then(response => {
				setNotifications(response)
			})
			.catch(error => {
				// Se for um erro de validação, pega a mensagem específica
				const errorMessage = error?.error?.message || 'Erro ao carregar notificações'
				// apresenta do Erros
				showToast({ type: 'error', title: 'Erro', message: errorMessage })
			})
	}

	useEffect(() => {
		getData()
	}, [])
	return (
		<View style={s.container}>
			{notifications?.length === 0 ? (
				<EmptyList text='Nenhuma notificação encontrada' />
			) : (
				<View>
					<Header title='Notificações' showInput={false} showButton={false} />
					<SafeAreaView style={s.flatlist}>
						<FlatList
							data={notifications}
							renderItem={({ item }) => {
								return (
									<Link href={`/(chat)/chat/${capitalizeName(item.user.fullname)}?otherUserId=${item.user.id}`}>
										<View style={s.item}>
											<View style={s.image}>
												<Bell color={'#FFFFFF'} />
											</View>
											<View style={s.notificationBody}>
												<Text ellipsizeMode='tail' numberOfLines={1} style={s.title}>
													{capitalizeName(item.user.fullname ?? '')}
												</Text>
												<Text ellipsizeMode='tail' numberOfLines={1} style={[s.description, { width: '80%' }]}>
													<Feather name='message-circle' size={14} /> {item.description}
												</Text>
												<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
													<Feather name='map-pin' size={14} /> {item.donate_location}
												</Text>
												<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
													<Feather name='alert-circle' size={14} /> {capitalizeName(item.urgency ?? '')}
												</Text>
											</View>
										</View>
									</Link>
								)
							}}
							keyExtractor={item => item.id.toString()}
						/>
					</SafeAreaView>
				</View>
			)}
		</View>
	)
}
