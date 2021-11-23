console.log('Welcome to Destructuring in Js');

const fruits = ['Apple', 'Banana', 'Mango', 'Peach', 'Grapes', 'Lime'];

// ... three dots is destructing operator, which assigns all leftover items to the variable
let [a, b, c, ...d] = fruits;

console.log(a)  //Apple
console.log(b)  //Banana
console.log(c)  //Mango
console.log(d) //['Peach', 'Grapes', 'Lime']

const laptop = {
    name : 'HP',
    gpu : 'Nvidia 1650TX',
    cpu : 'i7',
    light : 'rgb',
    display : '1080p',
    price : 100000,
    start: function () {
            console.log('started');
    }
}

//destructuring
const {name, gpu, cpu, ...misc} = laptop;
console.log(name, gpu, cpu, misc);


