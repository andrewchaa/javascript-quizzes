export default function reverseWords(sentence: string): string {
  return reverse(sentence.replace(/\s+/g, ' '))
    .split(' ')
    .map(word => reverse(word))
    .join(' ')
}

function reverse(sentence: string): string {
  let low = 0
  let high = sentence.length - 1

  const characters = [...sentence]

  while (low < high) {
    const temp = characters[low]
    characters[low] = characters[high]
    characters[high] = temp
    low++
    high--
  }

  return characters.join('')
}
