/*
    ? var - function scoped
*/

function Sample(){
    var variable = "hello"
}
//console.log(variable)   // this will throw an error

/*
    ? let, const - block scoped
    ? can reassign value using let, but not const (excpet object)
*/

if (true){
    var foo = "Hello"
    let bar = "How are you ?"
    const baz = "I am fine"

    console.log(foo)
    console.log(bar)
    console.log(baz)
}

/* 
    ! will throw error, since out of block
    ! Reference error
*/
// console.log(foo) 
// console.log(bar) 
// console.log(baz) 

function test() {
    if (true){
        var foo = "Hello"
        let bar = "How are you ?"
        const baz = "I am fine"

        console.log(foo)
        console.log(bar)
        console.log(baz)
    }
    console.log(foo)
    console.log(bar)
    console.log(baz)
}

// ! Reference Error. let and const referenced out of block
// test()

for (var i=0; i < 3; i++) {
    console.log(i)
}
console.log(i)  // * i can be accessed outside for loop

for (let i=0; i < 3; i++) {
    console.log(i)
}
// ! Reference Error; 'let' access out of block
// console.log(i)

// ? - redefining / reassigning let

function sample() {
    let first = 1
    first = 10  // * can reassign variable using let

    // ! Error, 'let' variable redeclared
    //let first = 101

    const sec = 2
    // sec = 54 // ! Error, const can't be reassigned
    console.log(sec);
}

sample()