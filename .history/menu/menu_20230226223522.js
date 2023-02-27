const menuButton = document.getElementById('menu-button');


function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const body = document.getElementsByTagName('body')
    body.style.background-c
}

menuButton.addEventListener('click', toggleMenu);
menuButton.addEventListener('touchstart', toggleMenu)
