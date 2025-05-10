const contents = document.querySelectorAll('.content');

document.addEventListener('scroll',showText);

function showText(){

    contents.forEach((section)=>{
        const imgEl = section.querySelector('img');
        const textEl = section.querySelector('.text');

        const scrollPos = window.pageYOffset;
        // 500 + 100 / 50
        // 500 + 2 = 502 -> Showtext
        const textPos = imgEl.offsetTop + imgEl.offsetHeight / 50;
        if(scrollPos > textPos){
            // Showtext
            textEl.classList.add('show-reveal');
        }
        else{
            // Hidetext
            textEl.classList.remove('show-reveal');
        }
    });
}