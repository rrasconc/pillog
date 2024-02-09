import { verticalScale } from 'react-native-size-matters'
import { createStyleSheet } from 'react-native-unistyles'

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    paddingHorizontal: theme.spacing.sm,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.spacing.xs,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: verticalScale(41),
  },
  checkmark: {
    color: theme.colors.primary,
  },
}))
