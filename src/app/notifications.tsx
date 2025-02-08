import { showToast } from '@/components/customToast'
import EmptyList from '@/components/emptyList'
import Header from '@/components/header'
import { NotificationsData } from '@/mocks'
import { getNotifications } from '@/models/order'
import { s } from '@/styles/app/menus'
import { colors } from '@/styles/colors'
import { notificationType } from '@/types'
import { capitalizeName, formatedName } from '@/utils/functions'
import Feather from '@expo/vector-icons/Feather'
import { Bell } from 'lucide-react-native'
import { useEffect, useState } from 'react'
import { Alert, FlatList, Image, Pressable, SafeAreaView, Text, View } from 'react-native'

export default function Notification() {
	const [notifications, setNotifications] = useState<notificationType[]>()
	const getDonate = async () => {
		await getNotifications(2)
			.then(Response => {
				console.log(Response)
				setNotifications(Response)
			})
			.catch(error => {
				// Se for um erro de validação, pega a mensagem específica
				const errorMessage = error?.error?.message || 'Erro ao realizar o cadastro'
				// apresenta do Erros
				showToast({ type: 'error', title: 'Erro', message: errorMessage })
			})
	}

	useEffect(() => {
		getDonate()
	}, [])
	return (
		<View style={s.container}>
			<Header title='Notificações' showInput={false} showButton={false} />
			{notifications?.length === 0 ? (
				<EmptyList text='Nenhuma notificação encontrada' />
			) : (
				<SafeAreaView style={s.flatlist}>
					<FlatList
						data={notifications}
						renderItem={({ item }) => {
							return (
								<Pressable onPress={() => Alert.alert('Doe', item.user.fullname)}>
									<View style={s.item}>
										<View style={s.image}>
											<Bell color={colors.main.dark} />
										</View>
										<View style={s.notificationBody}>
											<Text ellipsizeMode='tail' numberOfLines={1} style={s.title}>
												{capitalizeName(item.user.fullname ?? '')}
											</Text>
											<Text ellipsizeMode='tail' numberOfLines={2} style={s.description}>
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
								</Pressable>
							)
						}}
						keyExtractor={item => item.id.toString()}
					/>
				</SafeAreaView>
			)}
		</View>
	)
}
