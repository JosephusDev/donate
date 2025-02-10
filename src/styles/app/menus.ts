import { StyleSheet } from 'react-native'
import { fontFamily } from '../font-family'
import { colors } from '../colors'

export const s = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5F5F5',
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
		width: '100%',
		marginTop: 20,
		backgroundColor: '#FFFFFF',
		borderRadius: 10,
	},
	item: {
		paddingVertical: 15,
		paddingHorizontal: 10,
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
		borderRadius: 10,
		backgroundColor: colors.main.light,
		justifyContent: 'center',
		alignItems: 'center',
	},
	middle: {
		width: '65%',
		gap: 5,
	},
	notificationBody: {
		width: '100%',
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
		color: '#FFFFFF',
	},
	containerButton: {
		flexDirection: 'row',
		gap: 20,
		marginRight: 5,
	},
	containerProfile: {
		width: '100%',
		alignItems: 'center',
		flexDirection: 'column',
		gap: 10,
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: colors.main.light,
		justifyContent: 'center',
		alignItems: 'center',
	},
	username: {
		fontSize: 16,
		fontFamily: fontFamily.bold,
	},
	email: {
		fontSize: 14,
		fontFamily: fontFamily.regular,
		color: colors.gray[400],
	},
	rightProfile: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		gap: 10,
	},
	titleItemProfile: {
		fontSize: 16,
		fontFamily: fontFamily.regular,
	},
})
