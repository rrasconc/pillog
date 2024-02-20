import { fireEvent, render, screen } from '@testing-library/react-native'

import { SettingItem } from '../Setting.Item.tsx'

describe('<SettingItem/>', () => {
  it('should render title', () => {
    render(<SettingItem title="setting" />)
    expect(screen.getByText('setting')).toBeOnTheScreen()
  })

  it('should render checkmark if selected', () => {
    render(<SettingItem selected />)
    expect(screen.getByTestId('checkmarkIcon')).toBeOnTheScreen()
  })

  it('should not render checkmark if not selected', () => {
    render(<SettingItem />)
    expect(screen.queryByTestId('checkmarkIcon')).not.toBeOnTheScreen()
  })

  it('should call function on press', () => {
    const mockFn = jest.fn()
    render(<SettingItem title="setting" onPress={mockFn} />)

    fireEvent.press(screen.getByText('setting'))
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should not call function on press if disabled', () => {
    const mockFn = jest.fn()
    render(<SettingItem disabled title="setting" onPress={mockFn} />)

    fireEvent.press(screen.getByText('setting'))
    expect(mockFn).toHaveBeenCalledTimes(0)
  })
})
