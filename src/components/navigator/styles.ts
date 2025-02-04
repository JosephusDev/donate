import { fontFamily } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
	header: {
		height: 50, // Defina uma altura explícita
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 15,
	},
	title: {
		fontFamily: fontFamily.bold,
		fontSize: 25,
	},
})
