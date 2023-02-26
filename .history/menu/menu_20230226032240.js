const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('links-menu');
cons

menuButton.addEventListener('click', ()=>{
    if(navMenu.style.display == 'none'){
        navMenu.style.display = 'block'
    }else{
        navMenu.style.display = 'none'
    }
})