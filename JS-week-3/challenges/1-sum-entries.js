/**
 * Credit to https://adventofcode.com/ for this exercise

In the list below you have an array of numbers. The goal is to find the two numbers that add up to 2020.

Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */

const list = [1721, 979, 366, 299, 675, 1456]
let [first, second] = findTwoSum(list, 2020)
let result = list[first] * list[second]
function findTwoSum(arr, target) {
  let cash = new Map()
  for (let i = 0; i < arr.length; i++) {
    let num2 = target - arr[i] //num2=299
    if (cash.has(num2)) {
      return [cash.get(num2), i]
    }
    cash.set(arr[i], i)
  }
  return null
}
// TEST CODE, do not change
console.log(result)
// console.assert(
//   result === 514579,
//   `The result is not correct, it is ${result}, but should be 514579`
// )
