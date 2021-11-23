console.log('Welcome to tutorial 25');
/**
 *  - You have to create a div and inject it into the page which contains a heading.
    - Whenever someone clicks on the div, it should be converted into an editable item.
    - Whenever user clicks away (blur).
    - Save the note into the local storage.
 * 
 */
//Solution :

para = document.createElement('p')
para.setAttribute('name', 'nameNew')
para.setAttribute('id', 'idNew')
para.setAttribute('contenteditable', true)

//setup local Storage
val = localStorage.getItem('content');
if (val == null) {
    html = 'I have inserted this text in the page';
    localStorage.setItem('content', html)
} else {
    html = val;
}
para.innerHTML = html;

bdiv = document.querySelector('.container')
bdiv.appendChild(para)

//grab text area
textArea = document.getElementById('idNew')

//blur event
textArea.addEventListener('blur', (e)=>{
    localStorage.setItem('content', textArea.innerText);
})