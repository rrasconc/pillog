import * as Haptics from 'expo-haptics'

export enum HapticFeedbackType {
  error = 'error',
  success = 'success',
  light = 'light',
}

export const triggerHapticFeedback = (type: HapticFeedbackType) => {
  if (type === HapticFeedbackType.success) {
    return Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  } else if (type === HapticFeedbackType.error) {
    return Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
  } else if (type === HapticFeedbackType.light) {
    return Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  }
}
