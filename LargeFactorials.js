/*
Large Factorials

In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer n and returns the value of n!.

You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! = "15511210043330985984000000" as a string.

For more on factorials, see http://en.wikipedia.org/wiki/Factorial

NOTES:

The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution

I have removed the use of require in the javascript language.
*/

const reverseStr = str => [...str].reverse().join('')

const bigIntAdd = (str1, str2) => {
  const len1 = str1.length
  const len2 = str2.length
  if (len1 < len2)[str2, str1] = [str1, str2]

  str1 = reverseStr(str1)
  str2 = reverseStr(str2)

  let carry = 0
  let result = ''

  for (let i = 0; i < str1.length; i++) {
    const digit1 = str1[i]
    const digit2 = str2[i] || 0
    const sumDigit = Number(digit1) + Number(digit2) + carry

    const resDigit = sumDigit % 10
    result += (resDigit + '')
    carry = Math.floor(sumDigit / 10)
  }
  if (carry) result += carry

  return reverseStr(result)
}


const bigIntMulti = (str1, str2) => {
  const len1 = str1.length
  const len2 = str2.length
  const multiplicand = len1 >= len2 ? str1 : str2
  const multiplier = len1 < len2 ? str1 : str2
  let result = '0'

  for (let i = 0; i < multiplier; i++) {
    result = bigIntAdd(result, multiplicand)
  }
  return result
}

const factorial = n => {
  if (n < 0) return null
  if (n === 1 || n === 0) return '1'

  return bigIntMulti(n + '', factorial(n - 1) + '')
}
