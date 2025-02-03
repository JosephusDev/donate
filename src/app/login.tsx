import { Link } from 'expo-router'
import { View } from 'react-native'
import { s } from '@/styles/app/signup'
import Card from '@/components/card'
import LoginForm from '@/components/forms/login'

export default function Login() {
	return (
		<View style={s.container}>
			<View style={{ width: '90%' }}>
				<Card title='Iniciar Sessão' description='Faça o seu Login para doar ou receber!'>
					<LoginForm />
				</Card>
				<Link href={'/signup'} style={s.links}>
					Não tem uma conta? Crie uma
				</Link>
			</View>
		</View>
	)
}
