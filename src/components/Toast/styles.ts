import { verticalScale } from 'react-native-size-matters'
import { createStyleSheet } from 'react-native-unistyles'

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.lightPrimary,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: theme.spacing.xs,
    position: 'absolute',
    top: verticalScale(80),
    left: 0,
    right: 0,
    marginHorizontal: theme.spacing.sm,
    zIndex: 10,
  },
}))
