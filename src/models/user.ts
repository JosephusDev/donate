import api from '@/services/api'
import type { UserType } from '@/types'

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
		const response = await api.get('/user/donates')
		return response.data
	} catch (error: any) {
		if (error.response && error.response.data) {
			throw error.response.data
		} else {
			throw new Error('Erro inesperado, tente novamente.')
		}
	}
}
