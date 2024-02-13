import { scale } from 'react-native-size-matters'

const spacing = {
  xs: scale(10),
  sm: scale(14),
  md: scale(18),
  lg: scale(22),
  xl: scale(26),
}

export const lightTheme = {
  colors: {
    primaryText: '#0F0F0F',
    secondaryText: '#9CA2B1',
    background: '#ffffff',
    primary: '#00AFFA',
    transparentPrimary: 'rgba(0,175,250,0.2)',
    secondary: '#F2F4F7',
    border: '#EDEDED',
    success: '#19B7A9',
    danger: '#F90707',
    lightPrimary: '#D1EEFB',
    backdrop: '#000000',
  },
  spacing,
} as const

export const darkTheme = {
  colors: {
    primaryText: '#ffffff',
    secondaryText: '#9CA2B1',
    background: '#000000',
    primary: '#00AFFA',
    transparentPrimary: 'rgba(0,175,250,0.3)',
    secondary: '#151516',
    border: '#333333',
    success: '#19B7A9',
    danger: '#F90707',
    lightPrimary: '#0C465F',
    backdrop: '#303030',
  },
  spacing,
} as const

export const DISABLED_COMPONENT_OPACITY = 0.3
