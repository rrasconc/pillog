import { useQuery, useRealm } from '@realm/react'
import { BSON } from 'realm'

import { Pill } from '@/constants/types'
import { PillSchema } from '@/utils/models'

export const usePills = () => {
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
  }

  const removePill = (pillIdToDelete: string) => {
    realm.write(() => {
      const pillToDelete = pills.find((pill) => pill._id.toString() === pillIdToDelete)
      if (pillIdToDelete) {
        realm.delete(pillToDelete)
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
