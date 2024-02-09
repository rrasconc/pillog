import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from '@gorhom/bottom-sheet'
import { forwardRef, useCallback } from 'react'
import { View } from 'react-native'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'
import { BottomSheetProps } from './types'
import { Text } from '../Text'

const BottomSheet = forwardRef(function BottomSheet(props: BottomSheetProps, ref: any) {
  const { onDismiss, title, children, ...otherProps } = props
  const { styles } = useStyles(stylesheet)
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
    ),
    [],
  )

  return (
    <BottomSheetModal
      ref={ref}
      enablePanDownToClose
      onClose={onDismiss}
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={styles.handleIndicator}
      backgroundStyle={styles.handleContainer}
      {...otherProps}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text.Primary>{title}</Text.Primary>
        </View>
        <View style={styles.contentContainer}>{children}</View>
      </View>
    </BottomSheetModal>
  )
})

export default BottomSheet
