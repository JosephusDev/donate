import Feather from '@expo/vector-icons/Feather'
import { Pressable, Text, TextInput, View } from 'react-native'
import { s } from './styles'
import { Button } from '../button'
import Avatar from '../avatar'
import Input from '../input'

export default function Header() {
	return (
		<View style={s.container}>
			<View style={s.containerTitle}>
				<Text style={s.title}>Pedidos</Text>
			</View>
			<View style={s.toolBar}>
				<Input placeholder='Pesquisar...' />
				<Pressable>
					<Avatar icon='plus' style={{ borderRadius: 10 }} />
				</Pressable>
			</View>
		</View>
	)
}
