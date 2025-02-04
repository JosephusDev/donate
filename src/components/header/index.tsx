import { Pressable, Text, View } from 'react-native'
import { s } from './styles'
import Avatar from '../avatar'
import Input from '../input'

export default function Header({
	title,
	showButton = true,
	showInput = true,
}: { title: string; showButton?: boolean; showInput?: boolean }) {
	return (
		<View style={s.container}>
			<View style={s.containerTitle}>
				<Text style={s.title}>{title}</Text>
			</View>
			{showInput && (
				<View style={s.toolBar}>
					<Input placeholder='Pesquisar...' />
					{showButton && (
						<Pressable>
							<Avatar icon='plus' style={{ borderRadius: 10 }} />
						</Pressable>
					)}
				</View>
			)}
		</View>
	)
}
