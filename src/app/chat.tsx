import { showToast } from '@/components/customToast'
import EmptyList from '@/components/emptyList'
import Header from '@/components/header'
import { UserChat } from '@/mocks'
import { s } from '@/styles/app/menus'
import { colors } from '@/styles/colors'
import { capitalizeName, capitalizeText, formatedName } from '@/utils/functions'
import { Search } from 'lucide-react-native'
import { useEffect, useState } from 'react'
import { Alert, FlatList, Image, Pressable, SafeAreaView, Text, View } from 'react-native'

export default function Chats() {
	const [chats, setChats] = useState(UserChat) // Agora é inicializado diretamente com o array mockado
	const [search, setSearch] = useState('')

	// Filtragem dos chats com base no nome ou mensagem
	const filteredChats = search
		? chats.filter(
				v =>
					v.name.toLowerCase().includes(search.toLowerCase()) || v.message.toLowerCase().includes(search.toLowerCase()),
			)
		: chats

	return (
		<View style={s.container}>
			<Header title='Conversas' showButton={false} onSearchChange={setSearch} searchValue={search} />
			{filteredChats.length === 0 ? (
				<EmptyList text='Nenhuma conversa encontrada' />
			) : (
				<SafeAreaView style={s.flatlist}>
					<FlatList
						data={filteredChats}
						keyExtractor={(item, index) => index.toString()} // Como os IDs são null, usar o índice
						renderItem={({ item }) => (
							<Pressable onPress={() => Alert.alert('Mensagem de ' + item.name, item.message)}>
								<View style={s.item}>
									<View style={s.image}>
										<Text style={s.fallback}>{formatedName(item.name)}</Text>
									</View>
									<View style={[{ width: '60%', gap: 0 }]}>
										<Text ellipsizeMode='tail' numberOfLines={1} style={s.title}>
											{capitalizeName(item.name)}
										</Text>
										<Text
											ellipsizeMode='tail'
											numberOfLines={1}
											style={[s.description, { fontFamily: 'fontFamily.bold' }]}
										>
											{item.message}
										</Text>
									</View>
									<Text style={s.rightDate}>{item.date}</Text>
									{item.active ? <View style={s.online} /> : null}
								</View>
							</Pressable>
						)}
					/>
				</SafeAreaView>
			)}
		</View>
	)
}
