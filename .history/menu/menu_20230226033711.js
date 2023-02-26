const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('links-menu');
const closeMenu = document.getElementById('close-menu')

menuButton.addEventListener('click', event =>{
    if(navMenu.style.display == 'none' ){
        navMenu.style.display = 'block' 
        menuButton.style.color = '#121d46'
    }else{
        navMenu.style.display = 'none'
       
    }
})