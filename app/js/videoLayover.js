class VideoLayover {
	constructor(trigger, videoWrapper){
		this.trigger = trigger
		this.videoWrapper = videoWrapper
	}

	init(){
		const trigger = document.querySelector(this.trigger);
		
		trigger.addEventListener('click', (e) => {
			e.preventDefault();
			e.stopPropagation();
			// animate the trigger to pop;
			this.toggleLayover();
		});
	}

	toggleLayover(){
		const wrapper = document.querySelector(this.videoWrapper);
		const popup = wrapper.querySelector('.video');
		// disable scroll
		wrapper.classList.add('')
	}
}

export default VideoLayover;