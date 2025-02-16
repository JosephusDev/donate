import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		width: '90%',
		paddingVertical: 30,
		gap: 10,
		marginTop: 20,
	},
	text: {
		textAlign: 'center',
		fontFamily: fontFamily.bold,
		fontSize: 13,
		marginTop: 5,
	},
})
