/*
? Object is a collection of key-value pair
*/
var person = new Object()

person["firstName"] = "Scott"
// person["firstName"] = "Uma"
// person["firstName"] = "Scott"
person["lastName"] = "Desatnick"

var emailProperty = "email" 
person[emailProperty] = "Scot@ef.com"   //indirect property reference

console.log(person)
console.log(person["firstName"])
console.log(person["lastName"])

person["addresss"] = new Object()
person["addresss"]["state"] = "Masachusetts" 
person["addresss"]["city"] = "Boston" 
person["addresss"]["country"] = "USA" 

console.log(person)