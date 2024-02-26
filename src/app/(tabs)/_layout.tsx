import { Tabs } from 'expo-router/tabs'
import { scale, verticalScale } from 'react-native-size-matters'
import { useStyles } from 'react-native-unistyles'

import { Icon } from '@/components/Icon'

export default function TabsLayout() {
  const { theme } = useStyles()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.border,
        },
        tabBarItemStyle: {
          height: verticalScale(50),
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={scale(22)}
              style={{
                color: focused ? theme.colors.primary : theme.colors.secondaryText,
              }}
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
              name={focused ? 'time' : 'time-outline'}
              style={{ color: focused ? theme.colors.primary : theme.colors.secondaryText }}
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
              name={focused ? 'settings' : 'settings-outline'}
              size={scale(22)}
              style={{ color: focused ? theme.colors.primary : theme.colors.secondaryText }}
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
  )
}
