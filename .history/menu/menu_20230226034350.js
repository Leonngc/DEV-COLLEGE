const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('links-menu');
const closeMenu = document.getElementById('close-menu')

menuButton.addEventListener('click', event =>{
    if(navMenu.style.display == 'none' ){
        navMenu.style.display = 'block' 
    }else{
        navMenu.style.display = 'none'
    }
})

closeMenu.addEventListener('click', event)