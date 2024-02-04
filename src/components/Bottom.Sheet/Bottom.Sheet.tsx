import DefaultBottomSheet from '@gorhom/bottom-sheet'
import { View, Pressable } from 'react-native'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'
import { BottomSheetProps } from './types'
import { Text } from '../Text'

export default function BottomSheet({
  onDismiss,
  title,
  children,
  ...otherProps
}: BottomSheetProps) {
  const { styles } = useStyles(stylesheet)
  return (
    <>
      <Pressable onPress={onDismiss} style={styles.mask} />

      <DefaultBottomSheet handleIndicatorStyle={styles.handleIndicator} {...otherProps}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text.Primary>{title}</Text.Primary>
          </View>
          <View style={styles.contentContainer}>{children}</View>
        </View>
      </DefaultBottomSheet>
    </>
  )
}
