import { Pill } from '@/constants/types'

export interface PillCardProps extends Pill {
  selected?: boolean
  onPress?: () => void
}
