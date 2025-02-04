import { colors } from '@/styles/colors'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 50,
		backgroundColor: colors.main.dark,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
