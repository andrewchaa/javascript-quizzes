export default function isHappyNumber(n: number): Boolean {
  let slow = n
  let fast = getNext(n)

  console.log('slow', slow, 'fast', fast)

  while (slow !== fast && fast !== 1) {
    slow = getNext(slow)
    fast = getNext(getNext(fast))
    console.log('slow', slow, 'fast', fast)
  }

  return fast === 1
}

function getNext(n: number): number {
  let sum = 0
  while (n > 0) {
    const d = n % 10
    sum += d ** 2
    n = Math.floor(n / 10)
  }
  return sum
}
