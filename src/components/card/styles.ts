import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
	card: {
		padding: 20,
	},
	title: {
		fontFamily: fontFamily.bold,
		fontSize: 25,
		alignItems: 'center',
		color: colors.main.base,
		textAlign: 'center',
		justifyContent: 'center',
		marginBottom: 10,
	},
	descrition: {
		fontFamily: fontFamily.regular,
		fontSize: 16,
		color: colors.gray[500],
		marginBottom: 25,
		textAlign: 'center',
	},
})
