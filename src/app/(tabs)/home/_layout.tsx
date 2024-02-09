import 'react-native-get-random-values'
import '@/config/unistyle'
import { Stack } from 'expo-router'
import { useStyles } from 'react-native-unistyles'

export default function Layout() {
  const { theme } = useStyles()
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: theme.colors.background },
        headerTintColor: theme.colors.primaryText,
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'My pills',
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
