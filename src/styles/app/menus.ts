import { StyleSheet } from 'react-native'
import { fontFamily } from '../font-family'
import { colors } from '../colors'

export const s = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F2F4F7',
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
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.4,
		shadowRadius: 2,
		elevation: 3,
	},
	item: {
		paddingVertical: 15,
		paddingHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 20,
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.4,
		shadowRadius: 2,
		elevation: 3,
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
		backgroundColor: colors.main.base,
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
		color: colors.main.base,
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
		width: 80,
		height: 80,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#F2F4F7',
		justifyContent: 'center',
		alignItems: 'center',
	},
	profileImage: {
		width: 80,
		height: 80,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#F2F4F7',
		justifyContent: 'center',
		alignItems: 'center',
		opacity: 0.8,
		backgroundColor: 'rgba(0, 0, 0, 0.9)',
	},
	imageIcon: {
		position: 'absolute',
		top: 25,
		left: 30,
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
	containerHome: {
		flex: 1,
		backgroundColor: '#F5F5F5',
		paddingVertical: 15,
		paddingHorizontal: 20,
	},
	headerHome: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		borderRadius: 10,
		backgroundColor: '#FFFFFF',
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.4,
		shadowRadius: 2,
		marginBottom: 20,
		elevation: 5,
		gap: 5,
	},
	searchHome: {
		flex: 1,
		borderRadius: 100,
		backgroundColor: '#F2F4F7',
		fontFamily: fontFamily.regular,
		height: '100%',
		width: '100%',
		padding: 10,
		color: colors.gray[500],
	},
	itemHome: {
		paddingVertical: 15,
		paddingHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 20,
		backgroundColor: '#FFFFFF',
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.4,
		shadowRadius: 2,
		elevation: 3,
		marginBottom: 20,
		borderRadius: 10,
	},
	postContainer: {
		backgroundColor: colors.main.base,
		width: '100%',
		paddingVertical: 30,
		paddingHorizontal: 15,
		borderRadius: 10,
		marginBottom: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	post: {
		fontSize: 15,
		fontFamily: fontFamily.bold,
		textAlign: 'center',
		color: '#FFFFFF',
	},
	author: {
		flex: 1,
		flexDirection: 'row',
		gap: 5,
		alignItems: 'center',
	},
	authorAvatar: {
		width: 30,
		height: 30,
		borderRadius: 100,
		backgroundColor: '#F2F4F7',
		justifyContent: 'center',
		alignItems: 'center',
	},
	rightDate: {
		fontSize: 12,
		fontFamily: fontFamily.regular,
		alignItems: 'flex-start',
		width: '100%',
		color: colors.gray[500],
	},
	online: {
		width: 7,
		height: 7,
		marginRight: 8,
		backgroundColor: colors.main.base,
		borderRadius: 100,
		position: 'absolute',
		right: 0,
		alignSelf: 'center',
	},
})
