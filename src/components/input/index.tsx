import { TextInput, TextInputProps, View } from 'react-native'
import { colors } from '@/styles/theme'
import { useState } from 'react'
import { s } from './styles'
import Feather from '@expo/vector-icons/Feather'

interface InputProps extends Omit<TextInputProps, 'onChangeText'> {
	onValueChange?: (value: string) => void
	value?: string
	icon?: keyof typeof Feather.glyphMap
}

export default function Input({ onValueChange, icon = 'search', value, ...rest }: InputProps) {
	const [isFocused, setIsFocused] = useState(false)

	return (
		<View style={s.inputContainer}>
			<Feather name={icon} size={18} color={isFocused ? colors.main.dark : colors.gray[400]} />
			<TextInput
				value={value}
				onChangeText={onValueChange}
				{...rest}
				style={s.input}
				placeholderTextColor={colors.gray[400]}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
		</View>
	)
}
