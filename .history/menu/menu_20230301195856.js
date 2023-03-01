class MobileNavbar{
      constructor(mobileMenu, navList, navLinks){
            this.mobileMenu = document.querySelector(menuBurguer);
            this.navList = document.querySelector(menuMobile)
            this.navLinks = document.querySelectorAll(navLinks)
            this.activeClass = "active";

            this.handleClick = this.handleClick.bind(this)
      }
}

animateLinks(){
      this.navLinks.foreach((link, index) =>{
            link.style.animation

            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}`)
      }
      
      )
}

handleClick(){
      this.navList.classList.toggle(this.activeClass)
}