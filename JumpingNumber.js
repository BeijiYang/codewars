/*
Definition
Jumping number is the number that All adjacent digits in it differ by 1.

Task
Given a number, Find if it is Jumping or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .

Return the result as String .

The difference between ‘9’ and ‘0’ is not considered as 1 .

All single digit numbers are considered as Jumping numbers.

Input >> Output Examples
1- jumpingNumber(9) ==> return "Jumping!!"
Explanation:
It's single-digit number
2- jumpingNumber(79) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
3- jumpingNumber(23) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1
4- jumpingNumber(556847) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
5- jumpingNumber(4343456) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1
6- jumpingNumber(89098) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
7- jumpingNumber(32) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1
Playing with Numbers Series
Playing With Lists/Arrays Series
For More Enjoyable Katas
ALL translations are welcomed
Enjoy Learning !!
*/

// solution 1
const jumpingNumber = num => {
  const list = [...num.toString()].map(Number)
  for (let i = 0; i < list.length; i++) {
    if (list[i + 1] !== undefined && Math.abs(list[i] - list[i + 1]) !== 1) return "Not!!"
  }
  return "Jumping!!"
}

// solution 2
const jumpingNumber = num => {
  const list = [...num.toString()].map(Number)

  return list.find((n, i) => list[i + 1] !== undefined && Math.abs(n - list[i + 1]) !== 1)
    ? "Not!!"
    : "Jumping!!"
}

console.log(
  jumpingNumber(501) // 0 and undefined
)