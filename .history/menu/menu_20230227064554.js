const menuButton = document.getElementById('menu-button');

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
  
}

menuButton.addEventListener('click', event (){
      const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
);
menuButton.addEventListener('touchstart', toggleMenu);
