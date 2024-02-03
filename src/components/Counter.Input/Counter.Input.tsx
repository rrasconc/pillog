import { TouchableOpacity, View } from 'react-native'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'
import type { CounterInputProps } from './types'
import { Icon } from '../Icon'
import { Text } from '../Text'

export default function CounterInput({
  onDecrement,
  onIncrement,
  ...otherProps
}: CounterInputProps) {
  const { styles } = useStyles(stylesheet)
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onDecrement} style={styles.button}>
        <Icon name="remove" style={styles.icon} />
      </TouchableOpacity>
      <Text.Input keyboardType="number-pad" style={styles.input} {...otherProps} />
      <TouchableOpacity onPress={onIncrement} style={styles.button}>
        <Icon name="add" style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}
