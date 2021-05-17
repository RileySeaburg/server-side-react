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

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(3);

	var _server2 = _interopRequireDefault(_server);

	var _app = __webpack_require__(4);

	var _app2 = _interopRequireDefault(_app);

	var _template = __webpack_require__(5);

	var _template2 = _interopRequireDefault(_template);

	var _isomorphicFetch = __webpack_require__(6);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();

	app.use(_express2.default.static('dist/public'));

	app.get('/', function (req, res) {
	    (0, _isomorphicFetch2.default)('https://api.github.com/users/gaearon/gists').then(function (response) {
	        return response.json();
	    }).then(function (gists) {
	        var body = _server2.default.renderToString(_react2.default.createElement(_app2.default, { gists: gists }));
	        var html = (0, _template2.default)(body, gists);

	        res.send(html);
	    });
	});

	app.listen(3000, function () {
	    console.log('Listening on port 3000');
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function App(_ref) {
	    var gists = _ref.gists;
	    return _react2.default.createElement(
	        'ul',
	        null,
	        gists.map(function (gist) {
	            return _react2.default.createElement(
	                'li',
	                { key: gist.id },
	                gist.description
	            );
	        })
	    );
	};

	App.propTypes = { gists: _react2.default.PropTypes.array };

	exports.default = App;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (body, gists) {
	  return " \n  <!DOCTYPE html> \n  <html> \n    <head> \n      <meta charset=\"UTF-8\"> \n    </head> \n    <body> \n      <div id=\"app\">" + body + "</div> \n      <script>window.gists = " + JSON.stringify(gists) + "</script> \n      <script src=\"/bundle.js\"></script> \n    </body> \n  </html>";
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ }
/******/ ]);