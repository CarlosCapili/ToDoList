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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(title, desc, dueDate = \"No date\", completed = false) {\n        this.title = title;\n        this.desc = desc;\n        this.dueDate = dueDate;\n        this.completed = false;\n    }\n\n    getTitle() {\n        return this.title;\n    }\n    setTitle(newTitle) {\n        this.title = newTitle;\n    }\n\n    getDueDate() {\n        return this.dueDate;\n    }\n    setDueDate(newDueDate) {\n        this.dueDate = newDueDate;\n    }\n\n    getDesc() {\n        return this.desc;\n    }\n    setDesc(newDesc) {\n        this.desc = newDesc;\n    }\n\n    getCompleted() {\n        return this.completed;\n    }\n    toggleCompleted() {\n        this.completed = !this.completed;\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/TaskClass.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TaskClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskClass */ \"./src/TaskClass.js\");\n\n\nlet taskArr = [];\n\n//Default UI\nloadCreateTask();\n\nconst list = document.querySelector(\".list\");\n\n//Load home, project, or notes\nconst homeBtn = document.getElementById(\"home\");\nconst projBtn = document.getElementById(\"projects\");\nconst noteBtn = document.getElementById(\"notes\");\nconst homeNum = document.getElementById(\"homeNum\");\nconst projNum = document.getElementById(\"projNum\");\nconst noteNum = document.getElementById(\"noteNum\");\n\nhomeBtn.addEventListener(\"click\", loadHome);\nprojBtn.addEventListener(\"click\", loadProj);\nnoteBtn.addEventListener(\"click\", loadNote);\n\nfunction loadHome() {\n    list.innerHTML = \"\";\n    taskArr.forEach(task => {\n        createNewTask(task.getTitle(), task.getDesc(), task.getDueDate());\n    });\n}\n\nfunction loadProj() {\n    list.innerHTML = \"No project selected\";\n}\n\nfunction loadNote() {\n    list.innerHTML = \"No notes\";\n}\n\n//Update the amount of items in home, proj, and notes\nfunction updateHomeNum() {\n    if (taskArr.length == 0) {\n        homeNum.textContent = \"\";\n    } else {\n        homeNum.textContent = taskArr.length;\n    }\n    console.log(\"HOME NUM UPDATED!\");\n}\n\nfunction updateProjNum() {\n    \n}\n\nfunction updateNoteNum() {\n\n}\n\n//Task Handlers\nlist.addEventListener(\"click\", handleTask);\nfunction handleTask(e) {\n    console.log(e.target);\n\n    //div is used when trash svg is clicked\n    //div2 is used when the svg path is clicked\n    const div = e.target.parentNode;\n    const div2 =  e.target.parentNode.parentNode;\n\n    if (e.target.id === \"trash\") {\n        deleteTask(div.id);\n        deleteTaskUI(div);\n    } else if (e.target.parentNode.id === \"trash\") {\n        deleteTask(div2.id);\n        deleteTaskUI(div2);\n    } else if (e.target.type === \"checkbox\") {\n        const index = findTask(div.id);\n        taskArr[index].toggleCompleted();\n        console.log(taskArr);\n    } else if (e.target.className === \"title\") {\n        const index = findTask(div2.id);\n        loadTaskInfo(index);\n    }\n}\n\nfunction updateTaskUI(index) {\n    let task = taskArr[index];\n    console.log(task.getTitle());\n    let taskDiv = document.getElementById(`${task.getTitle()}`).childNodes;\n    taskDiv[5].textContent = task.getDueDate();\n}\n\nfunction editTaskInfo(index) {\n    let task = taskArr[index];\n    let title = document.querySelector(\"#title\").value;\n    let desc = document.querySelector(\"#description\").value;\n    let dueDate = document.querySelector(\"#date\").value;\n\n    task.setTitle(title);\n    task.setDesc(desc);\n    task.setDueDate(dueDate);\n}\n\nfunction loadTaskInfo(index) {\n    let task = taskArr[index];\n    let title = document.querySelector(\"#title\");\n    let desc = document.querySelector(\"#description\");\n    let dueDate = document.querySelector(\"#date\");\n\n    title.value = task.getTitle();\n    desc.value = task.getDesc();\n    dueDate.value = task.getDueDate();\n}\n\nfunction collectFormData() {\n    let title = document.querySelector(\"#title\").value;\n    let desc = document.querySelector(\"#description\").value;\n    let dueDate = document.querySelector(\"#date\").value;\n    addTask(title, desc, dueDate);\n  \n}\n\nfunction addTask(title, desc, dueDate) {\n  //For DOM\n  createNewTask(title, desc, dueDate);\n  //For object\n  const newTask = new _TaskClass__WEBPACK_IMPORTED_MODULE_0__.default(title, desc, dueDate);\n  taskArr.push(newTask);\n  console.log(taskArr);\n  updateHomeNum();\n}\n\nfunction deleteTask(e) {\n    let taskIndex = findTask(e);\n    taskArr.splice(taskIndex,1);\n    console.log(taskArr);\n    updateHomeNum();\n}\n\nfunction deleteTaskUI(e) {\n    e.remove();\n}\n\nfunction findTask(title) {\n    return taskArr.findIndex(task => task.title === title);\n}\n\n//UI Creation of task, project, and note \nfunction createNewTask(title, desc, dueDate) {\n    const task = document.createElement(\"div\");\n\n    //Set the id of the div to the title of the task\n    task.setAttribute(\"id\", title);\n    task.classList.add(\"task\");\n\n    const layoutHTML = `\n        <input type=\"checkbox\">\n        <div class=\"taskTitle\"><p class=\"title\">${title}</p></div>\n        <div class=\"taskDate\">${dueDate}</div>\n        <svg id=\"trash\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-trash\" viewBox=\"0 0 16 16\">\n            <path d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"/>\n            <path fill-rule=\"evenodd\" d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"/>\n        </svg>`;\n\n    task.innerHTML = layoutHTML;\n    list.appendChild(task); \n}\n\nfunction createNewProj() {\n\n}\n\nfunction createNewNote() {\n\n}\n\n//Add horizontal bar\nconst addContainer = document.querySelector(\".add-option\");\nconst addBtns = addContainer.querySelectorAll(\".option\");\n\n//highlights active class\naddBtns.forEach(btn => {\n    btn.addEventListener(\"click\", (e) => {\n        let current = addContainer.querySelector(\".active\");\n        current.classList.remove(\"active\");\n        e.target.className += \" active\";\n        loadCreateScreens(e)\n    });\n});\n\n//Vertical menu bar\nconst menuContainer = document.querySelector(\"#left\");\nconst menuBtns = menuContainer.querySelectorAll(\".item\");\n\n//highlights active menu\nmenuBtns.forEach(btn => {\n    btn.addEventListener(\"click\", (e) => {\n        let current = menuContainer.querySelector(\".active\");\n        current.classList.remove(\"active\");\n        if (e.target.classList.contains(\"num\")) {\n            e.target.parentNode.className += \" active\";\n        } else {\n            e.target.className += \" active\";\n        }\n    });\n});\n\nfunction loadCreateScreens(e) {\n    console.log(e.target.id);\n    if(e.target.id === \"add-task\") {\n        loadCreateTask();\n    } else if (e.target.id === \"add-proj\") {\n        loadCreateProj();\n    } else if (e.target.id === \"add-note\") {\n        loadCreateNote();\n    }\n}\n\n// Task, project, and note creation menu\nfunction loadCreateTask() {\n    const formTag = document.querySelector(\".create-task\");\n    formTag.innerHTML = `\n    <div>\n        <p>Due Date:</p>\n        <input id=\"date\" type=\"date\">\n    </div>\n    <input type=\"text\" id=\"title\" placeholder=\"Title\" required>\n    <textarea id=\"description\" placeholder=\"Description\"></textarea>\n    <button type=\"button\" id=\"save\">Save</button>\n    `;\n\n    //Adds to list\n    const saveBtn = document.querySelector(\"#save\");\n    saveBtn.addEventListener(\"click\", (e) => {\n        console.log(\"THIS DOES NOT WORK AFTER!!\");\n        const taskTitle = document.querySelector(\"#title\").value;\n        if (taskTitle !== \"\" && taskTitle.trim() !== \"\") {\n            let taskIndex = findTask(taskTitle);\n            if (taskIndex < 0) {\n                collectFormData();\n            } else {\n                alert(\"Task updated and saved\");\n                editTaskInfo(taskIndex);\n                updateTaskUI(taskIndex);\n            }\n            let form = document.querySelector(\".create-task\");\n            form.reset();\n        }\n    });\n}\n\nfunction loadCreateProj() {\n    const formTag = document.querySelector(\".create-task\");\n    formTag.innerHTML = `\n    <input type=\"text\" id=\"title\" placeholder=\"Project Name\" required>\n    <textarea id=\"description\" placeholder=\"Description\"></textarea>\n    <button type=\"button\" id=\"save\">Save</button>\n    `;\n}\n\nfunction loadCreateNote() {\n    const formTag = document.querySelector(\".create-task\");\n    formTag.innerHTML = `\n    <input type=\"text\" id=\"title\" placeholder=\"Note Name\" required>\n    <textarea id=\"description\" placeholder=\"Description\"></textarea>\n    <button type=\"button\" id=\"save\">Save</button>\n    `;\n}\n\n// Local storage functions\nfunction saveList() {\n    let tasks = [];\n\n    for (let i=0; i<taskArr.length; i++) {\n        let task = taskArr[0];\n        let taskInfo = {\n            \"title\": task.getTitle(),\n            \"desc\": task.getDesc(),\n            \"date\": task.getDueDate(),\n            \"isDone\": task.getCompleted()\n        };\n        tasks.push(taskInfo);\n    }\n    localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n}\n\nfunction loadList() {\n    if (localStorage.getItem(\"tasks\") != null) {\n        let tasks = JSON.parse(localStorage.getItem(\"tasks\"));\n        for (let i=0; i<tasks.length; i++) {\n            let task = tasks[i];\n            addTask(task.title, task.desc, task.date, task.isDone);\n        }\n    }\n}\n\nloadList();\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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