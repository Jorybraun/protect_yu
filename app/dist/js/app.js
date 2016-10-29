"use strict";

var _menu = require("menu");

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
	var menu = new _menu2.default("#side-menu", ".trigger");
	menu.init();
}();