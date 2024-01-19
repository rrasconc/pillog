import { scale } from 'react-native-size-matters'

export const lightTheme = {
  colors: {
    primaryText: '#0F0F0F',
    secondaryText: '#9CA2B1',
    background: '#ffffff',
    primary: '#19B7A9',
    secondary: '#F2F4F7',
  },
  spacing: {
    xs: scale(10),
    sm: scale(14),
    md: 4,
    lg: 8,
    xl: 12,
  },
} as const
