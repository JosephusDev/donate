import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
	input: {
		width: '100%',
		borderWidth: 1,
		borderColor: colors.main.base,
		borderRadius: 5,
		color: colors.gray[600],
		paddingVertical: 16,
		paddingHorizontal: 10,
		fontFamily: fontFamily.regular,
		marginBottom: 10,
		fontSize: 16,
	},
	inputFocused: {
		borderColor: colors.main.dark,
		color: colors.main.base,
	},
})
