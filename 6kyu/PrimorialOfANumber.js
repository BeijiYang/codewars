/*
Definition (Primorial Of a Number)
Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P#.

Task
Given a number N , calculate its primorial. !alt  !alt

Notes
Only positive numbers will be passed (N > 0) .
Input >> Output Examples:
1- numPrimorial (3) ==> return (30)
Explanation:
Since the passed number is (3) ,Then the primorial should obtained by multiplying 2 * 3 * 5 = 30 .

Mathematically written as , P3# = 30 .
2- numPrimorial (5) ==> return (2310)
Explanation:
Since the passed number is (5) ,Then the primorial should obtained by multiplying 2 * 3 * 5 * 7 * 11 = 2310 .

Mathematically written as , P5# = 2310 .
3- numPrimorial (6) ==> return (30030)
Explanation:
Since the passed number is (6) ,Then the primorial should obtained by multiplying 2 * 3 * 5 * 7 * 11 * 13 = 30030 .

Mathematically written as , P6# = 30030 .
Playing with Numbers Series
Playing With Lists/Arrays Series
For More Enjoyable Katas
ALL translations are welcomed
Enjoy Learning !!
*/

// best pritace
const isPrime = num => {
  for (let i = 2; i < num; i++) { // 1 & num itself
    if (num % i === 0) return false
  }
  return true
}

const numPrimorial = n => {
  const primorialList = []
  let t = 2 // 2 is the first prime number
  while (primorialList.length < n) {
    if (isPrime(t)) primorialList.push(t)
    t += 1
  }
  return primorialList.reduce((acc, cur) => (acc * cur), 1)
}

// solution 1
const tempPrimeNumList = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]

const numPrimorial = n => {
  let result = 1
  while (n > 0) {
    result *= tempPrimeNumList[n - 1]
    n -= 1
  }
  return result
}

// solution 2
const numPrimorial = n => tempPrimeNumList.slice(0, n).reduce((acc, cur) => (acc * cur), 1)


console.log(
  numPrimorial(3)
)