import { Stack, useRouter } from 'expo-router'
import { useState } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'

import { Icon } from '@/components/Icon'
import { PillCard } from '@/components/Pill.Card'
import { PillSwiper } from '@/components/Pill.Swiper'
import { Text } from '@/components/Text'
import { usePills } from '@/hooks/usePills'

export default function Page() {
  const { styles } = useStyles(stylesheet)
  const { pills } = usePills()
  const router = useRouter()

  const [selectedPills, setSelectedPills] = useState<string[]>([])

  const handlePressPill = (pressedPillId: string) => {
    if (selectedPills.includes(pressedPillId)) {
      return setSelectedPills(selectedPills.filter((id) => id !== pressedPillId))
    }
    return setSelectedPills([...selectedPills, pressedPillId])
  }

  const handlePressAdd = () => {
    router.push('new_pill')
  }

  const headerRight = () => (
    <TouchableOpacity onPress={handlePressAdd} testID="addBtn">
      <Icon name="add-circle-outline" size={scale(24)} style={styles.headerIcon} />
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'My pills', headerRight }} />
      <View>
        <Text>Select the pills you want to log</Text>
      </View>
      <FlatList
        data={pills}
        keyExtractor={(item) => item._id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <PillCard
            onPress={() => handlePressPill(item._id.toString())}
            selected={selectedPills.includes(item._id.toString())}
            name={item.name}
            dose={item.dose}
            doseType={item.doseType}
          />
        )}
      />
      <PillSwiper />
    </View>
  )
}
