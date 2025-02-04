import EmptyList from '@/components/emptyList'
import Header from '@/components/header'
import { OrdersData } from '@/mocks'
import { s } from '@/styles/app/menus'
import { formatedName } from '@/utils/functions'
import { Alert, FlatList, Image, Pressable, SafeAreaView, Text, View } from 'react-native'

export default function Orders() {
	return (
		<View style={s.container}>
			<Header />
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
										<Text style={s.title}>{item.user_name}</Text>
										<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
											{item.description}
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
