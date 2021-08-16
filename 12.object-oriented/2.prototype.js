function Student(fname, lname) {
    this.firstName = fname
    this.lastName = lname
}

/*
    ? - by using prototype, getFullName fucntion won't be created
    * for every instance without wasting lot of memory, but every instance
    * will have a reference to it and can access it.
*/
Student.prototype.getFullName =  function() {
    return this.firstName + ' ' + this.lastName
}

Student.prototype.city = "Boston"

var student1 = new Student('Natasha', 'Romanov')
console.log(student1.city)

var student2 = new Student('Bruce', 'Banner')
student2.city = 'Manhattan'     //overwriting ineherent city 'Boston' to 'Manhattan'
console.log(student2.city)

var student3 = new Student('Scott', 'Lang')
student3.city = 'Harlem'
console.log(student3.city)


function Student() {
    this.name = "John"
    this.gender = 'M'
}

var student1 = new Student()
console.log(Student.prototype)
console.log(student1.prototype) //prototype only available to class and not instance
console.log(student1.__proto__) //instance accessing prototype

console.log(Student.prototype === student1.__proto__)   //both have same function