import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
	label: {
		fontSize: 16,
		marginBottom: 8,
		fontFamily: fontFamily.medium,
	},
	input: {
		borderWidth: 1,
		borderColor: colors.gray[300],
		borderRadius: 5,
		padding: 10,
		marginBottom: 16,
		color: colors.gray[600],
		fontFamily: fontFamily.regular,
		fontSize: 16,
	},
})
