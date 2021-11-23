console.log('This is Validation JS');
let name = document.getElementById('name')
let phone = document.getElementById('phone')
let email = document.getElementById('email')
validUser = false;
validPhone = false;
validEmail = false;

name.addEventListener('blur', ()=>{
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    if (regex.test(str)) {
        name.classList.remove('is-invalid');
        validUser = true;
    } else {
        name.classList.add('is-invalid');
        validUser = false;
    }
})

email.addEventListener('blur', ()=>{
    let regex = /^([a-zA-Z0-9\_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if (regex.test(str)) {
        email.classList.remove('is-invalid');
        validEmail = true;
    } else {
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', ()=>{
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    if (regex.test(str)) {
        phone.classList.remove('is-invalid');
        validPhone = true;
    } else {
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');

submit.addEventListener('click', submitForm);

function submitForm(e) {
    e.preventDefault();
    let success = document.getElementById('success')

     // Submit your form here
     if(validEmail && validUser && validPhone){
        let failure = document.getElementById('failure');

        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');             //append 'show' to class of id=success, controlls show/hide alerts

        $('#failure').hide();
        $('#success').show();
        
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');

        $('#success').hide();
        $('#failure').show();
        }
}