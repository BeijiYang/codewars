/*
First Variation on Caesar Cipher

The action of a Caesar cipher is to replace each plaintext letter with a different one a fixed number of places up or down the alphabet.

This program performs a variation of the Caesar shift. The shift increases by 1 for each character (on each iteration).

If the shift is initially 1, the first character of the message to be encoded will be shifted by 1, the second character will be shifted by 2, etc...

Coding: Parameters and return of function "movingShift"
param s: a string to be coded

param shift: an integer giving the initial shift

The function "movingShift" first codes the entire string and then returns an array of strings containing the coded string in 5 parts (five parts because, to avoid more risks, the coded message will be given to five runners, one piece for each runner).

If possible the message will be equally divided by message length between the five runners. If this is not possible, parts 1 to 5 will have subsequently non-increasing lengths, such that parts 1 to 4 are at least as long as when evenly divided, but at most 1 longer. If the last part is the empty string this empty string must be shown in the resulting array.

For example, if the coded message has a length of 17 the five parts will have lengths of 4, 4, 4, 4, 1. The parts 1, 2, 3, 4 are evenly split and the last part of length 1 is shorter. If the length is 16 the parts will be of lengths 4, 4, 4, 4, 0. Parts 1, 2, 3, 4 are evenly split and the fifth runner will stay at home since his part is the empty string. If the length is 11, equal parts would be of length 2.2, hence parts will be of lengths 3, 3, 3, 2, 0.

You will also implement a "demovingShift" function with two parameters

Decoding: parameters and return of function "demovingShift"
1) an array of strings: s (possibly resulting from "movingShift", with 5 strings)

2) an int shift

"demovingShift" returns a string.

Example:
u = "I should have known that you would have a perfect answer for me!!!"

movingShift(u, 1) returns :

v = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]

(quotes added in order to see the strings and the spaces, your program won't write these quotes, see Example Test Cases)

and demovingShift(v, 1) returns u.

#Ref:

Caesar Cipher : http://en.wikipedia.org/wiki/Caesar_cipher
*/

// solution
/**
 * decode:
 * 1. uppercase or lowercase: charcode range (65 - 90) / (97 - 122);
 * 2. when shift number is bigger than 26;
 * 3. when the newCharCode is out of the letter range;
 * 4. empty or quotes;
 */

const getCharCodeRange = char => {
  const charCode = char.charCodeAt()
  if (65 <= charCode && charCode <= 90) {
    return [65, 90]
  } else if (97 <= charCode && charCode <= 122) {
    return [97, 122]
  } else {
    return [0, 0]
  }
}

const decode = (char, shift) => {
  const [start, end] = getCharCodeRange(char)
  if (start === 0 && end === 0) return char // 4
  while (shift > 25) shift -= 26 // 2
  const charCode = char.charCodeAt()
  let newCharCode = charCode - shift
  while (newCharCode < start) { // 3
    newCharCode = end - (start - newCharCode) + 1
  }
  const newChar = String.fromCharCode(newCharCode)
  return newChar
}

const code = (char, shift) => {
  const [start, end] = getCharCodeRange(char)
  if (start === 0 && end === 0) return char // 4
  while (shift > 25) shift -= 26 // 2
  const charCode = char.charCodeAt()
  let newCharCode = charCode + shift
  while (newCharCode > end) { // 3
    newCharCode = start + (newCharCode - end) - 1
  }
  const newChar = String.fromCharCode(newCharCode)
  return newChar
}

const demovingShift = (arr, shift) => [...arr.join('')].reduce(
  (acc, cur, idx) => {
    const decodedChar = decode(cur, idx + shift)
    return acc += decodedChar
  }, '')

 // 分段的方法，利用取余数确定每小段的长度
const str2arr = str => {
  const strLen = str.length
  let arrLen = 5 // 按题意，把结果分为 5 段
  
  let itemLen // 每段字符个数
  if (strLen % arrLen === 0) {
    itemLen = strLen / arrLen
  } else {
    itemLen = Math.floor(strLen / arrLen) + 1
  }

  const resultArr = []
  for (let i = 0; i < arrLen; i++) {
    const start = i * itemLen
    const item = str.substr(start, itemLen)
    resultArr.push(item)
  }
  return resultArr
}

const movingShift = (str, shift) => {
  // code
  const codedStr = [...str].reduce(
    (acc, cur, idx) => {
      const codeChar = code(cur, idx + shift)
      return acc += codeChar
    }, ''
  )
  return str2arr(codedStr)
}
