import { showToast } from '@/components/customToast'
import EmptyList from '@/components/emptyList'
import Header from '@/components/header'
import { useAuth } from '@/context/authContext'
import { getChats } from '@/models/chat'
import { s } from '@/styles/app/menus'
import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { MessageType } from '@/types'
import { capitalizeName, formatedName, getUniqueMessages } from '@/utils/functions'
import { Feather } from '@expo/vector-icons'
import { Link, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import { Alert, Pressable, SafeAreaView, ScrollView, Text, View, ActivityIndicator } from 'react-native'

export default function Chats() {
	const [chats, setChats] = useState<MessageType[]>([])
	const [search, setSearch] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	const { data, isAuthenticated } = useAuth()

	const getChatsData = async () => {
		setIsLoading(true)
		await getChats(data?.id || 0)
			.then(response => {
				const filteredChats = getUniqueMessages(response)
				setChats(filteredChats)
			})
			.catch(error => {
				const errorMessage = error?.error?.message || 'Erro ao carregar conversas.'
				showToast({ type: 'error', title: 'Erro', message: errorMessage })
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	const navigation = useNavigation()

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			getChatsData()
		})

		return unsubscribe
	}, [navigation])

	const returnOtherUser = (chat: MessageType) => {
		return chat.user_id_to === data?.id ? chat?.user1?.fullname : chat?.user2?.fullname
	}

	const filteredChats = search
		? chats.filter(
				v =>
					(returnOtherUser(v) ?? '').toLowerCase().includes(search.toLowerCase()) ||
					v.message.toLowerCase().includes(search.toLowerCase()),
			)
		: chats

	if (!isAuthenticated) {
		return <EmptyList text='Faça login para ver suas conversas' />
	}

	return (
		<View style={s.container}>
			{filteredChats.length === 0 ? (
				<EmptyList text='Nenhuma conversa encontrada' />
			) : (
				<ScrollView>
					<Header title='Conversas' showButton={false} onSearchChange={setSearch} searchValue={search} />
					<SafeAreaView style={{ marginTop: 20 }}>
						{filteredChats.map(item => (
							<Link
								key={item.id}
								href={`/(chat)/chat/${capitalizeName(item.user_id_from != data?.id ? (item.user1?.fullname ?? '') : (item.user2?.fullname ?? ''))}?otherUserId=${item.user_id_from != data?.id ? item.user_id_from : item.user_id_to}`}
							>
								<View style={s.item}>
									<View style={[{ width: '100%', gap: 0 }]}>
										<Text ellipsizeMode='tail' numberOfLines={1} style={s.title}>
											{capitalizeName(returnOtherUser(item) ?? '')}
										</Text>
										<Text
											ellipsizeMode='tail'
											numberOfLines={1}
											style={[s.description, { fontFamily: fontFamily.regular, width: '90%', marginTop: 5 }]}
										>
											<Text style={{ fontFamily: fontFamily.bold }}>
												{item.user_id_from === data?.id ? 'Eu: ' : `${returnOtherUser(item)?.split(' ')[0]}: `}
											</Text>
											{item.message}
										</Text>
									</View>
								</View>
							</Link>
						))}
					</SafeAreaView>
				</ScrollView>
			)}
		</View>
	)
}
