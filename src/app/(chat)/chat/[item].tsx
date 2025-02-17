import { useAuth } from '@/context/authContext'
import { MessageType, OrderType } from '@/types'
import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { s } from '@/styles/app/menus'
import { createMessage, getMessages } from '@/models/chat'
import { colors } from '@/styles/colors'

export default function Chat() {
	const { item, otherUserId } = useLocalSearchParams()
	const { data: User } = useAuth()
	const [message, setMessage] = useState('')
	const [messages, setMessages] = useState<MessageType[]>([])

	const getChats = async () => {
		await getMessages(User?.id || 0, Number(otherUserId)).then(response => {
			setMessages(response)
		})
	}

	useEffect(() => {
		getChats()
	}, [])

	const sendMessage = async () => {
		if (message.trim()) {
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
		}
	}

	return (
		<View style={s.chatContainer}>
			<ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }}>
				{messages.map(msg => (
					<View
						key={msg.id}
						style={[
							s.chatView,
							{
								alignSelf: msg?.user1?.fullname === User?.fullname ? 'flex-end' : 'flex-start',
								backgroundColor: msg?.user1?.fullname === User?.fullname ? colors.secondary.blue : '#fff',
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
				<TouchableOpacity onPress={sendMessage} style={s.chatButton}>
					<Feather name='send' size={24} color='#FFFFFF' />
				</TouchableOpacity>
			</View>
		</View>
	)
}
