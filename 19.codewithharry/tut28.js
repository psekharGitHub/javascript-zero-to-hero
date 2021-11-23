console.log('Welcome to tutorial 28');

// Object literal : Object.prototype
let obj = {
    name: "harry",
    channel: "Code With Harry",
    address: "Mars"
}

//Object made from custom constructor
function Obj(givenName){
    this.name = givenName
}
// Never change the prototype of objects crated from Object literal
// obj.prototype.getName = function (){
//     return this.name;
// }

//Change the prototype of object made from constructor
Obj.prototype.getName = function (){
    return this.name;
}

Obj.prototype.setName = function (newName){
  this.name = newName;
}

let obj2 = new Obj("Rohan Das");
console.log(obj2);
 