import { useQuery, useRealm } from '@realm/react'
import { BSON } from 'realm'

import { Log } from '@/constants/types'
import { LogSchema } from '@/utils/models'

export const useLogs = () => {
  const realm = useRealm()
  const logs = useQuery(LogSchema)

  const addLog = ({ title, datetime }: Log) => {
    realm.write(() => {
      realm.create(LogSchema, {
        _id: new BSON.UUID(),
        title,
        datetime,
      })
    })
  }

  const removeAllLogs = () => {
    realm.write(() => {
      realm.delete(logs)
    })
  }

  return { logs, addLog, removeAllLogs }
}
