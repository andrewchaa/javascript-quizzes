import isPalindrome from '../src/isPalindrome';

describe('isPalindrome', () => {
  it('should return true for kayak', () => {
    expect(isPalindrome('kayak')).toBe(true);
  });

  it('should return true for abba', () => {
    expect(isPalindrome('abba')).toBe(true);
  });
});
