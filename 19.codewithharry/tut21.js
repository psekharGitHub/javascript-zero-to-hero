//Event Listener Exercise
/**
 *  - You have to create a div and inject it into the page which contains a heading.
    - Whenever someone clicks on the div, it should be converted into an editable item.
    - Whenever user clicks away (blur).
    - Save the note into the local storage.
 * 
 */

console.log('Welcome to tutorial 21')
// let head1 = document.getElementById('heading')
let divElem = document.createElement('div')
divElem.setAttribute('id', 'conId')
divElem.setAttribute('class', 'conClass')
divElem.setAttribute('contenteditable', 'true')

divElem.innerText = "Injected in the page"

let c1 = document.querySelector('.container')
c1.appendChild(divElem)
console.log(c1)

input_area = document.getElementById('conId')
divText = input_area.innerText
console.log(divText)

localStorage.setItem('content', divText)

input_area.addEventListener('click', function (element) {
    let tempText = input_area.innerText;
    localStorage.setItem('content', tempText);
    input_area.innerText = tempText;

})

