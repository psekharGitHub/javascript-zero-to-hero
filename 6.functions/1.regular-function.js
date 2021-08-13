function getName() {
    console.log("Hello")
    return "Scott Desatnick"
}

var userName =getName()
console.log(userName)

function getFullName(firstName, LastName) {
    return firstName + ' ' + LastName
}

var fullName = getFullName()
console.log(fullName)

var fullName1 = getFullName()           //default function
console.log(fullName1, typeof fullName1)

var fullName2 = getFullName('Adam')     //parameterized function
console.log(fullName2, typeof fullName2)

var fullName3 = getFullName('Adam', 'Cole')
console.log(fullName3, typeof fullName3)

var a = 1 + 2 + "uma" + 3 + 4
console.log(a, typeof a)

var value = undefined + "Hello"
console.log(value, typeof value)

var output = null + "Hey"
console.log(output, typeof output)







// console.log('Hey')
// console.warn('Please check this')   //Warning message
// console.info('Please provide more info please')
// console.error('This is an error')   //Error message