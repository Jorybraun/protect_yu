import Menu from './components/menu';
import Carousel from './components/carousel';
import VideoLayover from './components/videoLayover';
import MailChimp from './components/mailChimp';
import Flash from './components/flash';

require("babel-loader!./components/owl.carousel.min.js");

class App {
  
  constructor(){
    this.body             = 'body';
    this.menuTrigger      = '.trigger';
    this.carousel         = '.hero-section--slider';
    this.sliderImage      = '.slider-image';
    this.target           = '.cta-section';
    this.scrollTo         = '.scroll-to';
    this.videotrigger     = '.video--trigger';
    this.video            = '.video';
    this.contactForm      = '.news-letter--signup';
    this.flash            = '.flash';
  }

  init(){
    const flash = new Flash(this.flash);
    const menu = new Menu(this.body, this.menuTrigger);
    const carousel = new Carousel(this.carousel);
    const mailChimp = new MailChimp(this.contactForm, flash);
    const videoLayover = new VideoLayover(this.videotrigger, this.video);
    const scrollTrigger = document.querySelector(this.scrollTo);
    // render the carousel component
    carousel.init();
    menu.init();
    videoLayover.init();
    mailChimp.init();

    if(scrollTrigger != null){
      scrollTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        $('html, body').animate({scrollTop: scrollTrigger.offsetTop + 50}, 500);
      });
    }
  }
}

window.onload = () => { 
  let app = new App;
  app.init();
}