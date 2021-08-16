/*
    ? Module Pattern
    * - deals with encapsulation
    * - used to create private and public properties
*/

var Module = (function(){

})()

// ? Create Private Methods: which are not accessible to outside world

var Module = (function() {
    var privateMethod = function() {
        console.log('This is Private Method')
    }
    return {}
})()

// * returns an object
console.log(Module)
//! cannot access privateMethod outside function 
console.log(Module.privateMethod)

// ? Public Method: available to outside world
// * Method 1
var Module = (function() {
    var publicMethod = function() {
        return 'This is public method'
    }
    return {
        publicMethod: publicMethod
    }
})()

console.log(Module.publicMethod())

// * Method 2
var Module = (function() {
    return {
        publicMethod: function(){
            return 'This is public method'
        }
    }
})()

console.log(Module.publicMethod())

// ? Anonymous Object Literal return
console.log(' Anonymous Object Literal')

var Module = (function() {
    priveMethod = function() {
        console.log('This is a private method')
    }

    return {
        publicMethodOne: function(){
            return "This is Public Method 1"
        },
        publicMethodTwo: function(){
            return "This is Public Method 2"
        },
        publicMethodThree: function(){
            return "This is Public Method 3"
        }
    }
})()

console.log(Module)


// ? Logically Scoped Object Literal
console.log('Logically Scoped Object Lieral')

var Modules = (function() {

    //logically scoped object
    var myObj = {}

    var privateMethod = function() {
        return 'This is a Private Method'
    }
    myObj.publicMethod = function() {
        return 'This is a Public Method'
    }

    return myObj
})()

console.log(Module)

// ? Stacked Logically Scoped Object Literal
console.log('Stacked Logically Scoped Object Literal')

var Module = (function() {
    var privateMethod = function() {
        return "This is Private Method"
    }

    var myObject = {
        someMethod : function() {

        },
        anotherMethod : function() {

        }
    }

    return myObject
})()

console.log(Module)
