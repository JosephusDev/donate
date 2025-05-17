import api from '@/services/api'
import type { MessageType } from '@/types'

export const createMessage = async (data: MessageType) => {
	try {
		const response = await api.post('/chat', data)
		return response.data
	} catch (error: any) {
		if (error.response && error.response.data) {
			throw error.response.data
		} else {
			throw new Error('Erro inesperado, tente novamente.')
		}
	}
}

export const deleteMessage = async (id: number) => {
	try {
		const response = await api.delete(`/chat/${id}`)
		return response.data
	} catch (error: any) {
		if (error.response && error.response.data) {
			throw error.response.data
		} else {
			throw new Error('Erro inesperado, tente novamente.')
		}
	}
}

export const getChats = async (id: number) => {
	try {
		const response = await api.get<MessageType[]>(`/chat/${id}`)
		return response.data
	} catch (error: any) {
		if (error.response && error.response.data) {
			throw error.response.data
		} else {
			throw new Error('Erro inesperado, tente novamente.')
		}
	}
}

export const getMessages = async (id_from: number, id_to: number) => {
	try {
		const response = await api.get<MessageType[]>(`/chat?id_from=${id_from}&id_to=${id_to}`)
		return response.data
	} catch (error: any) {
		if (error.response && error.response.data) {
			throw error.response.data
		} else {
			throw new Error('Erro inesperado, tente novamente.')
		}
	}
}
