/*
Definition
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .
Return the result as String
Input >> Output Examples
1- disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 81 + 92 = 89 , thus output is "Disarium !!"
2- disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 51 + 62 + 43 = 105 != 546 , thus output is "Not !!"

Playing with Numbers Series
Playing With Lists/Arrays Series
For More Enjoyable Katas
ALL translations are welcomed
Enjoy Learning !!
*/

const disariumNumber = num =>
  num === [...num.toString()].map(Number).reduce((acc, cur, idx) => (acc + powerNumber(cur, idx + 1)), 0)
    ? "Disarium !!"
    : "Not !!"

const powerNumber = (num, idx) => {
  if (idx === 0) return 1
  let result = 1
  while (idx > 0) {
    result *= num
    idx -= 1
  }
  return result
}

console.log(
  disariumNumber(89),
  disariumNumber(564)
)