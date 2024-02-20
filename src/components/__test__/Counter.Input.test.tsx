import { fireEvent, render, screen } from '@testing-library/react-native'
import { useState } from 'react'

import { CounterInput } from '../Counter.Input'

describe('<CounterInput/>', () => {
  const mockDecrement = jest.fn()
  const mockIncrement = jest.fn()

  beforeEach(() => {
    const Example = () => {
      const [value, setValue] = useState('')
      return (
        <CounterInput
          value={value}
          onChangeText={setValue}
          placeholder="input"
          onDecrement={mockDecrement}
          onIncrement={mockIncrement}
        />
      )
    }
    render(<Example />)
  })

  it('calls onDecrement correctly', () => {
    const decrementBtn = screen.getByTestId('decrementBtn')
    fireEvent.press(decrementBtn)
    expect(mockDecrement).toHaveBeenCalledTimes(1)
  })

  it('calls onIncrement correctly', () => {
    const incrementBtn = screen.getByTestId('incrementBtn')
    fireEvent.press(incrementBtn)
    expect(mockIncrement).toHaveBeenCalledTimes(1)
  })

  it('renders text correctly', () => {
    const input = screen.getByPlaceholderText('input')
    fireEvent.changeText(input, '123')
    expect(screen.getByDisplayValue('123')).toBeOnTheScreen()
  })
})
