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
