import { showToast } from '@/components/customToast'
import EmptyList from '@/components/emptyList'
import Header from '@/components/header'
import { getMessages } from '@/models/chat'
import { s } from '@/styles/app/menus'
import { MessageType } from '@/types'
import { capitalizeName, formatedName, getUniqueMessages } from '@/utils/functions'
import { useEffect, useState } from 'react'
import { Alert, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'

export default function Chats() {
	const [chats, setChats] = useState<MessageType[]>([])
	const [search, setSearch] = useState('')

	const getChats = async () => {
		await getMessages(32)
			.then(response => {
				const filteredChats = getUniqueMessages(response)
				setChats(filteredChats)
			})
			.catch(error => {
				const errorMessage = error?.error?.message || 'Erro ao carregar conversas.'
				showToast({ type: 'error', title: 'Erro', message: errorMessage })
			})
	}

	useEffect(() => {
		getChats()
	}, [])

	const returnOtherUser = (chat: MessageType) => {
		return chat.user_id_to === 32 ? chat.user1.fullname : chat.user2.fullname
	}

	const filteredChats = search
		? chats.filter(
				v =>
					returnOtherUser(v).toLowerCase().includes(search.toLowerCase()) ||
					v.message.toLowerCase().includes(search.toLowerCase()),
			)
		: chats

	return (
		<ScrollView style={{ flex: 1 }}>
			<View style={s.container}>
				<Header title='Conversas' showButton={false} onSearchChange={setSearch} searchValue={search} />
				{filteredChats.length === 0 ? (
					<EmptyList text='Nenhuma conversa encontrada' />
				) : (
					<SafeAreaView style={s.flatlist}>
						{filteredChats.map(item => (
							<Pressable
								key={item.id}
								onPress={() => Alert.alert('Mensagem de ' + returnOtherUser(item), item.message)}
							>
								<View style={s.item}>
									<View style={s.image}>
										<Text style={s.fallback}>{formatedName(returnOtherUser(item))}</Text>
									</View>
									<View style={[{ width: '100%', gap: 0 }]}>
										<Text ellipsizeMode='tail' numberOfLines={1} style={s.title}>
											{capitalizeName(returnOtherUser(item))}
										</Text>
										<Text
											ellipsizeMode='tail'
											numberOfLines={1}
											style={[s.description, { fontFamily: 'fontFamily.bold', width: '60%' }]}
										>
											{item.message}
										</Text>
									</View>
								</View>
							</Pressable>
						))}
					</SafeAreaView>
				)}
			</View>
		</ScrollView>
	)
}
