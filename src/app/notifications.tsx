import EmptyList from '@/components/emptyList'
import Header from '@/components/header'
import { NotificationsData } from '@/mocks'
import { s } from '@/styles/app/menus'
import { colors } from '@/styles/colors'
import { capitalizeName, formatedName } from '@/utils/functions'
import Feather from '@expo/vector-icons/Feather'
import { Bell } from 'lucide-react-native'
import { Alert, FlatList, Image, Pressable, SafeAreaView, Text, View } from 'react-native'

export default function Notification() {
	return (
		<View style={s.container}>
			<Header title='Notificações' showInput={false} showButton={false} />
			<SafeAreaView style={s.flatlist}>
				<FlatList
					data={NotificationsData}
					renderItem={({ item }) => {
						return (
							<Pressable onPress={() => Alert.alert('Doe', item.title)}>
								<View style={s.item}>
									<View style={s.image}>
										<Bell color={colors.main.dark} />
									</View>
									<View style={s.notificationBody}>
										<Text ellipsizeMode='tail' numberOfLines={1} style={s.title}>
											{capitalizeName(item.title)}
										</Text>
										<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
											<Feather name='message-circle' size={14} /> {item.message}
										</Text>
										<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
											<Feather name='calendar' size={14} /> {item.date}
										</Text>
									</View>
								</View>
							</Pressable>
						)
					}}
					keyExtractor={item => item.id.toString()}
				/>
			</SafeAreaView>
		</View>
	)
}
