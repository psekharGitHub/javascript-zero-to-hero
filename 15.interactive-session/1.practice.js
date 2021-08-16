// ? example 1
console.log(multiply(1)(2)(3))

function multiply(num1) {
    return function(num2) {
        return function(num3) {
            return num1 * num2 * num3
        }
    }
}

// ? example 2
var a = 10
var b = a   // b is value type
a = 20

console.log(a)  //a=20
console.log(b)  //b=10

var x = [1, 2]
var y = x   // y is pointing to reference of x, so y also updates when x is updated
x.push(3)

console.log(x)  //x = [1,2,3]
console.log(y)  //y= [1,2,3]

var array1 = [1, 2]
var array2 = array1
/*
* assigning a new value to array1 will create new memory for
* array 1 and array2 will be still refering to old reference
*/
array1 = [1,2,3]    
console.log(array1) // array1 = [1,2,3]
console.log(array2) // array2 = [1, 2]

// ? ex 3
var output = 1 + 2 + "uma" + 3 + 5 + "mahesh"
console.log(output) //3uma35mahesh

// ? ex 4
var output1 = (function(x) {
    delete x;
    return x; 
})(0)
/*
* delete operator is used to delete properties of an
* object and 'x' is not an object, so won't affect 'x'
*/
console.log(output1)

// ? ex 5
var output2 = (function(data) {
    delete data.x;  //here x is a property of object data
    return data.x; 
})({x:0})

console.log(output2)

// ? ex 6
var m = 1
var output3 = (function() {
    delete m
    return m
})()
console.log(output3)

/* 
? ex 7
? How to make an array empty?
? where var array = ['a', 'b','c','d','e','f']
*/
var array = ['a', 'b','c','d','e','f']
console.log(array)

//*Method 1 - assign empty array / reset array
array = []  
console.log(array)

//*Method 2 - set length of array to 0
array.length = 0;   
console.log(array)

//*Method3 - delete starting from index 0 to array.length
array.splice(0, array.length)   
console.log(array)

//*Method 4 - pop elements one by one
while (array.length) {
    array.pop()
}
console.log(array)


// ? ex 8 - built an even or odd check function
console.log(evenOrOdd(3))   //false
console.log(evenOrOdd(6))   //true
console.log(evenOrOdd(7))   //false

function evenOrOdd(num) {
    return num%2 == 0
}

// ? ex 9 - return the extension of a file
// ? if not return the filename

console.log(getExtension('resume.doc'))
console.log(getExtension('sample.txt'))
console.log(getExtension('notepad'))

// * Method 1
function getExtension(file) {
    var array = file.split('.')
     return array[array.length - 1]
}

/*
 ? Ternary Operator
 ? var x = 5
 ? var data = (x == 5) ? true : false
 ? console.log(data)
*/

// * Method 2 - Ternary Operator
function getExtension(fileName) {
    return fileName.split('.').length > 1 ?
            fileName.split('.')[1] : false
}


