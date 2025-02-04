import { Link } from 'expo-router'
import { View } from 'react-native'
import { s } from '@/styles/app/signup'
import Card from '@/components/card'
import { LoginForm } from '@/components/forms'
import Avatar from '@/components/avatar'

export default function SignIn() {
	return (
		<View style={s.container}>
			<Avatar icon='lock' />
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
