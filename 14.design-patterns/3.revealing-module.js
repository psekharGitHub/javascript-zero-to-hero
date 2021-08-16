var Module = (function() {
     var privateMethod = function() {
         return 'This is Private Method'
     }
    var someMethod = function() {
        return 'This is Some Method'
    }    
    var anotherMethod = function() {
        return 'This is Another Method'
    }

    //expose private values by writing key-values in return
    return {
        m1 : someMethod,
        m2 : anotherMethod,
        m3 : privateMethod
    }
})()

console.log(Module)

// ? Accessing Private Method

var Module = (function() {
    var privateMethod = function(message){
        return message + ' from Outside'
    }

    var publicMethod = function(text) {
        privateMethod(text)
    }

    return {
        publicMethod : publicMethod
    }
})()

console.log(Module.publicMethod('Accessing Private Method'))

