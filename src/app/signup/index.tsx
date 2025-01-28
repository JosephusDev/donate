import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import { s } from './styles'
import Card from '@/components/card'
import { useState } from 'react'
import TabsHeader from '@/components/tabsHeader'
import { Button } from '@/components/tabButton'
import Input from '@/components/input'
import IndividualForm from '@/components/individualForm'
import HospitalForm from '@/components/hospitalForm'

export default function SignUp() {
	const [selectedTab, setSelectedTab] = useState('individual')
	return (
		<View style={s.container}>
			<TabsHeader
				tabButtons={
					<View style={s.tabButtons}>
						<Button
							icon='user'
							isFocused={selectedTab === 'individual'}
							onPress={() => setSelectedTab('individual')}
							width={'48%'}
						>
							Individual
						</Button>
						<Button
							icon='home'
							isFocused={selectedTab === 'hospital'}
							onPress={() => setSelectedTab('hospital')}
							width={'48%'}
						>
							Hospital
						</Button>
					</View>
				}
				children={
					<View>
						{selectedTab === 'individual' ? (
							<View>
								<Card title='Crie sua conta' description='Crie sua conta para doar ou receber!'>
									<IndividualForm />
								</Card>
							</View>
						) : (
							<View>
								<Card title='Registre seu Hospital' description='Registre seu Hospital e ajude as pessoas!'>
									<HospitalForm />
								</Card>
							</View>
						)}
						<Link href={'../'} style={s.links}>
							Já tem uma conta? Faça login
						</Link>
					</View>
				}
			/>
		</View>
	)
}
