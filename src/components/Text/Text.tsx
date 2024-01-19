import { Text as DefaultText, type TextProps as DefaultTextProps } from 'react-native'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'

interface TextProps extends DefaultTextProps {}

function Text({ style: styleProp, ...otherProps }: TextProps) {
  const { styles } = useStyles(stylesheet)
  const mergedStyles = [styles.text, styleProp]

  return <DefaultText style={mergedStyles} {...otherProps} />
}

function Primary({ style: styleProp, ...otherProps }: TextProps) {
  const { styles } = useStyles(stylesheet)
  const mergedStyles = [styles.primary, styleProp]

  return <Text style={mergedStyles} {...otherProps} />
}

function H1({ style: styleProp, ...otherProps }: TextProps) {
  const { styles } = useStyles(stylesheet)
  const mergedStyles = [styles.h1, styleProp]

  return <Primary style={mergedStyles} {...otherProps} />
}

Text.H1 = H1
Text.Primary = Primary
export default Text
