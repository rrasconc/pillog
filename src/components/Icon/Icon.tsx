import Ionicons from '@expo/vector-icons/Ionicons'
import { scale } from 'react-native-size-matters'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'
import { IconProps } from './types'

export default function Icon({ size, name, style }: IconProps) {
  const { styles } = useStyles(stylesheet)

  return <Ionicons name={name} size={size ?? scale(18)} style={[styles.icon, style]} />
}
