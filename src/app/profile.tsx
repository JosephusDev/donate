import { s } from '@/styles/app/menus'
import { colors } from '@/styles/colors'
import { Feather } from '@expo/vector-icons'
import { Image, Text, View } from 'react-native'

export default function Profile() {
	const image = 'https://avatars.githubusercontent.com/u/127633531?v=4'
	return (
		<View style={s.container}>
			<View style={s.containerProfile}>
				{image ? (
					<Image style={s.avatar} src={image} />
				) : (
					<View style={s.avatar}>
						<Feather name='camera' size={30} color={colors.main.light} />
					</View>
				)}
				<Text style={s.username}>Josephus Conde</Text>
				<Text style={s.email}>josephusdev@gmail.com</Text>
				<View style={s.flatlist}>
					<View style={[s.item, { paddingVertical: 10 }]}>
						<View style={s.rightProfile}>
							<View style={s.image}>
								<Feather name='user' size={20} color={'#FFFFFF'} />
							</View>
							<Text style={s.titleItemProfile}>Editar Perfil</Text>
						</View>
						<Feather size={20} name='chevron-right' />
					</View>
					<View style={[s.item, { paddingVertical: 10 }]}>
						<View style={s.rightProfile}>
							<View style={s.image}>
								<Feather name='settings' size={20} color={'#FFFFFF'} />
							</View>
							<Text style={s.titleItemProfile}>Configurações</Text>
						</View>
						<Feather size={20} name='chevron-right' />
					</View>
				</View>
				<View style={[s.flatlist, { marginTop: 2 }]}>
					<View style={[s.item, { paddingVertical: 10 }]}>
						<View style={s.rightProfile}>
							<View style={s.image}>
								<Feather name='log-out' size={20} color={'#FFFFFF'} />
							</View>
							<Text style={s.titleItemProfile}>Sair da Conta</Text>
						</View>
						<Feather size={20} name='chevron-right' />
					</View>
				</View>
			</View>
		</View>
	)
}
