console.log('Welcome to Fetch API');

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', getData);

let postBtn = document.getElementById('postBtn');
postBtn.addEventListener('click', postData);

// function getData(){
//     console.log("Started getData")
//     url = "https://api.github.com/users";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.json();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }

//Get Data
function getData() {
    url = 'https://api.github.com/users';
    fetch(url).then(response => response.json())
    .then(data => console.log(data))
}

//Post Data
function postData() {
    url = 'https://reqres.in/api/users';
    data = '{"name": "bridgerton", "job": "wife"}'
    params = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }

    fetch(url, params).then(response => response.json())
    .then(data => console.log(data))
}