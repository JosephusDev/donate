import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.gray[100],
		padding: '2%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	tabButtons: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		gap: '5%',
		padding: '2%',
		borderRadius: 5,
		backgroundColor: colors.gray[100],
		borderWidth: 1,
		borderColor: colors.gray[300],
	},
	links: {
		textAlign: 'center',
		fontSize: 12,
		margin: '2%',
		fontFamily: fontFamily.bold,
	},
})
