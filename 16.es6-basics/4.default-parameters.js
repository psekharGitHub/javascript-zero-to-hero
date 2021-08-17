function say(message){
    console.log(message)
}

console.log(say())  //undefined; say() returns nothing

// ? ES5 syntax and Fix: use ternary operator
function say(message) {
    message = typeof message !== 'undefined' ? message : "Hi"
    console.log(message)
}
say()

// ? ES6 way
function sayHey(message = "How are you"){
    console.log(message)
}

sayHey()  // default value: How are you
sayHey("I am fine")    //I am fine