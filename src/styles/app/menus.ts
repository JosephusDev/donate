import { StyleSheet } from 'react-native'
import { fontFamily } from '../font-family'
import { colors } from '../colors'

export const s = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		padding: 30,
	},
	text: {
		fontSize: 20,
		fontFamily: fontFamily.bold,
		textAlign: 'center',
	},
	flatlist: {
		flex: 1,
		width: '100%',
	},
	item: {
		paddingVertical: 10,
		paddingHorizontal: 25,
		marginVertical: 8,
		borderWidth: 1,
		borderColor: colors.gray[300],
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
	},
	title: {
		fontSize: 20,
		fontFamily: fontFamily.bold,
	},
	description: {
		width: '90%',
		fontFamily: fontFamily.regular,
		fontSize: 17,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 60,
		borderWidth: 1,
		borderColor: colors.gray[400],
		justifyContent: 'center',
	},
	middle: {
		width: '70%',
		gap: 5,
	},
	right: {
		fontFamily: fontFamily.bold,
		color: colors.main.dark,
		fontSize: 20,
	},
	fallback: {
		textAlign: 'center',
		fontFamily: fontFamily.bold,
		fontSize: 25,
	},
})
