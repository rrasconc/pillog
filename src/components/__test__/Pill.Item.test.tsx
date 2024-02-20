import { fireEvent, render, screen } from '@testing-library/react-native'

import { PillItem } from '../Pill.Item'

describe('<PillItem/>', () => {
  it('should render title correctly', () => {
    render(<PillItem name="paracetamol" dose={200} doseType="mg" selected />)
    expect(screen.getByText('paracetamol')).toBeOnTheScreen()
  })

  it('should render subtitle correctly', () => {
    render(<PillItem name="paracetamol" dose={200} doseType="mg" selected />)
    expect(screen.getByText('200 mg')).toBeOnTheScreen()
  })

  it('should render checkmark if selected', () => {
    render(<PillItem name="paracetamol" dose={200} doseType="mg" selected />)
    expect(screen.getByTestId('checkmarkIcon')).toBeOnTheScreen()
  })

  it('should not render checkmark if not selected', () => {
    render(<PillItem name="paracetamol" dose={200} doseType="mg" />)
    expect(screen.queryByTestId('checkmarkIcon')).not.toBeOnTheScreen()
  })

  it('should call function on press', () => {
    const mockFn = jest.fn()
    render(<PillItem name="paracetamol" dose={200} doseType="mg" onPress={mockFn} />)

    fireEvent.press(screen.getByText('paracetamol'))
    expect(mockFn).toHaveBeenCalled()
  })

  it('should call function on long press', () => {
    const mockFn = jest.fn()
    render(<PillItem name="paracetamol" dose={200} doseType="mg" onLongPress={mockFn} />)

    fireEvent(screen.getByText('paracetamol'), 'longPress')
    expect(mockFn).toHaveBeenCalled()
  })
})
