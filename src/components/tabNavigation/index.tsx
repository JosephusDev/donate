import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { HomeIcon, Users2, HandHelping, MessageCircle, BellIcon, UserCircle, Menu } from 'lucide-react-native'
import { colors } from '@/styles/colors'
import Home from '@/app/home'
import Donates from '@/app/donates'
import Orders from '@/app/orders'
import Chat from '@/app/chat'
import Notifications from '@/app/notifications'
import Profile from '@/app/profile'
import Badge from '../badge'
import { Dimensions, Text, View } from 'react-native'
import { s } from './styles'
import { getMessages } from '@/models/chat'
import { getUniqueMessages } from '@/utils/functions'
import { useEffect, useState } from 'react'
import { showToast } from '../customToast'
import { getNotifications } from '@/models/order'

const Tab = createMaterialTopTabNavigator()

interface ScreenConfig {
	name: string
	component: React.ComponentType<any>
	icon: React.ComponentType<any>
	hasBadge?: boolean
	badge?: string | number
}

export default function TabNavigation() {
	const [count_messages, setCountMessages] = useState(0)
	const [count_notifications, setCountNotifications] = useState(0)

	const getChats = async () => {
		await getMessages(32)
			.then(response => {
				const filteredChats = getUniqueMessages(response)
				setCountMessages(filteredChats.length)
			})
			.catch(error => {
				const errorMessage = error?.error?.message || 'Erro ao carregar conversas.'
				showToast({ type: 'error', title: 'Erro', message: errorMessage })
			})
	}

	const getAllNotifications = async () => {
		await getNotifications(32)
			.then(response => {
				setCountNotifications(response.length)
			})
			.catch(error => {
				const errorMessage = error?.error?.message || 'Erro ao carregar notificações.'
				showToast({ type: 'error', title: 'Erro', message: errorMessage })
			})
	}

	useEffect(() => {
		getChats()
		getAllNotifications()
	}, [])

	const screens: ScreenConfig[] = [
		{ name: 'Home', component: Home, icon: HomeIcon },
		{ name: 'Donates', component: Donates, icon: Users2 },
		{ name: 'Orders', component: Orders, icon: HandHelping },
		{ name: 'Chat', component: Chat, icon: MessageCircle, hasBadge: true, badge: count_messages },
		{
			name: 'Notifications',
			component: Notifications,
			icon: BellIcon,
			hasBadge: true,
			badge: count_notifications > 9 ? '+9' : count_notifications,
		},
		{ name: 'Profile', component: Profile, icon: UserCircle },
	]

	const screenOptions = ({ route }: { route: { name: string } }) => {
		const screen = screens.find(screen => screen.name === route.name)
		if (!screen) return {}
		const IconComponent = screen.icon
		return {
			tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
				<IconComponent color={focused ? colors.main.base : color} />
			),
			tabBarShowLabel: false,
			tabBarItemStyle: { width: Dimensions.get('window').width / screens.length },
			tabBarIndicatorStyle: { backgroundColor: colors.main.base },
			tabBarPressColor: 'light',
			tabBarInactiveTintColor: 'black',
			tabBarBadge: screen.hasBadge ? () => <Badge text={screen.badge} /> : undefined,
		}
	}

	return (
		<View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
			<View style={s.header}>
				<Text style={s.title}>Doe</Text>
				<Menu size={25} color={'#000000'} />
			</View>
			<Tab.Navigator screenOptions={screenOptions}>
				{screens.map(({ name, component }) => (
					<Tab.Screen key={name} name={name} component={component} />
				))}
			</Tab.Navigator>
		</View>
	)
}
