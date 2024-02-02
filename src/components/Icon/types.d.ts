import Ionicons from '@expo/vector-icons/Ionicons'

export interface IconProps {
  name: keyof typeof Ionicons.glyphMap
  size?: number
  style?: StyleProp<TextStyle>
}
