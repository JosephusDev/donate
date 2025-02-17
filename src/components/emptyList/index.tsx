import { Image, Text, View } from 'react-native'
import { s } from './styles'

export default function EmptyList({ text }: { text: string }) {
	return (
		<View style={s.container}>
			<Image style={s.image} source={require('@/assets/images/no-result.png')} />
			<Text style={s.text}>{text}</Text>
		</View>
	)
}
