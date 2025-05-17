import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		gap: 10,
		paddingHorizontal: 20,
	},
	containerTitle: {
		alignSelf: 'flex-start',
		backgroundColor: colors.secondary.blue,
		padding: 10,
		borderRadius: 10,
	},
	title: {
		fontFamily: fontFamily.bold,
		fontSize: 15,
		textAlign: 'center',
		color: colors.secondary.blueDark,
	},
	toolBar: {
		flexDirection: 'row',
		marginTop: 10,
		alignItems: 'center',
		paddingHorizontal: 30,
		gap: 10,
	},
})
