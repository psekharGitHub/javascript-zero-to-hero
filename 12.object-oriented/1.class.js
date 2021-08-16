/*
? - JS is prototype based language that has no 'class' keyword
? - 'class' keyword is introduced in version ES6
? - it used function to define class
? - Use Upper Case function name to identify it as class
*/

//this is a class
function Student() {

}

// this is a function
function sayHello() {

}

// Instance of a class
function Person() {

}

var person1 = new Person()  //person1 is instance of Person
var person2 = new Person()

//Constructor of a class
function Order() {

}

var order1 = new Order()    //Order() is a constructor

//Properties of a class
function Customer(fname, lname) {
    this.firstName = fname  //property 1
    this.lastName = lname    //property 2
}

//assigning value to properties
var customer1 = new Customer("Steve", "Rogers") //parameterized constructor
console.log(customer1)