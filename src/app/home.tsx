import { OrdersData } from '@/mocks'
import { s } from '@/styles/app/menus'
import { colors } from '@/styles/colors'
import { capitalizeName, formatedName } from '@/utils/functions'
import { Feather } from '@expo/vector-icons'
import {
	Alert,
	FlatList,
	FlatListComponent,
	Image,
	Pressable,
	SafeAreaView,
	ScrollView,
	Text,
	TextInput,
	View,
} from 'react-native'

export default function Home() {
	const image = 'https://avatars.githubusercontent.com/u/127633531?v=4'

	return (
		<ScrollView style={{ flex: 1, padding: 20 }}>
			<View style={s.headerHome}>
				<Image style={[s.avatar, { width: 50, height: 50 }]} src={image} />
				<TextInput placeholderTextColor={colors.gray[500]} style={s.searchHome} placeholder='O que estás a procurar?' />
			</View>
			<View style={{ marginBottom: 30 }}>
				{OrdersData.map(item => (
					<View key={item.id.toString()} style={s.itemHome}>
						<View style={{ width: '100%', gap: 10 }}>
							<View style={s.author}>
								<View style={s.authorAvatar}>
									<Feather name='user' size={20} color={colors.gray[500]} />
								</View>
								<Text ellipsizeMode='tail' numberOfLines={1} style={s.title}>
									{capitalizeName(item.user_name)}
								</Text>
							</View>
							<View style={s.postContainer}>
								<Text style={s.post}>{item.description}</Text>
							</View>
							<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
								<Feather name='map-pin' /> {item.donate_location}
							</Text>
							<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
								<Feather name='calendar' /> {item.data}
							</Text>
							<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
								<Feather name='alert-circle' /> Urgência: {capitalizeName(item.urgency)}
							</Text>
						</View>
					</View>
				))}
			</View>
		</ScrollView>
	)
}
