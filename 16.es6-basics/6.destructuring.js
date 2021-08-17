/*
    ? Destruction
    * - breaking down a complex structure into simple parts
*/

// ? Array destructuring

let arr = ["Bruce", "Clark", "Hal"]

// * destruturing way 1 
let [firstName, lastName] = arr

console.log(firstName)  //Bruce
console.log(lastName)   //Clark

// * destructuring way 2
let [firstName1,, lastName1] = arr

console.log(firstName1) // Bruce
console.log(lastName1)  //Hal

// * destructuring way 3
let [value1, value2, value3] = arr

console.log(value1) //Bruce
console.log(value2) //Clark
console.log(value3) //Hal

/*
    ? Split
    * splits by given criteria and assigns them to
    * elements in the array by destructuring
*/
let [fname, lname] = "Hal Jordan".split(' ')
console.log(fname)  //Hal
console.log(lname)  //Jordan

// ? Object destructuring

let user = {
    name: 'Hal',
    age: 30
}

for(let [key, value] of Object.entries(user)){
    console.log(`${key} : ${value}`)
} //name : Hal age: 30

let options = {
    heading: "Menu",
    height: 100,
    width: 200
}

let {heading, width, height} = options

console.log(heading)    //Menu
console.log(width)      //200
console.log(height)     //100