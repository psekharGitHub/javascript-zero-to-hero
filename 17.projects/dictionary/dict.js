console.log('Welcome to Dictionary');

let searchBtn = document.getElementById('search');
searchBtn.addEventListener('click', showDefinition);

function showDefinition() {
    const xhr = new XMLHttpRequest();

    console.log(xhr);
    //open object
    xhr.open('GET','wordapi.json',true)

    //get response
    //xhr.getAllResponseHeaders('Content-type', 'application/json');

       // What to do on progess ?
    xhr.onprogress = function () {
        console.log('On Progress')
    };

    // What to do on load ?
    xhr.onload = function () {
        if (this.status === 200) {
            console.log('Status Code OK');
            defObj = JSON.parse(this.responseText);
            defArr = defObj.results;
            let html = "";
            let list = document.getElementById('list');
            console.log(list);
            for (i=0; i < defArr.length; i++) {
                html += `<li class="py-2 list-group-item list-group-item-light">${defArr[i].definition}</li>`;
            }
            list.innerHTML += html;
        } else {
            console.log('Some error occured');
        }
    };

    xhr.send();
    console.log('We are done sending request');
}