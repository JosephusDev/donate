import {
	useFonts,
	Nunito_400Regular,
	Nunito_500Medium,
	Nunito_600SemiBold,
	Nunito_700Bold,
} from '@expo-google-fonts/nunito'
import { StatusBar, View } from 'react-native'
import Toast from 'react-native-toast-message'
import { AuthProvider } from '@/context/authContext'
import { Stack } from 'expo-router'

export default function Layout() {
	const [fontsLoaded] = useFonts({
		Nunito_400Regular,
		Nunito_500Medium,
		Nunito_600SemiBold,
		Nunito_700Bold,
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
