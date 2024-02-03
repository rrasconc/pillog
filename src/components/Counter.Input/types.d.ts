import type { TextInputProps } from 'react-native'

export interface CounterInputProps extends TextInputProps {
  onIncrement?: () => void
  onDecrement?: () => void
}
