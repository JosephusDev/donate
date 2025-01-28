import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
	card: {
		padding: '8%',
	},
	title: {
		fontFamily: fontFamily.bold,
		fontSize: 20,
		alignItems: 'center',
		color: colors.main.base,
		textAlign: 'center',
		justifyContent: 'center',
		marginBottom: '5%',
	},
	descrition: {
		fontFamily: fontFamily.regular,
		fontSize: 12,
		color: colors.gray[500],
		marginBottom: '8%',
		textAlign: 'center',
	},
})
