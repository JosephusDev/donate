import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
	button: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.main.light,
		gap: 10,
		padding: '4%',
		borderRadius: 8,
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
