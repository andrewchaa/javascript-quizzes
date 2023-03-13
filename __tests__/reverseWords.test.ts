import reverseWords from '../src/reverseWords';

describe('reverseWords', () => {
  it('should reverse words in a sentence', () => {
    expect(reverseWords('')).toEqual('');
    expect(reverseWords('Hello World')).toEqual('World Hello');
  });
});
