import api from '@/services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const getBloodType = async () => {
	try {
		const token = AsyncStorage.getItem('token')
		const response = await api.get('/bloodtype', {
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
