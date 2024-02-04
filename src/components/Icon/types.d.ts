import Ionicons from '@expo/vector-icons/Ionicons'
import { ColorValue } from 'react-native'

export interface IconProps {
  name: keyof typeof Ionicons.glyphMap
  size?: number
  style?: StyleProp<TextStyle>
  color?: ColorValue
}
