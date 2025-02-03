import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { s } from './styles'
import { Button } from '../button'
import { UserType } from '@/types'
import { login } from '@/models/user'
import { showToast } from '../customToast'
import Feather from '@expo/vector-icons/Feather'

export default function LoginForm() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<UserType>()
	const onSubmit: SubmitHandler<UserType> = async data => {
		console.log(data)
		await login(data)
			.then(response => {
				console.log(response)
				showToast({ type: 'success', title: 'Sucesso', message: 'Login realizado com sucesso!' })
			})
			.catch(error => {
				// Se for um erro de validação, pega a mensagem específica
				const errorMessage = error?.error?.message || 'Erro ao realizar o Login'

				showToast({ type: 'error', title: 'Erro', message: errorMessage })
			})
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
				<Button icon='log-in' children={'Entrar'} onPress={handleSubmit(onSubmit)} width={'100%'} isFocused={true} />
			</View>
		</View>
	)
}
