/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/TaskClass.js":
/*!**************************!*\
  !*** ./src/TaskClass.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(title, desc, dueDate = \"No date\") {\n        this.title = title;\n        this.desc = desc;\n        this.dueDate = dueDate;\n\n        console.log(title);\n    }\n\n    getTitle() {\n        return this.title;\n    }\n    setTitle(newTitle) {\n        this.title = newTitle;\n    }\n\n    getDueDate() {\n        return this.dueDate;\n    }\n    setDueDate(newDueDate) {\n        this.dueDate = newDueDate;\n    }\n\n    getDesc() {\n        return this.desc;\n    }\n    setDesc(newDesc) {\n        this.desc = newDesc;\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/TaskClass.js?");

/***/ }),

/***/ "./src/createNewTask.js":
/*!******************************!*\
  !*** ./src/createNewTask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createNewTask)\n/* harmony export */ });\nfunction createNewTask(title, desc, dueDate) {\n    const task = document.createElement(\"div\");\n    task.classList.add(\"task\");\n    task.textContent = title;\n\n    const list = document.querySelector(\".list\");\n    list.appendChild(task);\n}\n\n\n//# sourceURL=webpack://todolist/./src/createNewTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createNewTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewTask */ \"./src/createNewTask.js\");\n/* harmony import */ var _TaskClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskClass */ \"./src/TaskClass.js\");\n\n\n\nlet taskArr = [];\n\n//Use a module later!!!\nconst saveBtn = document.querySelector(\"#save\");\nsaveBtn.addEventListener(\"click\", (e) => {\n    // e.preventDefault();\n    const isEmpty = document.querySelector(\"#title\").value;\n    const title = document.querySelector(\"#title\").required = true;\n    if (isEmpty !== \"\" && isEmpty.trim() !== \"\") {\n        collectFormData();\n    }\n  \n});\n\n\nfunction collectFormData() {\n    let title = document.querySelector(\"#title\").value;\n    let desc = document.querySelector(\"#description\").value;\n    let dueDate = document.querySelector(\"#date\").value;\n\n    //For DOM\n    (0,_createNewTask__WEBPACK_IMPORTED_MODULE_0__.default)(title, desc, dueDate);\n    //For object\n    const newTask = new _TaskClass__WEBPACK_IMPORTED_MODULE_1__.default(title, desc, dueDate);\n    taskArr.push(newTask);\n    console.log(taskArr);\n    console.log(\"hehehehe\");\n    let form = document.querySelector(\".create-task\");\n    form.reset();\n}\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;