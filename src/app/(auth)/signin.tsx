import { Link, Redirect } from 'expo-router'
import { Image, Text, View } from 'react-native'
import { s } from '@/styles/app/auth'
import Card from '@/components/card'
import { LoginForm } from '@/components/forms'
import Avatar from '@/components/avatar'
import { useAuth } from '@/context/authContext'

export default function SignIn() {
	const { isAuthenticated } = useAuth()
	console.log('login: ', isAuthenticated)
	if (isAuthenticated) {
		return <Redirect href='/' />
	}
	return (
		<View style={s.container}>
			<Image style={s.image} source={require('@/assets/images/profile.png')} />
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
