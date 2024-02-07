import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { Stack, useRouter } from 'expo-router'
import moment from 'moment'
import { useMemo, useRef, useState } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'

import { BottomSheet } from '@/components/Bottom.Sheet'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { PillCard } from '@/components/Pill.Card'
import { PillSwiper } from '@/components/Pill.Swiper'
import { Text } from '@/components/Text'
import { useLogs } from '@/hooks/useLogs'
import { usePills } from '@/hooks/usePills'

export default function HomePage() {
  const { styles } = useStyles(stylesheet)
  const { pills, removePill } = usePills()
  const { addLog } = useLogs()
  const router = useRouter()

  const [selectedPills, setSelectedPills] = useState<string[]>([])
  const [selectedPillId, setSelectedPillId] = useState<string>('')
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const selectedPill = useMemo(
    () => pills.find((item) => item._id.toString() === selectedPillId),
    [pills, selectedPillId],
  )

  const handlePressPill = (pressedPillId: string) => {
    if (selectedPills.includes(pressedPillId)) {
      return setSelectedPills(selectedPills.filter((id) => id !== pressedPillId))
    }
    return setSelectedPills([...selectedPills, pressedPillId])
  }

  const handleLongPressPill = (pillId: string) => {
    setSelectedPillId(pillId)
    bottomSheetModalRef.current?.present()
  }

  const handlePressAdd = () => {
    router.push('home/new_pill')
  }

  const handlePressDelete = () => {
    handleBottomSheetDismiss()
    setSelectedPillId((prev) => {
      removePill(prev)
      return ''
    })
  }

  const handleBottomSheetDismiss = () => bottomSheetModalRef.current?.close()

  const handleSwipe = () => {
    const pillsToLog = pills.filter((pill) => selectedPills.includes(pill._id.toString()))

    const logsToAdd = pillsToLog.map((pill) => ({
      title: `Took ${pill.name} (${pill.dose} ${pill.doseType})`,
      datetime: moment().toDate(),
    }))

    logsToAdd.forEach(addLog)
    setSelectedPills([])
  }

  const headerRight = () => (
    <TouchableOpacity onPress={handlePressAdd} testID="addBtn">
      <Icon name="add-circle-outline" style={styles.headerIcon} />
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerRight,
        }}
      />
      <View>
        <Text>Select the pills you want to log</Text>
      </View>
      <FlatList
        data={pills}
        keyExtractor={(item) => item._id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <PillCard
            onLongPress={() => handleLongPressPill(item._id.toString())}
            onPress={() => handlePressPill(item._id.toString())}
            selected={selectedPills.includes(item._id.toString())}
            name={item.name}
            dose={item.dose}
            doseType={item.doseType}
          />
        )}
      />
      <PillSwiper onSwipe={handleSwipe} />

      <BottomSheet
        ref={bottomSheetModalRef}
        snapPoints={['35']}
        title={
          selectedPill ? `${selectedPill.name} (${selectedPill.dose} ${selectedPill.doseType})` : ''
        }
        onDismiss={handleBottomSheetDismiss}>
        <Button.Secondary onPress={handlePressDelete}>
          <Text style={styles.deleteBtn}>Delete</Text>
        </Button.Secondary>
      </BottomSheet>
    </View>
  )
}
