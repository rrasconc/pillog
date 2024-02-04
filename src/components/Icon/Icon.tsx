import Ionicons from '@expo/vector-icons/Ionicons'
import { scale } from 'react-native-size-matters'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'
import { IconProps } from './types'

export default function Icon({ size, name, style, color }: IconProps) {
  const { styles } = useStyles(stylesheet)

  return (
    <Ionicons name={name} size={size ?? scale(24)} style={[styles.icon, style]} color={color} />
  )
}
