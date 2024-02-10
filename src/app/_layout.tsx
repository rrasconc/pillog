import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { RealmProvider } from '@realm/react'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { ReactNode } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { UnistylesRuntime } from 'react-native-unistyles'

import { Toast } from '@/components/Toast'
import { useStoredAppTheme } from '@/hooks/useAppTheme'
import { LogSchema, PillSchema } from '@/utils/models'

function AppProviders({ children }: { children: ReactNode }) {
  return (
    <RealmProvider schema={[PillSchema, LogSchema]}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
      </GestureHandlerRootView>
    </RealmProvider>
  )
}

export default function RootLayout() {
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
