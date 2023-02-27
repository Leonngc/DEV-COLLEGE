const menuButton = document.getElementById('menu-button');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

menuButton.addEventListener('c', toggleMenu);
menuButton.addEventListener('touchstart', toggleMenu)
