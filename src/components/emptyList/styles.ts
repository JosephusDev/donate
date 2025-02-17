import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		width: '100%',
		paddingVertical: 30,
		gap: 10,
	},
	text: {
		textAlign: 'center',
		fontFamily: fontFamily.regular,
		fontSize: 16,
		marginTop: 5,
		color: colors.gray[400],
	},
	image: {
		width: 200,
		height: 200,
	},
})
