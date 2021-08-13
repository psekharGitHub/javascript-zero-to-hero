function Student(fName, lName){
    this.firstName = fName;
    this.lastName = lName;
}

var student = new Student("Chris", "Evans")

student.city = "Hyderabad"
console.log(student)