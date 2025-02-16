import React, { useState } from 'react'
import { View, Text, TextInput, ActivityIndicator } from 'react-native'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { s } from './styles'
import { Button } from '../button'
import { UserType } from '@/types'
import Feather from '@expo/vector-icons/Feather'
import { useAuth } from '@/context/authContext'

export default function LoginForm() {
	const { login } = useAuth()
	const [isLoading, setIsLoading] = useState(false)
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<UserType>()
	const onSubmit: SubmitHandler<UserType> = async data => {
		setIsLoading(true)
		await login(data)
		setIsLoading(false)
	}

	return (
		<View>
			<Text style={s.label}>Nome de usuário</Text>
			<Controller
				control={control}
				name='username'
				rules={{ required: true }}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						style={s.input}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						placeholder='Nome de usuário'
					/>
				)}
			/>
			{errors.username && (
				<Text style={s.error}>
					Campo obrigatório <Feather name={'info'} size={12} />
				</Text>
			)}

			<Text style={s.label}>Palavra-passe</Text>
			<Controller
				control={control}
				name='password'
				rules={{ required: true }}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						style={[s.input, { marginBottom: 20 }]}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						placeholder='Palavra-passe'
						secureTextEntry={true}
					/>
				)}
			/>
			{errors.password && (
				<Text style={[s.error, { marginTop: -17 }]}>
					Campo obrigatório <Feather name={'info'} size={12} />
				</Text>
			)}

			<View style={{ marginTop: 15 }}>
				<Button
					icon={isLoading ? null : 'log-in'}
					children={isLoading ? <ActivityIndicator color={'#FFFFFF'} size={'small'} /> : 'Entrar'}
					onPress={handleSubmit(onSubmit)}
					width={'100%'}
					isFocused={true}
				/>
			</View>
		</View>
	)
}
