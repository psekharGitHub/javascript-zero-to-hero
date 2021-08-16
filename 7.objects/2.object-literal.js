//var person = {} //Object literal Syntax

// person['FirstName'] = "Adam Sandler"

//person.firstName = "Adam"
//person.lastName = "Sandler"

var person = {
    firstName : "Adam",
    lastName : "Sandler",
    email : 'adamS@msn.com',
    address: {
        state: 'Hollywood',
        city: 'California',
        country: 'USA'
    },
    //this is called method because it is inside an object
    getFullName: function(){
        return this.firstName + ' ' + this.lastName
    }
}
console.log(person, typeof person)
console.log(person.firstName)
console.log(person.lastName)
console.log(person.address.state)
console.log(person.getFullName())