const menuButton = document.getElementById('menu-button');
const nav = document.getElementById('nav');

function toggleMenu(event){
    if (event.cu)
    nav.classList.toggle('active')
}

menuButton.addEventListener('click', toggleMenu())
menuButton.addEventListener('touchstart', toggleMenu())