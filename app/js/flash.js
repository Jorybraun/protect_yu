import FlashResponse from './flashResponse';

class Flash {

	constructor(el){
		this.wrapper = el;
	}

	getMessage(type, language, status){
		const response = FlashResponse;
		return response[type][status][language];
	} 

	triggerFlash(type, language, status){
		const flash = document.querySelector(this.wrapper);
		flash.classList.add(status);
		// could add this message in the css before
		flash.innerHTML = this.getMessage(type, language, status);
		// hide the status after 5 seconds
		setTimeout(()=> { flash.classList.remove(status) }, 5000);
	}
}

export default Flash;