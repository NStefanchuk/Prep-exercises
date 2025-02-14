// 1-remove-the-comma

// 1)
let myString = 'hello,this,is,a,difficult,to,read,sentence'
let myStringImproved = ''
for (let i = 0; i < myString.length; i++) {
  if (myString[i] == ',') {
    myStringImproved += ' '
  } else {
    myStringImproved += myString[i]
  }
}
console.log(myStringImproved)

// 2)
let myString = 'hello,this,is,a,difficult,to,read,sentence'
console.log(myString.split(',').join(' '))

//  2-even-odd-reporter

for (i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`The number ${i} is even!`)
  } else {
    console.log(`The number ${i} is odd!`)
  }
}

// 3-recipe-card

// 1)
let mealRecipe = {}
mealRecipe.title = 'Omelette'
mealRecipe.servings = 2
mealRecipe.ingredients = ['4 eggs', '2 strips of bacon', '1 tsp salt/pepper']

for (const key in mealRecipe) {
  console.log(`${key}: ${mealRecipe[key]}`)
}

// 2)
let mealRecipe = {}
mealRecipe.title = 'Omelette'
mealRecipe.servings = 2
mealRecipe.ingredients = ['4 eggs', '2 strips of bacon', '1 tsp salt/pepper']

console.log('Meal name: ' + mealRecipe.title)
console.log('Serves: ' + mealRecipe.servings)
console.log('Ingredients: ' + mealRecipe.ingredients.join(' '))

// 4-reading-list

let books = [
  { title: 'captain daugther', author: 'Pushkin', alreadyRead: true },
  { title: 'crime and punishment', author: 'Dostoevskiy', alreadyRead: false },
  { title: 'fathers and sons', author: 'Tyrgenev', alreadyRead: false },
]
for (i = 0; i < books.length; i++) {
  console.log(
    `The ${books[i].title} by ${books[i].author}. ${
      books[i].alreadyRead == false
        ? 'You still need to read ' + books[i].title
        : 'You already read ' + books[i].title
    }`
  )
}

// 5-who-wants-a-drink

const drinkTypes = ['cola', 'lemonade', 'water']
let drinkTray = []

for (i = 0; i < 5; i++) {
  drinkTray.push(
    drinkTypes[i <= drinkTypes.length - 1 ? i : i - drinkTypes.length]
  )
}
console.log(`Hey guys, I brought a ${drinkTray.join(', ')}!`)
