import { Stack } from 'expo-router'
import { useState } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'

import { Icon } from '@/components/Icon'
import { PillCard } from '@/components/Pill.Card'
import { PillSwiper } from '@/components/PillSwiper'
import { Text } from '@/components/Text'
import { PILLS } from '@/constants/dummy'

export default function Page() {
  const { styles } = useStyles(stylesheet)
  const [selectedPills, setSelectedPills] = useState<string[]>([])

  const handlePressPill = (pressedPillId: string) => {
    if (selectedPills.includes(pressedPillId)) {
      return setSelectedPills(selectedPills.filter((id) => id !== pressedPillId))
    }
    return setSelectedPills([...selectedPills, pressedPillId])
  }

  const headerRight = () => (
    <TouchableOpacity testID="addBtn" style={styles.iconContainer}>
      <Icon name="add" />
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'My pills', headerRight }} />
      <View>
        <Text>Select the pills you want to log</Text>
      </View>
      <FlatList
        data={PILLS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <PillCard
            onPress={() => handlePressPill(item.id)}
            selected={selectedPills.includes(item.id)}
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
