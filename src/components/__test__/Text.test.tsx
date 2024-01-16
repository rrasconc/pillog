import '@testing-library/jest-native'
import { render, screen } from '@testing-library/react-native'

import { Text } from '../Text'

describe('<Text />', () => {
  beforeEach(() => {
    render(<Text>Hello world</Text>)
  })

  it('Should render', () => {
    expect(screen.getByText('Hello world')).toBeOnTheScreen()
  })
})
