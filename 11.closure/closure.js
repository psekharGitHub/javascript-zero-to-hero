/*
?   - closure property
?   - inner/child function has access to outer/parent function's parameter
*/
function greet(message) {
    return function wish(name) {
        console.log(message + ' ' + name)
    }
}

var getMessage = greet('Welcome')
var sayhello = getMessage('Peter')  //pointing to parameter of parent method
