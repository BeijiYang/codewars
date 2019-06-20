// sumStrings('1','2') // => ‘3'
const str2list = str => [...str]

const rmHead0 = str => {
  const list = str2list(str)
  while (list[0] === '0') {
    list.shift()
  }
  return list.join('')
}

const add = (long, short, addOnNext) => {
  const resList = long.map((str) => {
    let resultNum = addOnNext + Number(str) + (Number(short[0]) || 0)
    
    if (short.length > 0) short.shift()
    
    if (resultNum > 9) {
      addOnNext = 1
      resultNum = (resultNum + '').charAt(1)
    } else {
      addOnNext = 0
    }
    
    return resultNum + ''
  })
  
  if (addOnNext || resList[resList.length - 1] === '0') resList.push('1')
  
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
    var digitSum = aDigit + bDigit + carry;
    sumDigits.push((digitSum % 10).toString());
    carry = Math.floor(digitSum / 10);
    index++;
  }
  sumDigits.reverse();
  while (sumDigits[0] == '0') sumDigits.shift();
  return sumDigits.join('');
}
