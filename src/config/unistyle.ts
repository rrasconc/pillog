import { UnistylesRegistry } from 'react-native-unistyles'

import { lightTheme } from '../constants/theme'

type AppThemes = {
  light: typeof lightTheme
}

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  light: lightTheme,
}).addConfig({
  initialTheme: 'light',
})
