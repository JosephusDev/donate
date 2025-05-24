import { Button } from '@/components/button'
import { showToast } from '@/components/customToast'
import Select from '@/components/Select'
import { useAuth } from '@/context/authContext'
import api from '@/services/api'
import { s } from '@/styles/app/menus'
import { BloodType, UserType } from '@/types'
import { capitalizeName, capitalizeText } from '@/utils/functions'
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as FileSystem from 'expo-file-system'
import * as ImagePicker from 'expo-image-picker'
import { useEffect, useState } from 'react'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import { ActivityIndicator, Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native'

export default function Profile() {
	const { data: user, update } = useAuth()
	const [imageUri, setImageUri] = useState<string | null>(null)
	const [bloodTypes, setBloodTypes] = useState<BloodType[]>([])
	const [isLoading, setIsLoading] = useState(false)

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<UserType>({
		defaultValues: {
			fullname: user?.fullname,
			email: user?.email,
			username: user?.username,
			blood_type_id: user?.blood_type_id,
			gender: user?.gender,
			phone: user?.phone,
			address: user?.address,
			state: user?.state,
			user_type: user?.user_type,
			password: user?.password,
		},
	})
	const onSubmit: SubmitHandler<UserType> = data => {
		data.id = user?.id!
		data.state = true
		data.user_type = user?.user_type!
		data.description = user?.description!
		data.blood_type_id = Number(data.blood_type_id)
		setIsLoading(true)
		update(data)
		setIsLoading(false)
	}

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

	useEffect(() => {
		const fetchImage = async () => {
			const localImage = await AsyncStorage.getItem('imagem')
			if (localImage) {
				setImageUri(localImage)
			}
		}
		fetchImage()
	}, [])

	const imageUpload = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ['images'],
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		})

		if (!result.canceled) {
			const localUri = result.assets[0].uri
			const filename = localUri.split('/').pop()
			if (!FileSystem.documentDirectory) {
				throw new Error('FileSystem.documentDirectory is null')
			}
			const newPath = FileSystem.documentDirectory + filename

			await FileSystem.moveAsync({
				from: localUri,
				to: newPath,
			})

			setImageUri(newPath)
			await AsyncStorage.setItem('imagem', newPath).then(() => {
				showToast({
					title: 'Sucesso',
					message: 'Imagem de perfil definida com sucesso!',
					type: 'success',
				})
			})
		}
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%', paddingVertical: 10 }}>
			<View style={s.containerProfile}>
				<Pressable onPress={imageUpload}>
					{imageUri ? (
						<View>
							<Image style={s.profileImage} src={imageUri} />
							<View style={s.containerImageIcon}>
								<Feather name='camera' size={15} color={'#FFFFFF'} />
							</View>
						</View>
					) : (
						<View>
							<Image style={s.profileImage} source={require('@/assets/images/profile.png')} />
							<View style={s.containerImageIcon}>
								<Feather name='camera' size={15} color={'#FFFFFF'} />
							</View>
						</View>
					)}
				</Pressable>
				<Text style={s.username}>{user?.fullname}</Text>
				<Text style={s.email}>{user?.email}</Text>
				<View style={s.containerItemProfile}>
					<View style={s.itemProfile}>
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
									value={capitalizeName(value)}
									placeholder='Nome Completo'
								/>
							)}
						/>
						{errors.fullname && (
							<Text style={s.error}>
								Campo obrigatório <Feather name={'info'} size={12} />
							</Text>
						)}
					</View>
					<View style={s.itemProfile}>
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
									value={capitalizeName(value)}
									placeholder='Nome de usuário'
								/>
							)}
						/>
						{errors.username && (
							<Text style={s.error}>
								Campo obrigatório <Feather name={'info'} size={12} />
							</Text>
						)}
					</View>
					<View style={s.itemProfile}>
						<Text style={s.label}>Email</Text>
						<Controller
							control={control}
							name='email'
							rules={{ required: true }}
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInput
									style={s.input}
									onBlur={onBlur}
									onChangeText={onChange}
									value={value!}
									placeholder='Email'
									autoComplete='off'
									autoCorrect={false}
								/>
							)}
						/>
						{errors.email && (
							<Text style={s.error}>
								Campo obrigatório <Feather name={'info'} size={12} />
							</Text>
						)}
					</View>
					<View style={s.itemProfile}>
						<Text style={s.label}>Tipo sanguíneo</Text>
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
					</View>
					<View style={s.itemProfile}>
						<Text style={s.label}>Gênero</Text>
						<Controller
							control={control}
							name='gender'
							render={({ field: { onChange, onBlur, value } }) => (
								<Select
									value={value}
									onChange={onChange}
									onBlur={onBlur}
									data={[
										{ id: 'masculino', name: 'Masculino' },
										{ id: 'femenino', name: 'Feminino' },
									]}
								/>
							)}
						/>
						{errors.gender && (
							<Text style={s.error}>
								Campo obrigatório <Feather name={'info'} size={12} />
							</Text>
						)}
					</View>
					<View style={s.itemProfile}>
						<Text style={s.label}>Telefone</Text>
						<Controller
							control={control}
							name='phone'
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInput
									style={s.input}
									onBlur={onBlur}
									onChangeText={onChange}
									value={value!}
									placeholder='Ex: +244 922 333 444'
									keyboardType='phone-pad'
								/>
							)}
						/>
						{errors.phone && (
							<Text style={s.error}>
								Campo obrigatório <Feather name={'info'} size={12} />
							</Text>
						)}
					</View>
					<View style={s.itemProfile}>
						<Text style={s.label}>Endereço</Text>
						<Controller
							control={control}
							name='address'
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInput
									style={s.input}
									onBlur={onBlur}
									onChangeText={onChange}
									value={value!}
									placeholder='Ex: Rua das Flores, 123'
								/>
							)}
						/>
						{errors.address && (
							<Text style={s.error}>
								Campo obrigatório <Feather name={'info'} size={12} />
							</Text>
						)}
					</View>
					<View style={s.itemProfile}>
						<Text style={s.label}>Palavra-passe</Text>
						<Controller
							control={control}
							name='password'
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInput
									style={s.input}
									onBlur={onBlur}
									onChangeText={onChange}
									placeholder='Palavra-passe'
									secureTextEntry={true}
								/>
							)}
						/>
						{errors.password && (
							<Text style={s.error}>
								Campo obrigatório <Feather name={'info'} size={12} />
							</Text>
						)}
					</View>
					<View style={{ marginVertical: 20, alignItems: 'center' }}>
						<Button
							icon={isLoading ? null : 'save'}
							children={isLoading ? <ActivityIndicator color={'#FFFFFF'} size={'small'} /> : 'Salvar'}
							onPress={handleSubmit(onSubmit)}
							width={'92%'}
							isFocused={true}
						/>
					</View>
				</View>
			</View>
		</ScrollView>
	)
}
