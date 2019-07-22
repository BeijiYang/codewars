/**
Implement the method length, which accepts a linked list (head), and returns the length of the list.

For example: Given the list: 1 -> 2 -> 3 -> 4, length should return 4.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null and can hold any type of value.

Good luck!
 */

// solution 1
const length = head => {
  let len = 0
  while (head) {
    len += 1
    head = head.next
  }
  return len
}

// solution 2
const length = head => !head ? 0 : length(head.next) + 1