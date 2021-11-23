console.log('Wekcome to Symbols in Js');
/**
 *  - What is the symbol?
 *  -  symbol is a primitive which cannot be recreated. t was introduced in ECMAScript 2015.
 *     Every time we invoke Symbol(), we get a new and unique symbol, which is different from
 *     all other symbols.
 * 
 *  - Purpose of the symbol:-
    - In ES6, symbols were added to the primitives group, just like all other primitive, they are
      also immutable and does not have methods of their own. The main purpose of symbols was to 
      provide globally unique values that were kept private and for internal use only.
 */

// Symbols
const sym1 =  Symbol('My identifier');
const sym2 =  Symbol('My identifier');
// console.log('Symbol is ', sym1);
// console.log('Type of Symbol is ', typeof sym1);
console.log(sym1 === sym2);

const a = "this is";
const b = "this is";

console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);

const k1 = Symbol('identifier for k1');
const k2 = Symbol('for k2');

myObj = {};
myObj[k1] = "Harry";
myObj[k2] = "Rohan";
myObj["name"] = "Good boy"
myObj[4] = "Good int"


console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2); // !! ALERT !!: cannot do this to get Rohan because it is same as myObj["k2"]


// Symbols are ignored in for in loop
for(key in myObj){
    console.log(key, myObj[key])
}

console.log(JSON.stringify(myObj));
