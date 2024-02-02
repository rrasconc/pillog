import '@testing-library/jest-native'
import { renderRouter, screen } from 'expo-router/testing-library'

describe('Home screen', () => {
  beforeEach(() => {
    renderRouter('src/app/')
  })

  it('should display header title correctly', () => {
    expect(screen.getByText('My pills')).toBeOnTheScreen()
  })

  it('should display description', () => {
    expect(screen.getByText('Add and log your pills')).toBeOnTheScreen()
  })

  it('should display settings button', () => {
    expect(screen.getByTestId('settingsBtn')).toBeOnTheScreen()
  })
})
