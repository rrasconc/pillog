import { createStyleSheet } from 'react-native-unistyles'

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  titleContainer: {
    padding: theme.spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    padding: theme.spacing.sm,
    gap: theme.spacing.sm,
  },
  handleIndicator: {
    backgroundColor: theme.colors.border,
  },
  handleContainer: {
    backgroundColor: theme.colors.background,
  },
}))
