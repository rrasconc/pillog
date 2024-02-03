import { scale } from 'react-native-size-matters'
import { createStyleSheet } from 'react-native-unistyles'

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.sm,
    paddingBottom: theme.spacing.lg * 3,
    gap: theme.spacing.sm,
    flex: 1,
  },
  headerTitleContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  headerIcon: {
    color: theme.colors.primary,
  },
  list: {
    gap: theme.spacing.sm,
  },
}))
