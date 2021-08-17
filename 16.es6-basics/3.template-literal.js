// ? We are going to use backticks(`)

let simple = `This is a backtick literal`

let str = `Template literal in ES6`
console.log(str)
console.log(str.length)
console.log(typeof str)

// ? Using Single Quote (')

let anotherString = `Here's a Template Literal`
console.log(anotherString)

// ? String containing backtick

let strtWithBackTick = `Template literal use backticks (\`) instead of quotes(', ")`
console.log(strtWithBackTick)

// ? writing Multiline Strings (prior to ES6)

var msg = 'Multiple \nString'
console.log(msg)

/*
    * - take care of indentation as space is
    *   also included with backticks
*/
let msgWithText = 
                `
                This text
                can 
                span multiple lines
                `
console.log(msgWithText)

// ? Variable and Expression substitution with ${}

let firstName = "Scott", lastName  = "Lang"      //lastName takes let automatically

let greeting = `Hi ${firstName} ${lastName}`
console.log(greeting)