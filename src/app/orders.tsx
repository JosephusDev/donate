import EmptyList from '@/components/emptyList'
import Header from '@/components/header'
import { OrdersData } from '@/mocks'
import { s } from '@/styles/app/menus'
import { colors } from '@/styles/colors'
import { capitalizeName, formatedName } from '@/utils/functions'
import Feather from '@expo/vector-icons/Feather'
import { Alert, FlatList, Image, Pressable, SafeAreaView, Text, View } from 'react-native'

export default function Orders() {
	return (
		<View style={s.container}>
			<Header title='Pedidos' />
			<SafeAreaView style={s.flatlist}>
				<FlatList
					data={OrdersData}
					renderItem={({ item }) => {
						return (
							<View style={s.item}>
								<View style={s.middle}>
									<Text ellipsizeMode='tail' numberOfLines={1} style={s.title}>
										{capitalizeName(item.description)}
									</Text>
									<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
										<Feather name='map-pin' color={colors.main.base} /> {item.donate_location}
									</Text>
									<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
										<Feather name='droplet' color={colors.main.base} /> Tipo Sanguíneo: {item.blood_type}
									</Text>
									<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
										<Feather name='alert-circle' color={colors.main.base} /> Urgência: {capitalizeName(item.urgency)}
									</Text>
								</View>
								<View style={s.containerButton}>
									<Pressable onPress={() => Alert.alert('Doe', 'Eliminado...')}>
										<Feather color={colors.gray[600]} size={20} name='edit' />
									</Pressable>
									<Pressable onPress={() => Alert.alert('Doe', 'Eliminado...')}>
										<Feather color={colors.main.dark} size={20} name='trash' />
									</Pressable>
								</View>
							</View>
						)
					}}
					keyExtractor={item => item.id.toString()}
				/>
			</SafeAreaView>
		</View>
	)
}
