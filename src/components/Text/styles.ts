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
}))
