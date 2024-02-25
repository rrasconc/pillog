import Ionicons from '@expo/vector-icons/Ionicons'
import { scale } from 'react-native-size-matters'
import { useStyles } from 'react-native-unistyles'

import { IconProps } from './types'
import { Text } from '../Text'

export default function Icon({ size, name, style, color, testID }: IconProps) {
  const { theme } = useStyles()

  return (
    // Icon contained in a Text for test accessibility
    <Text style={style} testID={testID}>
      <Ionicons
        name={name}
        size={size ?? scale(24)}
        style={style}
        color={color ?? theme.colors.primaryText}
      />
    </Text>
  )
}
