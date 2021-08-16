/*
? Singleton
* - this pattern ensures a class has only one instance and
* provide a global point of access to it 
*/

// ! Problem : Multiple instances created for same class
function Student() {
    console.log('Instance created')
}
var student1 = new Student()
var student2 = new Student()
var student3 = new Student()
var student4 = new Student()
var student5 = new Student()

// * Solution

var Singleton = (function() {
    var instance = null
    
    // * this function will create instances for us
    var createInstance = function() {
        var obj = Object.create(null)
        console.log('Object has been created')
        return obj
    }

    var getInstance = function() {
        if (!instance) {
            instance = createInstance()
        }
        return instance
    }
    return {
        getMyInstance: getInstance
    }
})()

var singleton1 = Singleton.getMyInstance()
console.log(singleton1)

var singleton2 = Singleton.getMyInstance()
console.log(singleton2)

