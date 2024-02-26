import { useQuery, useRealm } from '@realm/react'
import { BSON } from 'realm'

import { Pill } from '@/constants/types'
import { PillSchema } from '@/utils/models'

export const usePills = () => {
  const pills = useQuery(PillSchema)
  const realm = useRealm()

  const getPillById = (id: BSON.UUID | null) => {
    if (!id) {
      return null
    }
    const pill = realm.objectForPrimaryKey(PillSchema, id)
    return pill
  }

  const queryPillsById = (ids: BSON.UUID[]) => {
    const pills = realm.objects(PillSchema).filtered(`_id IN $0`, ids)
    return pills
  }

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

  const removePill = (pillIdToDelete: BSON.UUID) => {
    const pill = realm.objectForPrimaryKey(PillSchema, pillIdToDelete)
    realm.write(() => {
      if (pill) {
        realm.delete(pill)
      }
    })
  }

  const updatePill = ({
    pillIdToUpdate,
    updatedPill,
  }: {
    pillIdToUpdate: BSON.UUID
    updatedPill: Pill
  }) => {
    const pillToUpdate = getPillById(pillIdToUpdate)

    if (pillToUpdate) {
      realm.write(() => {
        pillToUpdate.name = updatedPill.name
        pillToUpdate.dose = updatedPill.dose
        pillToUpdate.doseType = updatedPill.doseType
      })
    }
  }
  return { pills, getPillById, queryPillsById, addPill, removePill, updatePill }
}
