const menuButton = document.getElementById('menu-button');
const nav = document.getElementById('nav');

function toggleMenu(){
    nav.classList.toggle('active')
}

menuButton.addEventListener('click', toggleMenu())
menuButton.addEventListener('touchstart', toggleMenu())