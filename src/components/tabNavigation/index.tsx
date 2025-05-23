import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { HomeIcon, Users2, HandHelping, MessageCircle, BellIcon, UserCircle } from 'lucide-react-native'
import Home from '@/app/home'
import Donates from '@/app/donates'
import Orders from '@/app/orders'
import Chat from '@/app/(chat)/chats'
import Notifications from '@/app/notifications'
import Profile from '@/app/profile'
import Badge from '../badge'
import { Alert, Dimensions, Pressable, Text, View } from 'react-native'
import { s } from './styles'
import { getChats } from '@/models/chat'
import { getUniqueMessages } from '@/utils/functions'
import { useEffect, useState } from 'react'
import { showToast } from '../customToast'
import { getNotifications } from '@/models/order'
import { useAuth } from '@/context/authContext'
import { colors } from '@/styles/colors'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'

const Tab = createMaterialTopTabNavigator()

interface ScreenConfig {
	name: string
	component: React.ComponentType<any>
	icon: React.ComponentType<any>
	hasBadge?: boolean
	badge?: string | number
	isPublic?: boolean
	label?: string
}

interface TabNavigationProps {
	showOnlyPublicTabs?: boolean
}

export default function TabNavigation({ showOnlyPublicTabs }: TabNavigationProps) {
	const [count_messages, setCountMessages] = useState(0)
	const [count_notifications, setCountNotifications] = useState(0)
	const { data, logout, isAuthenticated } = useAuth()

	const handleLogout = () => {
		Alert.alert(
			'Terminar sessão',
			'Deseja sair da conta?',
			[
				{
					text: 'Sim',
					onPress: () => logout(),
				},
				{ text: 'Não', onPress: () => {}, style: 'cancel' },
			],
			{ cancelable: false },
		)
	}

	const getChatsData = async () => {
		await getChats(data?.id || 0)
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
		await getNotifications(data?.id || 0)
			.then(response => {
				setCountNotifications(response.length)
			})
			.catch(error => {
				const errorMessage = error?.error?.message || 'Erro ao carregar notificações.'
				showToast({ type: 'error', title: 'Erro', message: errorMessage })
			})
	}

	useEffect(() => {
		if (data?.id) {
			getChatsData()
			getAllNotifications()
		}
	}, [data?.id])

	const screens: ScreenConfig[] = [
		{ name: 'Home', component: Home, icon: HomeIcon, isPublic: true, label: !isAuthenticated ? 'Início' : undefined },
		{
			name: 'Donates',
			component: Donates,
			icon: Users2,
			isPublic: true,
			label: !isAuthenticated ? 'Doadores' : undefined,
		},
		{ name: 'Orders', component: Orders, icon: HandHelping, label: !isAuthenticated ? 'Pedidos' : undefined },
		{
			name: 'Chat',
			component: Chat,
			icon: MessageCircle,
			hasBadge: true,
			badge: count_messages,
			label: !isAuthenticated ? 'Mensagens' : undefined,
		},
		{
			name: 'Notifications',
			component: Notifications,
			icon: BellIcon,
			hasBadge: true,
			badge: count_notifications > 9 ? '+9' : count_notifications,
			label: !isAuthenticated ? 'Notificações' : undefined,
		},
		{ name: 'Profile', component: Profile, icon: UserCircle, label: !isAuthenticated ? 'Perfil' : undefined },
	]

	const filteredScreens = showOnlyPublicTabs ? screens.filter(screen => screen.isPublic) : screens

	const screenOptions = ({ route }: { route: { name: string } }) => {
		const screen = screens.find(screen => screen.name === route.name)
		if (!screen) return {}
		const IconComponent = screen.icon
		return {
			tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
				<IconComponent color={focused ? colors.main.base : color} />
			),
			tabBarShowLabel: !isAuthenticated,
			tabBarLabel: ({ focused }: { focused: boolean }) => (
				<Text
					style={{
						color: focused ? colors.main.base : colors.gray[500],
						fontSize: 12,
						fontFamily: 'Nunito_600SemiBold',
					}}
				>
					{screen.label}
				</Text>
			),
			tabBarItemStyle: { width: Dimensions.get('window').width / filteredScreens.length },
			tabBarIndicatorStyle: { backgroundColor: colors.main.base },
			tabBarPressColor: 'light',
			tabBarInactiveTintColor: 'black',
			tabBarBadge: screen.hasBadge && screen.badge ? () => <Badge text={screen.badge} /> : undefined,
		}
	}

	return (
		<View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
			<View style={s.header}>
				<Text style={s.title}>Doe Sangue</Text>
				{showOnlyPublicTabs ? (
					<Link href='/(auth)/signin' asChild>
						<Pressable>
							<Feather name='log-in' size={20} />
						</Pressable>
					</Link>
				) : (
					<Pressable onPress={handleLogout}>
						<Feather name='log-out' size={20} />
					</Pressable>
				)}
			</View>
			<Tab.Navigator screenOptions={screenOptions}>
				{filteredScreens.map(({ name, component }) => (
					<Tab.Screen key={name} name={name} component={component} />
				))}
			</Tab.Navigator>
		</View>
	)
}
