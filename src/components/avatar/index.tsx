import { View, ViewProps } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { ComponentProps } from 'react'
import { s } from './styles'
import { colors } from '@/styles/colors'

type Icon = ComponentProps<typeof Feather>['name']

interface IAvatarProps extends ViewProps {
	icon: Icon
}
export default function Avatar({ icon, style }: IAvatarProps) {
	return (
		<View style={[s.avatar, style]}>
			<Feather name={icon} size={24} color={colors.gray[100]} />
		</View>
	)
}
