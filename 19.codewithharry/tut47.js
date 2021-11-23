console.log('Welcome to Sets')

let mySet = new Set();

mySet.add('outlander');
mySet.add('squid game');
mySet.add(34);
mySet.add({});
mySet.add(true);
mySet.add(false);

console.log(mySet);
console.log('size before adding duplicate: '+ mySet.size);

mySet.add('outlander')
console.log('size after adding duplicate: ' + mySet.size);

//check if an item is present or not
console.log(mySet.has(34));
console.log(mySet.has('gravity'));

//delete an item from set
console.log('Before removal ' + mySet.has('squid game'));
mySet.delete('squid game');
console.log('After removal ' + mySet.has('squid game'));

//iterating using for-of
for (let item of mySet) {
    console.log(item);
}

//iterating using for-each
mySet.forEach(item => {
    console.log(item);
});

//converting set to array
setAray = Array.from(mySet);
console.log(setAray);

console.log('Printing using forEach over array setArray');
setAray.forEach((item)=> console.log(item));
