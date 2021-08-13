var sayHello = function() {
    return "This is anonymous function"
}

var message =sayHello()
console.log(message)

/* 
? You can use function name 
? but it won't make any difference 
*/
var sendWishes =function () {
    return "Best wishes to you all"
}
var message =sendWishes()
console.log(message)


var getFullName = function (firstName, LastName) {
    return firstName + ' ' + LastName
}

var fullName = getFullName('Tuan', 'Bui')
console.log(fullName)

//using methods : within objects
var obj = {
    firstName: 'uma',
    LastName: 'mahesh',
    getFullName : function() {
        this.firstName + ' ' + this.LastName
        } 
}
