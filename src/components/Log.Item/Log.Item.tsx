import moment from 'moment'
import { View } from 'react-native'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'
import { Text } from '../Text'

export default function LogItem({ title, datetime }: LogItemProps) {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Text.Primary numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text.Primary>
      <Text>{moment(datetime).fromNow()}</Text>
    </View>
  )
}
