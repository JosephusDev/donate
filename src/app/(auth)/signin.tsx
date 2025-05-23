import { Link, Redirect } from 'expo-router'
import { Image, Text, View } from 'react-native'
import { s } from '@/styles/app/auth'
import Card from '@/components/card'
import { LoginForm } from '@/components/forms'
import { useAuth } from '@/context/authContext'
import { Feather } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
export default function SignIn() {
	const { isAuthenticated } = useAuth()
	if (isAuthenticated) {
		return <Redirect href='/' />
	}
	return (
		<View style={s.container}>
			<View
				style={[
					s.image,
					{
						backgroundColor: colors.main.transparent,
						justifyContent: 'center',
						alignItems: 'center',
						width: 80,
						height: 80,
						borderRadius: 40,
						borderWidth: 0,
					},
				]}
			>
				<Image source={require('@/assets/images/logo.png')} style={{ width: 120, height: 120 }} resizeMode='contain' />
			</View>
			<View style={{ width: '90%' }}>
				<Card title='Doe Sangue' description='Faça o seu Login para doar ou receber!'>
					<LoginForm />
				</Card>
				<View style={s.footer}>
					<Text style={s.textLeft}>Não tem uma conta?</Text>
					<Link href={'/signup'} style={s.links}>
						Criar conta
					</Link>
				</View>
			</View>
		</View>
	)
}
