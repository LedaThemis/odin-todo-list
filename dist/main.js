/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --main-bg-color: #041c32;\\n  --secondary-bg-color: #04293a;\\n  --third-bg-color: #064663;\\n\\n  --main-text-color: #ffffff;\\n\\n  --title-font-family: Raleway, sans-serif;\\n  --sidebar-font-family: Poppins, sans-serif;\\n  --task-font-family: var(--title-font-family);\\n}\\n\\nbody {\\n  margin: 0;\\n  height: 100vh;\\n  display: grid;\\n  grid-template-columns: 0.3fr 0.7fr;\\n  grid-template-rows: 0.2fr 0.8fr;\\n  grid-template-areas:\\n    'TITLE TITLE'\\n    'SIDEBAR MAIN';\\n}\\n\\n#header {\\n  grid-area: TITLE;\\n\\n  background-color: var(--main-bg-color);\\n  color: var(--main-text-color);\\n\\n  text-align: center;\\n  font-family: var(--title-font-family);\\n}\\n\\n#sidebar {\\n  grid-area: SIDEBAR;\\n\\n  background-color: var(--secondary-bg-color);\\n  color: var(--main-text-color);\\n  font-family: var(--sidebar-font-family);\\n  font-size: 1.25rem;\\n\\n  height: 100vh;\\n}\\n\\n#nav {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n\\n  padding: 1rem;\\n}\\n\\n#nav > ul,\\n#nav > ul > li > ul {\\n  padding: 0;\\n  list-style-type: none;\\n  margin: 0;\\n}\\n\\n#nav li {\\n  padding-left: 1rem;\\n}\\n\\n#add-project {\\n  width: 100%;\\n  height: 2rem;\\n\\n  background-color: transparent;\\n  border: 2px solid white;\\n\\n  cursor: pointer;\\n\\n  color: var(--main-text-color);\\n  font-size: 2rem;\\n\\n  display: grid;\\n  justify-content: center;\\n  align-content: center;\\n\\n  margin: 1rem 0;\\n}\\n\\n#add-project:hover {\\n  background-color: white;\\n  color: var(--secondary-bg-color);\\n}\\n\\n#main {\\n  grid-area: MAIN;\\n  padding: 1rem;\\n}\\n\\n.task,\\n.task-info,\\n.task-buttons {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.task {\\n  justify-content: space-between;\\n}\\n\\n.task-info {\\n  gap: 0.5rem;\\n\\n  font-family: var(--task-font-family);\\n}\\n\\n.task-buttons > img {\\n  cursor: pointer;\\n}\\n\\n#add-task {\\n  border: none;\\n  cursor: pointer;\\n\\n  position: fixed;\\n  width: 60px;\\n  height: 60px;\\n  bottom: 40px;\\n  right: 40px;\\n\\n  background-color: var(--secondary-bg-color);\\n  color: var(--main-text-color);\\n\\n  border-radius: 50px;\\n  box-shadow: 2px 2px 3px #999;\\n\\n  display: grid;\\n  place-items: center;\\n\\n  text-decoration: none;\\n}\\n\\n#add-task-div,\\n#add-project-div {\\n  position: fixed;\\n  width: 100vw;\\n  height: 100vh;\\n\\n  display: grid;\\n  align-items: center;\\n  justify-content: center;\\n\\n  background-color: rgba(0, 0, 0, 0.2);\\n}\\n\\n#add-task-form,\\n#add-project-form {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n\\n  font-family: var(--title-font-family);\\n  font-size: 2rem;\\n\\n  background-color: var(--third-bg-color);\\n  color: var(--main-text-color);\\n\\n  padding: 1rem;\\n  border-radius: 1rem;\\n}\\n\\n.form-buttons {\\n  border: none;\\n  background-color: var(--secondary-bg-color);\\n  color: var(--main-text-color);\\n  font-family: var(--task-font-family);\\n  font-weight: bold;\\n\\n  cursor: pointer;\\n}\\n#submit-task,\\n#submit-project {\\n  width: 10rem;\\n  height: 2rem;\\n}\\n\\n#close-task-form,\\n#close-project-form {\\n  align-self: flex-end;\\n  width: 2rem;\\n  height: 2rem;\\n}\\n\\n#fill-all-required-fields,\\n#fill-project-name {\\n  font-size: 1rem;\\n  font-weight: bold;\\n}\\n\\n#add-project-form > fieldset {\\n  display: flex;\\n  align-items: center;\\n}\\n#project-name {\\n  width: 100%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/clear_icon.svg":
/*!****************************!*\
  !*** ./src/clear_icon.svg ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='%23000000'%3e%3cpath d='M0 0h24v24H0V0z' fill='none'/%3e%3cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'/%3e%3c/svg%3e\"\n\n//# sourceURL=webpack://odin-todo-list/./src/clear_icon.svg?");

/***/ }),

/***/ "./src/edit_icon.svg":
/*!***************************!*\
  !*** ./src/edit_icon.svg ***!
  \***************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='%23000000'%3e%3cpath d='M0 0h24v24H0V0z' fill='none'/%3e%3cpath d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75 2.53-2.54z'/%3e%3c/svg%3e\"\n\n//# sourceURL=webpack://odin-todo-list/./src/edit_icon.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _edit_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit_icon.svg */ \"./src/edit_icon.svg\");\n/* harmony import */ var _edit_icon_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_edit_icon_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _clear_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clear_icon.svg */ \"./src/clear_icon.svg\");\n/* harmony import */ var _clear_icon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clear_icon_svg__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst createTask = (title, dueDate, priority) => {\n  let isDone = false;\n  let _priority = priority;\n  let _title = title;\n  let _dueDate = dueDate;\n\n  const getTitle = () => _title;\n  const getDueDate = () => _dueDate;\n  const getIsDone = () => isDone;\n  const getPriority = () => _priority;\n\n  const setTitle = (newTitle) => {\n    _title = newTitle;\n  };\n\n  const setDueDate = (newDueDate) => {\n    _dueDate = newDueDate;\n  };\n\n  const setPriority = (newPriority) => {\n    _priority = newPriority;\n  };\n\n  const setDone = () => {\n    isDone = true;\n  };\n\n  const setDoing = () => {\n    isDone = false;\n  };\n\n  return {\n    getTitle,\n    getDueDate,\n    getPriority,\n    getIsDone,\n    setTitle,\n    setDueDate,\n    setPriority,\n    setDone,\n    setDoing,\n  };\n};\n\nconst storage = (() => {\n  let projects = ['default'];\n  let tasks = [];\n\n  const addProject = (name) => {\n    projects.push(name);\n  };\n  const removeProject = (id) => {\n    projects = projects.slice(0, id).concat(projects.slice(id + 1));\n  };\n\n  const getProjects = () => {\n    return projects;\n  };\n\n  const addTask = (task, projectId) => {\n    tasks.push({ task, projectId });\n  };\n\n  const removeTask = (id) => {\n    tasks = tasks.slice(0, id).concat(tasks.slice(id + 1));\n  };\n\n  const getTasks = () => {\n    return tasks;\n  };\n\n  return {\n    addTask,\n    removeTask,\n    getTasks,\n    addProject,\n    removeProject,\n    getProjects,\n  };\n})();\n\nconst createOptionElement = (name, value) => {\n  const option = document.createElement('option');\n  option.innerText = name;\n  option.value = value;\n\n  return option;\n};\n\nconst getProjectsDropdownValues = (projects) => {\n  return projects.map((project, i) => createOptionElement(project, i));\n};\n\nconst showAddTaskForm = () => {\n  const addTaskFormDiv = document.querySelector('#add-task-div');\n  addTaskFormDiv.style.display = 'grid';\n};\n\nconst hideAddTaskForm = () => {\n  const addTaskFormDiv = document.querySelector('#add-task-div');\n  addTaskFormDiv.style.display = 'none';\n};\n\nconst showAddProjectForm = () => {\n  const addProjectFormDiv = document.querySelector('#add-project-div');\n  addProjectFormDiv.style.display = 'grid';\n};\n\nconst hideAddProjectForm = () => {\n  const addProjectFormDiv = document.querySelector('#add-project-div');\n  addProjectFormDiv.style.display = 'none';\n};\n\nfunction handleAddTask(e) {\n  const projectsDropdown = document.querySelector('#task-project');\n  const dropdownValues = getProjectsDropdownValues(storage.getProjects());\n\n  projectsDropdown.replaceChildren();\n\n  const emptyOption = createOptionElement('', '');\n  emptyOption.selected = true;\n  emptyOption.disabled = true;\n  projectsDropdown.appendChild(emptyOption);\n\n  dropdownValues.forEach((dropdownValue) =>\n    projectsDropdown.appendChild(dropdownValue)\n  );\n  showAddTaskForm();\n}\n\nfunction handleCloseForm(e) {\n  hideAddTaskForm();\n}\n\nfunction handleSubmitTask(e) {\n  const form = document.querySelector('#add-task-form');\n  const formData = new FormData(form);\n  const title = formData.get('task-name');\n  const dueDate = formData.get('task-dueDate');\n  const priority = formData.get('task-priority');\n  const projectId = formData.get('task-project');\n\n  const p = document.querySelector('#fill-all-required-fields');\n  if (!title || !dueDate | !priority || !projectId) {\n    p.textContent = 'Please fill all the fields.';\n    return;\n  }\n  p.textContent = '';\n\n  const task = createTask(title, dueDate, priority);\n\n  storage.addTask(task, projectId);\n\n  form.reset();\n  hideAddTaskForm();\n\n  renderTasks(storage.getTasks());\n}\n\nfunction handleAddProject(e) {\n  showAddProjectForm();\n}\n\nconst handleCloseProjectForm = () => {\n  hideAddProjectForm();\n};\n\nfunction handleSubmitProject(e) {\n  const form = document.querySelector('#add-project-form');\n  const formData = new FormData(form);\n  const name = formData.get('project-name');\n\n  const p = document.querySelector('#fill-project-name');\n  if (!name) {\n    p.textContent = 'Please provide a project name.';\n    return;\n  }\n  p.textContent = '';\n\n  storage.addProject(name);\n\n  form.reset();\n  hideAddProjectForm();\n}\n\nconst getTaskHTML = (task, id) => {\n  const taskDiv = document.createElement('div');\n  taskDiv.classList.add('task');\n\n  const taskInfoDiv = document.createElement('div');\n  taskInfoDiv.classList.add('task-info');\n\n  const taskCheckbox = document.createElement('input');\n  taskCheckbox.type = 'checkbox';\n  taskCheckbox.name = `task-checkbox-${id}`;\n  taskCheckbox.id = `task-checkbox-${id}`;\n  taskCheckbox.checked = task.task.getIsDone();\n  taskCheckbox.classList.add('task-checkbox');\n  taskCheckbox.addEventListener('click', (e) => handleTaskCheckboxClick(e, id));\n\n  const taskTitle = document.createElement('p');\n  taskTitle.id = `task-title-${id}`;\n  taskTitle.classList.add('task-title');\n  taskTitle.innerText = task.task.getTitle();\n\n  taskInfoDiv.appendChild(taskCheckbox);\n  taskInfoDiv.appendChild(taskTitle);\n\n  const taskButtonsDiv = document.createElement('div');\n  taskButtonsDiv.classList.add('task-buttons');\n\n  const editTaskButton = document.createElement('img');\n  editTaskButton.src = (_edit_icon_svg__WEBPACK_IMPORTED_MODULE_1___default());\n  editTaskButton.alt = 'edit task';\n  editTaskButton.id = `task-edit-${id}`;\n  editTaskButton.classList.add('task-edit');\n  editTaskButton.addEventListener('click', (e) => handleTaskEdit(e, id));\n\n  const deleteTaskButton = document.createElement('img');\n  deleteTaskButton.src = (_clear_icon_svg__WEBPACK_IMPORTED_MODULE_2___default());\n  deleteTaskButton.alt = 'delete task';\n  deleteTaskButton.id = `task-delete-${id}`;\n  deleteTaskButton.classList.add('task-delete');\n  deleteTaskButton.addEventListener('click', (e) => handleTaskDelete(e, id));\n\n  taskButtonsDiv.appendChild(editTaskButton);\n  taskButtonsDiv.appendChild(deleteTaskButton);\n\n  taskDiv.appendChild(taskInfoDiv);\n  taskDiv.appendChild(taskButtonsDiv);\n\n  return taskDiv;\n};\n\nconst handleTaskCheckboxClick = (e, taskId) => {\n  if (e.target.checked) {\n    storage.getTasks()[taskId].task.setDone();\n  } else {\n    storage.getTasks()[taskId].task.setDoing();\n  }\n};\n\nconst handleTaskDelete = (e, taskId) => {\n  storage.removeTask(taskId);\n  renderTasks(storage.getTasks());\n};\n\nconst handleTaskEdit = (e, taskId) => {};\n\nconst renderTasks = (tasks) => {\n  const main = document.querySelector('#main');\n  main.replaceChildren();\n  tasks.forEach((task, id) => {\n    const taskHTML = getTaskHTML(task, id);\n    main.appendChild(taskHTML);\n  });\n};\n\nconst addTaskButton = document.querySelector('#add-task');\naddTaskButton.addEventListener('click', handleAddTask);\n\nconst closeFormButton = document.querySelector('#close-task-form');\ncloseFormButton.addEventListener('click', handleCloseForm);\n\nconst submitTaskButton = document.querySelector('#submit-task');\nsubmitTaskButton.addEventListener('click', handleSubmitTask);\n\nconst addProjectButton = document.querySelector('#add-project');\naddProjectButton.addEventListener('click', handleAddProject);\n\nconst closeProjectForm = document.querySelector('#close-project-form');\ncloseProjectForm.addEventListener('click', handleCloseProjectForm);\n\nconst submitProjectButton = document.querySelector('#submit-project');\nsubmitProjectButton.addEventListener('click', handleSubmitProject);\n\nconst task = createTask('Buy Apples', '2022-04-06', 'high');\n\ntask.setDone();\n\nstorage.addTask(task, 0);\n\nrenderTasks(storage.getTasks());\n\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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