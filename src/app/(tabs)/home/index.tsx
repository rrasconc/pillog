import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { Link, Stack } from 'expo-router'
import { useMemo, useRef, useState } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { useStyles, createStyleSheet } from 'react-native-unistyles'

import { BottomSheet } from '@/components/Bottom.Sheet'
import { GenericEmptyState } from '@/components/Generic.Empty.State'
import { Icon } from '@/components/Icon'
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
  const { pills, removePill } = usePills()
  const { addLog } = useLogs()
  const { showToast } = useToast()

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
    triggerHapticFeedback(HapticFeedbackType.light)
    setSelectedPillId(pillId)
    bottomSheetModalRef.current?.present()
  }

  const handlePressDelete = () => {
    const pillName = pills.filter((item) => item._id.toString() === selectedPillId)[0].name
    handleBottomSheetDismiss()
    setSelectedPillId((prev) => {
      removePill(prev)
      triggerHapticFeedback(HapticFeedbackType.success)
      showToast(`${pillName} has been deleted.`)
      return ''
    })
  }

  const handleBottomSheetDismiss = () => bottomSheetModalRef.current?.close()

  const handleSlide = () => {
    const pillsToLog = pills.filter((pill) => selectedPills.includes(pill._id.toString()))
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
        ListEmptyComponent={<GenericEmptyState message="You haven't added any pills yet" />}
        keyExtractor={(item) => item._id.toString()}
        contentContainerStyle={[styles.list, pills.length === 0 && { flexGrow: 1 }]}
        renderItem={({ item }) => (
          <PillItem
            onLongPress={() => handleLongPressPill(item._id.toString())}
            onPress={() => handlePressPill(item._id.toString())}
            selected={selectedPills.includes(item._id.toString())}
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
