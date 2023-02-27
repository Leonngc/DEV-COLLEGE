const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', event =>{
      const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    
}
);
menuButton.addEventListener('touchstart', event =>{
     if(event.type === 'touchstart') event.preventDefault();
});
