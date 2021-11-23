console.log('Welcome to grocery store');

let popFBtn = document.getElementById('popFBtn');
let popVBtn = document.getElementById('popVBtn');

console.log(popFBtn);
popFBtn.addEventListener('click', popFButtonHandler);
popVBtn.addEventListener('click', popVButtonHandler);

function popFButtonHandler() {
    const xhr = new XMLHttpRequest;

    //open xhr object
    xhr.open('GET', 'fruits.json', true);
    //track the progress after opening
    xhr.onprogress = function () {
        console.log('Progressing...');
    }

    //action to perform after loading is complete
    xhr.onload = function () {
        if (this.status === 200) {
            fruitsArray = JSON.parse(this.responseText);
            console.log(fruitsArray)
            index=1;
            html = "";
            fruitsArray.forEach(element => {
                html += `<tr>
                            <th scope="row">${index++}</th>
                            <td>${element.title}</td>
                        </tr>`;
            });
            fruitBody = document.getElementById('fruit');
            fruitBody.innerHTML += html;
        }
        else
            console.log('Could not load the page');
    }
    
    //Finally send the shr request
    xhr.send();
}

function popVButtonHandler() {
    const xhr = new XMLHttpRequest;

    xhr.open('GET', 'vegie.json', true);
    xhr.onprogress = function () {
        console.log('Progressing...');
    }

    xhr.onload = function () {
        if (this.status === 200) {
            vegArray = JSON.parse(this.responseText);
            console.log(vegArray)
            let index=1;
            html = "";
            vegArray.forEach(element => {
                html += `<tr>
                            <th scope="row">${index++}</th>
                            <td>${element.title}</td>
                        </tr>`;
            });
            vegBody = document.getElementById('veg');
            vegBody.innerHTML += html;
        }
        else
            console.log('Could not load the page');
    }
    xhr.send();
}