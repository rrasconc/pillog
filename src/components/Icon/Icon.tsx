import Ionicons from '@expo/vector-icons/Ionicons'
import { scale } from 'react-native-size-matters'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'
import { IconProps } from './types'
import { Text } from '../Text'

export default function Icon({ size, name, style, color, testID }: IconProps) {
  const { styles } = useStyles(stylesheet)

  return (
    // Icon contained in a Text for test accessibility
    <Text style={style} testID={testID}>
      <Ionicons name={name} size={size ?? scale(24)} style={[styles.icon, style]} color={color} />
    </Text>
  )
}
