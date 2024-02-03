import '@/config/unistyle'
import { RealmProvider } from '@realm/react'
import { Stack } from 'expo-router'

import { PillSchema } from '@/utils/models'

export default function Layout() {
  return (
    <RealmProvider schema={[PillSchema]}>
      <Stack
        screenOptions={{
          headerShadowVisible: false,
        }}>
        <Stack.Screen
          name="new_pill"
          options={{
            title: 'Add a pill',
            presentation: 'modal',
          }}
        />
      </Stack>
    </RealmProvider>
  )
}
