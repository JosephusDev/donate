import { Stack } from 'expo-router'

export default function AuthLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName='signin'
		>
			<Stack.Screen name='signin' />
			<Stack.Screen name='signup' />
		</Stack>
	)
}
