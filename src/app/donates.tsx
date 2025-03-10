import { showToast } from '@/components/customToast'
import EmptyList from '@/components/emptyList'
import Header from '@/components/header'
import { useAuth } from '@/context/authContext'
import { getDonates } from '@/models/user'
import { s } from '@/styles/app/menus'
import { colors } from '@/styles/colors'
import { DonateType } from '@/types'
import { capitalizeName, capitalizeText } from '@/utils/functions'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Merge } from 'lucide-react-native'
import { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native'

export default function Donates() {
	const [donates, setDonates] = useState<DonateType[]>([])
	const [search, setSearch] = useState('')
	const { data } = useAuth()
	const getDonate = async () => {
		await getDonates(data?.id ?? 0)
			.then(response => {
				setDonates(response)
			})
			.catch(error => {
				// Se for um erro de validação, pega a mensagem específica
				const errorMessage = error?.error?.message || 'Erro ao carregar doadores.'
				// apresenta do Erros
				showToast({ type: 'error', title: 'Erro', message: errorMessage })
			})
	}
	const filteredDonetes = search
		? donates?.filter(v => v.blood_type.name.toLowerCase().includes(search.toLowerCase()))
		: donates
	useEffect(() => {
		getDonate()
	}, [])
	return (
		<View style={{ flex: 1 }}>
			{filteredDonetes?.length === 0 ? (
				<EmptyList text='Nenhum doador encontrado' />
			) : (
				<View style={s.container}>
					<Header title='Doadores' showButton={false} onSearchChange={setSearch} searchValue={search} />
					<SafeAreaView style={s.flatlist}>
						<FlatList
							data={filteredDonetes}
							renderItem={({ item }) => {
								return (
									<Link href={`/(chat)/chat/${capitalizeName(item.fullname)}?otherUserId=${item.id}`}>
										<View style={s.item}>
											{item.image ? (
												<Image source={item.image} style={s.image} />
											) : (
												<View style={s.image}>
													<Feather name='user' color={'#FFFFFF'} size={20} />
												</View>
											)}

											<View style={s.middle}>
												<Text ellipsizeMode='tail' numberOfLines={1} style={s.title}>
													{capitalizeName(item.fullname)}
												</Text>

												<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
													<Merge size={14} color={colors.main.dark} /> {capitalizeText(item.gender)}
												</Text>
											</View>
											<Text style={s.right}>{item.blood_type.name}</Text>
										</View>
									</Link>
								)
							}}
						/>
					</SafeAreaView>
				</View>
			)}
		</View>
	)
}
