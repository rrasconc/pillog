import { StyleSheet } from 'react-native'
import { createStyleSheet } from 'react-native-unistyles'

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
  },
  mask: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    ...StyleSheet.absoluteFillObject,
  },
  titleContainer: {
    padding: theme.spacing.xs,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    padding: theme.spacing.sm,
  },
  handleIndicator: {
    backgroundColor: theme.colors.border,
  },
}))
