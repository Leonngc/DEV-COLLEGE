const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('links-menu');

menuButton.addEventListener('click', ()=>{
    if(navMenu.style.display == 'none'){
        alert('td certo1')
    }else{
        alert('td cert2')
    }
})