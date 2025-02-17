import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '@/services/api'
import type { UserType } from '@/types'

const API_TOKEN = process.env.EXPO_PUBLIC_API_TOKEN

export const create = async (data: UserType) => {
	try {
		const response = await api.post('/user', data)
		return response.data
	} catch (error: any) {
		if (error.response && error.response.data) {
			throw error.response.data
		} else {
			throw new Error('Erro inesperado, tente novamente.')
		}
	}
}

export const getDonates = async (id: number) => {
	try {
		const token = (await AsyncStorage.getItem('token')) ?? API_TOKEN
		const response = await api.get(`/donates/${id}`, {
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
