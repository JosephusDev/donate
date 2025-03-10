import api from '@/services/api'
import { OrderType } from '@/types'
import AsyncStorage from '@react-native-async-storage/async-storage'

const API_TOKEN = process.env.EXPO_PUBLIC_API_TOKEN

export const getOrder = async () => {
	try {
		const token = (await AsyncStorage.getItem('token')) ?? API_TOKEN
		const response = await api.get('/order', {
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

export const getUserOrders = async (id: number) => {
	try {
		const token = (await AsyncStorage.getItem('token')) ?? API_TOKEN
		const response = await api.get(`/order/${id}`, {
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

export const deleteOrder = async (id: number) => {
	try {
		const token = (await AsyncStorage.getItem('token')) ?? API_TOKEN
		const response = await api.delete(`/order/${id}`, {
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

export const createOrder = async (data: OrderType) => {
	try {
		const token = (await AsyncStorage.getItem('token')) ?? API_TOKEN
		const response = await api.post('/order', data, {
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

export const getNotifications = async (id: number) => {
	try {
		const token = (await AsyncStorage.getItem('token')) ?? API_TOKEN
		const response = await api.get(`/order/notifications/${id}`, {
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
