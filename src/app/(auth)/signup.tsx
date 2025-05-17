import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import { s } from '@/styles/app/auth'
import Card from '@/components/card'
import { IndividualForm } from '@/components/forms'
import { colors } from '@/styles/colors'
import { Feather } from '@expo/vector-icons'
export default function SignUp() {
	return (
		<View style={s.container}>
			<View
				style={[
					s.image,
					{
						backgroundColor: colors.secondary.blue,
						justifyContent: 'center',
						alignItems: 'center',
						width: 80,
						height: 80,
						borderRadius: 40,
						borderWidth: 0,
					},
				]}
			>
				<Feather name='droplet' size={50} color={colors.secondary.blueDark} />
			</View>
			<View style={{ width: '90%' }}>
				<Card title='Crie sua conta' description='Crie sua conta para doar ou receber!'>
					<IndividualForm />
				</Card>
				<View style={s.footer}>
					<Text style={s.textLeft}>Já tem uma conta?</Text>
					<Link href={'/'} style={s.links}>
						Fazer login
					</Link>
				</View>
			</View>
		</View>
	)
}
