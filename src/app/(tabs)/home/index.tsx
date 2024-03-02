import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { Link, Stack } from 'expo-router'
import { useMemo, useRef, useState } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { useStyles, createStyleSheet } from 'react-native-unistyles'
import { BSON } from 'realm'

import { BaseEmptyState } from '@/components/Base.Empty.State'
import { BottomSheet } from '@/components/Bottom.Sheet'
import { Icon } from '@/components/Icon'
import { PillEmptyIcon } from '@/components/Pill.Empty.Icon'
import { PillItem } from '@/components/Pill.Item'
import { SlideButton } from '@/components/Slide.Button'
import { Text } from '@/components/Text'
import { TouchableIconItem } from '@/components/Touchable.Icon.Item'
import { useLogs } from '@/hooks/useLogs'
import { usePills } from '@/hooks/usePills'
import { useToast } from '@/hooks/useToast'
import { HapticFeedbackType, triggerHapticFeedback } from '@/utils/haptics'

export default function HomePage() {
  const { styles, theme } = useStyles(stylesheet)
  const { pills, removePill, getPillById, queryPillsById } = usePills()
  const { addLog } = useLogs()
  const { showToast } = useToast()

  const [selectedPills, setSelectedPills] = useState<BSON.UUID[]>([])
  const [selectedPillId, setSelectedPillId] = useState<BSON.UUID | null>(null)
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const selectedPill = useMemo(() => getPillById(selectedPillId), [selectedPillId])

  const handlePressPill = (pressedPillId: BSON.UUID) => {
    if (selectedPills.some((id) => id.toString() === pressedPillId.toString())) {
      setSelectedPills(selectedPills.filter((id) => id.toString() !== pressedPillId.toString()))
    } else {
      setSelectedPills([...selectedPills, pressedPillId])
    }
  }

  const handleLongPressPill = (pillId: BSON.UUID) => {
    triggerHapticFeedback(HapticFeedbackType.light)
    setSelectedPillId(pillId)
    bottomSheetModalRef.current?.present()
  }

  const handlePressDelete = () => {
    handleBottomSheetDismiss()
    setSelectedPillId((prev) => {
      if (prev) {
        const pillName = getPillById(prev)?.name
        removePill(prev)
        triggerHapticFeedback(HapticFeedbackType.success)
        showToast(`${pillName} has been deleted.`)
      }
      return null
    })
  }

  const handleBottomSheetDismiss = () => bottomSheetModalRef.current?.close()

  const handleSlide = () => {
    const pillsToLog = queryPillsById(selectedPills)
    setSelectedPills([])

    const logsToAdd = pillsToLog.map((pill) => ({
      title: `Took ${pill.name} (${pill.dose} ${pill.doseType})`,
    }))
    logsToAdd.forEach(addLog)

    triggerHapticFeedback(HapticFeedbackType.success)
    showToast(`New ${logsToAdd.length > 1 ? 'logs' : 'log'} added`)
  }

  const headerRight = () => (
    <Link href="home/new_pill" testID="addBtn" asChild>
      <TouchableOpacity testID="addBtn">
        <Icon name="add-circle-outline" style={styles.headerIcon} />
      </TouchableOpacity>
    </Link>
  )

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerRight,
        }}
      />
      {pills.length > 0 && <Text>Select the pills you want to log</Text>}
      <FlatList
        data={pills}
        ListEmptyComponent={
          <BaseEmptyState
            iconComponent={<PillEmptyIcon />}
            message="You don't have any pills yet"
          />
        }
        keyExtractor={(item) => item._id.toString()}
        contentContainerStyle={[styles.list, pills.length === 0 && { flexGrow: 1 }]}
        renderItem={({ item }) => (
          <PillItem
            onLongPress={() => handleLongPressPill(item._id)}
            onPress={() => handlePressPill(item._id)}
            selected={selectedPills.some((id) => id.toString() === item._id.toString())}
            name={item.name}
            dose={item.dose}
            doseType={item.doseType}
          />
        )}
      />
      {selectedPills.length > 0 && pills.length > 0 && <SlideButton onSlide={handleSlide} />}
      <BottomSheet
        ref={bottomSheetModalRef}
        snapPoints={['35']}
        title={
          selectedPill ? `${selectedPill.name} (${selectedPill.dose} ${selectedPill.doseType})` : ''
        }
        onDismiss={handleBottomSheetDismiss}>
        <TouchableIconItem
          onPress={handlePressDelete}
          color={theme.colors.danger}
          text="Delete pill"
          icon="trash-outline"
        />
      </BottomSheet>
    </View>
  )
}

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.sm,
    gap: theme.spacing.sm,
    flex: 1,
  },
  headerTitleContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  headerIcon: {
    color: theme.colors.primary,
  },
  list: {
    gap: theme.spacing.sm,
  },
  deleteBtn: { color: theme.colors.danger },
}))
