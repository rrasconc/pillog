import { createStyleSheet } from 'react-native-unistyles'

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    alignItems: 'center',
  },
}))
