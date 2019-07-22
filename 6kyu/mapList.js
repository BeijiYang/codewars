/**
 * Description:
Implement the method map, which accepts a linked list (head) and a mapping function, and returns a new linked list (head) where every element is the result of applying the given mapping method to each element of the original list.

For example: Given the list: 1 -> 2 -> 3, and the mapping function x => x * 2, map should return 2 -> 4 -> 6

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null and can hold any type of value.

Good luck!
 */

function map(head, f) {
  if (!head) return null
  const DummyNode = new Node(null, new Node(null, null))
  fList(head, f, DummyNode.next)
  return DummyNode.next
}

const fList = (node, f, newNode) => {
  newNode.data = f(node.data)
  if (!node.next) return newNode
  while (node.next) {
    newNode.next = new Node(null, null)
    node = node.next
    return fList(node, f, newNode.next)
  }
}
