export interface PillCardProps extends Omit<Pill, 'id'> {
  selected?: boolean
  onPress?: () => void
}
