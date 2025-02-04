import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		right: 1,
		backgroundColor: colors.main.base,
		borderRadius: 20,
		width: 23,
		height: 23,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderColor: 'white',
	},
	text: {
		color: 'white',
		fontSize: 10,
		fontFamily: fontFamily.bold,
	},
})
