import Ionicons from '@expo/vector-icons/Ionicons'
import { darkTheme, lightTheme } from './theme'

export type DoseType = 'mg' | 'ml'

export interface Pill {
  name: string
  dose: number
  doseType: DoseType
}

export interface PillFormValues {
  name: string
  dose: string
  doseType: DoseType
}

export type AppThemes = {
  light: typeof lightTheme
  dark: typeof darkTheme
}

type ThemeItem = keyof AppThemes

interface SettingThemeItem {
  label: string
  theme: ThemeItem | 'adaptive'
  disabled?: boolean
}

export type IconName = keyof typeof Ionicons.glyphMap
