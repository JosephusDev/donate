import { Pressable, Text, View } from 'react-native'
import { s } from './styles'
import Avatar from '../avatar'
import Input from '../input'

interface IHeaderProps {
	title: string
	showButton?: boolean
	showInput?: boolean
	onSearchChange?: (value: string) => void
	searchValue?: string
	onClick?: () => void
}

export default function Header({
	title,
	showButton = true,
	showInput = true,
	onSearchChange,
	onClick,
	searchValue,
}: IHeaderProps) {
	return (
		<View style={s.container}>
			<View style={s.containerTitle}>
				<Text style={s.title}>{title}</Text>
			</View>
			{showInput && (
				<View style={s.toolBar}>
					<Input placeholder='Pesquisar...' onValueChange={onSearchChange} value={searchValue} />
					{showButton && (
						<Pressable onPress={onClick}>
							<Avatar icon='plus' style={{ borderRadius: 40 }} />
						</Pressable>
					)}
				</View>
			)}
		</View>
	)
}
