import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { s } from './styles'
import { GenderEnum, UserType, UserTypeEnum } from '@/types'
import { Button } from '../button'

export default function IndividualForm() {
	const { control, handleSubmit } = useForm<UserType>()
	const onSubmit: SubmitHandler<UserType> = data => {
		data.user_type = UserTypeEnum.individual
		data.state = false
		data.description = ''
		data.phone = ''
		data.address = ''
		data.gender = GenderEnum.male
		data.blood_type_id = '1'
		console.log(data)
	}

	return (
		<View>
			<Text style={s.label}>Nome Completo</Text>
			<Controller
				control={control}
				name='fullname'
				rules={{ required: true }}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						style={s.input}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						placeholder='Nome completo'
					/>
				)}
			/>

			<Text style={s.label}>Nome de usuario</Text>
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
			<Button
				icon='user-plus'
				children={'Cadastrar'}
				onPress={handleSubmit(onSubmit)}
				width={'100%'}
				isFocused={true}
			/>
		</View>
	)
}
