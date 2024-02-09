import { Stack } from 'expo-router'
import { useStyles } from 'react-native-unistyles'

export default function SettingsLayout() {
  const { theme } = useStyles()

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.primaryText,
      }}>
      <Stack.Screen name="index" options={{ title: 'Settings' }} />
    </Stack>
  )
}
