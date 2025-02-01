import Navigator from '@/components/navigator'
import { useFonts, Rubik_400Regular, Rubik_500Medium, Rubik_600SemiBold, Rubik_700Bold } from '@expo-google-fonts/rubik'
import { StatusBar, View } from 'react-native'

export default function Layout() {
	const [fontsLoaded] = useFonts({
		Rubik_400Regular,
		Rubik_500Medium,
		Rubik_600SemiBold,
		Rubik_700Bold,
	})

	if (!fontsLoaded) return null

	return (
		<View style={{flex: 1}}>
			<StatusBar barStyle='dark-content' backgroundColor='white'/>
			<Navigator/>
		</View>
	)
}
