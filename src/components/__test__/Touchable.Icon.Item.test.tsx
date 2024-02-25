import { fireEvent, render, screen } from '@testing-library/react-native'

import { TouchableIconItem } from '../Touchable.Icon.Item'

describe('<TouchableIconItem/>', () => {
  const mockFn = jest.fn()

  beforeEach(() => {
    render(<TouchableIconItem text="Delete" icon="trash" onPress={mockFn} />)
  })
  it('should render text', () => {
    expect(screen.getByText('Delete')).toBeOnTheScreen()
  })

  it('should display icon', () => {
    expect(screen.getByTestId('icon')).toBeOnTheScreen()
  })

  it('should call function on press', () => {
    const component = screen.getByText('Delete')
    fireEvent.press(component)
    expect(mockFn).toHaveBeenCalled()
  })
})
