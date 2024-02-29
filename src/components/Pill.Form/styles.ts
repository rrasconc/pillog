import { scale } from 'react-native-size-matters'
import { createStyleSheet } from 'react-native-unistyles'

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: theme.spacing.sm,
    flexGrow: 1,
  },
  btnText: {
    color: theme.colors.primary,
  },
  pickerItem: {
    padding: theme.spacing.sm,
    borderRadius: theme.spacing.xs,
    borderWidth: 1,
    borderColor: theme.colors.border,
    width: scale(60),
    alignItems: 'center',
  },
  pickerContainer: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  selectedPickerItem: {
    borderColor: theme.colors.primary,
  },
}))
