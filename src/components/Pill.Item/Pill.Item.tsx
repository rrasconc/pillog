import { TouchableOpacity, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'
import { PillItemProps } from './types'
import { Icon } from '../Icon'
import { Text } from '../Text'

export default function PillItem({
  name,
  dose,
  doseType,
  selected,
  onPress,
  onLongPress,
}: PillItemProps) {
  const { styles } = useStyles(stylesheet)

  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={styles.container}>
      <View>
        <Text.Primary>{name}</Text.Primary>
        <Text>
          {dose} {doseType}
        </Text>
      </View>
      {selected && (
        <Icon testID="checkmarkIcon" size={scale(18)} style={styles.check} name="checkmark" />
      )}
    </TouchableOpacity>
  )
}
