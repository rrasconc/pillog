import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { Tabs } from 'expo-router/tabs'
import { scale, verticalScale } from 'react-native-size-matters'
import { createStyleSheet, useStyles } from 'react-native-unistyles'

import { Icon } from '@/components/Icon'
export default function TabsLayout() {
  const { styles } = useStyles(stylesheet)
  const height = verticalScale(40)

  return (
    <BottomSheetModalProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height,
          },
          tabBarItemStyle: {
            height,
          },
        }}>
        <Tabs.Screen
          name="home"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Icon
                name="home-outline"
                size={scale(22)}
                style={focused ? styles.focusedIcon : styles.unfocusedIcon}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="logs"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Icon
                name="time-outline"
                style={focused ? styles.focusedIcon : styles.unfocusedIcon}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Icon
                name="settings-outline"
                size={scale(22)}
                style={focused ? styles.focusedIcon : styles.unfocusedIcon}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </BottomSheetModalProvider>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  focusedIcon: {
    color: theme.colors.primary,
  },
  unfocusedIcon: {
    color: theme.colors.secondaryText,
  },
}))
