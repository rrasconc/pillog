import { useState } from 'react'

import type { DoseType, PillFormValues } from '@/constants/types'

interface PillFormParams {
  initialValues: PillFormValues
  onSubmit: (values: PillFormValues) => void
}

export function usePillForm({ initialValues, onSubmit }: PillFormParams) {
  const [formValues, setFormValues] = useState<PillFormValues>(initialValues)
  const { name, dose, doseType } = formValues

  const handleInputChange = (field: 'name' | 'dose', text: string) => {
    setFormValues({ ...formValues, [field]: text })
  }

  const handleDoseIncrement = () => {
    setFormValues((prevForm) => ({
      ...prevForm,
      dose: Number(prevForm.dose) < 1000 ? `${Number(prevForm.dose) + 50}` : prevForm.dose,
    }))
  }

  const handleDoseDecrement = () => {
    setFormValues((prevForm) => ({
      ...prevForm,
      dose: Number(prevForm.dose) > 0 ? `${Number(prevForm.dose) - 50}` : prevForm.dose,
    }))
  }

  const handleDoseTypeSelect = (selectedType: DoseType) => {
    setFormValues({ ...formValues, doseType: selectedType })
  }

  const handleSubmit = () => {
    onSubmit(formValues)
  }

  return {
    values: { name, dose, doseType },
    handlers: {
      handleInputChange,
      handleDoseIncrement,
      handleDoseDecrement,
      handleDoseTypeSelect,
      handleSubmit,
    },
  }
}
