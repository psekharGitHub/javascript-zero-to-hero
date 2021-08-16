/*  
    ? Polymorphism
    ! JS does not have Method Overloading
    * JS has Method Overriding
*/

function Shape() {

}

Shape.prototype.draw = function() {
    return "I am generic Shape"
}

//Circle

function Circle() {

}

Circle.prototype = Object.create(Shape.prototype)   //Polymorphism

Circle.prototype.draw = function() {
    return "I am Circle"
}

//Sqaure

function Square() {

}

Square.prototype = Object.create(Shape.prototype)   //Polymorphism

Square.prototype.draw = function() {
    return "I am Square"
}

//Triangle

function Triangle() {

}

Triangle.prototype = Object.create(Shape.prototype)   //Polymorphism

Triangle.prototype.draw = function() {
    return "I am Triangle"
}

//Method 1
var shape1 = new Shape()
var shape2 = new Circle()
var shape3 = new Square()
var shape4 = new Triangle()

console.log(shape1.draw())
console.log(shape2.draw())
console.log(shape3.draw())
console.log(shape4.draw())


//Method 2
var shapes = [new Shape(), new Circle(), new Square(), new Triangle()]

shapes.forEach(function(shape) {
    console.log(shape.draw())
})