import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '@/services/api'
import type { MessageType } from '@/types'

const API_TOKEN = process.env.EXPO_PUBLIC_API_TOKEN

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
		const token = (await AsyncStorage.getItem('token')) ?? API_TOKEN
		const response = await api.delete(`/chat/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
		return response.data
	} catch (error: any) {
		if (error.response && error.response.data) {
			throw error.response.data
		} else {
			throw new Error('Erro inesperado, tente novamente.')
		}
	}
}

export const getMessages = async (id: number) => {
	try {
		const token = (await AsyncStorage.getItem('token')) ?? API_TOKEN
		const response = await api.get(`/chat/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
		return response.data
	} catch (error: any) {
		if (error.response && error.response.data) {
			throw error.response.data
		} else {
			throw new Error('Erro inesperado, tente novamente.')
		}
	}
}
