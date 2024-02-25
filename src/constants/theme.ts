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
    primary: '#2A50D9',
    transparentPrimary: 'rgba(42,80,217,0.2)',
    secondary: '#F2F4F7',
    border: '#EDEDED',
    success: '#19B7A9',
    danger: '#F90707',
    lightPrimary: '#C8D0ED',
    backdrop: '#000000',
    placeholder: '#CBD1E0',
  },
  spacing,
} as const

export const darkTheme = {
  colors: {
    primaryText: '#ffffff',
    secondaryText: '#9CA2B1',
    background: '#000000',
    primary: '#2A50D9',
    transparentPrimary: 'rgba(42,80,217,0.2)',
    secondary: '#151516',
    border: '#333333',
    success: '#19B7A9',
    danger: '#F90707',
    lightPrimary: '#0D173D',
    backdrop: '#303030',
    placeholder: '#4B4E56',
  },
  spacing,
} as const

export const DISABLED_COMPONENT_OPACITY = 0.3
