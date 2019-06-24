/*
Multiplying numbers as strings

This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!
*/

const reverseStr = str => [...str].reverse().join('')

const multiply = (a, b) => {
  const lenA = a.length
  const lenB = b.length
  if (lenA < lenB)[a, b] = [b, a]

  const strA = reverseStr(a)
  const strB = reverseStr(b)
  let carry = 0
  let result = []

  for (let i = 0; i < strB.length; i++) {
    let roundRes = []
    carry = 0
    for (let k = 0; k < i; k++) roundRes.push(0) // 乘法 每一轮结果相加时的错位

    for (let j = 0; j < strA.length; j++) {
      const multipDigit = Number(strB[i]) * Number(strA[j]) + carry
      const digit = multipDigit % 10
      carry = Math.floor(multipDigit / 10)
      roundRes.push(digit)

      if (j === strA.length - 1) roundRes.push(carry) // 实现加法，注意勿漏最后一个 carry
    }
    result.push(roundRes)
  }

  const tempArr = []
  carry = 0
  // 二维数组按列相加
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      const digit = result[i][j] + (tempArr[j] || 0) + carry
      tempArr[j] = digit % 10
      carry = Math.floor(digit / 10)
    }
  }

  const finalResultArr = tempArr.reverse()

  while (finalResultArr.length > 1 && finalResultArr[0] === 0) finalResultArr.shift()

  return finalResultArr.join('')
}
