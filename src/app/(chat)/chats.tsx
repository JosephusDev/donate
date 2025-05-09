import { showToast } from '@/components/customToast'
import EmptyList from '@/components/emptyList'
import Header from '@/components/header'
import { useAuth } from '@/context/authContext'
import { getChats } from '@/models/chat'
import { s } from '@/styles/app/menus'
import { fontFamily } from '@/styles/font-family'
import { MessageType } from '@/types'
import { capitalizeName, formatedName, getUniqueMessages } from '@/utils/functions'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { useEffect, useState } from 'react'
import { Alert, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'

export default function Chats() {
	const [chats, setChats] = useState<MessageType[]>([])
	const [search, setSearch] = useState('')
	const { data } = useAuth()

	const getChatsData = async () => {
		await getChats(data?.id || 0).then(response => {
			const filteredChats = getUniqueMessages(response)
			setChats(filteredChats)
		})
	}

	useEffect(() => {
		getChatsData()
	}, [])

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

	return (
		<View style={s.container}>
			{filteredChats.length === 0 ? (
				<EmptyList text='Nenhuma conversa encontrada' />
			) : (
				<ScrollView>
					<Header title='Conversas' showButton={false} onSearchChange={setSearch} searchValue={search} />
					<SafeAreaView style={s.flatlist}>
						{filteredChats.map(item => (
							<Link
								key={item.id}
								href={`/(chat)/chat/${capitalizeName(item.user_id_from != data?.id ? (item.user1?.fullname ?? '') : (item.user2?.fullname ?? ''))}?otherUserId=${item.user_id_from != data?.id ? item.user_id_from : item.user_id_to}`}
							>
								<View style={s.item}>
									<View style={s.image}>
										<Feather name='message-circle' color={'#FFFFFF'} size={18} />
									</View>
									<View style={[{ width: '100%', gap: 0 }]}>
										<Text ellipsizeMode='tail' numberOfLines={1} style={s.title}>
											{capitalizeName(returnOtherUser(item) ?? '')}
										</Text>
										<Text
											ellipsizeMode='tail'
											numberOfLines={1}
											style={[s.description, { fontFamily: fontFamily.bold, width: '80%' }]}
										>
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
