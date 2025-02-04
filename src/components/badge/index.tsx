import { Text, View } from 'react-native'
import { s } from './styles'

interface BadgeProps {
	text?: string | number
}

export default function Badge({ text }: BadgeProps) {
	return (
		<View style={s.container}>
			<Text style={s.text}>{text}</Text>
		</View>
	)
}
