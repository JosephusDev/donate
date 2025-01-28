import Feather from '@expo/vector-icons/Feather'
import { TabTriggerSlotProps } from 'expo-router/ui'
import { ComponentProps, Ref, forwardRef } from 'react'
import { Text, Pressable, View, DimensionValue } from 'react-native'
import { s } from './styles'
import { colors } from '@/styles/colors'

type Icon = ComponentProps<typeof Feather>['name']

export type ITabButtonProps = TabTriggerSlotProps & {
	icon?: Icon
	width?: DimensionValue
}

export const Button = ({ icon, width = 'auto', children, isFocused, ...props }: ITabButtonProps, ref: Ref<View>) => {
	return (
		<Pressable
			ref={ref}
			{...props}
			style={[s.tabButton, { backgroundColor: isFocused ? colors.main.dark : colors.gray[100] }, { width: width }]}
		>
			<Feather name={icon} size={18} style={[s.icon, { color: isFocused ? colors.gray[100] : colors.gray[600] }]} />
			<Text style={[s.text, { color: isFocused ? colors.gray[100] : colors.gray[600] }]}>{children}</Text>
		</Pressable>
	)
}
