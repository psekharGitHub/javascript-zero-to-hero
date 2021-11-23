console.log('Ajax Tutorials');

let fetchbtn = document.getElementById('fetch-btn');
fetchbtn.addEventListener('click', ButtonClickHandler);

function ButtonClickHandler() {
    console.log('You have clicked the fetch button');

    // crate object of XMLHttpRequest
    const xhr = new XMLHttpRequest();

    /*
     - initiate request / instantiate the object xhr
     - true -> so request does not get blocked
    */ 
    
    // xhr.open('GET', 'dummy.txt', true); 
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    
    //xhr.getAllResponseHeaders('Content-type', 'application/x-www-form-urlencoded');
    xhr.getAllResponseHeaders('Content-type', 'application/json');

    // What to do on progess ?
    xhr.onprogress = function () {
        console.log('On Progress')
    };

    // What to do on load ?
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.log('Some error occured');
        }
        
    };

    // send the request
    /*  if content type is url encoded send in this format
        params = "name=test&salary=123&age=23";
    */

    // content type JSON
    params = `{
                "name":"test",
                "salary":"123",
                "age":"23"
            }`;

    xhr.send(params);
}

let popBtn = document.getElementById('pop-btn');
popBtn.addEventListener('click',PopClickHandler);

function PopClickHandler() {
    console.log('You have clicked the pop button');

    // crate object of XMLHttpRequest
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employee/1', true);

    // What to do on load ?
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";

            for (key in obj) {
                str += `<li> ${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        } else {
            console.log('Some error occured');
        }
        
    };

    xhr.send();
    console.log('We are done fetching employee details');
}