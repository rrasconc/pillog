import 'react-native-get-random-values'
import '@/config/unistyle'
import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'My pills',
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name="new_pill"
        options={{
          title: 'Add a pill',
          presentation: 'modal',
        }}
      />
    </Stack>
  )
}
