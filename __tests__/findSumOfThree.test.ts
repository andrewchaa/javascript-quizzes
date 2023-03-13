import {findSumOfThree} from '../src/findSumOfThree';

describe('findSumOfThree', () => {
  it('should return true for [3, 2, 1, 4, 5] and 9', () => {
    expect(findSumOfThree([3, 2, 1, 4, 5], 9)).toBe(true);
  });
});
