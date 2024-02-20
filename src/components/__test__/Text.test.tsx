import '@testing-library/jest-native'
import { render, screen } from '@testing-library/react-native'

import { Text } from '../Text'

describe('<Text />', () => {
  beforeEach(() => {
    render(<Text>Hello world</Text>)
  })

  it('Should render text', () => {
    expect(screen.getByText('Hello world')).toBeOnTheScreen()
  })
})

describe('<Text.Primary />', () => {
  beforeEach(() => {
    render(<Text.Primary>Hello world</Text.Primary>)
  })

  it('Should render text', () => {
    expect(screen.getByText('Hello world')).toBeOnTheScreen()
  })
})

describe('<Text.H1 />', () => {
  beforeEach(() => {
    render(<Text.H1>Hello world</Text.H1>)
  })

  it('Should render text', () => {
    expect(screen.getByText('Hello world')).toBeOnTheScreen()
  })
})
