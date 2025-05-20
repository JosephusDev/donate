import { showToast } from '@/components/customToast'
import EmptyList from '@/components/emptyList'
import Header from '@/components/header'
import { useAuth } from '@/context/authContext'
import { getNotifications } from '@/models/order'
import { s } from '@/styles/app/menus'
import { colors } from '@/styles/colors'
import { notificationType } from '@/types'
import { capitalizeName } from '@/utils/functions'
import Feather from '@expo/vector-icons/Feather'
import { Link, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text, View, ActivityIndicator } from 'react-native'

export default function Notification() {
	const [notifications, setNotifications] = useState<notificationType[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const { data } = useAuth()

	const getNotificationsData = async () => {
		setIsLoading(true)
		await getNotifications(data?.id || 0)
			.then(response => {
				setNotifications(response)
			})
			.catch(error => {
				const errorMessage = error?.error?.message || 'Erro ao carregar notificações.'
				showToast({ type: 'error', title: 'Erro', message: errorMessage })
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	const navigation = useNavigation()

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			getNotificationsData()
		})

		return unsubscribe
	}, [navigation])

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size='large' color={colors.main.base} />
			</View>
		)
	}

	return (
		<View style={s.container}>
			{notifications.length === 0 ? (
				<EmptyList text='Nenhuma notificação encontrada' />
			) : (
				<View>
					<Header title='Notificações' showInput={true} showButton={false} />
					<SafeAreaView style={s.flatlist}>
						<FlatList
							data={notifications}
							renderItem={({ item }) => {
								return (
									<Link href={`/(chat)/chat/${capitalizeName(item.user.fullname)}?otherUserId=${item.user.id}`}>
										<View style={s.item}>
											<View style={s.notificationBody}>
												<Text ellipsizeMode='tail' numberOfLines={1} style={s.title}>
													{capitalizeName(item.user.fullname ?? '')}
												</Text>
												<Text ellipsizeMode='tail' numberOfLines={2} style={[s.description, { width: '80%' }]}>
													<Feather name='message-circle' color={colors.main.dark} size={14} /> {item.description}
												</Text>
												<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
													<Feather name='map-pin' color={colors.main.dark} size={14} /> {item.donate_location}
												</Text>
												<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
													<Feather name='alert-circle' color={colors.main.dark} size={14} />{' '}
													{capitalizeName(item.urgency ?? '')}
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
