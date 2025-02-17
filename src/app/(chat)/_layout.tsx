import CustomHeaderTitle from '@/components/customHeaderTitle'
import { Stack } from 'expo-router'

export default function ChatLayout() {
	return (
		<Stack initialRouteName='chats'>
			<Stack.Screen
				name='chats'
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='chat/[item]'
				options={({ route }) => ({
					headerShown: true,
					headerTitle: () => <CustomHeaderTitle name={route.params?.item} />,
				})}
			/>
		</Stack>
	)
}
