import isPalindrome from '../src/isPalindrome2'

describe('isPalindrome', () => {
  it('should return true for kaybak', () => {
    expect(isPalindrome('kaybak')).toBe(true)
  })

  it('should return true for kayak', () => {
    expect(isPalindrome('kayak')).toBe(true)
  })

  it('should be false for kaybaak', () => {
    expect(isPalindrome('kaybaak')).toBe(false)
  })

  // it('should return true for abba', () => {
  //   expect(isPalindrome('abba')).toBe(true)
  // })
})
