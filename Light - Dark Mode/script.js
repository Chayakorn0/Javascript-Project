const switchToggle = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('nav');
const image_1 = document.getElementById('image-1');
const image_2 = document.getElementById('image-2');
const image_3 = document.getElementById('image-3');


function switchMode(e) {
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        darkMode();
        imageSwitchMode('dark');
    }
    else{
        document.documentElement.setAttribute('data-theme','light');
        lightMode();
        imageSwitchMode('light');
    }
}

function darkMode() {
    toggleIcon.children[0].textContent="Darkmode";
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    nav.style.backgroundColor='rgb(0 0 0 / 50%)';
}

function lightMode() {
    toggleIcon.children[0].textContent="Lightmode";
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    nav.style.backgroundColor='rgb(255 255 255 / 50%)';
}

function imageSwitchMode(mode) {
    image_1.src=`Image/undraw_web-developer_${mode}.svg`;
    image_2.src=`Image/undraw_video-games_${mode}.svg`;
    image_3.src=`Image/undraw_freelancer_${mode}.svg`;
}

switchToggle.addEventListener('change',switchMode);