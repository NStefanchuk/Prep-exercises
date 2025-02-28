import { modules, students, mentors, classes } from './hyf.js'

const possibleMentorsForModule = (moduleName) => {
  return mentors
    .filter((mentor) => mentor.canTeach.includes(moduleName))
    .map((mentor) => mentor.name)
}
// console.log(possibleMentorsForModule('using-apis'));

const findMentorForModule = (moduleName) => {
  const arr = possibleMentorsForModule(moduleName)
  return arr[Math.floor(Math.random() * arr.length)]
}
// console.log(findMentorForModule('javascript'))