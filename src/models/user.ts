import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '@/services/api'
import { UserType } from '@/types'

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

export const login = async (data: Pick<UserType, 'username' | 'password'>) => {
	try {
		const response = await api.post('/user/login', data)
		if (response.data?.token) {
			await AsyncStorage.setItem('token', response.data.token)
		}
		return response.data
	} catch (error: any) {
		if (error.response && error.response.data) {
			throw error.response.data
		} else {
			throw new Error('Erro inesperado, tente novamente.')
		}
	}
}

export const getDonates = async () => {
	try {
		const token = AsyncStorage.getItem('token')
		const response = await api.get('/donates', {
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
