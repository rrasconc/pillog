import { device, element, expect } from 'detox'

describe('Home screen', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true })
  })
  beforeEach(async () => {})

  it('should display empty state', async () => {
    await expect(element(by.id('PillEmptyIcon'))).toBeVisible()
  })
})
