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

/***/ "./src/components/Home/Footer/index.js":
/*!*********************************************!*\
  !*** ./src/components/Home/Footer/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/Home/Footer/styles.scss\");\n\nclass Footer {\n  constructor(linkedin, github) {\n    this.linkedinLink = linkedin ? `https://www.linkedin.com/in/${linkedin}` : 'https://www.linkedin.com';\n    this.githubLink = github ? `https://www.github.com/${github}` : 'https://www.github.com';\n  }\n  render() {\n    const footerContainer = document.createElement('div');\n    footerContainer.classList.add('footer-container');\n    footerContainer.innerHTML = `\n        <ul>\n            <li><a href=${this.linkedinLink}><img src=\"src/assets/images/linkedin.svg\"></a></li>\n            <li><a href=${this.githubLink}><img src=\"src/assets/images/github.svg\"></a></li>\n        </ul>\n        `;\n    return footerContainer;\n  }\n}\n\n//# sourceURL=webpack://desafio-frontend/./src/components/Home/Footer/index.js?");

/***/ }),

/***/ "./src/components/Home/Header/index.js":
/*!*********************************************!*\
  !*** ./src/components/Home/Header/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/Home/Header/styles.scss\");\n\nclass Header {\n  constructor(titulo) {\n    this.titulo = titulo || 'Nome e Sobrenome';\n  }\n  render() {\n    const headerContainer = document.createElement('div');\n    headerContainer.classList.add('header-container');\n    const homeTitle = document.createElement('h1');\n    homeTitle.classList.add('home-title');\n    homeTitle.textContent = this.titulo;\n    const nav = document.createElement('nav');\n    nav.classList.add('nav');\n    nav.innerHTML = `\n    <ul>\n      <li><a href=\"#\">sobre</a></li>\n      <li><a href=\"#\">portfólio</a></li>\n      <li><a href=\"#\">contato</a></li>\n    </ul>\n    `;\n    headerContainer.appendChild(homeTitle);\n    headerContainer.appendChild(nav);\n    return headerContainer;\n  }\n}\n\n//# sourceURL=webpack://desafio-frontend/./src/components/Home/Header/index.js?");

/***/ }),

/***/ "./src/components/Home/Main/index.js":
/*!*******************************************!*\
  !*** ./src/components/Home/Main/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/Home/Main/styles.scss\");\n\nclass Main {\n  constructor(titulo, subtitulo) {\n    this.titulo = titulo || 'Cargo Objetivo';\n    this.subtitulo = subtitulo || '';\n  }\n  render() {\n    const mainContainer = document.createElement('div');\n    mainContainer.classList.add('main-container');\n    const mainTitle = document.createElement('h2');\n    mainTitle.classList.add('main-title');\n    mainTitle.textContent = this.titulo;\n    const subtitle = document.createElement('h3');\n    subtitle.classList.add('subtitle');\n    subtitle.textContent = this.subtitulo;\n    mainContainer.appendChild(mainTitle);\n    mainContainer.appendChild(subtitle);\n    return mainContainer;\n  }\n}\n\n//# sourceURL=webpack://desafio-frontend/./src/components/Home/Main/index.js?");

/***/ }),

/***/ "./src/components/Home/index.js":
/*!**************************************!*\
  !*** ./src/components/Home/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/Home/styles.scss\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"./src/components/Home/Header/index.js\");\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main */ \"./src/components/Home/Main/index.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ \"./src/components/Home/Footer/index.js\");\n\n\n\n\nclass Home {\n  constructor() {\n    this.header = new _Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Fabio Leardini');\n    this.main = new _Main__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Desenvolvedor Front-End');\n    this.footer = new _Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('fabioleardini', 'tsxfabio');\n  }\n  render() {\n    const homeContainer = document.createElement('div');\n    homeContainer.classList.add('home-container');\n    homeContainer.appendChild(this.header.render());\n    homeContainer.appendChild(this.main.render());\n    homeContainer.appendChild(this.footer.render());\n    return homeContainer;\n  }\n}\n\n//# sourceURL=webpack://desafio-frontend/./src/components/Home/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Home */ \"./src/components/Home/index.js\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/global.scss */ \"./src/styles/global.scss\");\n\n\nconst home = new _components_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst app = document.getElementById('home');\napp.appendChild(home.render());\n\n//# sourceURL=webpack://desafio-frontend/./src/index.js?");

/***/ }),

/***/ "./src/components/Home/Footer/styles.scss":
/*!************************************************!*\
  !*** ./src/components/Home/Footer/styles.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://desafio-frontend/./src/components/Home/Footer/styles.scss?");

/***/ }),

/***/ "./src/components/Home/Header/styles.scss":
/*!************************************************!*\
  !*** ./src/components/Home/Header/styles.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://desafio-frontend/./src/components/Home/Header/styles.scss?");

/***/ }),

/***/ "./src/components/Home/Main/styles.scss":
/*!**********************************************!*\
  !*** ./src/components/Home/Main/styles.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://desafio-frontend/./src/components/Home/Main/styles.scss?");

/***/ }),

/***/ "./src/components/Home/styles.scss":
/*!*****************************************!*\
  !*** ./src/components/Home/styles.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://desafio-frontend/./src/components/Home/styles.scss?");

/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://desafio-frontend/./src/styles/global.scss?");

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