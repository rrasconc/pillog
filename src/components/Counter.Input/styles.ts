import { scale } from 'react-native-size-matters'
import { createStyleSheet } from 'react-native-unistyles'

export const stylesheet = createStyleSheet((theme) => ({
  button: {
    backgroundColor: theme.colors.background,
    height: scale(40),
    width: scale(40),
    borderRadius: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  container: {
    flexDirection: 'row',
    gap: theme.spacing.xs,
  },
  input: {
    width: scale(100),
  },
  icon: {
    color: theme.colors.primary,
  },
}))
