// Template for the linked list
export class LinkedList {
  head: LinkedListNode | null
  insertNodeAtHead: (node: LinkedListNode) => void
  createLinkedList: (list: number[]) => void
  display: () => string
  constructor() {
    this.head = null

    // insertNodeAtHead method will insert a LinkedListNode at head
    // of a linked list.
    this.insertNodeAtHead = function (node: LinkedListNode) {
      if (this.head !== null) {
        node.next = this.head
        this.head = node
      } else this.head = node
    }

    // createLinkedList method will create the linked list using the
    // given integer array with the help of InsertAthead method.
    this.createLinkedList = function (list: number[]) {
      list.reverse().forEach(element => {
        const newNode = new LinkedListNode(element)
        this.insertNodeAtHead(newNode)
      })
    }

    // This method will display the elements of the linked list.
    this.display = function () {
      let result = '',
        temp = this.head
      while (temp !== null) {
        result += temp.data
        temp = temp.next
        if (temp !== null) {
          result += ', '
        }
      }
      result += ''
      return result
    }
  }
}
// Template for linked list node class
export class LinkedListNode {
  data: number
  next: LinkedListNode | null
  constructor(data: number, next: LinkedListNode | null = null) {
    this.data = data
    this.next = next
  }
}

export function detectCycle(head: LinkedListNode | null) {
  let slow = head
  let fast = head

  while (slow && fast && fast.next) {
    console.log(
      'slow',
      slow.data,
      'fast',
      fast.data,
      'fast.next',
      fast.next.data
    )
    slow = slow.next
    fast = fast.next.next

    if (fast === null) {
      return false
    }

    if (slow === fast) {
      return true
    }
  }
  // your code will replace this placeholder return statement
  return false
}
