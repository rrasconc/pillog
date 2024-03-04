import { createStyleSheet } from 'react-native-unistyles'

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.spacing.xs,
    padding: theme.spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
  check: {
    marginLeft: 'auto',
    color: theme.colors.primary,
  },
}))
