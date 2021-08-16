/*
    * Prototypal Inheritance - inheritance using prototypes
    * Once function(Class) gets access to the properties and methods
    * another function(Class)
*/
function Person(fname, lname) {
    this.firstName = fname
    this.lastName = lname
}

Person.prototype.getFullname = function(){
    return this.firstName + ' ' + this.lastName
}

function Student(age) {
    this.age = age
}

//Student inherit the properties from Person
Student.prototype = new Person('Nick', 'Fury')

Student.prototype.getAge = function() {
    return this.age;
}

/*
* student1 instance of class Student has access to
* firstName lastName, getFullname, getAge
*/
var student1 = new Student(45)
console.log(student1.firstName) //parent property
console.log(student1.lastName)  //parent property
console.log(student1.getFullname()) //parent method
console.log(student1.getAge())  //child method