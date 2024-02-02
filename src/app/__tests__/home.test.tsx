import '@testing-library/jest-native'
import { renderRouter, screen } from 'expo-router/testing-library'

describe('Home screen', () => {
  beforeEach(() => {
    renderRouter('src/app/')
  })

  it('should display description', () => {
    expect(screen.getByText('Select the pills you want to log')).toBeOnTheScreen()
  })

  it('should display add button', () => {
    expect(screen.getByTestId('addBtn')).toBeOnTheScreen()
  })
})
