import { useFonts, Rubik_400Regular, Rubik_500Medium, Rubik_600SemiBold, Rubik_700Bold } from '@expo-google-fonts/rubik'
import { StatusBar, View } from 'react-native'
import Toast from 'react-native-toast-message'
import Index from './index'
import { AuthProvider } from '@/context/authContext'
import { Stack } from 'expo-router'

export default function Layout() {
	const [fontsLoaded] = useFonts({
		Rubik_400Regular,
		Rubik_500Medium,
		Rubik_600SemiBold,
		Rubik_700Bold,
	})

	if (!fontsLoaded) return null

	return (
		<View style={{ flex: 1 }}>
			<AuthProvider>
				<StatusBar barStyle='dark-content' backgroundColor='white' />
				<Stack
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name='(auth)' />
					<Stack.Screen name='index' />
				</Stack>
				<Toast />
			</AuthProvider>
		</View>
	)
}
