class Carousel {
  constructor(wrapper){
    this.wrapper = wrapper
  }
  init(){
    $(this.wrapper).owlCarousel({
      dots: true,
      items: 1,
      mergeFit: true,
      nav: false
    });
  }
}

export default Carousel;