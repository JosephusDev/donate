import React from 'react'
import { Text, View } from 'react-native'
import { s } from './styles'

interface ICardProps {
	title: string
	description?: string
	children?: React.ReactNode
}

export default function Card({ title, description, children }: ICardProps) {
	return (
		<View style={s.card}>
			<Text style={s.title}>{title}</Text>
			<Text style={s.descrition}>{description}</Text>
			<View>{children}</View>
		</View>
	)
}
