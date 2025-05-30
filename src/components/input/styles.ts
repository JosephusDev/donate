import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
	input: {
		width: '100%',
		color: colors.gray[600],
		fontFamily: fontFamily.regular,
		fontSize: 14,
		height: '100%',
	},
	inputContainer: {
		width: '100%',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: colors.gray[400],
		borderRadius: 10,
		paddingHorizontal: 10,
		paddingVertical: 10,
		gap: 10,
	},
})
