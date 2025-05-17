import React, { createContext, useContext, useState, ReactNode } from 'react'
import api from '@/services/api'
import { UserType } from '@/types'
import { showToast } from '@/components/customToast'
import AsyncStorage from '@react-native-async-storage/async-storage'

type AuthContextType = {
	data: UserType | null
	isAuthenticated: boolean
	login: (data: UserType) => void
	update: (data: UserType) => void
	logout: () => void
}
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [isAuthenticated, setAuthenticated] = useState(false)
	const [data, setData] = useState<UserType | null>(null)

	const login = async (data: Pick<UserType, 'username' | 'password'>) => {
		await api
			.post('/user/login', data)
			.then(response => {
				const result = response.data
				if (result) {
					AsyncStorage.setItem('token', result?.token)
					setAuthenticated(true)
					setData({ ...result?.user, password: data.password })
				} else {
					showToast({
						title: 'Doe',
						message: 'Usuário ou senha incorrectos',
						type: 'error',
					})
				}
			})
			.catch(error => {
				//Se for um erro de validação, pega a mensagem específica
				const errorMessage = error.response.data.error.message
					? error.response.data.error.message
					: error.response.data.error
				showToast({ type: 'error', title: 'Erro', message: errorMessage })
			})
	}

	const logout = () => {
		AsyncStorage.removeItem('token')
		setAuthenticated(false)
		setData(null)
	}

	const update = async (data: UserType) => {
		await api
			.put(`/user/update/${data.id}`, data)
			.then(() => {
				showToast({
					title: 'Aviso',
					message: 'Perfil atualizado com sucesso.',
					type: 'success',
				})
				logout()
			})
			.catch(error => {
				//Se for um erro de validação, pega a mensagem específica
				const errorMessage = error.response.data.error.message
					? error.response.data.error.message
					: error.response.data.error
				showToast({ type: 'error', title: 'Erro', message: errorMessage })
			})
	}

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout, update, data }}>{children}</AuthContext.Provider>
	)
}

export const useAuth = () => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useLogin deve estar dentro do AuthProvider')
	}
	return context
}
