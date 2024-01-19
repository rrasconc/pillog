import { createStyleSheet } from 'react-native-unistyles'

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.spacing.xs,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondary: {
    backgroundColor: theme.colors.secondary,
  },
}))
