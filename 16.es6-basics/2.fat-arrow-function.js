/*
     ? Fat Arrow (*) functions
     * - can define functions with / without parameters
     
     ! - Fat arrow is not an alternative to regular function
     ! - just a shorter way of writing regular function 
*/

let add = function(x, y) {
    return x + y
}
console.log(add(10, 20));

// ? - Fat Arrow - Method 1

let add1 = (x,y) => {
    return x + y
}
console.log(add1(10,20))

/*
    ? Fat Arrow - Method 2
    * - we don't have to use return statement
    *   if there is no block
    * - however, if we are using block syntax, 
    *   we need to specify return keyword
*/
let add2 = (x,y) => (x+y)
console.log(add2(30,20))

/*
    ! Note: Both the below statements are equal
    * () =>
    * () => { return expression }
*/

/* 
    ? Sort an array
    * a - b sorts in ascending
    * b - a sorts in descending
*/
let numbers = [4,2,6]

numbers.sort(function(a,b){
    return a-b
})
console.log(numbers)

// ? Fat arrow way

let newNumber = [4,2,6]
newNumber.sort((a,b) => a-b)
console.log(newNumber)

/*
    ? Takes a single parameter
    ! - Both the below staments are same
    * (param) => statement
    *  param => statement
*/

let names = ["John", "Scott", "Adam", "Marco"]

let lengths = names.map(function(name){
    return name.length
})
console.log(lengths)    //return length of each element in array

// ? Fat Arrow way
let fat_lengths = names.map(name => name.length)
console.log(fat_lengths)

// ? with no parameters 
let logDocument = () => console.log(window.document)
logDocument()

// let multiply(x,y)
// => x,y       ---throws error syntax

// ? this is a valid syntax
let multiply = (x,y) =>
x,y

// ? - Object literal

let setColor = function(color){
    return {value : color}
}

let bkgColor = setColor('Green')
console.log(bkgColor)

// ? Fat Arrow way
// * return statement enclosed in paranthesis to
// * clarify that it is an object literal 

let setColor1 = color => ({value : color})
let bkColor = setColor1('Red')
console.log(bkColor)

// ? Meaning of 'this'

var employee = {
    id: 1,
    greet: function(){
        console.log(this.id)
    }
}

var employee = {
    id: 1,
    greet: () => console.log(this.id);
}

employee.greet()

// ? setTimeout()
// * - used to delay the output on console

setTimeout(function(){
    console.log('Hello')
}, 1000)    // delay for 1 s

var employee = {
    id: 1,
    greet: function(){
        var self = this
        setTimeout(function(){
            console.log(this)
            console.log(self.id)

        }, 1500)
    }
}
employee.greet()

// ? - Fat Arrow way
var employee = {
    id: 5,
    greet: function(){
        setTimeout(() => {console.log(this.id)}, 1500)
    }
}
employee.greet()
