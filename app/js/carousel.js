class Carousel {
  constructor(wrapper){
    this.wrapper = wrapper
  }
  init(){
    $(this.wrapper).owlCarousel({
      items: 1,
      singleItem: true,
      mergeFit: true
    });
  }
}

export default Carousel;