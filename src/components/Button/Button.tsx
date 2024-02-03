import { TouchableOpacity, type TouchableOpacityProps } from 'react-native'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'

interface ButtonProps extends TouchableOpacityProps {}

function Button({ style: styleProp, disabled, ...otherProps }: ButtonProps) {
  const { styles } = useStyles(stylesheet)
  const mergedStyles = [styles.container, styleProp, disabled && styles.disabled]

  return <TouchableOpacity style={mergedStyles} disabled={disabled} {...otherProps} />
}

function Secondary({ style: styleProp, ...otherProps }: ButtonProps) {
  const { styles } = useStyles(stylesheet)
  const mergedStyles = [styles.secondary, styleProp]

  return <Button style={mergedStyles} {...otherProps} />
}

Button.Secondary = Secondary
export default Button
