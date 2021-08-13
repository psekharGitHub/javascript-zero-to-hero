var data = [
            1,
            "Peter",
            true,
            undefined,
            null,
            function(name) {
                return name;
            },
            {name: 'Tony'},
            ["Red", "Blue", "Yellow"]

]

console.log(data)
/*
? 1. (a) call the function
?    (b) pass the object name as parameter to that function
?    (c) print the name to console
? 2. print "Tony likes Blue"
*/

/* Sol1 method 1
    ? data[5] is a function and returns a value
    ? which is received by variable sample
*/
var sample = data[5]
var name = data[6].name
console.log(name)

//Sol1 method 2
console.log(data[5](data[6].name))

//Sol2 
console.log(data[6].name + ' likes ' + data[7][1])
