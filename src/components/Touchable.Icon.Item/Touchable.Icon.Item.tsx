import { TouchableOpacity } from 'react-native'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'
import type { TouchableIconItemProps } from './types'
import { Icon } from '../Icon'
import { Text } from '../Text'

export default function TouchableIconItem({
  text,
  icon,
  color,
  style,
  ...otherProps
}: TouchableIconItemProps) {
  const { theme, styles } = useStyles(stylesheet)
  const mergedStyles = [style, styles.container]
  return (
    <TouchableOpacity style={mergedStyles} {...otherProps}>
      <Icon style={{ color: color ?? theme.colors.primaryText }} testID="icon" name={icon} />
      <Text style={{ color: color ?? theme.colors.primaryText }}>{text}</Text>
    </TouchableOpacity>
  )
}
