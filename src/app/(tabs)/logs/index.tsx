import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { Stack } from 'expo-router'
import { useRef } from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { scale } from 'react-native-size-matters'
import { useStyles, createStyleSheet } from 'react-native-unistyles'

import { BottomSheet } from '@/components/Bottom.Sheet'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { LogItem } from '@/components/Log.Item'
import { Text } from '@/components/Text'
import { useLogs } from '@/hooks/useLogs'

export default function LogsPage() {
  const { styles } = useStyles(stylesheet)
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)
  const { logs, removeAllLogs } = useLogs()

  const handlePressHeaderRight = () => bottomSheetModalRef.current?.present()
  const handleBottomSheetDismiss = () => bottomSheetModalRef.current?.close()
  const handlePressDelete = () => {
    removeAllLogs()
    handleBottomSheetDismiss()
  }

  const headerRight = () => (
    <TouchableOpacity onPress={handlePressHeaderRight} testID="addBtn">
      <Icon name="trash-bin-outline" style={styles.headerIcon} />
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerRight,
        }}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(item) => item._id.toString()}
        data={logs}
        renderItem={({ item }) => <LogItem title={item.title} datetime={item.datetime} />}
        ListEmptyComponent={<Text>You don't have any logs yet</Text>}
      />

      <BottomSheet
        ref={bottomSheetModalRef}
        snapPoints={['35']}
        title="Clear logs"
        onDismiss={handleBottomSheetDismiss}>
        <Text>
          Are you sure you want to clear your logs? All your current logs will be deleted.
        </Text>
        <View>
          <Button.Secondary onPress={handlePressDelete}>
            <Text style={styles.dangerText}>Yes, clear my logs</Text>
          </Button.Secondary>
          <Button onPress={handleBottomSheetDismiss} style={styles.cancelBtn}>
            <Text.Primary>Cancel</Text.Primary>
          </Button>
        </View>
      </BottomSheet>
    </View>
  )
}

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.sm,
  },
  contentContainer: {
    gap: theme.spacing.sm,
  },
  headerIcon: {
    color: theme.colors.danger,
    fontSize: scale(20),
  },
  dangerText: {
    color: theme.colors.danger,
  },
  cancelBtn: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.xs,
  },
}))
