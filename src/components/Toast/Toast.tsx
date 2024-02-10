import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated'
import { FullWindowOverlay } from 'react-native-screens'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'
import { Text } from '../Text'

import { useToast } from '@/hooks/useToast'

export default function Toast() {
  const { isVisible, message } = useToast()
  const { styles } = useStyles(stylesheet)

  if (!isVisible) {
    return null
  }

  return (
    <FullWindowOverlay>
      <Animated.View entering={FadeInUp.delay(300)} exiting={FadeOutUp} style={styles.container}>
        <Text.Primary>{message}</Text.Primary>
      </Animated.View>
    </FullWindowOverlay>
  )
}
