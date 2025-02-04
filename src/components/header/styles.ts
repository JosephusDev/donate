import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		gap: 10,
	},
	containerTitle: {
		width: '100%',
	},
	title: {
		fontFamily: fontFamily.bold,
		fontSize: 20,
	},
	toolBar: {
		flexDirection: 'row',
		marginTop: 10,
		alignItems: 'center',
		paddingHorizontal: 30,
		gap: 10,
	},
})
