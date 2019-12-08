/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/login */ \"./src/js/shared/login.js\");\n/* harmony import */ var _shared_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/task */ \"./src/js/shared/task.js\");\n // import register from './shared/register';\n\n\n\nvar init = function init() {\n  Object(_shared_login__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_shared_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (init);\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n\nObject(_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/shared/clear.js":
/*!********************************!*\
  !*** ./src/js/shared/clear.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return clearRegions; });\nfunction clearRegions() {\n  var regions = ['account-region', 'day-region', 'tasks-region', 'important-region', 'calendar-region'];\n  regions.forEach(function (region) {\n    var regionsElements = document.getElementById(region);\n    regionsElements.innerHTML = '';\n  });\n}\n\n//# sourceURL=webpack:///./src/js/shared/clear.js?");

/***/ }),

/***/ "./src/js/shared/login.js":
/*!********************************!*\
  !*** ./src/js/shared/login.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return login; });\n/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear */ \"./src/js/shared/clear.js\");\n\nfunction login() {\n  var inputEmail = document.getElementById('inputEmail');\n  var inputPassword = document.getElementById('inputPassword');\n  var url = 'http://5de6a20bb1ad690014a4dc65.mockapi.io/users';\n  var account = document.querySelector('#accountBtn');\n  var accountReg = document.querySelector('#account-region');\n  account.addEventListener('click', function (e) {\n    e.preventDefault();\n    Object(_clear__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    var logView = \"\\n      <div class=\\\"container\\\">\\n        <div class=\\\"row\\\">\\n          <div class=\\\"col-sm-9 col-md-7 col-lg-5 mx-auto\\\">\\n            <div class=\\\"card card-signin my-5\\\">\\n                <div class=\\\"card-body\\\">\\n                    <h5 class=\\\"card-title text-center\\\">Sign In</h5>\\n                    <div class=\\\"form-signin\\\">\\n                        <div class=\\\"form-label-group\\\">\\n                            <input type=\\\"email\\\" id=\\\"inputEmail\\\" class=\\\"form-control\\\" placeholder=\\\"Email address\\\"\\n                                required autofocus>\\n                            <label for=\\\"inputEmail\\\">Email address</label>\\n                        </div>\\n                        <div class=\\\"form-label-group\\\">\\n                            <input type=\\\"password\\\" id=\\\"inputPassword\\\" class=\\\"form-control\\\" placeholder=\\\"Password\\\"\\n                                required>\\n                            <label for=\\\"inputPassword\\\">Password</label>\\n                        </div>\\n                        <div class=\\\"form-label-group\\\" id=\\\"confirm-passoword\\\">\\n                        </div>\\n                        <div class=\\\"register-new-account\\\">\\n                            <p id=\\\"register-link\\\">Register a new account</p>\\n                        </div>\\n                        <button id=\\\"loginBtn\\\" class=\\\"btn btn-lg btn-primary btn-block text-uppercase\\\">Sign\\n                            in</button>\\n                        </div>\\n                      </div>\\n                    </div>\\n                  </div>\\n              </div>\\n        </div>\\n      \";\n    var loginContent = document.createElement('div');\n    loginContent.innerHTML = logView;\n    accountReg.appendChild(loginContent);\n  });\n\n  if (inputEmail && inputPassword) {\n    fetch(url).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      findUser(data);\n    });\n  }\n}\n\nfunction findUser(data) {\n  var user = data.find(function (x) {\n    return x.mail === inputEmail.value;\n  });\n\n  if (user && inputPassword.value === user.password) {// jak zalogowany\n  } else {// jak nie zalogowany\n    }\n}\n\n//# sourceURL=webpack:///./src/js/shared/login.js?");

/***/ }),

/***/ "./src/js/shared/task.js":
/*!*******************************!*\
  !*** ./src/js/shared/task.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return taskView; });\n/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear */ \"./src/js/shared/clear.js\");\n\nfunction taskView() {\n  var taskBtn = document.querySelector('#taskBtn');\n  var taskReg = document.querySelector('#tasks-region');\n  taskBtn.addEventListener('click', function (e) {\n    e.preventDefault();\n    Object(_clear__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    var taskView = \"\\n            <div class=\\\"container\\\">\\n                <div class=\\\"card card-body\\\">\\n                    <h2 class=\\\"title\\\">Items</h2>\\n                    <ul id=\\\"items\\\" class=\\\"list-group\\\">\\n                        <li class=\\\"list-group-item\\\">Item 1</li>\\n                        <li class=\\\"list-group-item\\\">Item 2</li>\\n                        <li class=\\\"list-group-item\\\">Item 3</li>\\n                        <li class=\\\"list-group-item\\\">Item 4</li>\\n                    </ul>\\n                </div>\\n            </div>\\n        \";\n    var taskContent = document.createElement('div');\n    taskContent.innerHTML = taskView;\n    taskReg.appendChild(taskContent);\n  });\n}\n\n//# sourceURL=webpack:///./src/js/shared/task.js?");

/***/ })

/******/ });