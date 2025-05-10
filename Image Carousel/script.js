const container = document.getElementById('container');
const imgs = document.querySelectorAll('#container img');

const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
let idx = 0;
let interval = setInterval(slide,2000);

function slide() {
    idx++;
    ChangeImage();
}

function ChangeImage() {
    if(idx > imgs.length - 1) {
        idx = 0;
    }
    else if(idx < 0) {
        idx = imgs.length - 1
    }
    container.style.transform = `translateX(${-idx * 500}px)`;
}

leftBtn.addEventListener('click',()=>{
    idx--;
    ChangeImage();
    resetInterval();
});

rightBtn.addEventListener('click',()=>{
    idx++;
    ChangeImage();
    resetInterval();
});

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(slide,2000);
}