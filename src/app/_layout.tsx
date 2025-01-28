import { Stack } from 'expo-router'
import { colors } from '@/styles/theme'
import { useFonts, Rubik_400Regular, Rubik_500Medium, Rubik_600SemiBold, Rubik_700Bold } from '@expo-google-fonts/rubik'

export default function Layout() {
	const [fontsLoaded] = useFonts({
		Rubik_400Regular,
		Rubik_500Medium,
		Rubik_600SemiBold,
		Rubik_700Bold,
	})

	if (!fontsLoaded) return null

	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='index' />
			<Stack.Screen name='signup' />
		</Stack>
	)
}
