import { TouchableOpacity } from 'react-native'
import { scale } from 'react-native-size-matters'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'
import { Icon } from '../Icon'
import { Text } from '../Text'

export default function SettingItem({ title, onPress, selected, disabled }: SettingItemProps) {
  const { styles } = useStyles(stylesheet)

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.container}>
      <Text.Primary style={disabled && { opacity: 0.3 }}>{title}</Text.Primary>
      {selected && <Icon size={scale(18)} style={styles.checkmark} name="checkmark" />}
    </TouchableOpacity>
  )
}
