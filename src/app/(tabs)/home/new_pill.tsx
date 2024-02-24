import { router } from 'expo-router'
import { View } from 'react-native'
import { createStyleSheet, useStyles } from 'react-native-unistyles'

import { PillForm } from '@/components/Pill.Form'
import { PillFormValues } from '@/constants/types'
import { usePillForm } from '@/hooks/usePillForm'
import { usePills } from '@/hooks/usePills'
import { useToast } from '@/hooks/useToast'
import { HapticFeedbackType, triggerHapticFeedback } from '@/utils/haptics'

const initialValues: PillFormValues = {
  name: '',
  dose: '400',
  doseType: 'mg',
}

export default function NewPillScreen() {
  const { styles } = useStyles(stylesheet)
  const { addPill } = usePills()
  const { showToast } = useToast()

  const { values, handlers } = usePillForm({
    initialValues,
    onSubmit: ({ name, dose, doseType }) => {
      addPill({ name, dose: Number(dose), doseType })

      triggerHapticFeedback(HapticFeedbackType.success)
      showToast(`${name} has been added.`)
      router.back()
    },
  })

  return (
    <View style={styles.container}>
      <PillForm values={values} handlers={handlers} />
    </View>
  )
}

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.sm,
    flex: 1,
  },
}))
