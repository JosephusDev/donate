import EmptyList from '@/components/emptyList'
import Header from '@/components/header'
import { OrdersData } from '@/mocks'
import { s } from '@/styles/app/menus'
import { colors } from '@/styles/colors'
import { capitalizeName, capitalizeText, formatedName } from '@/utils/functions'
import { Merge } from 'lucide-react-native'
import { Alert, FlatList, Image, Pressable, SafeAreaView, Text, View } from 'react-native'

export default function Donates() {
	return (
		<View style={s.container}>
			<Header title='Doadores' showButton={false} />
			<SafeAreaView style={s.flatlist}>
				<FlatList
					data={OrdersData}
					renderItem={({ item }) => {
						return (
							<Pressable onPress={() => Alert.alert('Doe', item.user_name)}>
								<View style={s.item}>
									{item.image ? (
										<Image source={item.image} style={s.image} />
									) : (
										<View style={s.image}>
											<Text style={s.fallback}>{formatedName(item.user_name)}</Text>
										</View>
									)}

									<View style={s.middle}>
										<Text ellipsizeMode='tail' numberOfLines={1} style={s.title}>
											{capitalizeName(item.user_name)}
										</Text>

										<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
											<Merge size={14} color={colors.main.dark} /> {capitalizeText(item.gender)}
										</Text>
									</View>
									<Text style={s.right}>{item.blood_type}</Text>
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
