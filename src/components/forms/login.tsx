import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { s } from './styles'
import { Button } from '../button'

interface LoginFormType {
	email: string
	password: string
}

export default function LoginForm() {
	const { control, handleSubmit } = useForm<LoginFormType>()

	const onSubmit: SubmitHandler<LoginFormType> = data => {
		console.log(data)
	}

	return (
		<View>
			<Text style={s.label}>E-mail</Text>
			<Controller
				control={control}
				name='email'
				rules={{ required: true }}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						style={s.input}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						placeholder='exemplo@exemplo.com'
						keyboardType='email-address'
					/>
				)}
			/>

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

			<Button icon='log-in' children={'Entrar'} onPress={handleSubmit(onSubmit)} width={'100%'} isFocused={true} />
		</View>
	)
}
