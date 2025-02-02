import api from '@/services/api'
import { UserType } from '@/types'

export const create = async (data: UserType) => {
	try {
		await api
			.post('/user', data)
			.then(Response => {
				return JSON.stringify(Response)
			})
			.catch(Error => {
				return JSON.stringify({ error: Error })
			})
	} catch (error) {
		return JSON.stringify({ error: error })
	}
}
