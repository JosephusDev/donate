import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.9)',
	},
	modalView: {
		width: '90%',
		margin: 20,
		backgroundColor: '#F2F2F2',
		borderRadius: 10,
		padding: 25,
		alignItems: 'center',
		shadowColor: colors.gray[600],
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		justifyContent: 'center',
		alignContent: 'center',
	},
	modalTitle: {
		textAlign: 'center',
		color: colors.gray[600],
		fontFamily: fontFamily.bold,
		fontSize: 16,
	},
	modalSubtitle: {
		marginTop: 15,
		marginBottom: 15,
		textAlign: 'center',
		color: colors.gray[600],
		fontFamily: fontFamily.regular,
		fontSize: 12,
	},
	closeButton: {
		position: 'absolute',
		top: 10,
		right: 20,
	},
})
