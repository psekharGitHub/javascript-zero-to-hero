console.log('Welcome to Generators');
/**
 * Syntax:  function* myGenerator(){
                //code
            }
    yield: The yield keyword pauses the generator function execution, and
           the value of the expression following the yield keyword is
           returned to the generator's caller.

           function* awesomeGenerator(){
                yield 'Hello World' // We pause the execution here
                console.log('We are back again') // When we resume, we are here
            }
    
    next(): A generator gives us the next() method, which is used to resume the
            execution. This method returns an object with two properties
            next() : function() {
                                    value: [ next value ],
                                    done: [ true if we reach the end, else false]
                    }
 * 
 */

console.log("this is tutorial 53");
// Generators in JavaScript
// 1 - 1B

function* numbersGen(){
    let i = 0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    while(true){
        yield i++;
        // yield (i++).toString();
    }
}

const gen = numbersGen();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

