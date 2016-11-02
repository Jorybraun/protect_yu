import Menu from './menu';
import Carousel from './carousel';

const style = require("!style!css!sass!../scss/main.scss");

class App {
  constructor(){
    this.body= 'body';
    this.menuTrigger = '.trigger';
    this.carousel    = '.hero-section--slider';
    this.sliderImage = '.slider-image';
  }

  init(){
    const menu = new Menu(this.body, this.menuTrigger);
    const carousel = new Carousel(this.carousel);
    // render the carousel component
    carousel.init();
    menu.init();
  }
}

window.onload = () => { 
  let app = new App;
  app.init();
}