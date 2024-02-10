import { useQuery, useRealm } from '@realm/react'
import * as Haptics from 'expo-haptics'
import { BSON } from 'realm'

import { useToast } from './useToast'

import { Pill } from '@/constants/types'
import { PillSchema } from '@/utils/models'

export const usePills = () => {
  const { showToast } = useToast()
  const pills = useQuery(PillSchema)
  const realm = useRealm()

  const addPill = ({ name, dose, doseType }: Pill) => {
    realm.write(() => {
      realm.create(PillSchema, {
        _id: new BSON.UUID(),
        name,
        dose,
        doseType,
      })
    })

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    showToast(`${name} has been added.`)
  }

  const removePill = (pillIdToDelete: string) => {
    realm.write(() => {
      const pillToDelete = pills.find((pill) => pill._id.toString() === pillIdToDelete)
      if (pillToDelete) {
        const name = pillToDelete.name
        realm.delete(pillToDelete)
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
        showToast(`${name} has been deleted.`)
      }
    })
  }

  const updatePill = ({
    pillIdToUpdate,
    updatedPill,
  }: {
    pillIdToUpdate: string
    updatedPill: Pill
  }) => {
    const pillToUpdate = pills.find((pill) => pill._id.toString() === pillIdToUpdate)

    if (pillToUpdate) {
      realm.write(() => {
        pillToUpdate.name = updatedPill.name
        pillToUpdate.dose = updatedPill.dose
        pillToUpdate.doseType = updatedPill.doseType
      })
    }
  }
  return { pills, addPill, removePill, updatePill }
}
