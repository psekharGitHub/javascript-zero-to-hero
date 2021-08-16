// any function will have call apply and bind methods
function sample() {

}

var person1 = {firstName: 'Peter', lastName: 'Parker'}
var person2 = {firstName: 'Eddie', lastName: 'Brock'}

function getName(message, city) {
    return message + ' to ' + city + this.firstName 
    + ' ' + this.lastName
}

/*
? - bind will give context to 'this' of our function
? - bind will return a function
? - used when you have a request that you want to access later
*/
console.log("Using Bind")
var callGetName = getName.bind(person1)
var fullNameUsingBind = callGetName('Welcome', 'NewYork ')
console.log(fullNameUsingBind)

/*  Method 2 of using bind- in one line
?     var fullNameUsingBind = getName.bind(person1)('Welcome', 'NewYork ')
?     console.log(fullNameUsingBind)
*/

/*
? passes argument as comma seperated arguments
? used when obejct values are comma seperated
*/
console.log("Using Call")
var fullNameUsingCall = getName.call(person2, 'Welcome', 'New York ')
console.log(fullNameUsingCall)

/*
? passes arguments as array
? used when object values are in form of an array
*/
console.log("using Apply")
var fullNameUsingApply = getName.apply(person2, ['Welcome', 'New York '])
console.log(fullNameUsingApply)