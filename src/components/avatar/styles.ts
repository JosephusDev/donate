import { colors } from '@/styles/colors'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 50,
		backgroundColor: colors.main.dark,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
