class Menu {

  constructor(wrapper, trigger){
    this.isOpen   = false;
    this.wrapper  = wrapper;
    this.trigger  = trigger;
  }

  init() {
    const triggers = document.querySelectorAll(this.trigger);

    Array.from(triggers).forEach((trigger) => {
      trigger.addEventListener('click', () => this.open());
    });
  }

  open() {
    const wrapper = document.querySelector(this.wrapper);
    wrapper.classList.toggle('open');
  }
}


export default Menu;