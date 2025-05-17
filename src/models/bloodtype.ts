import api from '@/services/api'

export const getBloodType = async () => {
	try {
		const response = await api.get('/bloodtype')
		return response.data
	} catch (error: any) {
		if (error.response && error.response.data) {
			throw error.response.data
		} else {
			throw new Error('Erro inesperado, tente novamente.')
		}
	}
}
