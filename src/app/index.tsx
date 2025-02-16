import TabNavigation from '@/components/tabNavigation'
import { useAuth } from '@/context/authContext'
import { Redirect } from 'expo-router'

export default function Index() {
	const { isAuthenticated } = useAuth()
	console.log('index: ', isAuthenticated)
	if (!isAuthenticated) {
		return <Redirect href='/(auth)/signin' />
	}

	return <TabNavigation />
}
