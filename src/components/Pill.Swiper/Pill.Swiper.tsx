import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { LayoutChangeEvent } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  ZoomInEasyDown,
  ZoomOutEasyDown,
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

const DRAG_WIDTH = verticalScale(45)

export default function PillSwiper({ onSwipe }: PillSwiperProps) {
  const { styles, theme } = useStyles(stylesheet)

  const opacity = useSharedValue(0.5)
  const offset = useSharedValue(0)
  const containerWidth = useSharedValue(0)
  const maxReached = useSharedValue(false)

  const pan = Gesture.Pan()
    .onBegin(() => {
      opacity.value = withTiming(0)
    })
    .onChange((event) => {
      if (event.translationX < offset.value) {
        return
      }
      if (event.translationX >= containerWidth.value && !maxReached.value) {
        maxReached.value = true
        if (onSwipe) {
          runOnJS(onSwipe)()
        }
        return
      }

      offset.value = event.translationX
    })
    .onFinalize(() => {
      if (maxReached.value) {
        return
      }
      offset.value = withTiming(0)
      opacity.value = withTiming(0.5)
    })

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: clamp(offset.value, 0, containerWidth.value) }],
  }))

  const animatedTextStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }))

  const onContainerLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout
    //container width - drag width - padding
    containerWidth.value = width - (DRAG_WIDTH + theme.spacing.sm * 2)
  }

  return (
    <Animated.View
      entering={ZoomInEasyDown.delay(300)}
      exiting={ZoomOutEasyDown.delay(300)}
      onLayout={onContainerLayout}
      style={styles.container}>
      <Animated.View style={[styles.text, animatedTextStyles]}>
        <Text>Slide to log</Text>
      </Animated.View>
      <GestureDetector gesture={pan}>
        <Animated.View style={[styles.drag, animatedStyles]}>
          <FontAwesome5 name="pills" size={scale(24)} style={styles.icon} />
        </Animated.View>
      </GestureDetector>
    </Animated.View>
  )
}
