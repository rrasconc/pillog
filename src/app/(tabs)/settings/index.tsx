import { setStatusBarStyle } from 'expo-status-bar'
import { FlatList, View } from 'react-native'
import { UnistylesRuntime, useStyles, createStyleSheet } from 'react-native-unistyles'

import { SettingItem } from '@/components/Setting.Item.tsx'
import { Text } from '@/components/Text'
import { appInfo } from '@/constants/app.info'
import type { SettingThemeItem, ThemeItem } from '@/constants/types'

const THEMES: SettingThemeItem[] = [
  {
    label: 'Dark',
    theme: 'dark',
  },
  {
    label: 'Light',
    theme: 'light',
  },
  {
    label: 'Adaptive',
    theme: 'adaptive',
    disabled: true,
  },
]

export default function SettingsPage() {
  const { styles } = useStyles(stylesheet)

  const handlePressTheme = (theme: ThemeItem) => {
    if (theme === 'adaptive') {
      return
    }
    UnistylesRuntime.setTheme(theme)
    setStatusBarStyle(theme === 'dark' ? 'light' : 'dark')
  }

  const renderThemeItem = ({ item }: { item: SettingThemeItem }) => (
    <SettingItem
      disabled={item.disabled}
      selected={UnistylesRuntime.themeName === item.theme}
      title={item.label}
      onPress={() => handlePressTheme(item.theme)}
    />
  )

  const renderSeparatorComponent = () => (
    <View style={styles.separatorContainer}>
      <View style={styles.separator} />
    </View>
  )

  return (
    <View style={styles.container}>
      <Text>App theme</Text>
      <View>
        <FlatList
          data={THEMES}
          scrollEnabled={false}
          keyExtractor={(item) => item.theme}
          contentContainerStyle={styles.sectionContainer}
          ItemSeparatorComponent={renderSeparatorComponent}
          renderItem={renderThemeItem}
        />
      </View>
      <Text>
        Select the theme for the app. {THEMES[2].label} will use your current device's theme.
      </Text>

      <Text style={styles.footer}>
        {appInfo.name} v{appInfo.version}
      </Text>
    </View>
  )
}

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.sm,
    gap: theme.spacing.sm,
  },
  sectionContainer: {
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.spacing.xs,
  },
  separator: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: theme.colors.secondaryText,
    opacity: 0.3,
  },
  separatorContainer: {
    alignItems: 'center',
    paddingHorizontal: theme.spacing.sm,
  },
  footer: {
    marginTop: 'auto',
    textAlign: 'center',
  },
}))
