/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _menu = __webpack_require__(1);

	var _menu2 = _interopRequireDefault(_menu);

	var _carousel = __webpack_require__(2);

	var _carousel2 = _interopRequireDefault(_carousel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var style = __webpack_require__(3);

	var App = function () {
	  function App() {
	    _classCallCheck(this, App);

	    this.menuWrapper = '#side-menu';
	    this.menuTrigger = '.trigger';
	    this.carousel = '.hero-slider';
	    this.sliderImage = '.slider-image';
	  }

	  _createClass(App, [{
	    key: 'init',
	    value: function init() {
	      var menu = new _menu2.default(this.menuWrapper, this.menuTrigger);
	      var carousel = document.querySelector(this.carousel);
	      // render the carousel component
	      menu.init();
	    }
	  }]);

	  return App;
	}();

	window.onload = function () {
	  var app = new App();
	  app.init();
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Menu = function () {
	  function Menu(wrapper, trigger) {
	    _classCallCheck(this, Menu);

	    this.isOpen = false;
	    this.wrapper = wrapper;
	    this.trigger = trigger;
	  }

	  _createClass(Menu, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;

	      var triggers = document.querySelectorAll(this.trigger);

	      Array.from(triggers).forEach(function (trigger) {
	        trigger.addEventListener('click', function () {
	          return _this.open();
	        });
	      });
	    }
	  }, {
	    key: 'open',
	    value: function open() {
	      var wrapper = document.querySelector(this.wrapper);
	      wrapper.classList.toggle('open');
	    }
	  }]);

	  return Menu;
	}();

	exports.default = Menu;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Carousel = function () {
	    function Carousel(wrapper) {
	        _classCallCheck(this, Carousel);

	        this.wrapper = wraper;
	    }

	    _createClass(Carousel, [{
	        key: "init",
	        value: function init() {}
	    }]);

	    return Carousel;
	}();

	exports.default = Carousel;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400);", ""]);
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400);", ""]);

	// module
	exports.push([module.id, "html,\nbody,\nul,\nol {\n  margin: 0;\n  padding: 0; }\n\n#side-menu {\n  width: 100%;\n  max-width: 650px;\n  height: 100%;\n  right: -100%;\n  display: flex;\n  position: fixed; }\n\nfooter {\n  display: inline-block;\n  width: 100%; }\n\n.side-menu .wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%; }\n  .side-menu .wrapper .trigger {\n    position: absolute;\n    top: 5px;\n    right: 5px; }\n\n.content-wrapper .trigger {\n  position: absolute;\n  right: 5px;\n  top: 5px; }\n  .content-wrapper .trigger span {\n    display: block;\n    width: 15px;\n    height: 2.5px;\n    margin-top: 2.5px; }\n  @media only screen and (min-width: 650px) {\n    .content-wrapper .trigger {\n      display: none; } }\n\n.content-wrapper .hero-section {\n  height: 100vh; }\n\n.content-wrapper .cta-section {\n  position: relative;\n  overflow: hidden; }\n  @media only screen and (min-width: 950px) {\n    .content-wrapper .cta-section {\n      padding-bottom: 48px; } }\n\n.content-wrapper .cta-section--content-wrapper {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-justify-content: center;\n  justify-content: center; }\n\n.content-wrapper .cta-section--content {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-justify-content: center;\n  justify-content: center;\n  max-width: 1200px; }\n\n.content-wrapper .cta-section--top-logo {\n  position: relative;\n  top: -137px;\n  left: -37px;\n  margin-bottom: 75px; }\n  .content-wrapper .cta-section--top-logo:before {\n    position: absolute;\n    background-image: url(\"/img/top-icon.png\");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 100% 100%;\n    display: block;\n    content: \"\";\n    height: 213px;\n    width: 231px; }\n\n.content-wrapper .cta-section--header {\n  text-align: center;\n  flex: 1 0 100%; }\n  .content-wrapper .cta-section--header span.underline {\n    margin: 0 auto;\n    display: block;\n    height: 1px;\n    width: 50px; }\n\n.content-wrapper .cta-section--detail-block {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  margin: 0 12px; }\n  .content-wrapper .cta-section--detail-block h3, .content-wrapper .cta-section--detail-block p.subtitle {\n    margin: 10px 24px; }\n  .content-wrapper .cta-section--detail-block div.body-text p {\n    margin: 12px; }\n  .content-wrapper .cta-section--detail-block button {\n    flex: 0 0 200px;\n    height: 50px;\n    margin-bottom: 24px; }\n  @media only screen and (max-width: 649px) {\n    .content-wrapper .cta-section--detail-block {\n      max-width: 350px; }\n      .content-wrapper .cta-section--detail-block div.body-text {\n        margin: 0 auto; } }\n  @media only screen and (min-width: 650px) {\n    .content-wrapper .cta-section--detail-block {\n      flex: 1 0 450px;\n      max-width: 530px;\n      -webkit-align-items: flex-start;\n      align-items: flex-start;\n      -webkit-justify-content: flex-start;\n      justify-content: flex-start; }\n      .content-wrapper .cta-section--detail-block h3, .content-wrapper .cta-section--detail-block p.subtitle {\n        margin: 10px 0px; }\n      .content-wrapper .cta-section--detail-block button {\n        margin-right: 24px; }\n      .content-wrapper .cta-section--detail-block div.body-text p {\n        margin: 12px 0px; } }\n\n.cta-section--offer-block {\n  flex: 1 0 450px;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-justify-content: center;\n  justify-content: center; }\n  .cta-section--offer-block ul {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: row;\n    flex-direction: row;\n    -webkit-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -webkit-align-items: center;\n    align-items: center;\n    -webkit-justify-content: center;\n    justify-content: center; }\n    .cta-section--offer-block ul li.offer {\n      list-style: none;\n      flex: 1 0 229px;\n      max-width: 320px;\n      margin: 24px;\n      padding: 24px; }\n      .cta-section--offer-block ul li.offer button.btn {\n        width: 100%;\n        height: 50px; }\n      @media only screen and (min-width: 650px) {\n        .cta-section--offer-block ul li.offer {\n          margin: 0;\n          flex: 1 0 30%; }\n          .cta-section--offer-block ul li.offer.two {\n            margin-left: -24px;\n            z-index: 200; }\n          .cta-section--offer-block ul li.offer.three {\n            margin-left: -24px; } }\n    @media only screen and (min-width: 650px) {\n      .cta-section--offer-block ul {\n        -webkit-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n        max-width: 800px;\n        margin: 24px; } }\n  .cta-section--offer-block p.label {\n    margin: 6px 0; }\n  .cta-section--offer-block h4.offer-value {\n    margin: 6px 0; }\n\n.offer-value--section .offer-value--wrapper {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  -webkit-justify-content: center;\n  justify-content: center; }\n\n.offer-value--section ul {\n  padding-top: 24px;\n  padding-bottom: 24px;\n  max-width: 1200px;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap; }\n  .offer-value--section ul li {\n    flex: 300px;\n    list-style: none;\n    margin: 24px; }\n    .offer-value--section ul li h2, .offer-value--section ul li p {\n      margin: 0 0 12px 0; }\n\n.about-us--section {\n  position: relative; }\n  .about-us--section:after {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 200px;\n    height: 80px;\n    display: block;\n    content: '';\n    background-image: url(\"/img/bottom-icon.png\"); }\n\n.founder--list {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-justify-content: center;\n  justify-content: center; }\n  @media only screen and (min-width: 650px) {\n    .founder--list {\n      -webkit-flex-wrap: wrap;\n      flex-wrap: wrap; } }\n  @media only screen and (min-width: 950px) {\n    .founder--list {\n      -webkit-flex-wrap: nowrap;\n      flex-wrap: nowrap; } }\n\n.founder--block {\n  flex: 0 0 320px;\n  margin: 24px;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-align-items: center;\n  align-items: center; }\n  .founder--block .founder--image-wrapper {\n    margin: 0 auto;\n    flex: 0 0 140px;\n    height: 170px; }\n    .founder--block .founder--image-wrapper.piere {\n      background-image: url(\"/img/piere-g-fillion.png\");\n      background-repeat: no-repeat; }\n    .founder--block .founder--image-wrapper.michel {\n      background-image: url(\"/img/michel-junea-katsuya.png\");\n      background-repeat: no-repeat; }\n    @media only screen and (min-width: 650px) {\n      .founder--block .founder--image-wrapper {\n        margin: 0 24px;\n        flex: 1 0 200px;\n        height: 250px; }\n        .founder--block .founder--image-wrapper.piere {\n          background-image: url(\"/img/piere-g-fillion-lrg.png\");\n          background-repeat: no-repeat; }\n        .founder--block .founder--image-wrapper.michel {\n          background-image: url(\"/img/michel-junea-katsuya-lrg.png\");\n          background-repeat: no-repeat; } }\n  .founder--block .founder--name {\n    margin: 12px 0; }\n  .founder--block .founder--content-wrapper {\n    margin: 24px; }\n  @media only screen and (min-width: 650px) {\n    .founder--block {\n      -webkit-flex: 1 0 450px;\n      flex: 1 0 450px;\n      -webkit-flex-wrap: nowrap;\n      flex-wrap: nowrap; } }\n\nfooter {\n  display: inline-block; }\n  footer .footer--wrapper {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: column;\n    flex-direction: column;\n    -webkit-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -webkit-justify-content: space-around;\n    justify-content: space-around;\n    -webkit-align-items: center;\n    align-items: center;\n    margin: 48px 0; }\n    @media only screen and (min-width: 650px) {\n      footer .footer--wrapper {\n        -webkit-flex-direction: row;\n        flex-direction: row;\n        -webkit-align-items: flex-start;\n        align-items: flex-start;\n        max-width: 1200px;\n        margin: 24px auto; } }\n  footer .address--block {\n    text-align: center;\n    flex: 0 0 200px; }\n    @media only screen and (min-width: 650px) {\n      footer .address--block {\n        margin: 0px;\n        text-align: left; }\n        footer .address--block p.address--street, footer .address--block p.address--phone {\n          margin-left: 0px; }\n        footer .address--block p.address--phone {\n          margin: 24px 0px; } }\n  footer .social-media--block ul {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-justify-content: space-around;\n    justify-content: space-around; }\n    footer .social-media--block ul li {\n      list-style: none; }\n  footer .icon--block {\n    display: inline-flex; }\n    footer .icon--block img {\n      margin: 0 auto; }\n      @media only screen and (min-width: 650px) {\n        footer .icon--block img {\n          margin-top: 1.3em; } }\n  footer .flex-fieldset {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: row;\n    flex-direction: row;\n    -webkit-flex-wrap: wrap;\n    flex-wrap: wrap;\n    padding-bottom: 10px; }\n  footer label {\n    flex: 0 0 15px; }\n  footer input[type=\"text\"] {\n    flex: 0 0 85%;\n    padding-left: 3%; }\n  footer input[type=\"submit\"] {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-justify-content: center;\n    justify-content: center;\n    -webkit-align-content: center;\n    align-content: center;\n    height: 50px;\n    margin-top: 24px;\n    width: 100%; }\n\n.btn {\n  border: none;\n  color: #ffffff; }\n\n.side-menu {\n  background-color: #000000; }\n  .side-menu .trigger {\n    color: #ffffff; }\n\n.content-wrapper .trigger span {\n  background-color: #000000; }\n\n.content-wrapper .underline {\n  background-color: #cccccc; }\n\n.cta-section--title {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 30px;\n  font-weight: 300;\n  text-transform: uppercase; }\n\n.cta-section--subtitle {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n  color: #888888;\n  font-weight: 300; }\n\n.cta-section--detail-block {\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto; }\n  .cta-section--detail-block h3, .cta-section--detail-block p {\n    font-family: \"Open Sans\", sans-serif; }\n    @media only screen and (min-width: 650px) {\n      .cta-section--detail-block h3, .cta-section--detail-block p {\n        text-align: left; } }\n  .cta-section--detail-block h3 {\n    text-align: center;\n    color: #0093d8;\n    font-size: 24px;\n    font-weight: 300;\n    text-transform: uppercase; }\n    @media only screen and (min-width: 950px) {\n      .cta-section--detail-block h3 {\n        font-size: 30px; } }\n  .cta-section--detail-block p.subtitle {\n    color: #adadad;\n    font-size: 16px;\n    font-weight: 300; }\n  .cta-section--detail-block div.body-text p {\n    text-align: left;\n    font-size: 14px; }\n\n.cta-gradient-blue {\n  background-image: -owg-linear-gradient(#61bfeb 0%, #0193d8 100%);\n  background-image: -webkit-linear-gradient(#61bfeb 0%, #0193d8 100%);\n  background-image: -moz-linear-gradient(#61bfeb 0%, #0193d8 100%);\n  background-image: -o-linear-gradient(#61bfeb 0%, #0193d8 100%);\n  background-image: linear-gradient(#61bfeb 0%, #0193d8 100%);\n  color: #ffffff;\n  border-radius: 5px; }\n\n.cta-section--offer-block ul li.offer {\n  background-color: #ffffff;\n  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.1); }\n  .cta-section--offer-block ul li.offer p.label {\n    font-size: 18px;\n    color: #000000;\n    font-family: \"Roboto\", sans-serif;\n    text-align: center; }\n  .cta-section--offer-block ul li.offer p.description, .cta-section--offer-block ul li.offer p.offer-length {\n    font-family: \"Roboto\", sans-serif;\n    font-weight: 300;\n    font-size: 16px; }\n    .cta-section--offer-block ul li.offer p.description .year, .cta-section--offer-block ul li.offer p.offer-length .year {\n      color: #0093d8;\n      font-weight: 400; }\n  .cta-section--offer-block ul li.offer p.includes {\n    font-family: \"Roboto\", sans-serif;\n    font-size: 16px; }\n  .cta-section--offer-block ul li.offer h4.offer-value {\n    font-family: \"Roboto\", sans-serif;\n    font-size: 36px;\n    color: #888888;\n    text-align: center; }\n  .cta-section--offer-block ul li.offer.one .btn {\n    background-image: -owg-linear-gradient(#f99d1b 0%, #de8405 100%);\n    background-image: -webkit-linear-gradient(#f99d1b 0%, #de8405 100%);\n    background-image: -moz-linear-gradient(#f99d1b 0%, #de8405 100%);\n    background-image: -o-linear-gradient(#f99d1b 0%, #de8405 100%);\n    background-image: linear-gradient(#f99d1b 0%, #de8405 100%); }\n  .cta-section--offer-block ul li.offer.one .percentage {\n    color: #df8506;\n    font-weight: 400; }\n  .cta-section--offer-block ul li.offer.two .btn {\n    background-image: -owg-linear-gradient(#61bfeb 0%, #0193d8 100%);\n    background-image: -webkit-linear-gradient(#61bfeb 0%, #0193d8 100%);\n    background-image: -moz-linear-gradient(#61bfeb 0%, #0193d8 100%);\n    background-image: -o-linear-gradient(#61bfeb 0%, #0193d8 100%);\n    background-image: linear-gradient(#61bfeb 0%, #0193d8 100%); }\n  .cta-section--offer-block ul li.offer.two .percentage {\n    color: #0093d8;\n    font-weight: 400; }\n  .cta-section--offer-block ul li.offer.three .btn {\n    background-image: -owg-linear-gradient(#ed1c24 0%, #b00309 100%);\n    background-image: -webkit-linear-gradient(#ed1c24 0%, #b00309 100%);\n    background-image: -moz-linear-gradient(#ed1c24 0%, #b00309 100%);\n    background-image: -o-linear-gradient(#ed1c24 0%, #b00309 100%);\n    background-image: linear-gradient(#ed1c24 0%, #b00309 100%); }\n\n.offer-value--section {\n  background-color: #f6f5f7; }\n  .offer-value--section ul li .value-title {\n    text-transform: uppercase;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 30px;\n    font-weight: 100; }\n  .offer-value--section ul li .value-body {\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 14px; }\n\n.founder--block .founder--role, .founder--block .founder--name, .founder--block .founder--bio {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 300; }\n\n.founder--block .founder--name {\n  font-size: 18px;\n  text-align: center; }\n\n.founder--block .founder--role {\n  font-size: 14px;\n  text-align: center;\n  color: #888888; }\n\n@media only screen and (min-width: 650px) {\n  .founder--block .founder--name, .founder--block .founder--role {\n    text-align: left; }\n  .founder--block .founder--name {\n    font-size: 24px; } }\n\nfooter {\n  background-color: #000000; }\n  footer .block--title {\n    color: #ffffff;\n    font-weight: 300;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 18px; }\n  footer .address--street, footer .address--phone {\n    color: #aaaaaa;\n    font-weight: 300;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 14px;\n    margin: 0 24px; }\n  footer .social-media--block li {\n    color: #aaaaaa; }\n  footer .contact-form--block label {\n    color: #ffffff; }\n  footer .contact-form--block .flex-fieldset {\n    border-bottom: 1px solid #aaaaaa; }\n  footer .contact-form--block input[type=\"text\"] {\n    background-color: #000000;\n    border: none; }\n  footer .contact-form--block input[type=\"submit\"] {\n    background-color: #ffe200;\n    color: black;\n    border: none;\n    border-radius: 4px; }\n\n.side-menu {\n  -webkit-transition-duration: 1s;\n  -moz-transition-duration: 1s;\n  -o-transition-duration: 1s;\n  transition-duration: 1s;\n  -webkit-transition-timing-function: 1s ease-in-out;\n  -moz-transition-timing-function: 1s ease-in-out;\n  -o-transition-timing-function: 1s ease-in-out;\n  transition-timing-function: 1s ease-in-out; }\n  .side-menu.open {\n    -webkit-transform: translateX(-100%);\n    -moz-transform: translateX(-100%);\n    -ms-transform: translateX(-100%);\n    -o-transform: translateX(-100%);\n    transform: translateX(-100%); }\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);