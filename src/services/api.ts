import { UserType } from '@/types'

const API_URL = process.env.EXPO_PUBLIC_API_URL

export const create = async (data: UserType) => {
	const response = await fetch(`${API_URL}/user`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
	return response.json()
}
