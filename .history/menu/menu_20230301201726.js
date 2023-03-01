class MobileNavbar {
      constructor(mobileMenu, navList, navLinks){
            this.mobileMenu = document.querySelector(menuBurguer);
            this.navList = document.querySelector(menuMobile);
            this.navLinks = document.querySelectorAll(navLink);
            this.activeClass = "active";

            this.handleClick = this.handleClick.bind(this);
      }


animateLinks(){
      this.navLinks.foreach((link, index) => {
            link.style.animation

            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                  index / 7 + 0.3
            }s`);
      });
}

handleClick(){
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
}

addClickEvent(){
      this.mobileMenu.addEventListener("click", this.handleClick);
}

init() {
      if(this.mobileMenu){
            this.addClickEvent();
      }
      return this;
}
}

const MobileNavbar = new MobileNavbar(
      ".mobile-menu",
      ".menu-mobile"
)