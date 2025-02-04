import { TextInput, TextInputProps, View } from 'react-native'
import { colors } from '@/styles/theme'
import { useState } from 'react'
import { s } from './styles'
import Feather from '@expo/vector-icons/Feather'

interface InputProps extends Omit<TextInputProps, 'onChangeText'> {
	placeholder?: string
	onValueChange?: (value: string) => void
	value?: string
	icon?: keyof typeof Feather.glyphMap
}

export default function Input({ placeholder, onValueChange, icon = 'search', value, ...rest }: InputProps) {
	const [isFocused, setIsFocused] = useState(false)

	return (
		<View style={s.inputContainer}>
			<Feather name={icon} size={20} color={isFocused ? colors.main.dark : colors.gray[300]} />
			<TextInput
				value={value}
				onChangeText={onValueChange}
				{...rest}
				style={s.input}
				placeholder={placeholder}
				placeholderTextColor={colors.gray[300]}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
		</View>
	)
}
