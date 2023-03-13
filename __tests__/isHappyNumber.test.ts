import isHappyNumber from '../src/isHappyNumber'

describe('isHappyNumber', () => {
  it('should return true for 19', () => {
    expect(isHappyNumber(28)).toBe(true)
  })

  it('should return false for 4', () => {
    expect(isHappyNumber(4)).toBe(false)
  })
})
