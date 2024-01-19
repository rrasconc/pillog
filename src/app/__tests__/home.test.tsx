import '@testing-library/jest-native'
import { renderRouter, screen } from 'expo-router/testing-library'

describe('Home screen', () => {
  beforeEach(() => {
    renderRouter('src/app/')
  })

  it('should display header title correctly', () => {
    expect(screen.getByText('Mis recetas')).toBeOnTheScreen()
  })

  it('should display description', () => {
    expect(screen.getByText('Administra y agrega nuevas recetas médicas')).toBeOnTheScreen()
  })

  it('should display notifications button', () => {
    expect(screen.getByTestId('notificationsBtn')).toBeOnTheScreen()
  })

  it('should display an add button', () => {
    expect(screen.getByText('Nueva receta')).toBeOnTheScreen()
  })
})
