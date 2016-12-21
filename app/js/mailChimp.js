class MailChimp {
	
	constructor(form, flash){
		this.form = form;
		this.flash = flash;
	}

	init(){
		const form = document.querySelector(this.form);

		form.addEventListener('submit', (e) => {
			e.preventDefault();
			e.stopPropagation();
			
			const email = form.elements["email"].value;
			
			if(this.validateEmail(email)){
				this.sendPromise(email, form.dataset.lang);
			}else{
				this.flash.triggerFlash('email', form.dataset.lang, 'invalid');
			}
		});
	}

	validateEmail(email){
  		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  		return re.test(email);
	}

	sendPromise(email, lang){
		const url = `http://protectyu.azzimov.com/mail.php?email=${email}&lang=${lang}`;

		fetch(url, {
			method: 'post'
		}).then((response) => {
			if(response === 200){
				this.flash.triggerFlash('email', 'success', lang);	
			}
		}).catch(function(err) {
		// Error :(	
		});
	}

}

export default MailChimp;