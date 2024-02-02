import { scale } from 'react-native-size-matters'

export const lightTheme = {
  colors: {
    primaryText: '#0F0F0F',
    secondaryText: '#9CA2B1',
    background: '#ffffff',
    primary: '#19B7A9',
    secondary: '#F2F4F7',
    border: '#EDEDED',
    success: '#19B7A9',
    transparentSuccess: '#E8F7F6',
  },
  spacing: {
    xs: scale(10),
    sm: scale(14),
    md: 4,
    lg: 8,
    xl: 12,
  },
} as const
