// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// note: cannot grab delete button here at the beginning as it is added dynamically
// const deleteBtn = document.querySelectorAll('.delete-btn')

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
//submit form
form.addEventListener("submit", addItem)

//clear item
clearBtn.addEventListener('click', clearItems)

//load item
window.addEventListener('DOMConentLoaded', setupItems)

// ****** FUNCTIONS **********
function addItem (e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString(); //generate unique id
    if (value && !editFlag) {
      console.log("Adding item to the list");
      createListItem(id, value)
      //display alert
      displayAlert('Item added to the list', 'success')
  
      //show container
      container.classList.add('show-container')
  
      //add to local storage
      addToLocalStorage(id, value)
  
      //set back to default
      setBackToDefault()
  
    } else if (value && editFlag) {
      console.log("Editing item");
      editElement.innerHTML = value
      displayAlert('Value edited', 'success')
      editLocalStorage(editID, value)
      setBackToDefault()
    } else {
      console.log("Empty item");
      //display alert
      displayAlert('Empty item', 'danger')
    }
  }

//display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
  
    //remove alert after 1 sec
    setTimeout(() => {
      alert.textContent = '';
      alert.classList.remove(`alert-${action}`);
    }, 1000);
}
  
//clear items
function clearItems() {
    const items = document.querySelectorAll('.grocery-item')
    if (items.length > 0) {
        items.forEach((item) => {
            list.removeChild(item)
        });
    }
    container.classList.remove('show-container')
    displayAlert('empty list', 'danger')
    setBackToDefault()
    localStorage.removeItem('list')
}

//edit function
function editItem(e) {
    console.log('edit item');
    const element = e.currentTarget.parentElement.parentElement

    //set edit item 
    editElement = e.currentTarget.parentElement.previousElementSibling

    //set form value
    grocery.value = editElement.innerHTML   //innerText also works

    editFlag = true
    //set the unique id of the element it had before editing
    editID = element.dataset.id

    submitBtn.textContent = 'edit'
}

//delete function
function deleteItem(e) {
    console.log('delete item');
    const element = e.currentTarget.parentElement.parentElement
    const id = element.dataset.id

    list.removeChild(element)
    if (list.children.length === 0) {
        container.classList.remove('show-container')
    }
    displayAlert('Item removed', 'danger')
    setBackToDefault()
    //remove from local storage
    removeFromLocalStorage(id)
}

//set back to default
function setBackToDefault() {
    console.log('set back to default');
    grocery.value = ''
    editFlag = false
    editID = ''
    submitBtn.textContent = 'submit'
  }

// ****** LOCAL STORAGE **********
//local storage api
//setItem
//getItem
//removeItem
//save as string, so always use JSON.stringify() while storing and JSON.parse while retrieving

function addToLocalStorage(id, value) {
    console.log('added to local storage');
    const grocery = { id,value }        //{ id:id, value:value }
    let items = getLocalStorage()
    items.push(grocery)

    //set item
    localStorage.setItem('list', JSON.stringify(items))

}

function removeFromLocalStorage(id) {
    let items = getLocalStorage()
    //build new items list without the item id passed in as parameter
    items = items.filter((item) => {
        if (item.id !== id) {
            return item
        }
    })
    //set item
    localStorage.setItem('list', JSON.stringify(items))    
}

function editLocalStorage(id, value) {
    let items = getLocalStorage()
    //iterate through all the items and if it matches with
    //the id passed as parameter, then update the value
    items = items.map((item) => {
        if (item.id === id)
            item.value = value
        return item
    })
    //set item
    localStorage.setItem('list', JSON.stringify(items))
}

function getLocalStorage() {
    return localStorage.getItem('list')
            ? JSON.parse(localStorage.getItem('list')) : []
}
// ****** SETUP ITEMS **********
function setupItems() {
    let items = getLocalStorage()
    if (items.length > 0) {
        item.forEach((item) => {
            items.forEach((item) => {
                createListItem(item.id, item.value)
            })
        })
        container.classList.add('show-container')
    }
}

function createListItem(id, value) {
    const element = document.createElement("article");
    const attr = document.createAttribute("data-id");
    //add class
    element.classList.add("grocery-item");
    //add id
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = ` <p title="item">${value}</p>
                            <div class="btn-container">
                                <button type="button" class="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="delete-btn">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>`;

    //grab delete btn after adding dynamically
    const deleteBtn = element.querySelector('.delete-btn')
    //add delete event listener
    deleteBtn.addEventListener('click', deleteItem)
    
    //edit button
    const editBtn = element.querySelector('.edit-btn')
    //add edit event listener
    editBtn.addEventListener('click', editItem)

    //append child
    list.appendChild(element)
}
