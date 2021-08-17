/*
    ? ES6 provided a new operator called spread operator
    ? that consists of three dots (...)

    * A spread operaor allows us to spread our elements
    * on an iterable object such as an array or map
*/

const odd = [1,3,5]
const combined = [2,4,6, ...odd]
console.log(combined)   //prints [2,4,6,1,3,5]

/*
    ? ES6 also has three dots (...) which is rest operator
*/

function display(a,b, ...arguments){
    console.log(arguments)
}

display(1,2,3,4,5)  // prints [3, 4, 5]

/*
    ! Note: Difference between spread and rest operator
    * spread - unpacks elements
    * rest - pack elements into an array
*/

// ? Constructing array literal

let initialChars = ['A', 'B']
let chars = [...initialChars, 'C', 'D']
console.log(chars)

// ? Constructing two arrays

let numbers = [1,2]
let moreNumbers = [3,4]
let allNumbers = [...numbers, ...moreNumbers]
console.log(allNumbers) //prints [1, 2, 3, 4]

// ? Coopying an array into another

let scores = [80,70,90]
let copiedScores = [...scores]
console.log(copiedScores)

// ? Spread operator and string

let newChars = ['A', ...'BCD', 'EF']
console.log(newChars)  // prints [A, B, C, D, EF]