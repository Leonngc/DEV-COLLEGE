const menuButton = document.getElementById('menu-button');

function toggleMenu(event){
   
  
}

menuButton.addEventListener('click', event =>{
      const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
);
menuButton.addEventListener('touchstart', event =>{
     if(event.type === 'touchstart') event.preventDefault();
});
