import Menu from './menu';
import Carousel from './carousel';


const style   = require("!style!css!sass!../scss/main.scss");

class App {
  constructor(){
    this.menuWrapper = '#side-menu';
    this.menuTrigger = '.trigger';
    this.carousel    = '.hero-slider';
    this.sliderImage = '.slider-image';
  }

  init(){
    const menu       = new Menu(this.menuWrapper, this.menuTrigger);
    const carousel   = document.querySelector(this.carousel);
    // render the carousel component
    menu.init();
  }
}

window.onload = () => { 
  let app = new App;
  app.init();
}