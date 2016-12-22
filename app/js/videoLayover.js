class VideoLayover {

	constructor(trigger, video){
		this.trigger = trigger;
		this.video = video;
		this.firstAnimation = 'opening';
		this.secondAnimation = 'open';
	}

	init(){
		const video = document.getElementById('bcVideo_html5_api');
		const trigger = document.querySelector(this.trigger);
		const close = trigger.getElementsByClassName('close')[0];
		// initialize bind on trigger and close
		this.bindTrigger(trigger, video);
		this.bindClose(close, trigger, video);
	}

	bindTrigger(el){
		const self = this;
		let video = document.getElementById('bcVideo_html5_api');
		// cb because annomous function cannot be removed on event
		const clickCB = function(e) { 
			e.preventDefault();
			e.stopPropagation();
			self.toggleLayover(el);
			// remove the click event so that the user may click the video
			this.removeEventListener('click', clickCB);
		}

		el.addEventListener('click', clickCB);
	}

	bindClose(close, trigger, video){
		close.addEventListener('click', (e) => {
			e.preventDefault();
			e.stopPropagation();
			// play the closing animation
			this.toggleLayover(trigger);
			// re attache the event listener 
			this.bindTrigger(trigger);
			// stop the video from continuing play
			video.pause();
		});
	}

	toggleLayover(el){
		let first = this.firstAnimation;
		let second = this.secondAnimation;
		// use destructuring to switch class names
		if(el.classList.contains('open')){
			[first, second] = [second, first];
		}
		// play the first animation
		el.classList.toggle(first);	
		// play the second animation
		setTimeout(() => {
			el.classList.toggle(second);
		}, 500);
	}
}

export default VideoLayover;