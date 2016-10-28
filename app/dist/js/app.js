'use strict';

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

window.onload = function () {
	var menu = new Menu("#side-menu", ".trigger");
	menu.init();
}();