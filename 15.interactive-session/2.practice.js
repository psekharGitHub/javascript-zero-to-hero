console.log(addArray([1,2,3,4,5]))    //15
console.log(addArray([1,2,3,4,5,6,7,8,9,10])) //55
console.log(addArray([1,2,3,'uma',4,5])) //15
console.log(addArray([1,2,3,'uma', {name: 'mahesh'}, 4, 5])) //15
console.log(addArray([1,2,[[3],4],5])) //15

function addArray(array) {
    var total = 0;
    array.forEach(function(item) {
        if (typeof item == "number") {
            total += item
        } else if (Array.isArray(item)) {
            total += addArray(item)
        }
    })
    return total
}


// ? Tabular view for data
var data = [
    {name : 'Peter', age : 16},
    {name : 'Tony', age : 39},
    {name : 'Scott', age : 35, city : 'Harlem'},
]
console.table(data)

// ? Placeholders
console.log("Hello %s your Id is  %i", "Peter", 32413)
console.log("Student data : %o is available", {name : 'Peter', city: 'New York'})

var firstName ='Tony'
var lastName = 'Stark'
var message= `FirstName is ${firstName} and lastname is ${lastName}`

console.log(message)