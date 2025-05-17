import React, { useState } from 'react'
import { View, Text, TextInput, ActivityIndicator } from 'react-native'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { s } from './styles'
import { GenderEnum, UserType, UserTypeEnum } from '@/types'
import { Button } from '../button'
import Feather from '@expo/vector-icons/Feather'
import { create } from '@/models/user'
import { showToast } from '../customToast'

export default function IndividualForm() {
	const [isLoading, setIsLoading] = useState(false)
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<UserType>()
	const onSubmit: SubmitHandler<UserType> = async data => {
		setIsLoading(true)
		data.user_type = UserTypeEnum.individual
		data.state = true
		data.description = null
		data.email = null
		data.address = null
		data.gender = GenderEnum.male
		data.blood_type_id = null
		await create(data)
			.then(() => {
				showToast({ type: 'success', title: 'Sucesso', message: 'Cadastro realizado com sucesso!' })
			})
			.catch(error => {
				// Se for um erro de validação, pega a mensagem específica
				const errorMessage = error?.error?.message || 'Erro ao realizar o cadastro'

				showToast({ type: 'error', title: 'Erro', message: errorMessage })
			})
			.finally(() => {
				setIsLoading(false)
			})
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

			<Text style={s.label}>Telefone</Text>
			<Controller
				control={control}
				name='phone'
				rules={{ required: true }}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						style={s.input}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value!}
						placeholder='+244 999 999 999'
						keyboardType='phone-pad'
					/>
				)}
			/>
			{errors.phone && (
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
					children={isLoading ? <ActivityIndicator color={'#FFFFFF'} size={'small'} /> : 'Cadastrar'}
					onPress={handleSubmit(onSubmit)}
					width={'100%'}
					isFocused={true}
				/>
			</View>
		</View>
	)
}
