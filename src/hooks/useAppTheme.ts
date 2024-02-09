import { ThemeItem } from '@/constants/types'
import { storage } from '@/utils/storage'

export function useStoredAppTheme() {
  const storeAppTheme = (appTheme: ThemeItem) => {
    storage.set('selectedAppTheme', appTheme)
  }
  const getStoredAppTheme = (): ThemeItem => {
    return (storage.getString('selectedAppTheme') as ThemeItem) ?? 'light'
  }

  return { storeAppTheme, getStoredAppTheme }
}
