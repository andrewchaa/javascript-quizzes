export default function isPalindrome(s: string) {
  let start = 0;
  let end = s.length - 1;

  while (s[start] === s[end]) {
    if (Math.abs(start - end) <= 1) {
      return true;
    }
    start++;
    end--;
  }

  return false;
}
