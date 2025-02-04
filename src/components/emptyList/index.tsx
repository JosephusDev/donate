import Feather from '@expo/vector-icons/Feather'
import { Text, View } from 'react-native'
import { s } from './styles'

export default function EmptyList({ text }: { text: string }) {
	return (
		<View style={s.container}>
			<Feather name='clipboard' size={25} />
			<Text style={s.text}>{text}</Text>
		</View>
	)
}
