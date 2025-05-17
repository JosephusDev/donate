import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.gray[100],
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
	footer: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 5,
		alignItems: 'center',
	},
	textLeft: {
		textAlign: 'center',
		fontSize: 14,
		color: colors.gray[600],
		fontFamily: fontFamily.regular,
	},
	links: {
		textAlign: 'center',
		fontSize: 14,
		fontFamily: fontFamily.bold,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#F2F4F7',
	},
})
