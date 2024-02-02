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
  iconContainer: {
    height: scale(30),
    width: scale(30),
    borderRadius: scale(15),
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    gap: theme.spacing.sm,
  },
}))
