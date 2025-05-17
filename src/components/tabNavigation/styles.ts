import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { StyleSheet } from 'react-native'
import { Platform } from 'react-native'

const statusBarHeight = Platform.OS === 'android' ? 0 : 24

export const s = StyleSheet.create({
	header: {
		height: 50, // Defina uma altura explícita
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 15,
		marginTop: statusBarHeight,
	},
	title: {
		fontFamily: fontFamily.bold,
		fontSize: 25,
	},
})
