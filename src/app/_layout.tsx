import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { RealmProvider } from '@realm/react'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { UnistylesRuntime } from 'react-native-unistyles'

import { useStoredAppTheme } from '@/hooks/useAppTheme'
import { LogSchema, PillSchema } from '@/utils/models'

export default function RootLayout() {
  const { getStoredAppTheme } = useStoredAppTheme()
  const storedTheme = getStoredAppTheme()

  UnistylesRuntime.setTheme(storedTheme)

  return (
    <RealmProvider schema={[PillSchema, LogSchema]}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <StatusBar style="auto" />
          <Slot />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </RealmProvider>
  )
}
