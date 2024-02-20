import { render, screen } from '@testing-library/react-native'

import { LogItem } from '../Log.Item'

describe('<LogItem/>', () => {
  beforeEach(() => {
    const momentNow = new Date()
    render(<LogItem title="took pill" datetime={momentNow} />)
  })

  it('should render title correctly', () => {
    expect(screen.getByText('took pill')).toBeOnTheScreen()
  })

  it('should render subtitle correctly', () => {
    expect(screen.getByText('a few seconds ago')).toBeOnTheScreen()
  })
})
