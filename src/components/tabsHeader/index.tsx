import React from 'react'
import { Text, View } from 'react-native'
import { s } from './styles'

interface ITabsProps {
	tabButtons?: React.ReactNode
	children?: React.ReactNode
}

export default function TabsHeader({ tabButtons, children }: ITabsProps) {
	return (
		<View style={s.tabsHeader}>
			<View>{tabButtons}</View>
			{children}
		</View>
	)
}
