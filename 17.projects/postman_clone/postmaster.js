console.log('Welcome to PostMan Clone App');


// Utility functions:
// 1. Utility function to get DOM element from string
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

//validate url
// const url = document.getElementById('url');
// url.addEventListener('blur', (e)=>{
//     let regex = /^([a-zA-Z0-9\_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]){2,7}$/;
//     str = url.value;
//     if (regex.test(str)) {
//         console.log('Valid url')
//     } else {
//         url.classList.add('is-invalid');
//     }
// })

//On load JSON radio is checked so hide custom parameter panel
const param = document.getElementById('parameterBox');
param.style.display = 'none';

//grab json box
const jsonBox = document.getElementById('requestJsonBox');

//grab custom parameter radio button response
const paramRadio = document.getElementById('paramRadio');
console.log(paramRadio)
paramRadio.addEventListener('click', (e)=>{
    param.style.display = 'block';
    jsonBox.style.display = 'none';

})

//grab json radio button response
const jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', (e)=> {
    param.style.display = 'none';
    jsonBox.style.display = 'block';
})

// If the user clicks on + button, add more parameters
let parCount = 2
let addedParamCount = 2;
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string = `  <div class="input-group mb-3" id="paramList">
                        <label for="url" class="col-sm-2 col-form-label">Parameters${parCount}</label>
                        <input type="text" class="form-control" id="parameterKey${addedParamCount+1}" placeholder="parameter${addedParamCount+1}" aria-label="Username" style="margin: 15px;">
                        <input type="text" class="form-control" id="parameterValue${addedParamCount+2}" placeholder="parameter${addedParamCount+2}" aria-label="Server" style="margin: 15px;">
                        <button class="btn btn-primary deleteParam"> - </button>
                    </div>>`;

     // Convert the element string to DOM node
    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);
    // Add an event listener to remove the parameter on clicking - button
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            // TODO: add a confirmation box to confirm parameter deletion
            e.target.parentElement.remove();
        });
    }

    addedParamCount+=2;
    parCount++;  
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    // Fetch all the values user has entered
    let url = document.getElementById("url").value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;
 
    if (contentType === 'params') {
        data = {};
        for (let i = 0; i < addedParamCount+1; i++) {
            if (document.getElementById('parameterKey'+(i + 1)) != undefined) {
                let key = document.getElementById('parameterKey'+(i + 1)).value;
                let value = document.getElementById('parameterValue'+(i + 2)).value;
                data[key] = value; 
            }
        }
        data = JSON.stringify(data);
    } else {
        data = document.getElementById('requestJsonText').value;
    }
    
    console.log(url)
    console.log(requestType)
    console.log(contentType)
    console.log(data);

    if (requestType == 'GET') {
        fetch(url, {
            method : 'GET'
        }).then((response) => response.text())
        .then((text)=> {
            document.getElementById('responsePrism').innerHTML = text;
        });
    } else {
        fetch(url, {
              method: 'POST', 
             body: data,
             headers: {
                 "Content-type": "application/json; charset=UTF-8"
             },
        }).then((response)=> response.text()).then((text)=> {
            document.getElementById('responsePrism').innerHTML = text;
        });
    }
});
//https://reqres.in/api/users
//{"name": "bridgerton", "job": "wife"}