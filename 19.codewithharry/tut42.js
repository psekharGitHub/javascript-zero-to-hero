console.log('Welcome to Iterators')

function fruitIterator(values) {
    let nextIndex = 0
    return {
        next : function () {
            if (nextIndex < values.length) {
                return {
                    value : values[nextIndex++],
                    done : false            //done is false as there are still elements left in array
                }
            } else {
                return {
                    done : true             //done is true as no more elements are left
                }
            }
        }
    }
}

let myArray = ['Apple', 'Grapes', 'Mango', 'Banana'];
valArr = fruitIterator(myArray);

console.log(valArr.next().value);
console.log(valArr.next().value);
console.log(valArr.next().value);
console.log(valArr.next().value);