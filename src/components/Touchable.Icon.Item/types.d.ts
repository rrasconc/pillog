import { IconName } from '@/constants/types'
import { ColorValue, TouchableOpacityProps } from 'react-native'

export interface TouchableIconItemProps extends TouchableOpacityProps {
  text?: string
  icon: IconName
  color?: ColorValue
}
