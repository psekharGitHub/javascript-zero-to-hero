console.log('This is index.js');

//Constructor
function Book(name, author, type) {
    this.name = name,
    this.author = author,
    this.type = type
}

//Display Constructor
function Display() {

}

//Add events to display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    let tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

// Implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

//Implementing validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2)
        return false;
    else 
    return true;
}

//Implementing show function
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);

}


//Add submitEventListener
let libraryform = document.getElementById('libraryForm');
libraryform.addEventListener('submit', submitLibraryForm);

function submitLibraryForm(e) {
    e.preventDefault();
    console.log('Form has been submitted');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;
    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('Congratulations', 'Book was added successfully');
    } else {
        display.show('Sorry', 'Book could not be added');
    }
}


/**
 * 
    let html = `
        <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr> 
        `;

    let tbody = document.getElementById('table');
    console.log(tbody);

    tbody.innerHTML += html;
 */

