import { Link } from 'expo-router'
import { Animated, PanResponder, Text, View } from 'react-native'
import { s } from '@/styles/app/auth'
import Card from '@/components/card'
import { useEffect, useRef, useState } from 'react'
import TabsHeader from '@/components/tabsHeader'
import { Button } from '@/components/button'
import { IndividualForm, HospitalForm } from '@/components/forms'

export default function SignUp() {
	const [selectedTab, setSelectedTab] = useState('individual')
	const pan = useRef(new Animated.ValueXY()).current

	const panResponder = PanResponder.create({})

	useEffect(() => {
		selectedTab === 'individual' ? pan.setValue({ x: -600, y: 0 }) : pan.setValue({ x: 600, y: 0 })
		Animated.spring(pan, {
			toValue: { x: 0, y: 0 },
			useNativeDriver: false,
		}).start()
	}, [selectedTab])

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
								<Animated.View {...panResponder.panHandlers} style={[pan.getLayout()]}>
									<Card title='Crie sua conta' description='Crie sua conta para doar ou receber!'>
										<IndividualForm />
									</Card>
								</Animated.View>
							</View>
						) : (
							<View>
								<Animated.View {...panResponder.panHandlers} style={[pan.getLayout()]}>
									<Card title='Registre seu Hospital' description='Registre seu Hospital e ajude as pessoas!'>
										<HospitalForm />
									</Card>
								</Animated.View>
							</View>
						)}
						<View style={s.footer}>
							<Text style={s.textLeft}>Já tem uma conta?</Text>
							<Link href={'/'} style={s.links}>
								Fazer login
							</Link>
						</View>
					</View>
				}
			/>
		</View>
	)
}
