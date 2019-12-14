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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/account */ \"./src/js/shared/account.js\");\n/* harmony import */ var _shared_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/task */ \"./src/js/shared/task.js\");\n\n\n\nvar init = function init() {\n  Object(_shared_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  var account = document.querySelector('#accountBtn');\n  account.addEventListener('click', function (e) {\n    e.preventDefault();\n    Object(_shared_account__WEBPACK_IMPORTED_MODULE_0__[\"editAccount\"])();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (init);\n\n//# sourceURL=webpack:///./src/js/app.js?");

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

/***/ "./src/js/shared/account.js":
/*!**********************************!*\
  !*** ./src/js/shared/account.js ***!
  \**********************************/
/*! exports provided: editAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editAccount\", function() { return editAccount; });\n/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear */ \"./src/js/shared/clear.js\");\n\nvar editAccount = function editAccount() {\n  Object(_clear__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  var accountRegion = document.querySelector('#account-region');\n  var navbarTitle = document.querySelector('.title-region');\n  navbarTitle.innerHTML = 'Account';\n  var template = \"\\n  <div class=\\\"container\\\">\\n    <div class=\\\"card card-body\\\">\\n      <form class=\\\"form form__edit\\\">\\n        <label class=\\\"form__label\\\">Name</label>\\n        <input class=\\\"form__input\\\" type=\\\"text\\\" name=\\\"name\\\" id=\\\"name\\\" value=\\\"John\\\">\\n        <label class=\\\"form__label\\\">Surname</label>\\n        <input class=\\\"form__input\\\" type=\\\"text\\\" name=\\\"surname\\\" id=\\\"surname\\\" value=\\\"Doe\\\">\\n        <label class=\\\"form__label\\\">Email</label>\\n        <input class=\\\"form__input\\\" type=\\\"email\\\" name=\\\"email\\\" id=\\\"email\\\" value=\\\"john@doe.com\\\">\\n        <label class=\\\"form__label\\\">New Password</label>\\n        <input class=\\\"form__input\\\" type=\\\"password\\\" name=\\\"password\\\" id=\\\"password\\\">\\n        <label class=\\\"form__label\\\">Repeat New Password</label>\\n        <input class=\\\"form__input\\\" type=\\\"password\\\" name=\\\"passwordRepeat\\\" id=\\\"passwordRepeat\\\">\\n        <button id=\\\"saveData\\\" class=\\\"button\\\">Save data</button>\\n      </form>\\n    </div>\\n  </div>\\n  \";\n  accountRegion.innerHTML = template;\n  var saveButton = document.querySelector('#saveData');\n  saveButton.addEventListener('click', function (e) {\n    e.preventDefault();\n    console.log(\"Send data...\");\n  });\n};\n\n//# sourceURL=webpack:///./src/js/shared/account.js?");

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

/***/ "./src/js/shared/task.js":
/*!*******************************!*\
  !*** ./src/js/shared/task.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return taskView; });\n/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear */ \"./src/js/shared/clear.js\");\n/* eslint-disable no-shadow */\n\nfunction taskView() {\n  var taskBtn = document.querySelector('#taskBtn');\n  var taskReg = document.querySelector('#tasks-region');\n  var navbarTitle = document.querySelector('.title-region');\n  taskBtn.addEventListener('click', function (e) {\n    e.preventDefault();\n    Object(_clear__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    navbarTitle.innerHTML = 'Tasks TO-DO';\n    var taskView = \"\\n      <div class=\\\"container\\\">\\n        <div class=\\\"card card-body\\\">\\n          <h2 class=\\\"title\\\">Items</h2>\\n          <ul id=\\\"items\\\" class=\\\"list-group\\\">\\n            <li id=\\\"task1\\\" class=\\\"list-group-item\\\">\\n              <p>Item 1</p>\\n              <button data-task-id=\\\"task1\\\" data-btn=\\\"remove\\\">\\n                <i class=\\\"fa fa-trash\\\" aria-hidden=\\\"true\\\"></i>\\n              </button>\\n            </li>\\n            <li id=\\\"task2\\\" class=\\\"list-group-item\\\">\\n              <p>Item 2</p>\\n              <button data-task-id=\\\"task2\\\" data-btn=\\\"remove\\\">\\n                <i class=\\\"fa fa-trash\\\" aria-hidden=\\\"true\\\"></i>\\n              </button>\\n            </li>\\n            <li id=\\\"task3\\\" class=\\\"list-group-item\\\">\\n              <p>Item 3</p>\\n              <button data-task-id=\\\"task3\\\" data-btn=\\\"remove\\\">\\n                <i class=\\\"fa fa-trash\\\" aria-hidden=\\\"true\\\"></i>\\n              </button>\\n            </li>\\n            <li id=\\\"task4\\\" class=\\\"list-group-item\\\">\\n              <p>Item 4</p>\\n              <button data-task-id=\\\"task4\\\" data-btn=\\\"remove\\\">\\n                <i class=\\\"fa fa-trash\\\" aria-hidden=\\\"true\\\"></i>\\n              </button>\\n            </li>\\n          </ul>\\n          <form id=\\\"addForm\\\" class=\\\"form-inline\\\">\\n            <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"item\\\" value=\\\"Add New Task....\\\">\\n            <input type=\\\"date\\\" class=\\\"form-control\\\" id=\\\"item-data\\\" name=\\\"deadline\\\">\\n            <input type=\\\"submit\\\" class=\\\"btn btn-dark\\\" value=\\\"+\\\">\\n          </form>\\n        </div>\\n      </div>\\n    \";\n    var taskContent = document.createElement('div');\n    taskContent.innerHTML = taskView;\n    taskReg.appendChild(taskContent);\n    var buttonsRemove = document.querySelectorAll('[data-btn=\"remove\"]');\n    buttonsRemove.forEach(function (button) {\n      return button.addEventListener('click', function () {\n        var item = document.getElementById(button.dataset.taskId);\n        item.remove();\n      });\n    });\n    var form = document.getElementById('addForm');\n    var itemList = document.getElementById('items');\n    var dateList = document.getElementById('item-data');\n\n    function addItem(event) {\n      event.preventDefault();\n      var newItem = document.getElementById('item').value;\n      var newItemData = dateList.value;\n      var li = document.createElement('li');\n      li.className = 'list-group-item';\n      console.log(li);\n      li.appendChild(document.createTextNode(\"\".concat(newItem, \" Deadline: \").concat(newItemData)));\n      itemList.appendChild(li);\n    }\n\n    if (form) {\n      form.addEventListener('submit', addItem);\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/js/shared/task.js?");

/***/ })

/******/ });