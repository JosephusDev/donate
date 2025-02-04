import { StyleSheet } from 'react-native'
import { fontFamily } from '../font-family'

export const s = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignContent: 'center',
	},
	text: {
		fontSize: 20,
		fontFamily: fontFamily.bold,
		textAlign: 'center',
	},
})
