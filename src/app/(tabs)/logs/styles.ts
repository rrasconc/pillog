import { scale } from 'react-native-size-matters'
import { createStyleSheet } from 'react-native-unistyles'

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.sm,
  },
  contentContainer: {
    gap: theme.spacing.sm,
  },
  headerIcon: {
    color: theme.colors.danger,
    fontSize: scale(20),
  },
  dangerText: {
    color: theme.colors.danger,
  },
  cancelBtn: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.xs,
  },
}))
