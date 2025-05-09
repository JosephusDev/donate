import { MessageType } from '@/types'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formatedName = (name: string) => {
	const names = name.split(' ')
	const firstName = names[0]
	const lastName = names.pop()
	return `${firstName.charAt(0)}${lastName?.charAt(0)}`.trim()
}

export const capitalizeName = (name: string) => {
	return name
		.split(' ')
		.map(value => capitalizeText(value))
		.join(' ')
		.trim()
}

export const capitalizeText = (text: string) => {
	return text.charAt(0).toUpperCase() + text.slice(1)
}

export const getUniqueMessages = (messages: MessageType[]) => {
	return messages.reduce((acc: MessageType[], chat: MessageType) => {
		const existingChatIndex = acc.findIndex(
			c =>
				(c.user_id_to === chat.user_id_to && c.user_id_from === chat.user_id_from) ||
				(c.user_id_to === chat.user_id_from && c.user_id_from === chat.user_id_to),
		)
		if (existingChatIndex !== -1 && chat.id && acc[existingChatIndex].id) {
			if (chat.id > acc[existingChatIndex].id) {
				acc[existingChatIndex] = chat
			}
		} else {
			acc.push(chat)
		}
		return acc
	}, [])
}

export function formatDate(date: Date): string {
	return format(date, "dd 'de' MMM 'de' yyyy", { locale: ptBR })
}

export const formatDateDistanceToNow = (date: Date): string => {
	return formatDistanceToNow(date, {
		locale: ptBR,
		addSuffix: true,
	})
}
