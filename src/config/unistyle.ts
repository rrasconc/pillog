import { UnistylesRegistry } from 'react-native-unistyles'

import { lightTheme, darkTheme } from '../constants/theme'

import type { AppThemes } from '@/constants/types'

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  light: lightTheme,
  dark: darkTheme,
}).addConfig({
  adaptiveThemes: true,
})
