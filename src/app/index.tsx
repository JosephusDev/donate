import StackNavigation from '@/components/stackNavigation'
import TabNavigation from '@/components/tabNavigation'
import { useAuth } from '@/context/authContext'

export default function Index() {
	const { isAuthenticated } = useAuth()

	return isAuthenticated ? <TabNavigation /> : <StackNavigation />
}
