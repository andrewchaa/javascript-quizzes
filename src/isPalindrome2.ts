export default function isPalindrome(s: string) {
  let start = 0
  let end = s.length - 1
  let mismatchOccurrence = 0

  while (true) {
    console.log(
      'start',
      start,
      s[start],
      'end',
      end,
      s[end],
      'mismatchOccurrence',
      mismatchOccurrence
    )
    if (s[start] !== s[end]) {
      mismatchOccurrence++
      if (s[start + 1] === s[end]) {
        start++
      } else if (s[start] === s[end - 1]) {
        end--
      }
    }

    if (mismatchOccurrence > 1 || s[start] !== s[end]) {
      return false
    }

    if (Math.abs(start - end) <= 1) {
      return true
    }

    start++
    end--
  }
}
