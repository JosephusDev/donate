import { TextInput, TextInputProps } from 'react-native'
import { colors } from '@/styles/theme'
import { useState } from 'react'
import { s } from './styles'

interface InputProps extends Omit<TextInputProps, 'onChangeText'> {
	placeholder?: string
	onValueChange?: (value: string) => void
	value?: string
}

export default function Input({ placeholder, onValueChange, value, ...rest }: InputProps) {
	const [isFocused, setIsFocused] = useState(false)

	return (
		<TextInput
			value={value}
			onChangeText={onValueChange}
			{...rest}
			style={[s.input, isFocused && s.inputFocused]}
			placeholder={placeholder}
			placeholderTextColor={colors.gray[200]}
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
		/>
	)
}
