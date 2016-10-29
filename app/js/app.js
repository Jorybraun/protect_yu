import Menu from './menu';

const style = require("!style!css!sass!../scss/main.scss");

window.onload = (() => {
	const menu = new Menu("#side-menu", ".trigger");
	menu.init();
})();