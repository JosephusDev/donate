import api from '@/services/api'
import type { OrderType } from '@/types'

export const getOrder = async () => {
	try {
		const response = await api.get('/order')
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
		const response = await api.get(`/order/${id}`)
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
		const response = await api.delete(`/order/${id}`)
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
		const response = await api.post('/order', data)
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
		const response = await api.get(`/order/notifications/${id}`)
		return response.data
	} catch (error: any) {
		if (error.response && error.response.data) {
			throw error.response.data
		} else {
			throw new Error('Erro inesperado, tente novamente.')
		}
	}
}
