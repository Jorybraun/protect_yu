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

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"css!sass!../scss/main.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var App = function () {
	  function App() {
	    _classCallCheck(this, App);

	    this.body = 'body';
	    this.menuTrigger = '.trigger';
	    this.carousel = '.hero-section--slider';
	    this.sliderImage = '.slider-image';
	    this.target = '.cta-section';
	    this.scrollTo = '.scroll-to';
	  }

	  _createClass(App, [{
	    key: 'init',
	    value: function init() {
	      var menu = new _menu2.default(this.body, this.menuTrigger);
	      var carousel = new _carousel2.default(this.carousel);
	      var scrollTrigger = document.querySelector(this.scrollTo);
	      // render the carousel component
	      carousel.init();
	      menu.init();

	      scrollTrigger.addEventListener('click', function () {
	        $('html, body').animate({ scrollTop: scrollTrigger.offsetTop + 50 }, 500);
	      });
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

	    this.wrapper = wrapper;
	  }

	  _createClass(Carousel, [{
	    key: "init",
	    value: function init() {
	      $(this.wrapper).owlCarousel({
	        dots: true,
	        items: 1,
	        mergeFit: true,
	        nav: false
	      });
	    }
	  }]);

	  return Carousel;
	}();

	exports.default = Carousel;

/***/ }
/******/ ]);