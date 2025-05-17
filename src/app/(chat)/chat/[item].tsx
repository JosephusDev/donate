import { useAuth } from '@/context/authContext'
import { MessageType, OrderType } from '@/types'
import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import { s } from '@/styles/app/menus'
import { createMessage, getMessages } from '@/models/chat'
import { colors } from '@/styles/colors'
import { SendHorizonal } from 'lucide-react-native'

export default function Chat() {
	const { item, otherUserId } = useLocalSearchParams()
	const { data: User } = useAuth()
	const [message, setMessage] = useState('')
	const [messages, setMessages] = useState<MessageType[]>([])
	const [isLoading, setIsLoading] = useState(false)

	const getChats = async () => {
		await getMessages(User?.id || 0, Number(otherUserId)).then(response => {
			setMessages(response)
		})
	}

	useEffect(() => {
		getChats()
		const interval = setInterval(() => getChats(), 5000)

		return () => clearInterval(interval)
	}, [])

	const sendMessage = async () => {
		if (message.trim()) {
			setIsLoading(true)
			const messageData: MessageType = {
				user_id_from: User?.id || 0,
				user_id_to: Number(otherUserId),
				message,
			}
			await createMessage(messageData)
				.then(() => {
					getChats()
					setMessage('')
				})
				.catch(error => {
					console.log(error)
				})
				.finally(() => {
					setIsLoading(false)
				})
		}
	}

	return (
		<View style={s.chatContainer}>
			<ScrollView
				style={{ flex: 1 }}
				contentContainerStyle={{ paddingBottom: 20 }}
				showsVerticalScrollIndicator={false}
			>
				{messages.map(msg => (
					<View
						key={msg.id}
						style={[
							s.chatView,
							{
								alignSelf: msg?.user1?.fullname === User?.fullname ? 'flex-end' : 'flex-start',
								backgroundColor: msg?.user1?.fullname === User?.fullname ? '#1E90FF' : '#fff',
							},
						]}
					>
						<Text style={[s.message, { color: msg?.user1?.fullname === User?.fullname ? '#fff' : colors.gray[500] }]}>
							{msg.message}
						</Text>
					</View>
				))}
			</ScrollView>

			<View style={s.chatFooter}>
				<TextInput
					multiline
					style={s.chatInput}
					placeholder='Digite sua mensagem...'
					value={message}
					onChangeText={setMessage}
				/>
				<TouchableOpacity disabled={isLoading} onPress={sendMessage} style={s.chatButton}>
					{isLoading ? <ActivityIndicator size='small' color='#FFFFFF' /> : <SendHorizonal size={24} color='#FFFFFF' />}
				</TouchableOpacity>
			</View>
		</View>
	)
}
