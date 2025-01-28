import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
	tabButton: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: colors.main.light,
		gap: 10,
		padding: 10,
		borderRadius: 5,
	},
	text: {
		fontFamily: fontFamily.bold,
		fontSize: 16,
		color: colors.gray[100],
	},
	icon: {
		color: colors.gray[100],
	},
})
