// //Crawl a page and print all the links that contains text='javascript'
// let a = document.links

// Array.from(a).forEach(function (element) {
//     let text = "javascript"
//     if (String(element).includes(text)) {
//         console.log(element)
//     }
// })

//Element Selector
//1. single element selectors

// let element = document.getElementById('first');
// console.log(element);


// let sel = document.querySelector('#first')
// let sel = document.querySelector('.container')
// console.log(sel)
// sel.style.color = 'green'

//2. multi selectors
let elem = document.getElementsByClassName('pp')
console.log(elem[0])
console.log(elem[1])
console.log(elem[2])

let elems = document.getElementsByTagName('div')
//using for each loop to iterate over collection after converting it to Array
// Array.from(elems).forEach(element => {
//     console.log(element);
//     element.style.color='red'
// });


//using for loop to iterate over collections
for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color = 'magenta';
    
}


console.log('Welcome to tutorial 15');

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeName)
// console.log(nodeType)
// Node types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType

// console.log(cont.childNodes);
// console.log(cont.children);

let container = document.querySelector('div.container');

// console.log(container.children[1].children[0].children);

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.children);
// console.log(container.childElementCount); // Count of child elements

// console.log(container.firstElementChild.parentNode);
// console.log(container.firstElementChild.parentNode.parentNode);
// console.log(container.firstElementChild.nextSibling);
// console.log(container.firstElementChild.nextElementSibling);
// console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
//---------------------------------------------------------------------------------------

console.log('This is testing');

//Grab an element
let element = document.createElement('li')

//Set attributes
element.className = 'childul'
element.id = 'createLi'
element.setAttribute('title', 'myTitle')

console.log(element)

//Append child elements
let elem2 = document.createElement('h3')
elem2.id = 'elemid'
elem2.class = 'elemclass'
let tnode = document.createTextNode('This is replaced text')
elem2.appendChild(tnode)
console.log(elem2)

element.appendChild(elem2)

//Repalce child elements
elem3 = document.getElementById('uid')
elem3.replaceChild(element, document.getElementById('cid'))

console.log(elem3)

//Create new element and adding to DOM
elem = document.createElement('h2')
elem.innerHTML = '<strong> Dancing in a Burning Room </strong>'
elem.style.color = 'green'
link = document.createElement('a')

divi = document.getElementById('div1')
divi.appendChild(elem)
divi.appendChild(link)

//Replace an element with other
// head2 = document.createElement('h1')
// head2.innerHTML = 'Code With Harry'
// head2.style.color = 'red'
// head1 = document.getElementById('heading')
// head1.replaceWith(head2)

//Event Listener
let d1 = document.getElementById('heading')
d1.addEventListener('click', function(e){
    let cl = e.target;
    let cN = e.target.className;
    let cL = e.target.classList;
    let cI = e.target.id;

    //let variable = e.offsetX;
    let variable = e.offsetY;
    console.log("offset y" + variable);

    console.log(cl);
    console.log(cN);
    console.log(cL);
    console.log(cI);
    console.log('You have clicked Heading')
})

//Event Listener
console.log('This is tut 18');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// // btn.addEventListener('mousedown', func3);
// btn.addEventListener('dblclick', func2);

// function func1(e) {
//     console.log("Thanks", e);
//     e.preventDefault();
// }

// function func2(e) {
//     console.log("Thanks its a double click", e);
//     e.preventDefault();
// }

// function func3(e) {
//     console.log("Thanks its a mouse down ", e);
//     e.preventDefault();
// }
// document.querySelector('.no').addEventListener('mouseenter', function(){


//     console.log('You entered no')
// })

// document.querySelector('.no').addEventListener('mouseleave', function(){
//     console.log('You exited no')
// })

document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
    console.log('You triggered mouse move event')
})