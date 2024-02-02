import { verticalScale } from 'react-native-size-matters'
import { createStyleSheet } from 'react-native-unistyles'

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.sm,
    height: verticalScale(75),
    borderRadius: verticalScale(40),
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  drag: {
    height: verticalScale(55),
    width: verticalScale(55),
    borderRadius: verticalScale(33),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
  },
  icon: {
    color: theme.colors.success,
  },
}))
