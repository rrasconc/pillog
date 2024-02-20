import { Pill } from '@/constants/types'

export interface PillItemProps extends Pill {
  selected?: boolean
  onPress?: () => void
  onLongPress?: () => void
}
