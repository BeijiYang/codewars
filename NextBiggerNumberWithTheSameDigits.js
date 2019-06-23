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
