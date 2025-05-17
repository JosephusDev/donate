import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const API_URL = process.env.EXPO_PUBLIC_API_URL

const api = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

api.interceptors.request.use(async config => {
	const token = await AsyncStorage.getItem('token')
	config.headers.Authorization = `Bearer ${token}`
	return config
})

export default api
