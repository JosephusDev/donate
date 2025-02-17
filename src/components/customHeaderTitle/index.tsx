import { View, Text } from 'react-native'
import { s } from './styles'

type headerTitleProps = {
	name?: string
}

const CustomHeaderTitle = ({ name }: headerTitleProps) => {
	return (
		<View style={{ flexDirection: 'row', alignItems: 'center' }}>
			<Text style={s.title}>{name || 'Conversa'}</Text>
		</View>
	)
}

export default CustomHeaderTitle
