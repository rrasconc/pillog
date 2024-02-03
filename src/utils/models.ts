import { ObjectSchema, Object, BSON } from 'realm'

import type { DoseType } from '@/constants/types'

export class PillSchema extends Object<PillSchema> {
  _id!: BSON.UUID
  name!: string
  dose!: number
  doseType!: DoseType

  static schema: ObjectSchema = {
    name: 'PillSchema',
    properties: {
      _id: 'uuid',
      name: { type: 'string', indexed: true },
      dose: 'int',
      doseType: 'string',
    },
    primaryKey: '_id',
  }
}
