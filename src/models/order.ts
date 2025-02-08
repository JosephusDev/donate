import api from '@/services/api'

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
