import React from 'react'
import { View, Text, TextInput, Alert } from 'react-native'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { s } from './styles'
import { GenderEnum, UserType, UserTypeEnum } from '@/types'
import { Button } from '../button'
import Feather from '@expo/vector-icons/Feather'
import Toast from 'react-native-toast-message'
import { create } from '@/models/user'

export default function HospitalForm() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<UserType>()
	const onSubmit: SubmitHandler<UserType> = async data => {
		data.user_type = UserTypeEnum.hospital
		data.state = false
		data.description = ''
		data.phone = ''
		data.address = ''
		data.gender = GenderEnum.other
		data.blood_type_id = null
		const response = await create(data)
		if (response) {
			Toast.show({
				type: 'error',
				position: 'bottom',
				text1: 'Erro',
				text2: response,
				visibilityTime: 3000,
			})
		} else {
			Toast.show({
				type: 'success',
				position: 'bottom',
				text1: 'Sucesso',
				text2: 'Cadastro realizado com sucesso',
				visibilityTime: 3000,
			})
		}
	}
	return (
		<View>
			<Text style={s.label}>Nome do Hospital</Text>
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
						placeholder='Nome do hospital'
					/>
				)}
			/>
			{errors.fullname && (
				<Text style={s.error}>
					Campo obrigatório <Feather name={'info'} size={12} />
				</Text>
			)}

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
			{errors.username && (
				<Text style={s.error}>
					Campo obrigatório <Feather name={'info'} size={12} />
				</Text>
			)}

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
			{errors.email && (
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
					icon='user-plus'
					children={'Cadastrar'}
					onPress={handleSubmit(onSubmit)}
					width={'100%'}
					isFocused={true}
				/>
			</View>
		</View>
	)
}
