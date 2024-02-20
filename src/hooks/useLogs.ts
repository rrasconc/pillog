import { useQuery, useRealm } from '@realm/react'
import * as Haptics from 'expo-haptics'
import moment from 'moment'
import { BSON } from 'realm'

import { useToast } from './useToast'

import { LogSchema } from '@/utils/models'

export const useLogs = () => {
  const { showToast } = useToast()
  const realm = useRealm()
  const logs = useQuery(LogSchema, (logs) => {
    return logs.sorted('datetime', true)
  })

  const addLog = ({ title }: { title: string }) => {
    realm.write(() => {
      realm.create(LogSchema, {
        _id: new BSON.UUID(),
        title,
        datetime: moment().toDate(),
      })
    })
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    showToast(title)
  }

  const removeAllLogs = () => {
    realm.write(() => {
      realm.delete(logs)
    })
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    showToast('All logs have been cleared.')
  }

  return { logs, addLog, removeAllLogs }
}
