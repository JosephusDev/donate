import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
	input: {
		fontSize: 15,
		fontFamily: fontFamily.regular,
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 5,
		paddingHorizontal: 8,
		marginTop: 5,
		width: '100%',
		color: colors.gray[600],
	},
	option: {
		fontSize: 14,
		fontFamily: fontFamily.regular,
		color: colors.gray[500],
	},
	picker: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		borderWidth: 1,
		borderRadius: 10,
		borderColor: colors.gray[400],
		height: 45,
		marginBottom: 15,
	},
})
