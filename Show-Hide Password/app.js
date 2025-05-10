const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click',()=>{
    if(input.getAttribute('type') === 'password') {
        input.setAttribute('type','text')
        button.innerHTML = 'ซ่อนรหัสผ่าน'
    }
    else {
        input.setAttribute('type','password')
        button.innerHTML = 'แสดงรหัสผ่าน'
    }
})