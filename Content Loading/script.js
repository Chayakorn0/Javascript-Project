const header = document.getElementById('header');
const title = document.getElementById('title');
const description = document.getElementById('description');
const profile_img = document.getElementById('profile-img');
const seller_name = document.getElementById('name');
const price = document.getElementById('price');

const animated_bg = document.querySelectorAll('.animated-bg');
const animated_text = document.querySelectorAll('.animated-text');

setTimeout(showContent,2000);

function showContent() {
    header.innerHTML = `
    <img src="https://cdn.pixabay.com/photo/2019/09/03/10/53/watch-4449152_640.jpg" alt="">
    `;
    title.innerHTML = `Watch`;
    description.innerHTML = `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis veritatis beatae ab? Nobis, aperiam. Repellendus dolores, deleniti voluptatem placeat sequi quam hic error tenetur iure a unde est? Cum, accusantium.
    `;
    profile_img.innerHTML = `
    <img src="https://randomuser.me/api/portraits/men/6.jpg" alt="">
    `;
    seller_name.innerHTML = `Rick Gregory`;
    price.innerHTML = `500 USD`;
    animated_bg.forEach(el=>el.classList.remove('animated-bg'));
    animated_text.forEach(el=>el.classList.remove('animated-text'));
}