import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { Pressable, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'

export default function PillSwiper({ onSwipe }: PillSwiperProps) {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Pressable onPress={onSwipe} style={styles.drag}>
        <FontAwesome5 name="pills" size={scale(24)} style={styles.icon} />
      </Pressable>
    </View>
  )
}
