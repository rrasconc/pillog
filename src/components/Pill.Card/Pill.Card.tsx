import { TouchableOpacity, View } from 'react-native'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'
import { PillCardProps } from './types'
import { Icon } from '../Icon'
import { Text } from '../Text'

export default function PillCard({
  name,
  dose,
  doseType,
  selected,
  onPress,
  onLongPress,
}: PillCardProps) {
  const { styles } = useStyles(stylesheet)

  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={styles.container}>
      <View>
        <Text.Primary>{name}</Text.Primary>
        <Text>
          {dose} {doseType}
        </Text>
      </View>
      {selected && <Icon style={styles.check} name="checkmark" />}
    </TouchableOpacity>
  )
}
