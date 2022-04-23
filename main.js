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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* /scr/styles.css  */\\n* {\\n  box-sizing: border-box;\\n  margin: 0;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: white;\\n}\\n\\nul {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/* navbar */\\nheader.navbar {\\n  height: 80px;\\n  background-color: #00004c;\\n  display: flex;\\n  padding: 0 10em;\\n  align-items: center;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n}\\n\\n.navbar a {\\n  margin: 0 1em;\\n}\\n\\n.forLogo {\\n  margin-right: 7em;\\n}\\n\\n.navLinks {\\n  display: flex;\\n}\\n\\n.activeNavLink {\\n  text-decoration: underline;\\n  font-weight: 700;\\n}\\n\\n/* main content */\\n.mainContent {\\n  margin-top: 8em;\\n  padding: 0 4.5em;\\n  margin-bottom: 4em;\\n}\\n\\n/* pokemon list */\\n#pokemons {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\\n  gap: 0.35em;\\n}\\n\\n.aLikes {\\n  color: black;\\n}\\n\\n.aLikes span {\\n  margin-left: 0.5em;\\n}\\n\\n.onePoke {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  border: #00004c 1px solid;\\n  background-color: #a0eaea;\\n  padding: 0.5em 0.75em;\\n  border-radius: 5px;\\n}\\n\\n.divImage {\\n  background-color: white;\\n  border-radius: 5px;\\n}\\n\\n.divImage,\\n.divImage img {\\n  width: 100%;\\n}\\n\\n.divName {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 100%;\\n  padding: 1em;\\n}\\n\\n.divBtns {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  margin-bottom: 0.35em;\\n}\\n\\n.divBtns button {\\n  margin: 0.35em 0;\\n  padding: 0.35em;\\n  border: #00004c 1px solid;\\n  background-color: white;\\n  color: #00004c;\\n}\\n\\n/* footer */\\nfooter {\\n  height: 40px;\\n  padding-left: 2em;\\n  display: flex;\\n  align-items: center;\\n  background-color: #00004c;\\n  color: white;\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n}\\n\\n/* modal */\\n.modal {\\n  display: none;\\n  position: fixed;\\n  z-index: 5;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.4);\\n  backdrop-filter: blur(5px);\\n}\\n\\n.modalContent {\\n  background-color: #fefefe;\\n  margin: 1em auto;\\n  padding: 0.65em;\\n  border: 1px solid #888;\\n  width: 70%;\\n}\\n\\n.close {\\n  color: #aaa;\\n  float: right;\\n  font-size: 28px;\\n  font-weight: bold;\\n}\\n\\n.modalContent section {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n.modImg {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.modImg img {\\n  width: 25%;\\n}\\n\\n.modInfo {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.modStats {\\n  width: 70%;\\n  margin: 0.85em 0;\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\n.modComments {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n#commentsList {\\n  border: #00004c 1px solid;\\n  width: 70%;\\n  margin: 1em auto;\\n  max-height: 150px;\\n  overflow-y: scroll;\\n  padding: 0.25em;\\n}\\n\\nul#commentsList li:nth-child(odd) {\\n  background-color: rgb(201, 199, 199);\\n}\\n\\n.pokeC {\\n  padding-left: 0.5em;\\n}\\n\\n.commentForm {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n#addComment {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 60%;\\n  margin: 0.5em auto;\\n}\\n\\n#addComment input,\\n#addComment textarea {\\n  width: 60%;\\n  margin: 0.35em 0;\\n}\\n\\n#userComment {\\n  height: 50px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone2-api-webapp/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capstone2-api-webapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone2-api-webapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone2-api-webapp/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone2-api-webapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone2-api-webapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone2-api-webapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone2-api-webapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone2-api-webapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone2-api-webapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_pokemon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pokemon.js */ \"./src/modules/pokemon.js\");\n/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/UI.js */ \"./src/modules/UI.js\");\n/* harmony import */ var _modules_pokemonAPI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/pokemonAPI.js */ \"./src/modules/pokemonAPI.js\");\n/* harmony import */ var _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/involvementAPI.js */ \"./src/modules/involvementAPI.js\");\n/* harmony import */ var _modules_pokeComment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pokeComment.js */ \"./src/modules/pokeComment.js\");\n// /src/index.js - entry point\n\n\n\n\n\n\n\n\n// variables\nconst pokeList = [];\n\nconst modal = document.getElementById('myModal');\nconst closeBtn = document.querySelector('.close');\n\n// methods\nconst transform2pokeComments = (comment) => {\n  const trinity = new _modules_pokeComment_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](comment.username, comment.creation_date, comment.comment);\n  return trinity;\n};\n\nconst transform2poke = (elem) => {\n  const neo = new _modules_pokemon_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](elem.id, elem.name, elem.height, elem.weight, elem.sprites.front_default,\n    elem.sprites.back_default);\n  _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getComments(neo.id).then((res) => {\n    if (res.length >= 1) {\n      const commentList = res;\n      commentList.forEach((comment) => {\n        const morfeus = transform2pokeComments(comment);\n        neo.comments.push(morfeus);\n        neo.commentsCounter += 1;\n      });\n    }\n  })\n    .catch((error) => error);\n  pokeList.push(neo);\n};\n\nconst getLikesAPI = () => {\n  _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getLIkes().then((res) => {\n    if (res.length >= 1) {\n      const likesArr = res;\n      likesArr.forEach((like) => {\n        const idLike = like.item_id;\n        const amountLikes = like.likes;\n        pokeList.forEach((pokemon) => {\n          if (parseInt(pokemon.id, 10) === parseInt(idLike, 10)) {\n            pokemon.likesCounter = parseInt(amountLikes, 10);\n            const pokeLi = document.querySelector(`#poke-${pokemon.id}`);\n            pokeLi.children[1].children[1].children[1].textContent = amountLikes;\n          }\n        });\n      });\n    }\n  });\n};\n\nconst displayAmountItemsNav = () => {\n  const pokeA = document.querySelector('#pokeNav');\n  setTimeout(() => {\n    const amountPokes = pokeList.length;\n    const pokeStr = `Pokemon (${amountPokes})`;\n    pokeA.textContent = pokeStr;\n  }, 900);\n};\n\nconst initPoke = () => {\n  _modules_pokemonAPI_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getInitialList().then((res) => {\n    const tempList = res.results;\n    tempList.forEach((element) => {\n      _modules_pokemonAPI_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get1poke(element.url).then((res) => {\n        transform2poke(res);\n        pokeList.sort((a, b) => a.id - b.id);\n        _modules_UI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayPokesUI(pokeList);\n      });\n    });\n  })\n    .then(() => {\n      getLikesAPI();\n      displayAmountItemsNav();\n    })\n    .catch((error) => error);\n};\n\nconst displayAmountCommentsMod = (id) => {\n  let amountComments = -1;\n  pokeList.forEach((pokemon) => {\n    if (parseInt(pokemon.id, 10) === parseInt(id, 10)) {\n      amountComments = pokemon.commentsCounter;\n    }\n  });\n  const h3Comments = document.querySelector('#commentsCounter');\n  const commentsCounterStr = `Comments (${amountComments})`;\n  h3Comments.textContent = commentsCounterStr;\n};\n\n// Event: on content load\ndocument.addEventListener('DOMContentLoaded', initPoke());\n\n// Event: click anything on the pokemon list\ndocument.querySelector('#pokemons').addEventListener('click', (e) => {\n  e.preventDefault();\n\n  const classesTarget = e.target.className;\n  const classesArr = classesTarget.split(' ');\n  if (classesArr.indexOf('commentBtn') !== -1) {\n    const idstr = e.target.id;\n    const idArr = idstr.split('-');\n    const id = idArr[1];\n    pokeList.forEach((poke) => {\n      if (poke.id === parseInt(id, 10)) {\n        _modules_UI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addInfoModal(poke);\n        modal.style.display = 'block';\n      }\n    });\n  }\n\n  if (classesArr.indexOf('likeIcn') !== -1) {\n    const li = e.target.parentElement.parentElement.parentElement;\n    const { id } = li.dataset;\n    _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].postLike(id);\n    pokeList.forEach((pokemon) => {\n      if (parseInt(pokemon.id, 10) === parseInt(id, 10)) {\n        pokemon.likesCounter += 1;\n        _modules_UI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateLikesCounter(id);\n      }\n    });\n  }\n});\n\ncloseBtn.addEventListener('click', (e) => {\n  e.preventDefault();\n  modal.style.display = 'none';\n});\n\n// modal\ndocument.querySelector('#addComment').addEventListener('submit', (e) => {\n  e.preventDefault();\n\n  // get values from inputs\n  const username = document.querySelector('#userName').value.trim();\n  const comment = document.querySelector('#userComment').value.trim();\n  const { id } = document.querySelector('#modId').dataset;\n  // get date\n  const today = new Date();\n  const year = today.getFullYear();\n  const month = today.getMonth() + 1;\n  const date = today.getDate();\n  let tempM = '';\n  if (month < 10) {\n    tempM = `0${month}`;\n  } else {\n    tempM = month;\n  }\n  const dateStr = `${year}-${tempM}-${date}`;\n  const neo = new _modules_pokeComment_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](username, dateStr, comment);\n  // validate inputs\n  if (username !== '' && comment !== '') {\n    _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].postComment(id, neo);\n    pokeList.forEach((pokemon) => {\n      if (parseInt(pokemon.id, 10) === parseInt(id, 10)) {\n        pokemon.comments.push(neo);\n        pokemon.commentsCounter += 1;\n      }\n    });\n    _modules_UI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addCommmentMod(neo);\n    displayAmountCommentsMod(id);\n  }\n\n  document.querySelector('#userName').value = '';\n  document.querySelector('#userComment').value = '';\n});\n\n//# sourceURL=webpack://capstone2-api-webapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n// /scr/modules/ui.js - USER INTERFACE class, deals with all modifications to the DOM\nclass UI {\n  static addPokemonUI(pokemon) {\n    const list = document.querySelector('#pokemons');\n    const li = document.createElement('li');\n    li.className = 'onePoke';\n    li.dataset.id = pokemon.id;\n    li.id = `poke-${pokemon.id}`;\n    // div image\n    const divImage = document.createElement('div');\n    divImage.className = 'divImage';\n    const pokeImg = document.createElement('img');\n    pokeImg.setAttribute('src', `${pokemon.image}`);\n    pokeImg.setAttribute('alt', `${pokemon.name}'s picture.`);\n    divImage.appendChild(pokeImg);\n    // name & like div\n    const divName = document.createElement('div');\n    divName.className = 'divName';\n    const pName = document.createElement('p');\n    pName.textContent = `${pokemon.name}`;\n    const aLikes = document.createElement('a');\n    aLikes.setAttribute('href', '#');\n    aLikes.setAttribute('id', `like-${pokemon.id}`);\n    aLikes.className = 'aLikes';\n    const icon = document.createElement('i');\n    icon.className = 'fas fa-heart likeIcn';\n    // display likes counter\n    const spanLikes = document.createElement('span');\n    spanLikes.textContent = pokemon.likesCounter;\n    divName.appendChild(pName);\n    aLikes.appendChild(icon);\n    aLikes.appendChild(spanLikes); // appends likes counter\n    divName.appendChild(aLikes);\n    // div buttons\n    const divBtns = document.createElement('div');\n    divBtns.className = 'divBtns';\n    const comment = document.createElement('button');\n    comment.textContent = 'Comment';\n    comment.setAttribute('id', `comment-${pokemon.id}`);\n    comment.className = 'commentBtn';\n    const reservations = document.createElement('button');\n    reservations.textContent = 'Reservations';\n    divBtns.appendChild(comment);\n    divBtns.appendChild(reservations);\n    // append everything\n    li.appendChild(divImage);\n    li.appendChild(divName);\n    li.appendChild(divBtns);\n    list.appendChild(li);\n  }\n\n  static displayPokesUI(pokemons) {\n    const list = document.querySelector('#pokemons');\n    list.innerHTML = '';\n    pokemons.forEach((pokemon) => this.addPokemonUI(pokemon));\n  }\n\n  static addCommmentMod(pComment) {\n    const cList = document.querySelector('#commentsList');\n    const li = document.createElement('li');\n    li.className = 'pokeC';\n    const p = document.createElement('p');\n    p.className = 'pokeComText';\n    p.textContent = pComment.comment2str();\n    li.appendChild(p);\n    cList.appendChild(li);\n  }\n\n  static displayEmptyCommentsMessage() {\n    const cList = document.querySelector('#commentsList');\n    const li = document.createElement('li');\n    li.className = 'pokeC';\n    const p = document.createElement('p');\n    p.className = 'noComments';\n    p.textContent = 'No comments yet';\n    li.appendChild(p);\n    cList.appendChild(li);\n  }\n\n  static displayCommentsMod(comments) {\n    const list = document.querySelector('#commentsList');\n    list.innerHTML = '';\n    if (comments.length === 0) {\n      this.displayEmptyCommentsMessage();\n    } else {\n      comments.forEach((comment) => this.addCommmentMod(comment));\n    }\n  }\n\n  static addInfoModal(pokemon) {\n    const modImg = document.querySelector('#modImage');\n    modImg.setAttribute('src', `${pokemon.image}`);\n    const modImgBack = document.querySelector('#modImageback');\n    modImgBack.setAttribute('src', `${pokemon.backImage}`);\n    const modH2 = document.querySelector('#modH2');\n    modH2.textContent = `${pokemon.name}`;\n    const modId = document.querySelector('#modId');\n    modId.textContent = `ID: ${pokemon.id}`;\n    modId.dataset.id = pokemon.id;\n    const modH = document.querySelector('#modH');\n    modH.textContent = `Height: ${pokemon.height}`;\n    const modW = document.querySelector('#modW');\n    modW.textContent = `Weight: ${pokemon.weight}`;\n    const commentsTitle = document.querySelector('#commentsCounter');\n    let textCtitle = commentsTitle.textContent;\n    textCtitle = `Comments (${pokemon.commentsCounter})`;\n    commentsTitle.textContent = textCtitle;\n    this.displayCommentsMod(pokemon.comments);\n  }\n\n  static updateLikesCounter(id) {\n    const aLike = document.querySelector(`#like-${id}`);\n    aLike.classList.replace('aLikesBlack', 'aLikesRed');\n    const span = aLike.children[1];\n    let counter = parseInt(span.textContent, 10);\n    counter += 1;\n    span.textContent = counter;\n  }\n}\n\n//# sourceURL=webpack://capstone2-api-webapp/./src/modules/UI.js?");

/***/ }),

/***/ "./src/modules/involvementAPI.js":
/*!***************************************!*\
  !*** ./src/modules/involvementAPI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InvolvementAPI)\n/* harmony export */ });\n// src/modules/involvementAPI.js - static class that deals with call to involvement API\n\nclass InvolvementAPI {\n  static baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\n\n  static appKey = 'qv8KnQaoWUVJfj8Oz7Qq';\n  // static appKey = '6EARLHJYvrvfUKinMeCd';\n\n  static likesEnd = '/likes';\n\n  static commentsEnd = '/comments';\n\n  static async getComments(id) {\n    const commentsURL = `${this.baseURL}${this.appKey}${this.commentsEnd}?item_id=${id}`;\n    const response = await fetch(commentsURL);\n    const data = response.json();\n    return data;\n  }\n\n  static async postLike(id) {\n    const like2send = {\n      item_id: `${id}`,\n    };\n    const newLikeURL = `${this.baseURL}${this.appKey}${this.likesEnd}`;\n\n    const response = await fetch(newLikeURL, {\n      method: 'post',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(like2send),\n    });\n\n    return response;\n  }\n\n  static async getLIkes() {\n    const likesURL = `${this.baseURL}${this.appKey}${this.likesEnd}`;\n    const response = await fetch(likesURL);\n    const data = response.json();\n    return data;\n  }\n\n  static async postComment(id, comment) {\n    const comment2send = {\n      item_id: `${id}`,\n      username: `${comment.username}`,\n      comment: `${comment.statement}`,\n    };\n\n    const newCommentURL = `${this.baseURL}${this.appKey}${this.commentsEnd}`;\n\n    const response = await fetch(newCommentURL, {\n      method: 'post',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(comment2send),\n    });\n\n    return response;\n  }\n}\n\n//# sourceURL=webpack://capstone2-api-webapp/./src/modules/involvementAPI.js?");

/***/ }),

/***/ "./src/modules/pokeComment.js":
/*!************************************!*\
  !*** ./src/modules/pokeComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PokeComment)\n/* harmony export */ });\n// /src/modules/pokeComment.js - class that encapsulates a comment for a pokemon\n\nclass PokeComment {\n  constructor(username, date, statement) {\n    this.username = username;\n    this.date = date;\n    this.statement = statement;\n  }\n\n  comment2str() {\n    return `${this.date} - ${this.statement} by ${this.username}`;\n  }\n}\n\n//# sourceURL=webpack://capstone2-api-webapp/./src/modules/pokeComment.js?");

/***/ }),

/***/ "./src/modules/pokemon.js":
/*!********************************!*\
  !*** ./src/modules/pokemon.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pokemon)\n/* harmony export */ });\n// /src/modules/pokemon.js - Pokemon class\n\nclass Pokemon {\n  constructor(id, name, height, weight, image, backImg) {\n    this.id = id;\n    this.name = name.charAt(0).toUpperCase() + name.slice(1);\n    this.height = height;\n    this.weight = weight;\n    this.image = image;\n    this.backImage = backImg;\n    this.likesCounter = 0;\n    this.commentsCounter = 0;\n    this.comments = [];\n  }\n}\n\n//# sourceURL=webpack://capstone2-api-webapp/./src/modules/pokemon.js?");

/***/ }),

/***/ "./src/modules/pokemonAPI.js":
/*!***********************************!*\
  !*** ./src/modules/pokemonAPI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PokemonAPI)\n/* harmony export */ });\n// src/modules/pokemonAPI.js - deals with calls to pokemon apo\nclass PokemonAPI {\n    static baseURL = 'https://pokeapi.co/api/v2/pokemon/';\n\n    static async getInitialList() {\n      const response = await fetch(this.baseURL);\n      const data = response.json();\n      return data;\n    }\n\n    static async get1poke(URL) {\n      const response = await fetch(URL);\n      const data = response.json();\n      return data;\n    }\n}\n\n//# sourceURL=webpack://capstone2-api-webapp/./src/modules/pokemonAPI.js?");

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