import { Platform } from 'react-native'
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated'
import { FullWindowOverlay } from 'react-native-screens'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'
import { Text } from '../Text'

import { useToast } from '@/hooks/useToast'

export default function Toast() {
  const { isVisible, message } = useToast()

  if (!isVisible) {
    return null
  }

  if (Platform.OS === 'android') {
    return <BaseToast message={message} />
  }

  return (
    <FullWindowOverlay>
      <BaseToast message={message} />
    </FullWindowOverlay>
  )
}

function BaseToast({ message }: { message: string }) {
  const { styles } = useStyles(stylesheet)

  return (
    <Animated.View entering={FadeInUp} exiting={FadeOutUp} style={styles.container}>
      <Text.Primary>{message}</Text.Primary>
    </Animated.View>
  )
}
