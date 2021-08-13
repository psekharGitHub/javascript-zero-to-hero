/*
    ? IIF - Immediately Invoked Function
    ? created using private scope
    ? wrapped inside a pair of paranthesis
*/
(function (message) {
    console.log(message + ': no return statement')
}) ('Welcome to IIFs')


var getMessage =(function (message) {
    return message
}) ('Welcome to IIFs: Paranthesis outside')

console.log(getMessage)


var getMessage =(function (message) {
    return message
}('Welcome to IIFs: Paranthesis inside'))

console.log(getMessage)

//Statement
//(var foo =10 > 9) //Error
//(var foo ="foo", bar ="bar") //Error


//Expression
//(10>9);
//(console.log('hi'))