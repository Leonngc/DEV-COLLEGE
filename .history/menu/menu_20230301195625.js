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
      this.menuMobile.foreach((link, index) =>{
            link.style.animation

            ? (link.style.animation = "")
            : (link.style.animation = `nav`)
      }
      
      )
}