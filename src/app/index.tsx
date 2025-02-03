import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function Index() {
	return (
		<View>
			<Text>Login</Text>
			<Link href={'/signup'}>Criar Conta</Link>
			<Link href={'/login'}>Login</Link>
		</View>
	)
}
