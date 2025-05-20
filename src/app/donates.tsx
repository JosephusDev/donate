import { showToast } from '@/components/customToast'
import EmptyList from '@/components/emptyList'
import Header from '@/components/header'
import { getDonates } from '@/models/user'
import { s } from '@/styles/app/menus'
import { colors } from '@/styles/colors'
import { DonateType } from '@/types'
import { capitalizeName, capitalizeText } from '@/utils/functions'
import { Link, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text, View, ActivityIndicator } from 'react-native'

export default function Donates() {
	const [donates, setDonates] = useState<DonateType[]>([])
	const [search, setSearch] = useState('')
	const [isLoading, setIsLoading] = useState(true)

	const getDonatesData = async () => {
		setIsLoading(true)
		await getDonates()
			.then(response => {
				setDonates(response)
			})
			.catch(error => {
				const errorMessage = error?.error?.message || 'Erro ao carregar doações.'
				showToast({ type: 'error', title: 'Erro', message: errorMessage })
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	useEffect(() => {
		getDonatesData()
	}, [])

	const filteredDonates = search
		? donates?.filter(v => v.blood_type.name.toLowerCase().includes(search.toLowerCase()))
		: donates

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size='large' color={colors.main.base} />
			</View>
		)
	}

	return (
		<View style={{ flex: 1 }}>
			<Header title='Doadores' showButton={false} onSearchChange={setSearch} searchValue={search} />
			{filteredDonates.length === 0 ? (
				<EmptyList text='Nenhuma doação encontrada' />
			) : (
				<View style={s.container}>
					<SafeAreaView style={s.flatlist}>
						<FlatList
							data={filteredDonates}
							ItemSeparatorComponent={() => <View style={s.separator} />}
							renderItem={({ item }) => {
								return (
									<Link href={`/(chat)/chat/${capitalizeName(item.fullname)}?otherUserId=${item.id}`}>
										<View style={s.item}>
											<View
												style={[
													s.middle,
													{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
												]}
											>
												<View>
													<Text ellipsizeMode='tail' numberOfLines={1} style={s.title}>
														{capitalizeName(item.fullname)}
													</Text>
													<View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
														<Text
															ellipsizeMode='tail'
															numberOfLines={1}
															style={[s.description, { color: colors.main.base }]}
														>
															{item.blood_type.name}
														</Text>
														<Text style={{ color: colors.gray[500] }}>|</Text>
														<Text ellipsizeMode='tail' numberOfLines={1} style={s.description}>
															{capitalizeText(item.gender)}
														</Text>
													</View>
												</View>
											</View>
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
