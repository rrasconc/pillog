import { View } from 'react-native'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'
import type { GenericEmptyStateProps } from './types'
import { Text } from '../Text'

export default function BaseEmptyState({ message, iconComponent }: GenericEmptyStateProps) {
  const { theme, styles } = useStyles(stylesheet)
  return (
    <View style={styles.container}>
      {iconComponent}
      <Text style={{ color: theme.colors.placeholder }}>{message}</Text>
    </View>
  )
}
