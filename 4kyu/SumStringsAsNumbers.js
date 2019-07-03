// sumStrings('1','2') // => ‘3'
// 难点：
//    1. 大数的加减
//    2. 进位的处理
//    3. 参数的处理

const str2list = str => [...str]

// 参数的处理，去掉没用的0，注意对长度的影响
const rmHead0 = str => {
  const list = str2list(str)
  while (list[0] === '0') {
    list.shift()
  }
  return list.join('')
}
// 进位的处理: 变量的维护与使用
const add = (long, short, addOnNext) => {
  const resList = long.map((str) => {
    let resultNum = addOnNext + Number(str) + (Number(short[0]) || 0)
    
    if (short.length > 0) short.shift()
    
    if (resultNum > 9) { // 维护
      addOnNext = 1
      resultNum = (resultNum + '').charAt(1)
    } else {
      addOnNext = 0
    }
    
    return resultNum + ''
  })
  
  if (addOnNext) resList.push('1') // 特：最开头的一位数
  
  return resList.reverse().join('')
}

const sumStrings = (a,b) => {
  const reversedListA = str2list(rmHead0(a)).reverse()
  const reversedListB = str2list(rmHead0(b)).reverse()

  const lenA = reversedListA.length
  const lenB = reversedListB.length
  
  let addedResult
  if (lenA >= lenB) {
     addedResult = add(reversedListA, reversedListB, 0)
  } else {
     addedResult = add(reversedListB, reversedListA, 0)
  }
  
  return addedResult
}

// better solution:

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

function sumStrings(a,b) {
  a = a.reverse(); b = b.reverse();
  var carry = 0;
  var index = 0;
  var sumDigits = [];
  while (index < a.length || index < b.length || carry != 0) {
    var aDigit = index < a.length ? parseInt(a[index]) : 0;
    var bDigit = index < b.length ? parseInt(b[index]) : 0;
    // 进位的处理
    // digitSum：两边字符串中的数，以及上一位的进位的和
    var digitSum = aDigit + bDigit + carry;
    // 对 10 取余数，拿到 digitSum 个位上的数，是留在本位的
    sumDigits.push((digitSum % 10).toString()); 
    // 除以 10，拿到 digitSum 十位上的数，是要进到下一位的
    carry = Math.floor(digitSum / 10);
    index++;
  }
  sumDigits.reverse();
  while (sumDigits[0] == '0') sumDigits.shift(); // 处理0开头参数的影响
  return sumDigits.join('');
}
