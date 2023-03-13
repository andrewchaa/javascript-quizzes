import {detectCycle, LinkedList} from '../src/detectCycle'

describe('detectCycle', () => {
  it('returns true when there is a cycle', () => {
    const linkedList = new LinkedList()
    linkedList.createLinkedList([1, 2, 3, 4, 5])

    expect(detectCycle(linkedList.head)).toEqual(false)
  })

  it('returns false when there is no cycle', () => {
    const linkedList = new LinkedList()
    linkedList.createLinkedList([2, 4, 6, 8, 10, 12])

    // @ts-ignore
    linkedList.head?.next?.next?.next?.next?.next = linkedList.head?.next?.next

    expect(detectCycle(linkedList.head)).toEqual(true)
  })
})
