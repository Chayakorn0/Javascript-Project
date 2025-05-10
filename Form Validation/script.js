const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const re_password = document.getElementById('re-password');

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkInput([username,email,password,re_password]);
    if(!validateEmail(email.value.trim())) {
        showError(email,"อีเมลไม่ถูกต้อง")
    }
    else {
        showSuccess(email);
    }
    checkPassword(password,re_password);
    checkInputlength(username,6,13);
    checkInputlength(password,8,15);
});

function showError(input,message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// This function get Source Code from Stackoverflow.com
const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function checkInput(inputArray) {
    inputArray.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`กรุณาป้อน ${getInputUpperCase(input)}`);
        }
        else {
            showSuccess(input);
        }
    })
}

function getInputUpperCase(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkPassword(password,re_password) {
    if(password.value !== re_password.value) {
        showError(re_password,"รหัสผ่านไม่ตรงกัน");
    }
}

function checkInputlength(input,min,max) {
    if(input.value.length < min) {
        showError(input,`${getInputUpperCase(input)} ต้องมากกว่า ${min} ตัวอักษร`);
    }
    else if(input.value.length > max) {
        showError(input,`${getInputUpperCase(input)} ต้องไม่เกิน ${max} ตัวอักษร`);
    }
    else {
        showSuccess(input);
    }
}