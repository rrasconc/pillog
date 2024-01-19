import Ionicons from '@expo/vector-icons/Ionicons'
import { Stack } from 'expo-router'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { createStyleSheet, useStyles } from 'react-native-unistyles'

import { Button } from '@/components/Button'
import { Text } from '@/components/Text'

export default function Page() {
  const { styles } = useStyles(stylesheet)

  const headerTitle = () => (
    <View style={styles.headerTitleContainer}>
      <Text.H1>Mis recetas</Text.H1>
    </View>
  )
  const headerRight = () => (
    <TouchableOpacity testID="notificationsBtn" style={styles.iconContainer}>
      <Ionicons name="notifications" size={scale(18)} />
    </TouchableOpacity>
  )

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Stack.Screen options={{ headerTitle, headerRight }} />
      <Text>Administra y agrega nuevas recetas médicas</Text>
      <Button.Secondary>
        <Text.Primary>Nueva receta</Text.Primary>
      </Button.Secondary>
    </ScrollView>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
  },
  contentContainer: {
    flexGrow: 1,
    gap: theme.spacing.sm,
  },
  headerTitleContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  iconContainer: {
    height: scale(30),
    width: scale(30),
    borderRadius: scale(15),
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
