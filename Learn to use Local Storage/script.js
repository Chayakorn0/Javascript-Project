const setting = document.getElementById('settings');
const text = document.querySelector('p');
const resetBtn = document.getElementById('reset');
const body = document.querySelector('body');

// true -> Dark Mode
// false -> Light Mode
setting.addEventListener('change',()=>{
    // Save settings to Local Storage
    localStorage.setItem('dark-mode',setting.checked);
    loadTheme();
})

resetBtn.addEventListener('click',()=>{
    localStorage.clear()
    loadTheme();
})

function loadTheme() {
    // Retrieve settings | string -> boolean
    const status = JSON.parse(localStorage.getItem('dark-mode'));
    setting.checked = status;
    if(status) {
        text.innerText = "Dark Mode"
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
        body.style.transition = '1s'
    }
    else {
        text.innerText = "Light Mode"
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
        body.style.transition = '1s'
    }
}

loadTheme();