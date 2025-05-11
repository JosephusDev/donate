import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
	container: {
		marginTop: 30,
		width: '100%',
	},
	label: {
		fontSize: 14,
		marginBottom: '2%',
		fontFamily: fontFamily.medium,
	},
	input: {
		width: '100%',
		borderWidth: 1,
		borderColor: colors.gray[400],
		borderRadius: 10,
		padding: '4%',
		marginBottom: '3%',
		color: colors.gray[600],
		fontFamily: fontFamily.regular,
		fontSize: 14,
	},
	error: {
		color: colors.main.light,
		fontSize: 12,
		fontFamily: fontFamily.regular,
		textAlign: 'right',
		marginTop: -5,
	},
})
