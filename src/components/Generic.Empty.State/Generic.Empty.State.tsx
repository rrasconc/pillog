import { View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'
import type { GenericEmptyStateProps } from './types'
import { Icon } from '../Icon'
import { Text } from '../Text'

export default function GenericEmptyState({ message }: GenericEmptyStateProps) {
  const { theme, styles } = useStyles(stylesheet)
  return (
    <View style={styles.container}>
      <Icon name="file-tray" size={scale(46)} color={theme.colors.placeholder} />
      <Text style={{ color: theme.colors.placeholder }}>{message}</Text>
    </View>
  )
}
