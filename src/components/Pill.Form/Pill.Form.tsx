import { useHeaderHeight } from '@react-navigation/elements'
import { KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, View } from 'react-native'
import { useStyles } from 'react-native-unistyles'

import { stylesheet } from './styles'
import type { PillFormProps } from './types'
import { Button } from '../Button'
import { CounterInput } from '../Counter.Input'
import { Text } from '../Text'

import { DoseType } from '@/constants/types'

const DOSE_TYPES: DoseType[] = ['mg', 'ml']

export default function PillForm({
  values: { name, dose, doseType },
  handlers: {
    handleInputChange,
    handleDoseIncrement,
    handleDoseDecrement,
    handleDoseTypeSelect,
    handleSubmit,
  },
}: PillFormProps) {
  const { styles } = useStyles(stylesheet)
  const headerHeight = useHeaderHeight()

  const isInvalid = !name || !dose || !doseType
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
      keyboardVerticalOffset={headerHeight}>
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.container}>
        <Text.Primary>Type the name</Text.Primary>
        <Text.Input
          onChangeText={(text) => handleInputChange('name', text)}
          value={name}
          placeholder="Medicine name"
        />

        <Text.Primary>Type the dose</Text.Primary>
        <CounterInput
          onChangeText={(text) => handleInputChange('dose', text)}
          onIncrement={handleDoseIncrement}
          onDecrement={handleDoseDecrement}
          value={dose}
          placeholder="123"
        />

        <Text.Primary>Select the dose type</Text.Primary>
        <View style={styles.pickerContainer}>
          {DOSE_TYPES.map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => handleDoseTypeSelect(item)}
              style={[styles.pickerItem, item === doseType && styles.selectedPickerItem]}>
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Button.Secondary onPress={handleSubmit} disabled={isInvalid}>
          <Text.Primary style={styles.btnText}>Add {name.toLocaleLowerCase()}</Text.Primary>
        </Button.Secondary>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
