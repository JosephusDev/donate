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

const Tab = createMaterialTopTabNavigator()

interface ScreenConfig {
	name: string
	component: React.ComponentType<any>
	icon: React.ComponentType<any>
	hasBadge?: boolean
	badge?: string | number
}

const screens: ScreenConfig[] = [
	{ name: 'Home', component: Home, icon: HomeIcon },
	{ name: 'Donates', component: Donates, icon: Users2 },
	{ name: 'Orders', component: Orders, icon: HandHelping },
	{ name: 'Chat', component: Chat, icon: MessageCircle, hasBadge: true, badge: 2 },
	{ name: 'Notifications', component: Notifications, icon: BellIcon, hasBadge: true, badge: '+9' },
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

export default function TabNavigation() {
	return (
		<View style={{ flex: 1 }}>
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
