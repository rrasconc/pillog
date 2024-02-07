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

export class LogSchema extends Object<LogSchema> {
  _id!: BSON.UUID
  title!: string
  datetime!: Date

  static schema: ObjectSchema = {
    name: 'LogSchema',
    properties: {
      _id: 'uuid',
      title: { type: 'string', indexed: true },
      datetime: 'date',
    },
    primaryKey: '_id',
  }
}
