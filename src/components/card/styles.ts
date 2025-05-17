import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
	card: {
		padding: '8%',
	},
	title: {
		fontFamily: fontFamily.bold,
		fontSize: 24,
		alignItems: 'center',
		textAlign: 'center',
		justifyContent: 'center',
		marginBottom: '5%',
	},
	descrition: {
		fontFamily: fontFamily.regular,
		fontSize: 14,
		color: colors.gray[500],
		marginBottom: '8%',
		textAlign: 'center',
	},
})
