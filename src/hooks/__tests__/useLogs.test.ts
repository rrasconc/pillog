import { useRealm } from '@realm/react'
import { act, renderHook } from '@testing-library/react-native'

import { useLogs } from '../useLogs'

jest.mock('@realm/react', () => ({
  useRealm: jest.fn(),
  useQuery: () => [
    { _id: '01c9488b-29ad-4e6b-94cc-a41fbb6d6cac', title: 'mock log', datetime: new Date() },
  ],
}))

jest.useFakeTimers()

describe('useLogs', () => {
  let realmMock: {
    write: jest.Mock<any, any>
    create: jest.Mock<any, any>
    delete: jest.Mock<any, any>
  }

  beforeEach(() => {
    realmMock = {
      write: jest.fn((callback: () => void) => callback()),
      create: jest.fn(),
      delete: jest.fn(),
    }
    ;(useRealm as jest.Mock).mockReturnValue(realmMock)
  })

  it('should return logs', () => {
    const { result } = renderHook(useLogs)
    expect(result.current.logs[0].title).toBe('mock log')
  })

  it('adds a log', () => {
    const { result } = renderHook(useLogs)
    act(() => {
      result.current.addLog({ title: 'new log' })
    })
    expect(realmMock.create).toHaveBeenCalledTimes(1)
  })

  it('removes all logs', () => {
    const { result } = renderHook(useLogs)
    act(() => {
      result.current.removeAllLogs()
    })
    expect(realmMock.delete).toHaveBeenCalledTimes(1)
  })
})
