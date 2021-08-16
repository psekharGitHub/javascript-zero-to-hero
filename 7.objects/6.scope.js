var person = {
    firstName: 'Tony',
    lastName: 'Stark',
    city: 'Manhattan'
}

// add, update and delete properties of an object
person.age =39
person.firstName ='Bruce'
delete person.age
console.log(person)

/*
    ? - Object.preventExtensions
    * Allow to read, delte and update
    * but cannot add property
*/
var preventObject = {
    firstName: 'Tony',
    lastName: 'Stark',
    city: 'Manhattan'
}

Object.preventExtensions(preventObject)

person.age =39
person.firstName ='Bruce'
delete person.age
console.log(person)

/*
    ? - Objecct.seal
    * can update properties
    * cannot add or delete properties
*/

var sealObject = {
    firstName: 'Tony',
    lastName: 'Stark',
    city: 'Manhattan'
}
Object.seal(sealObject)

sealObject.age =39
sealObject.firstName ='Bruce'
delete sealObject.city
console.log(sealObject)


/*
    ? Object.freeze
    * cannot add, update or delete properties
*/
var freezeObject = {
    firstName: 'Tony',
    lastName: 'Stark',
    city: 'Manhattan'
}
Object.freeze(freezeObject)

freezeObject.age =39
freezeObject.firstName ='Bruce'
delete freezeObject.city
console.log(freezeObject)

/*
 ? freeze applied on outer object is not applied
 ? on inner obejct. You need to apply freeze in 
 ? inner object seperately.
 
 *apply freeze to objects layer/level wise
*/
var freezeObjectWithinObject = {
    firstName: 'Tony',
    lastName: 'Stark',
    city: 'Manhattan',
    address: {
        state: 'New York',
        country: 'USA'
    }
}

Object.freeze(freezeObjectWithinObject)

freezeObjectWithinObject.age =39
freezeObjectWithinObject.firstName ='Bruce'
delete freezeObjectWithinObject.city
console.log(freezeObjectWithinObject)

freezeObjectWithinObject.address.country='Australia'
console.log(freezeObjectWithinObject)

