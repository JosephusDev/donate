import { showToast } from '@/components/customToast'
import EmptyList from '@/components/emptyList'
import Header from '@/components/header'
import { OrdersData } from '@/mocks'
import { getDonates } from '@/models/user'
import { s } from '@/styles/app/menus'
import { colors } from '@/styles/colors'
import { DonateType } from '@/types'
import { capitalizeName, capitalizeText, formatedName } from '@/utils/functions'
import { Merge, Search } from 'lucide-react-native'
import { useEffect, useState } from 'react'
import { Alert, FlatList, Image, Pressable, SafeAreaView, Text, View } from 'react-native'

export default function Donates() {
	const [donates, setDonates] = useState<DonateType[]>([])
	const [search, setSearch] = useState('')
	const getDonate = async () => {
		await getDonates()
			.then(Response => {
				setDonates(Response)
			})
			.catch(error => {
				// Se for um erro de validação, pega a mensagem específica
				const errorMessage = error?.error?.message || 'Erro ao realizar carregar doadores.'
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
		<View style={s.container}>
			<Header title='Doadores' showButton={false} onSearchChange={setSearch} searchValue={search} />
			{filteredDonetes?.length === 0 ? (
				<EmptyList text='Nenhum doador encontrado' />
			) : (
				<SafeAreaView style={s.flatlist}>
					<FlatList
						data={filteredDonetes}
						renderItem={({ item, index }) => {
							return (
								<Pressable onPress={() => Alert.alert('Doe', item.fullname)}>
									<View style={s.item}>
										{item.image ? (
											<Image source={item.image} style={s.image} />
										) : (
											<View style={s.image}>
												<Text style={s.fallback}>{formatedName(item.fullname)}</Text>
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
								</Pressable>
							)
						}}
					/>
				</SafeAreaView>
			)}
		</View>
	)
}
