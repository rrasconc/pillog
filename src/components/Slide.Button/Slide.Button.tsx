import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { Dimensions, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  FadeInDown,
  FadeOutDown,
  clamp,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { scale, verticalScale } from 'react-native-size-matters'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'
import { Text } from '../Text'

import { HapticFeedbackType, triggerHapticFeedback } from '@/utils/haptics'

const BUTTON_WIDTH = verticalScale(45)
const WINDOW_WIDTH = Dimensions.get('window').width

export default function SlideButton({ onSlide }: SlideButtonProps) {
  const { styles, theme } = useStyles(stylesheet)

  const textOpacity = useSharedValue(1)
  const offset = useSharedValue(0)
  const buttonScale = useSharedValue(1)
  const containerWidth = useSharedValue(WINDOW_WIDTH - theme.spacing.sm * 2)
  const reachedSlideThreshold = useSharedValue(false)

  const slideTreshold = containerWidth.value - (BUTTON_WIDTH + theme.spacing.sm * 2)
  const triggerLightFeedback = () => {
    triggerHapticFeedback(HapticFeedbackType.light)
  }

  const pan = Gesture.Pan()

    .onChange((event) => {
      if (event.translationX >= slideTreshold) {
        reachedSlideThreshold.value = true
        runOnJS(triggerLightFeedback)()
        return
      }

      if (!reachedSlideThreshold.value) {
        offset.value = event.translationX
        textOpacity.value = 1 - event.translationX / slideTreshold
      }
    })
    .onFinalize(() => {
      offset.value = withTiming(0)
      if (!reachedSlideThreshold.value) {
        textOpacity.value = withTiming(1)
        return
      }
      containerWidth.value = withTiming(BUTTON_WIDTH + theme.spacing.sm * 2, undefined, () => {
        if (onSlide) {
          runOnJS(onSlide)()
        }
      })
    })

  const animatedButtonStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: clamp(offset.value, 0, slideTreshold) },
      { scale: buttonScale.value },
    ],
  }))
  const animatedContainerStyles = useAnimatedStyle(() => ({
    width: containerWidth.value,
  }))

  const animatedTextStyles = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
  }))

  return (
    <View style={styles.wrapper}>
      <Animated.View
        entering={FadeInDown.delay(100)}
        exiting={FadeOutDown.delay(100)}
        style={[styles.container, animatedContainerStyles]}>
        <Animated.View style={[styles.text, animatedTextStyles]}>
          <Text>Slide to log</Text>
        </Animated.View>
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.drag, animatedButtonStyles]}>
            <FontAwesome5 name="pills" size={scale(24)} style={styles.icon} />
          </Animated.View>
        </GestureDetector>
      </Animated.View>
    </View>
  )
}
