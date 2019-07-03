/*
Next bigger number with the same digits


You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071
If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1
*/

const nextBigger = n => {
  const str = n.toString()
  const len = str.length
  let pivot
  
  // find the pivot
  for (let i = len - 1; i > 0; i--) {
    if (Number(str[i - 1]) < Number(str[i])) {
      pivot = i - 1
      break
    }
  }
  if (pivot === undefined) return -1
  
  // switch the pivot with the smallest number that is bigger than the pivot
  const left = str.slice(0, pivot)
  const right = str.slice(pivot + 1)

  let newPivotNum = Infinity
  let targetIndex
  for (let i = 0; i < right.length; i++) {
    const current = Number(right[i])
    if (current > Number(str[pivot]) && current < newPivotNum) {
      newPivotNum = current
      targetIndex = i
    }
  }

  const switchedRight = right.slice(0, targetIndex) + str[pivot] + right.slice(targetIndex + 1)
  
  // reorder the right part
  const sortedRight = [...switchedRight].sort((a, b) => (a - b)).join('')
  const nextBiggerStr = left + newPivotNum.toString() + sortedRight

  return Number(nextBiggerStr)
}

/*
NOTES:
最大的是降序的，最小的是升序的

如何找比某个数刚好大一点的下一个数，找出这个digits直接出现转折的地方，找出数尾部，最后一个（因为要 next bigger，越靠近个位越影响小）是升序（可以搞成降序，有变大的空间）的地方，找出 pivot ，前面的部分不动，后面的部分做文章

找出后面的部分中比 pivot 大的数中最小的那个，并与pivot交换

交换后，再把此部分升序排序（小）
*/
