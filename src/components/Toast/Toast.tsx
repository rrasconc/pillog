import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'
import { Text } from '../Text'

import { useToast } from '@/hooks/useToast'

export default function Toast() {
  const { isVisible, message } = useToast()
  const { styles } = useStyles(stylesheet)

  return (
    isVisible && (
      <Animated.View style={styles.container} entering={FadeInUp} exiting={FadeOutUp}>
        <Text.Primary>{message}</Text.Primary>
      </Animated.View>
    )
  )
}
