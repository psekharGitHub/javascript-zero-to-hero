var items = ["laptop", "desktop", 'ipad', "chair"]

//Print on same line using spread operator "..."
console.log(...items)

// 1. using for loop
for (var i=0; i<items.length; i++) {
    console.log(items[i])
}

/* 
    ? 2. using for-each loop
    ? - does not return a new array
*/
console.log("*******Using ForEach*******")
items.forEach(function(item) {
    console.log(item)
})

/*
    ? 3. using map
    ? - returns a new array
*/
console.log("*******Using Map*******")
items.map(function(item) {
    console.log(item)
})

// Difference between ForEach and Map
var dataUsingForEach = items.forEach(function(item){
    return item
})

var dataUsingMap = items.map(function(item) {
    return items
})

console.log(dataUsingForEach)   //doesn't return a new array,(undefined)
console.log(dataUsingMap)   //returns a new array

/* 4. using in and of
    ? - 'in' returns index of elements
    ? - 'of' returns elements of the array
*/
for (item in items) {
    console.log(item)
}

for (item of items) {
    console.log(item)
}

