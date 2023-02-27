const menuButton = document.getElementById('menu-button');

function toggleMenu(ev){
    if(ev.type === 'touchstart') ev.stopPropagation();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

menuButton.addEventListener('click', toggleMenu);
menuButton.addEventListener('touchstart', toggleMenu);
