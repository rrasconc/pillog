import { scale } from 'react-native-size-matters'
import { createStyleSheet } from 'react-native-unistyles'

export const stylesheet = createStyleSheet((theme) => ({
  text: {
    color: theme.colors.secondaryText,
    fontSize: scale(14),
  },
  primary: {
    color: theme.colors.primaryText,
  },
  h1: {
    fontSize: scale(22),
    fontWeight: 'bold',
  },
  input: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.xs,
    borderRadius: theme.spacing.xs,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
}))
