import { verticalScale } from 'react-native-size-matters'
import { createStyleSheet } from 'react-native-unistyles'

export const stylesheet = createStyleSheet((theme) => ({
  wrapper: { width: '100%', alignItems: 'center' },
  container: {
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.sm,
    height: verticalScale(65),
    borderRadius: verticalScale(40),
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: theme.spacing.sm,
  },
  drag: {
    height: verticalScale(45),
    width: verticalScale(45),
    borderRadius: verticalScale(23),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
  },
  icon: {
    color: '#ffff',
  },
  text: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
}))
