import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { RealmProvider } from '@realm/react'
import { Slot } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { ReactNode, useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { UnistylesRuntime } from 'react-native-unistyles'

import { Toast } from '@/components/Toast'
import { useStoredAppTheme } from '@/hooks/useAppTheme'
import { LogSchema, PillSchema } from '@/utils/models'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Poppins_500Medium,
    ...FontAwesome.font,
  })

  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }
  return <RootLayoutNav />
}

function AppProviders({ children }: { children: ReactNode }) {
  return (
    <RealmProvider schema={[PillSchema, LogSchema]}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
      </GestureHandlerRootView>
    </RealmProvider>
  )
}

function RootLayoutNav() {
  const { getStoredAppTheme } = useStoredAppTheme()
  const storedTheme = getStoredAppTheme()

  UnistylesRuntime.setTheme(storedTheme)

  return (
    <AppProviders>
      <StatusBar style="auto" />
      <Toast />
      <Slot />
    </AppProviders>
  )
}
