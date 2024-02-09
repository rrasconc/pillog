import { Stack } from 'expo-router'
import { useStyles } from 'react-native-unistyles'

export default function Layout() {
  const { theme } = useStyles()
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.background },
        headerTintColor: theme.colors.primaryText,
        headerShadowVisible: false,
      }}>
      <Stack.Screen name="index" options={{ title: 'My logs' }} />
    </Stack>
  )
}
