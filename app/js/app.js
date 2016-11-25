import Menu from './menu';
import Carousel from './carousel';

require("css!sass!../scss/main.scss");
require("file-loader!../img/background.png");
require("file-loader!../img/header-logo.png");
require("file-loader!../img/dropdown-yellow.svg");
require("file-loader!../img/dropdown.png");
require("file-loader!../img/logo-gotroo.png");
require("file-loader!../img/logo_gotroo.png");
require("file-loader!../img/logo-lrg.png");
require("file-loader!../img/logo.png");
require("file-loader!../img/top-icon.png");



class App {
  constructor(){
    this.body= 'body';
    this.menuTrigger = '.trigger';
    this.carousel    = '.hero-section--slider';
    this.sliderImage = '.slider-image';
    this.target      = '.cta-section';
    this.scrollTo    = '.scroll-to';
  }

  init(){
    const menu = new Menu(this.body, this.menuTrigger);
    const carousel = new Carousel(this.carousel);
    const scrollTrigger = document.querySelector(this.scrollTo);
    // render the carousel component
    carousel.init();
    menu.init();

    scrollTrigger.addEventListener('click', () => {
      $('html, body').animate({scrollTop: scrollTrigger.offsetTop + 50}, 500);
    });
  }
}

window.onload = () => { 
  let app = new App;
  app.init();
}