import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { RealmProvider } from '@realm/react'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { LogSchema, PillSchema } from '@/utils/models'

export default function RootLayout() {
  return (
    <RealmProvider schema={[PillSchema, LogSchema]}>
      <BottomSheetModalProvider>
        <StatusBar style="auto" />
        <Slot />
      </BottomSheetModalProvider>
    </RealmProvider>
  )
}
