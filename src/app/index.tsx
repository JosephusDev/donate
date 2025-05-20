import TabNavigation from '@/components/tabNavigation'
import { useAuth } from '@/context/authContext'
import { Redirect } from 'expo-router'

export default function Index() {
	const { isAuthenticated } = useAuth()

	if (isAuthenticated) {
		return <TabNavigation />
	}

	return <TabNavigation showOnlyPublicTabs />
}
