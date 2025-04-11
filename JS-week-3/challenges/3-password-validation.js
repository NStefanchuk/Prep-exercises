/**
 * Credit to https://adventofcode.com/ for this exercise
 *
 * Each object in the passwordList gives a password policy and then the password.
 * The times field says the minimal and maximal amount of times the letter should be in the password. So 1-3 means at least 1 time, at most 3 times.
 * The letter field gives which letter should be counted
 * The password field gives the password
 *
 * In the list 2 passwords are valid, the middle one is not as there is no b in the password.
 *
 * We expect the output:
 *
 * 'abcde' is VALID, a is present 1 times and should have been present at least 1 and at most 3 times
 * 'cdefg' is INVALID, b is present 0 times and should have been present at least 1 and at most 3 times
 * 'ccccccccc' is VALID, c is present 9 times and should have been present at least 2 and at most 9 times
 */

// 1️⃣ Раздели times на две части (минимальное и максимальное значение).
// 2️⃣ Посчитай, сколько раз letter встречается в password.
// 3️⃣ Проверь, попадает ли это количество в диапазон.
// 4️⃣ Выведи VALID или INVALID в зависимости от результата.

const passwordList = [
  { times: '1-3', letter: 'a', password: 'abcde' },
  { times: '1-3', letter: 'b', password: 'cdefg' },
  { times: '2-9', letter: 'c', password: 'ccccccccc' },
]

let count = 0
passwordList.forEach((obj) => {
//   const { password, letter, times } = obj
  const password = obj.password
  const letter = obj.letter
  const times = obj.times
  const minMaxTime = times.split('-').map(Number)
  const countLetters = password.split('').filter((val) => val === letter).length
  const status =
    countLetters >= minMaxTime[0] && countLetters <= minMaxTime[1]
      ? `${password} is VALID, ${letter} is present ${countLetters} times and should have been present at least ${minMaxTime[0]} and at most ${minMaxTime[1]} times`
      : `${password} is INVALID, ${letter} is present ${countLetters} times and should have been present at least ${minMaxTime[0]} and at most ${minMaxTime[1]} times`
  // if password.split(letter).length - 1
  console.log(status)
})

// console.log("hello".split("l"))// ["he", "", "o"]);
