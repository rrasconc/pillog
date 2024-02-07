export type DoseType = 'mg' | 'ml'

export interface Pill {
  name: string
  dose: number
  doseType: DoseType
}

export interface PillFormValues {
  name: string
  dose: string
  doseType: DoseType
}
