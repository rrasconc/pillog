import type { DoseType } from '@/constants/types'

export interface PillFormProps {
  values: { name: string; dose: string; doseType: string }
  handlers: {
    handleInputChange: (field: 'name' | 'dose', text: string) => void
    handleDoseIncrement: () => void
    handleDoseDecrement: () => void
    handleDoseTypeSelect: (selectedType: DoseType) => void
    handleSubmit: () => void
  }
}
