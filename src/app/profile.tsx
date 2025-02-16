import { showToast } from '@/components/customToast'
import { useAuth } from '@/context/authContext'
import { s } from '@/styles/app/menus'
import { colors } from '@/styles/colors'
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as FileSystem from 'expo-file-system'
import * as ImagePicker from 'expo-image-picker'
import { useEffect, useState } from 'react'
import { Alert, Image, Pressable, Text, View } from 'react-native'

export default function Profile() {
	const { data, logout } = useAuth()
	const [imageUri, setImageUri] = useState<string | null>(null)

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
					title: 'Doe',
					message: 'Imagem de perfil definida com sucesso!',
					type: 'success',
				})
			})
		}
	}

	const handleLogout = () => {
		Alert.alert(
			'Terminar sessão',
			'Deseja sair da conta?',
			[
				{
					text: 'Sim',
					onPress: () => logout(),
				},
				{ text: 'Não', onPress: () => {}, style: 'cancel' },
			],
			{ cancelable: false },
		)
	}
	return (
		<View style={s.container}>
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
						<View style={[s.avatar, { borderColor: colors.gray[300] }]}>
							<Feather name='camera' size={30} color={colors.main.light} />
						</View>
					)}
				</Pressable>
				<Text style={s.username}>{data?.fullname}</Text>
				<Text style={s.email}>{data?.email}</Text>
				<View style={s.flatlist}>
					<View style={[s.item, { paddingVertical: 10 }]}>
						<View style={s.rightProfile}>
							<View style={[s.image, { backgroundColor: '#F2F4F7' }]}>
								<Feather name='user' size={20} color={colors.gray[500]} />
							</View>
							<Text style={s.titleItemProfile}>Editar Perfil</Text>
						</View>
						<Feather size={20} name='chevron-right' />
					</View>
					<View style={[s.item, { paddingVertical: 10 }]}>
						<View style={s.rightProfile}>
							<View style={[s.image, { backgroundColor: '#F2F4F7' }]}>
								<Feather name='settings' size={20} color={colors.gray[500]} />
							</View>
							<Text style={s.titleItemProfile}>Configurações</Text>
						</View>
						<Feather size={20} name='chevron-right' />
					</View>
				</View>
				<View style={[s.flatlist, { marginTop: 2 }]}>
					<Pressable onPress={handleLogout}>
						<View style={[s.item, { paddingVertical: 10 }]}>
							<View style={s.rightProfile}>
								<View style={s.image}>
									<Feather name='log-out' size={20} color={'#FFFFFF'} />
								</View>
								<Text style={s.titleItemProfile}>Sair da Conta</Text>
							</View>
							<Feather size={20} name='chevron-right' />
						</View>
					</Pressable>
				</View>
			</View>
		</View>
	)
}
