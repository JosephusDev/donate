import React, { useEffect, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { s } from './styles'
import { Button } from '../button'
import { BloodType, OrderType, stateEnum } from '@/types'
import { showToast } from '../customToast'
import Feather from '@expo/vector-icons/Feather'
import { createOrder } from '@/models/order'
import Select from '../Select'
import api from '@/services/api'
import { UrgencyType } from '@/mocks'

export default function OrderForm({ refreshOrders, onClose }: { refreshOrders: () => void; onClose: () => void }) {
	const [bloodTypes, setBloodTypes] = useState<BloodType[]>([])

	const getBloodTypes = async () => {
		try {
			const response = await api.get<BloodType[]>('/bloodtypes')
			const data = response.data
			data.unshift({
				id: 0,
				name: 'Selecione um tipo de sangue',
			})
			setBloodTypes(data)
		} catch (error: any) {
			console.error(error)
		}
	}

	useEffect(() => {
		getBloodTypes()
	}, [])

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<OrderType>()
	const onSubmit: SubmitHandler<OrderType> = async data => {
		data.blood_type_id = Number(data.blood_type_id)
		data.state = stateEnum.pendente
		data.user_id = 5
		console.log(data)
		await createOrder(data)
			.then(response => {
				refreshOrders()
				onClose()
				showToast({ type: 'success', title: 'Sucesso', message: 'Pedido cadastrado com sucesso!' })
			})
			.catch(error => {
				// Se for um erro de validação, pega a mensagem específica
				const errorMessage = error?.error?.message || 'Erro ao cadastrar pedido'
				console.log(errorMessage)
				showToast({ type: 'error', title: 'Erro', message: errorMessage })
			})
	}

	return (
		<View style={s.container}>
			<Text style={s.label}>Local da Doação</Text>
			<Controller
				control={control}
				name='donate_location'
				rules={{ required: true }}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						style={s.input}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						placeholder='Local da doação'
					/>
				)}
			/>
			{errors.donate_location && (
				<Text style={s.error}>
					Campo obrigatório <Feather name={'info'} size={12} />
				</Text>
			)}

			<Text style={s.label}>Descrição</Text>
			<Controller
				control={control}
				name='description'
				rules={{ required: true }}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						style={[s.input, { marginBottom: 20 }]}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						placeholder='Descrição'
					/>
				)}
			/>
			{errors.description && (
				<Text style={s.error}>
					Campo obrigatório <Feather name={'info'} size={12} />
				</Text>
			)}

			<Text style={s.label}>Tipo Sanguíneo</Text>
			<Controller
				control={control}
				name='blood_type_id'
				rules={{ required: true }}
				render={({ field: { onChange, onBlur, value } }) => (
					<Select value={value} onChange={onChange} onBlur={onBlur} data={bloodTypes} />
				)}
			/>
			{errors.blood_type_id && (
				<Text style={s.error}>
					Campo obrigatório <Feather name={'info'} size={12} />
				</Text>
			)}
			<Text style={s.label}>Urgência</Text>
			<Controller
				control={control}
				name='urgency'
				rules={{ required: true }}
				render={({ field: { onChange, onBlur, value } }) => (
					<Select value={value} onChange={onChange} onBlur={onBlur} data={UrgencyType} />
				)}
			/>
			{errors.urgency && (
				<Text style={s.error}>
					Campo obrigatório <Feather name={'info'} size={12} />
				</Text>
			)}
			<View style={{ marginTop: 15 }}>
				<Button
					icon='plus-circle'
					children={'Adicionar'}
					onPress={handleSubmit(onSubmit)}
					width={'100%'}
					isFocused={true}
				/>
			</View>
		</View>
	)
}
