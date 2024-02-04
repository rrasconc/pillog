import { BottomSheetProps as DefaultBottomSheetProps } from '@gorhom/bottom-sheet'
import { ReactNode } from 'react'

export interface BottomSheetProps extends DefaultBottomSheetProps {
  onDismiss?: () => void
  title?: string
  children: ReactNode
}
