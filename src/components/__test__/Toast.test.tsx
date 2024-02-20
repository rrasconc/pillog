import { render, screen } from '@testing-library/react-native'

import { Toast } from '../Toast'

import { useToast } from '@/hooks/useToast'

jest.mock('@/hooks/useToast', () => ({
  useToast: jest.fn(),
}))

describe('<Toast />', () => {
  it('should render message', () => {
    ;(useToast as jest.Mock).mockReturnValue({
      isVisible: true,
      message: 'hello world',
      hideToast: jest.fn(),
      showToast: jest.fn(),
    })
    render(<Toast />)
    expect(screen.getByText('hello world')).toBeOnTheScreen()
  })

  it('should hide correctly', () => {
    ;(useToast as jest.Mock).mockReturnValue({
      isVisible: false,
      message: 'hello world',
      hideToast: jest.fn(),
      showToast: jest.fn(),
    })
    render(<Toast />)
    expect(screen.queryByText('hello world')).not.toBeOnTheScreen()
  })
})
