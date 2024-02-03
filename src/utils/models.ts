import { ObjectSchema, Object, BSON } from 'realm'

export class PillSchema extends Object<PillSchema> {
  _id!: BSON.UUID
  name!: string
  dose!: number
  doseType!: 'mg' | 'ml'

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
