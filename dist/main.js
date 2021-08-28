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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(title, desc, dueDate = \"No date\") {\n        this.title = title;\n        this.desc = desc;\n        this.dueDate = dueDate;\n    }\n\n    getTitle() {\n        return this.title;\n    }\n    setTitle(newTitle) {\n        this.title = newTitle;\n    }\n\n    getDueDate() {\n        return this.dueDate;\n    }\n    setDueDate(newDueDate) {\n        this.dueDate = newDueDate;\n    }\n\n    getDesc() {\n        return this.desc;\n    }\n    setDesc(newDesc) {\n        this.desc = newDesc;\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/TaskClass.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TaskClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskClass */ \"./src/TaskClass.js\");\n\n\nlet taskArr = [];\n\n//Use a module later!!! call it main\nconst saveBtn = document.querySelector(\"#save\");\nsaveBtn.addEventListener(\"click\", (e) => {\n    const isEmpty = document.querySelector(\"#title\").value;\n    if (isEmpty !== \"\" && isEmpty.trim() !== \"\") {\n        collectFormData();\n    }\n});\n\nconst list = document.querySelector(\".list\");\nlist.addEventListener(\"click\", handleTask);\n\nfunction handleTask(e) {\n    console.log(e.target);\n    if (e.target.id === \"trash\") {\n        // console.log(e.target.parentNode.id);\n        deleteTask(e.target.parentNode.id);\n        deleteTaskUI(e.target.parentNode);\n    } else if (e.target.parentNode.id === \"trash\") {\n        deleteTask(e.target.parentNode.parentNode.id);\n        deleteTaskUI(e.target.parentNode.parentNode);\n    }\n}\n\nfunction collectFormData() {\n    let title = document.querySelector(\"#title\").value;\n    let desc = document.querySelector(\"#description\").value;\n    let dueDate = document.querySelector(\"#date\").value;\n\n    //For DOM\n    createNewTask(title, desc, dueDate);\n    //For object\n    const newTask = new _TaskClass__WEBPACK_IMPORTED_MODULE_0__.default(title, desc, dueDate);\n    taskArr.push(newTask);\n    console.log(taskArr);\n    let form = document.querySelector(\".create-task\");\n    form.reset();\n}\n\nfunction deleteTask(e) {\n    let taskIndex = findTask(e);\n    // console.log(`taskindex is ${taskIndex}`);\n    taskArr.splice(taskIndex,1);\n    console.log(taskArr);\n}\n\nfunction deleteTaskUI(e) {\n    e.remove();\n}\n\nfunction findTask(title) {\n    return taskArr.findIndex(task => task.title === title);\n}\n\nfunction createNewTask(title, desc, dueDate) {\n    const task = document.createElement(\"div\");\n    task.setAttribute(\"id\", title);\n    task.classList.add(\"task\");\n\n    const layoutHTML = `\n        <input type=\"checkbox\">\n        <div class=\"taskTitle\"><p>${title}</p></div>\n        <div class=\"taskDate\"><p>${dueDate}</p></div>\n        <svg id=\"trash\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-trash\" viewBox=\"0 0 16 16\">\n            <path d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"/>\n            <path fill-rule=\"evenodd\" d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"/>\n        </svg>`;\n\n    task.innerHTML = layoutHTML;\n    list.appendChild(task);\n}\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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