import { StyleSheet } from 'react-native'
import { fontFamily } from '../font-family'
import { colors } from '../colors'

export const s = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		paddingVertical: 30,
		paddingHorizontal: 20,
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
		paddingHorizontal: 10,
		marginVertical: 4,
		borderWidth: 1,
		borderColor: colors.gray[400],
		borderRadius: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 20,
	},
	title: {
		fontSize: 14,
		fontFamily: fontFamily.bold,
	},
	description: {
		width: '90%',
		fontFamily: fontFamily.regular,
		fontSize: 13,
		color: colors.gray[500],
	},
	image: {
		width: 40,
		height: 40,
		borderRadius: 60,
		borderWidth: 1,
		borderColor: colors.gray[400],
		justifyContent: 'center',
	},
	middle: {
		width: '65%',
		gap: 5,
	},
	right: {
		fontFamily: fontFamily.bold,
		color: colors.main.dark,
		fontSize: 14,
	},
	fallback: {
		textAlign: 'center',
		fontFamily: fontFamily.bold,
		fontSize: 14,
	},
})
