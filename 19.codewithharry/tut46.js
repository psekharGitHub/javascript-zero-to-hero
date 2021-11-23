console.log('Welcome to JS Maps');

const key1 = 'myStr', key2 = {}, key3 = function () {};

let myMap = new Map();

myMap.set(key1, 'Outlander');
myMap.set(key2, 'Game of Thrones');
myMap.set(key3, 'Witcher');

console.log(myMap.get(key1))
console.log(myMap.get(key2))
console.log(myMap.get(key3))

//get the size of Map
console.log(myMap.size)

//Using for-of loop to get key-value from map
for (let [key, value] of myMap) {
    console.log(key, value);
}

//iterate through keys only
for (let key of myMap.keys()) {
    console.log(key);
}

//iterating through values only
for (let value of myMap.values()) {
    console.log(value);
}

//iterating through map using for each loop
// note: value comes before key in parameter of foreach loop 
myMap.forEach((value, key) => {
    console.log('Key is ' + key);
    console.log('Value is ' + value);
});

// Converting Map to Array
let mapArray = Array.from(myMap);
console.log(mapArray);

//iterating through array using foreach
mapArray.forEach(e => console.log(e));

//converting keys of map to array
let keysArray = Array.from(myMap.keys());
console.log(keysArray);

//converting values of map to array
let valuesArray = Array.from(myMap.values());
console.log(valuesArray);


