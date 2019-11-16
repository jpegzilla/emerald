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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/main.min.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/main.min.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lexend+Deca|Share+Tech+Mono&display=swap);", ""]);
// Module
exports.push([module.i, "@keyframes colorchange{from{background:red}15%{background:orange}30%{background:yellow}45%{background:green}60%{background:blue}75%{background:indigo}90%{background:violet}to{background:red}}@keyframes loadingSpinner{from{transform:rotateZ(0deg)}90%{transform:rotateZ(360deg)}to{transform:rotateZ(360deg)}}input[type=\"range\"]{-webkit-appearance:none;color:#50c878;margin:4.45px 0;cursor:pointer;opacity:1;transition:opacity 0.2s;width:100%;background-color:transparent}input[type=\"range\"].colortxtInput{color:#1b0758}input[type=\"range\"]:focus{outline:none}input[type=\"range\"]::-webkit-slider-runnable-track{width:100%;height:0.5rem;box-shadow:0px 0px 0px rgba(0,0,0,0),0px 0px 0px rgba(13,13,13,0);background:rgba(0,0,0,0.18);border-radius:1rem;border:0px solid rgba(0,1,1,0)}input[type=\"range\"]::-webkit-slider-thumb{box-shadow:0px 0px 0px rgba(0,0,0,0),0px 0px 0px rgba(13,13,13,0);border:0px solid rgba(0,0,0,0);height:1rem;width:1rem;border-radius:2.5rem;background:currentColor;-webkit-appearance:none;margin-top:-4.45px}input[type=\"range\"]:focus::-webkit-slider-runnable-track{background:rgba(13,13,13,0.18)}input[type=\"range\"]::-moz-range-track{width:100%;height:0.5rem;box-shadow:0px 0px 0px rgba(0,0,0,0),0px 0px 0px rgba(13,13,13,0);background:rgba(0,0,0,0.18);border-radius:1rem;border:0px solid rgba(0,1,1,0)}input[type=\"range\"]::-moz-range-thumb{box-shadow:0px 0px 0px rgba(0,0,0,0),0px 0px 0px rgba(13,13,13,0);border:0px solid rgba(0,0,0,0);height:1rem;width:1rem;border-radius:2.5rem;background:currentColor}input[type=\"range\"]::-ms-track{width:100%;height:0.5rem;background:transparent;border-color:transparent;color:transparent}input[type=\"range\"]::-ms-fill-lower{background:rgba(0,0,0,0.18);border:0px solid rgba(0,1,1,0);border-radius:3rem;box-shadow:0px 0px 0px rgba(0,0,0,0),0px 0px 0px rgba(13,13,13,0)}input[type=\"range\"]::-ms-fill-upper{background:rgba(0,0,0,0.18);border:0px solid rgba(0,1,1,0);border-radius:3rem;box-shadow:0px 0px 0px rgba(0,0,0,0),0px 0px 0px rgba(13,13,13,0)}input[type=\"range\"]::-ms-thumb{box-shadow:0px 0px 0px rgba(0,0,0,0),0px 0px 0px rgba(13,13,13,0);border:0px solid rgba(0,0,0,0);height:1rem;width:1rem;border-radius:2.5rem;background:currentColor;height:0.5rem}input[type=\"range\"]:focus::-ms-fill-lower{background:rgba(0,0,0,0)}input[type=\"range\"]:focus::-ms-fill-upper{background:rgba(13,13,13,0)}input[type=\"range\"]:disabled{opacity:0.5;transition:opacity 0.2s;cursor:not-allowed !important}*{box-sizing:border-box;margin:0}:root{font-size:16px;width:100vw}@media (max-width: 1300px){font-size:12px}body::-webkit-scrollbar{display:none}#preloader{user-select:none;height:100vh;width:100vw;min-width:100vw;opacity:1;transition:opacity 0.5s;background-color:#030303;position:fixed;z-index:9999999;overflow:hidden;display:flex;justify-content:center;align-items:center;flex-direction:column}#preloader.hidden{opacity:0;transition:opacity 0.5s;pointer-events:none}#preloader .preloader-title{color:#eaeaea;font-family:\"Lexend Deca\",sans-serif;font-size:7rem}#preloader .colorbox-spinner{will-change:transform;height:6rem;width:6rem;border-radius:4pt;overflow:hidden;animation:loadingSpinner 1.5s infinite ease}#preloader .colorbox-spinner .colorbox{height:100%;width:100%;animation:colorchange 10s infinite ease}@media (max-width: 1300px){#preloader .preloader-title{font-size:4rem}#preloader .colorbox-spinner{height:4rem;width:4rem}}header{filter:invert(0);transition:filter 0.3s;width:100vw;display:flex;justify-content:center;position:fixed;top:0;right:0;font-family:\"Lexend Deca\",sans-serif;pointer-events:none;user-select:none;font-size:2rem;padding:2rem 5rem;z-index:9}header.invert{filter:invert(1);transition:filter 0.3s}body.dark header.invert{filter:invert(1)}@media (max-width: 1300px){header{padding:1rem 2rem;font-size:1.5rem}header span#randomizeReminder{display:none}}@media (max-width: 900px){header{padding:1rem;font-size:1.5rem}}header span#randomizeReminder{font-size:0.65em;color:#eaeaea}header span#randomizeReminder.hidden{opacity:0;transition:opacity 0.3s color 0.2s}header.black span#randomizeReminder{color:#030303;transition:opacity 0.3s color 0.2s}header b{height:100%;width:auto;flex-grow:1}header span{text-align:right;font-size:1em;display:flex;flex-direction:column;color:#eaeaea;transition:color 0.2s}header span span{font-size:0.5em;pointer-events:auto;cursor:pointer}@media (display-mode: standalone){header span span{display:none}}header.black span{color:#030303;transition:color 0.2s}body.dark header.invert.black,body.dark header.invert{filter:invert(0);transition:color 0.2s}body.dark header.invert.black span,body.dark header.invert span{color:#eaeaea}body header.invert.black,body header.invert{filter:invert(0);transition:color 0.2s}body header.invert.black span,body header.invert span{color:#030303}.update-container{width:100%;height:auto;position:fixed;display:flex;justify-content:flex-end;align-items:flex-end;bottom:0;left:0;z-index:5;pointer-events:none;user-select:none;padding:2rem 4rem}.update-container #updateMessage{font-size:1rem;opacity:0;transition:opacity 0.3s;background-color:#eaeaea;color:#030303;font-family:\"Lexend Deca\",sans-serif;border:1px solid rgba(80,200,120,0.7);border-radius:0.2rem;padding:0.5rem 1rem;cursor:pointer}@media (max-width: 1300px){.update-container #updateMessage{font-size:0.6em}}.update-container #updateMessage.visible{opacity:1;transition:opacity 0.3s;pointer-events:auto}@media (max-width: 1300px){.update-container #updateMessage{padding:0.25rem 0.5rem}}.update-container #updateMessage span#closeUpdateMessage{text-decoration:underline;margin-left:1rem;padding-left:1rem;border-left:1px solid rgba(77,80,87,0.4)}@media (max-width: 1300px){.update-container #updateMessage span#closeUpdateMessage{margin-left:0.25rem;padding-left:0.25rem}}@media (max-width: 1300px){.update-container{padding:1rem 0.2rem;font-size:1.5rem}}main #color-field{display:flex;flex-direction:row;background-color:#50c878;width:100%;height:auto;flex-grow:1;position:relative;padding:5rem}@media (max-width: 1300px){main #color-field{padding:5rem 2rem 2rem 2rem}}@media (max-width: 400px){main #color-field{padding:5rem 0.75rem 2rem 0.75rem}}main #color-field .color-info{width:auto;height:100%}main #color-field .color-info div{width:auto}main #color-field .color-previews{opacity:0;pointer-events:none;transition:opacity 0.3s;height:auto;flex-grow:1;width:100%;display:flex;flex-direction:row;justify-content:flex-end;align-items:flex-end}main #color-field .color-previews.visible{opacity:1;transition:opacity 0.3s;pointer-events:auto}main #color-field .color-previews .alt-shades-container{height:100%;flex-grow:1;display:flex;justify-content:center;align-items:center;padding:0 4rem}main #color-field .color-previews .alt-shades-container div{height:100%;flex-grow:1;display:flex;flex-direction:column;border:1px solid #eaeaea}main #color-field .color-previews .alt-shades-container div div{width:100%;flex-grow:1;display:flex;justify-content:center;align-items:center;border:none;font-family:\"Share Tech Mono\",monospace;cursor:pointer}main #color-field .color-previews .alt-shades-container div div.shade-pigment{background-color:#030303;transition:background-color 0.2s, color 0.3s;color:#eaeaea}main #color-field .color-previews .alt-shades-container div div.shade-pigment.blackText{color:#030303;transition:background-color 0.2s, color 0.3s}main #color-field .color-previews .alt-shades-container div div.shade-pigment+div{border-top:1px solid #eaeaea}main #color-field .color-previews .alt-shades-container .bg-shades-container{border-right:none}main #color-field .color-previews .alt-shades-container .bg-shades-container+.text-shades-container{border-left:1px solid #eaeaea}main #color-field .color-previews .small-box-container{display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end}main #color-field .color-previews .small-box-container div{border-right:1px solid #eaeaea;border-left:1px solid #eaeaea;border-top:1px solid #eaeaea;height:8rem;width:8rem;display:flex;justify-content:center;align-items:center;font-family:\"Share Tech Mono\",monospace}main #color-field .color-previews .small-box-container div span{color:#eaeaea;mix-blend-mode:difference}main #color-field .color-previews .small-box-container div:nth-child(1){background-color:#1b0758}main #color-field .color-previews .small-box-container div:nth-child(2){background-color:#50c878}main #color-field .color-previews .small-box-container *+*{border-bottom:1px solid #eaeaea;border-right:1px solid #eaeaea}@media (max-width: 1300px){main #color-field .color-previews,main #color-field #showColorPreviews,main #color-field #showFancyColorNames{display:none}}main #color-field input{background:transparent;width:7ch;border:none;color:currentColor;font-family:\"Share Tech Mono\",monospace;outline:none}main #color-field .color-name{color:#1b0758;font-family:\"Share Tech Mono\",monospace;font-size:1rem}@media (max-width: 1300px){main #color-field .color-name{font-size:0.8rem}}@media (max-width: 900px){main #color-field .color-name{font-size:0.4rem}}main #color-field .color-name span+span{margin-left:2rem}main #color-field .color-name .color-picker{color:#1b0758}main #color-field .color-name span{font-size:1.25em;cursor:pointer;user-select:none}@media (max-width: 1300px){main #color-field .color-name span{font-size:1.4rem}}main #color-field .color-name span.active{text-decoration:underline}main #color-field .color-name span.inactive{opacity:0.5}main #color-field .color-name #hex-code{font-size:12em}main #color-field .color-name #rgb-code,main #color-field .color-name #hsl-code{font-size:1.5em;line-height:1.5}main #color-field .color-name #css-name{font-size:1.25em}@media (max-width: 1300px){main #color-field .color-name #css-name{font-size:1.5em}}@media (max-width: 900px){main #color-field .color-name #rgb-code,main #color-field .color-name #hsl-code,main #color-field .color-name #css-name{font-size:2.4em}}main #color-field #contrast-ratio{position:relative;font-family:\"Share Tech Mono\",monospace;font-size:1.25rem;line-height:1.56;margin-top:2rem;color:#1b0758}main #color-field .add-to-palette,main #color-field .open-settings{position:relative;font-size:1.25rem;line-height:1.56;margin-top:1rem;user-select:none}main #color-field .add-to-palette span,main #color-field .open-settings span{cursor:pointer}main #color-field #add-to-palette,main #color-field #open-settings{color:#1b0758;font-family:\"Share Tech Mono\",monospace;text-decoration:underline}main #color-field .open-settings{margin-top:auto}.palette-container .palette-bar{width:100%;min-height:4rem;height:4rem;transition:opacity 0.3s, height 0.3s;background-color:rgba(77,80,87,0);display:flex;position:relative}.palette-container .palette-bar.hide{height:0;opacity:0;transition:opacity 0.3s, height 0.3s}.palette-container .palette-bar.empty{background-color:rgba(77,80,87,0.2)}.palette-container .palette-bar .palette-controls{position:absolute;display:flex;font-size:1rem;top:-2rem;right:0}@media (max-width: 1300px){.palette-container .palette-bar .palette-controls{top:-4rem}}.palette-container .palette-bar .palette-controls *+*{margin-left:1rem}.palette-container .palette-bar .palette-controls span{font-family:\"Share Tech Mono\",monospace;color:#fff;mix-blend-mode:exclusion;cursor:pointer;text-decoration:underline;font-size:1.2rem;padding:0.5rem 0.25rem 0 0.25rem}.palette-container .palette-bar .palette-controls .palette-number{cursor:auto;text-decoration:none}@media (max-width: 1300px){.palette-container .palette-bar .palette-controls{font-size:1rem}.palette-container .palette-bar .palette-controls input,.palette-container .palette-bar .palette-controls span{font-size:1em}.palette-container .palette-bar .palette-controls *+*{margin-left:0}}@media (max-width: 1300px){.palette-container .palette-bar{flex-direction:column;height:auto}}.palette-container .palette-bar+.palette-bar{margin-top:3rem}@media (max-width: 1300px){.palette-container .palette-bar+.palette-bar{margin-top:5rem}}.palette-container .palette-pigment{cursor:pointer;display:flex;flex-grow:1;height:4rem;width:auto}.palette-container .palette-pigment div{color:#eaeaea;display:flex;justify-content:center;align-items:center;font-family:\"Share Tech Mono\",monospace;height:100%;flex-grow:1}.palette-container .palette-pigment div.blackText{color:#030303}.palette-container .palette-pigment div:nth-child(1){border-right:1px solid #eaeaea;border-radius:0.15rem 0 0 0.15rem}.palette-container .palette-pigment div:nth-child(2){border-radius:0 0.15rem 0.15rem 0}.palette-container .palette-pigment+.palette-pigment{margin-left:1rem}@media (max-width: 1300px){.palette-container .palette-pigment+.palette-pigment{margin-top:1rem;margin-left:0}}#paletteBarTemplate,#palettePigmentTemplate{display:none}footer{width:100%;height:auto;padding:2rem 5rem 5rem 5rem;position:relative;background-color:#eaeaea;color:#030303;transition:color 0.3s, background-color 0.3s}@media (max-width: 900px){footer{padding:2rem 2rem 5rem 2rem}}@media (max-width: 400px){footer{padding:2rem 1rem 5rem 1rem}}body.dark footer{background-color:#2a2a2a;color:#eaeaea;transition:color 0.3s, background-color 0.3s}footer #addNewPalette{cursor:pointer;font-size:1.25rem;margin-left:1rem;text-decoration:underline}footer h1,footer h2{font-family:\"Lexend Deca\",sans-serif;user-select:none;font-size:1.5em}footer h1{margin-bottom:0.5rem}footer h2{font-size:1.15em;margin-bottom:2rem}@media (max-width: 1300px){footer h2{margin-bottom:5rem}}footer #copiedNotification{opacity:0;transition:opacity 0.5s}footer #copiedNotification.copied{opacity:1;transition:opacity 0.1s}.alt-color-display{bottom:0;display:none;height:4rem;left:0;min-width:100vw;opacity:1;padding:1rem;pointer-events:none;position:fixed;transition:opacity 0.3s;z-index:3}.alt-color-display.hidden{opacity:0;transition:opacity 0.3s}.alt-color-display div{flex-grow:1;height:100%;width:auto}.alt-color-display #bg-color-alt-preview{background-color:#50c878;border-radius:1rem 0 0 1rem}.alt-color-display #text-color-alt-preview{background-color:#1b0758;border-radius:0 1rem 1rem 0}.alt-color-display div+div{border-left:1px solid #eaeaea}@media (max-width: 1300px){.alt-color-display{display:flex}}#modal-container{align-items:center;background-color:rgba(234,234,234,0);display:flex;justify-content:center;min-height:100vh;min-width:100vw;opacity:0;pointer-events:none;position:fixed;transition:opacity 0.3s, background-color 0.3s;z-index:50}#modal-container.fadeBg{transition:background-color 0.3s;background-color:rgba(234,234,234,0.5)}#modal-container.active{opacity:1;transition:opacity 0.3s;pointer-events:auto}#modal-container .settings-box{background-color:#eaeaea;border-radius:0.5rem;border:1px solid #030303;color:#030303;display:flex;flex-direction:column;font-family:\"Lexend Deca\",sans-serif;height:auto;justify-content:center;opacity:0;padding:1rem;pointer-events:none;position:absolute;transition:color 0.3s, background-color 0.3s opacity 0.3s;width:auto}#modal-container .settings-box.active{opacity:1;pointer-events:auto;transition:color 0.3s, background-color 0.3s opacity 0.3s}body.dark #modal-container .settings-box{color:#eaeaea;background-color:#2a2a2a;transition:color 0.3s, background-color 0.3s opacity 0.3s}#modal-container .settings-box .setting-bar+.setting-bar{margin-top:1.5rem}#modal-container .settings-box select{font-family:\"Share Tech Mono\",monospace;display:inline-block;width:auto;cursor:pointer;padding:0.25rem 0.5rem;outline:0;border:1px solid #50c878;border-radius:0.25rem;background-color:#d4d7d6;color:#4d5057;transition:color 0.3s, background-color 0.3s;appearance:none;-webkit-appearance:none;-moz-appearance:none}body.dark #modal-container .settings-box select{background-color:#4d5057;color:#eaeaea;transition:color 0.3s, background-color 0.3s}#modal-container .settings-box select::-ms-expand{display:none}#modal-container .settings-box select:hover,#modal-container .settings-box select:focus{color:#eaeaea;background:#4d5057}#modal-container .settings-box select:disabled{opacity:0.5;pointer-events:none}@media (max-width: 900px){#modal-container .settings-box select{font-size:0.8em;padding:0.15rem 0.25rem}}#modal-container .settings-box label+input{margin-top:1rem}#modal-container .settings-box span+span,#modal-container .settings-box span+select,#modal-container .settings-box select+span{margin-left:1rem}@media (max-width: 900px){#modal-container .settings-box{padding:2rem;font-size:0.9em}#modal-container .settings-box:nth-child(1) span:nth-of-type(1)::after{content:\"\\A\";white-space:pre}#modal-container .settings-box span+span,#modal-container .settings-box span+select,#modal-container .settings-box select+span{margin-left:0}#modal-container .settings-box .setting-bar+.setting-bar{margin-top:1rem}}#modal-container .settings-box .setting-button{align-items:center;background-color:#50c878;border-radius:0.5rem;color:#030303;cursor:pointer;display:flex;font-family:\"Lexend Deca\",sans-serif;justify-content:center;margin-top:2rem;padding:0.5rem 1rem;transition:background-color 0.3s;width:100%;margin-top:0.5rem}#modal-container .settings-box .setting-button:hover{background-color:#37ae5f;transition:background-color 0.3s}#modal-container .settings-box .setting-button:nth-last-child(3){margin-top:4rem}#modal-container .message-box{bottom:0;left:0;position:fixed;width:100vw;display:flex;justify-content:flex-end;align-items:center;padding:1rem 2rem;opacity:0;transition:opacity 0.3s;pointer-events:none}#modal-container .message-box.active{transition:opacity 0.3s;pointer-events:auto;opacity:1}#modal-container .message-box.error .message-bar{border-left:0.25rem solid #ca1811}#modal-container .message-box .message-bar{background-color:#eaeaea;color:#030303;transition:background-color 0.3s, color 0.3s;display:flex;justify-content:center;align-items:center;padding:0.25rem 0.25rem 0.25rem 1rem;border-radius:0.25rem}body.dark #modal-container .message-box .message-bar{background-color:#030303;color:#eaeaea;transition:background-color 0.3s, color 0.3s}#modal-container .message-box .message-bar .message-inner{font-family:\"Lexend Deca\",sans-serif}#modal-container .message-box .message-bar #close-message{background-color:#50c878;color:#eaeaea;font-family:\"Lexend Deca\",sans-serif;padding:0.25rem 1rem;border-radius:0.25rem;cursor:pointer}#modal-container .message-box .message-bar #close-message:hover{background-color:#37ae5f;transition:background-color 0.3s}#modal-container .message-box .message-bar div+div{margin-left:1rem}#modal-container .export-box{background-color:#eaeaea;border-radius:0.5rem;border:1px solid #030303;color:#030303;display:flex;flex-direction:column;font-family:\"Lexend Deca\",sans-serif;height:auto;justify-content:center;opacity:0;padding:1rem;pointer-events:none;position:absolute;transition:color 0.3s, background-color 0.3s opacity 0.3s;width:auto;isolation:isolate;position:relative;pointer-events:none}#modal-container .export-box.active{opacity:1;pointer-events:auto;transition:color 0.3s, background-color 0.3s opacity 0.3s}body.dark #modal-container .export-box{color:#eaeaea;background-color:#2a2a2a;transition:color 0.3s, background-color 0.3s opacity 0.3s}#modal-container .export-box .select-export-type select{margin-left:0.5rem;font-family:\"Share Tech Mono\",monospace;display:inline-block;width:auto;cursor:pointer;padding:0.25rem 0.5rem;outline:0;border:1px solid #50c878;border-radius:0.25rem;background-color:#d4d7d6;color:#4d5057;transition:color 0.3s, background-color 0.3s;appearance:none;-webkit-appearance:none;-moz-appearance:none}body.dark #modal-container .export-box .select-export-type select{background-color:#4d5057;color:#eaeaea;transition:color 0.3s, background-color 0.3s}#modal-container .export-box .select-export-type select::-ms-expand{display:none}#modal-container .export-box .select-export-type select:hover,#modal-container .export-box .select-export-type select:focus{color:#eaeaea;background:#4d5057}#modal-container .export-box .select-export-type select:disabled{opacity:0.5;pointer-events:none}@media (max-width: 900px){#modal-container .export-box .select-export-type select{font-size:0.8em;padding:0.15rem 0.25rem}}#modal-container .export-box .export-item-container{border:1px solid #eaeaea;border-radius:0.15rem;margin-top:0.5rem}#modal-container .export-box.active{pointer-events:auto}#modal-container .export-box pre{align-items:center;background-color:#eaeaea;color:#030303;display:flex;justify-content:center;position:relative;transition:background-color 0.3s, color 0.3s}#modal-container .export-box pre:nth-child(1){z-index:3}#modal-container .export-box pre:nth-child(2){z-index:2}body.dark #modal-container .export-box pre{background-color:#4d5057;color:#eaeaea;transition:background-color 0.3s, color 0.3s}#modal-container .export-box pre.active{padding:2rem 4rem}@media (max-width: 1300px){#modal-container .export-box pre.active{padding:1rem 2rem;font-size:0.9em}}@media (max-width: 900px){#modal-container .export-box pre.active{padding:0.5rem 2rem;font-size:0.7em}}#modal-container .export-box figure{margin:0}#modal-container .export-box figure canvas{padding:0;position:relative;z-index:1;margin:0;height:32rem;width:60rem}@media (max-width: 900px){#modal-container .export-box figure canvas{height:70vh;width:270px}}#modal-container .export-box pre,#modal-container .export-box figure{opacity:0;height:0;width:0;padding:0;pointer-events:none}#modal-container .export-box pre.active,#modal-container .export-box figure.active{opacity:1;transition:background-color 0.3s, color 0.3s;pointer-events:auto;height:auto;width:auto}#modal-container .export-box:not(.active) pre,#modal-container .export-box:not(.active) figure{pointer-events:none}#modal-container .export-box #do-export,#modal-container .export-box #close-export{align-items:center;background-color:#50c878;border-radius:0.5rem;color:#030303;cursor:pointer;display:flex;font-family:\"Lexend Deca\",sans-serif;justify-content:center;margin-top:2rem;padding:0.5rem 1rem;transition:background-color 0.3s;width:100%}#modal-container .export-box #do-export:hover,#modal-container .export-box #close-export:hover{background-color:#37ae5f;transition:background-color 0.3s}#modal-container .export-box #close-export{margin-top:0.5rem}#color-controls{user-select:none;position:relative;padding:2rem 5rem 2rem 5rem;width:100%;height:auto;display:flex;flex-direction:column;background-color:#eaeaea;color:#030303;transition:color 0.3s, background-color 0.3s}@media (max-width: 1300px){#color-controls{padding:2rem 2rem 2rem 2rem}}@media (max-width: 900px){#color-controls{padding:1rem 2rem 2rem 2rem}}@media (max-width: 400px){#color-controls{padding:1rem 1rem 2rem 1rem}}#color-controls .control-button{align-items:center;background-color:#eaeaea;border-radius:0.15rem;border:1px solid rgba(77,80,87,0.3);color:#030303;cursor:pointer;display:flex;font-family:\"Share Tech Mono\",monospace;font-size:0.8em;justify-content:center;padding:0.5rem 1rem;pointer-events:auto}#color-controls .control-button:hover{background-color:#d4d7d6;transition:0.3s}body.dark #color-controls{background-color:#2a2a2a;color:#eaeaea;transition:color 0.3s, background-color 0.3s}#color-controls .background-picker+.text-picker{margin-left:4rem}#color-controls .lockColor{cursor:pointer}#color-controls>div.color-sliders{display:flex;flex-direction:row}@media (max-width: 1300px){#color-controls>div.color-sliders{flex-direction:column}}#color-controls .color-buttons{display:flex;margin-bottom:2rem}@media (max-width: 900px){#color-controls .color-buttons{flex-direction:column}}#color-controls .color-buttons div+div{margin-left:1rem}@media (max-width: 900px){#color-controls .color-buttons div+div{margin-left:0}}#color-controls .color-buttons div{height:2rem}#color-controls .color-buttons .swap-color-container{pointer-events:none}#color-controls .color-buttons .swap-color-container #swapColors:hover{background-color:#d4d7d6;transition:0.3s}#color-controls .color-buttons .randomize-controls{display:flex}@media (max-width: 900px){#color-controls .color-buttons .randomize-controls{margin:1rem 0;width:100%}}#color-controls .color-buttons .randomize-controls #undo{align-items:center;background-color:#eaeaea;border-radius:0.15rem 0 0 0.15rem;border:1px solid rgba(77,80,87,0.3);margin-right:0.15rem;padding:0.5rem;color:#030303;cursor:pointer;display:flex;font-family:\"Share Tech Mono\",monospace;font-size:0.8em;justify-content:center;pointer-events:auto}#color-controls .color-buttons .randomize-controls #redo{align-items:center;background-color:#eaeaea;border-radius:0 0.15rem 0.15rem 0;border:1px solid rgba(77,80,87,0.3);color:#030303;cursor:pointer;display:flex;font-family:\"Share Tech Mono\",monospace;font-size:0.8em;justify-content:center;margin-left:0.15rem;padding:0.5rem;pointer-events:auto;transition:0.3s}#color-controls .color-buttons .randomize-controls #undo.disabled,#color-controls .color-buttons .randomize-controls #redo.disabled{color:#959595;pointer-events:none}#color-controls .color-buttons .randomize-controls #randomize-mobile{align-items:center;background-color:#eaeaea;border-radius:0;border:1px solid rgba(77,80,87,0.3);color:#030303;cursor:pointer;display:flex;font-family:\"Share Tech Mono\",monospace;font-size:0.8em;justify-content:center;margin-left:0;padding:0.5rem 1rem;pointer-events:auto;flex-grow:1}#color-controls .color-buttons .randomize-controls div+div{margin-left:1rem}@media (max-width: 900px){#color-controls .color-buttons .randomize-controls div+div{margin-left:0.25rem}}#color-controls .share-buttons{position:absolute;width:100%;height:4rem;top:0;right:0;margin-top:-4rem;pointer-events:none;display:flex;justify-content:flex-end;align-items:center;padding:0 4rem 0 0}#color-controls .share-buttons div+div{margin-left:1rem}#color-controls .share-buttons div{pointer-events:auto}@media (max-width: 1300px){#color-controls .share-buttons{flex-direction:column;align-items:flex-end;padding:0 2rem 0.25rem 0;font-size:0.8em}#color-controls .share-buttons div+div{margin-top:0.15rem}}@media (max-width: 900px){#color-controls .share-buttons{flex-direction:column;align-items:flex-end;padding:0 0.25rem 0.25rem 0;font-size:0.8em}#color-controls .share-buttons div+div{margin-top:0.15rem}}#color-controls .background-picker,#color-controls .text-picker{width:auto;flex-grow:1}#color-controls .background-picker span,#color-controls .text-picker span{font-weight:bold;margin-bottom:0.5rem}#color-controls .background-picker h1,#color-controls .text-picker h1{font-family:\"Lexend Deca\",sans-serif;margin-bottom:1rem}@media (max-width: 900px){#color-controls .background-picker h1,#color-controls .text-picker h1{font-size:1.5em}}@media (max-width: 1300px){#color-controls{flex-direction:column}#color-controls .background-picker+.text-picker{margin-top:2rem;margin-left:0}}#color-controls .picker-group{align-items:center;display:flex;flex-direction:row;font-family:\"Share Tech Mono\",monospace;justify-content:center;padding:0.75rem 0}#color-controls .picker-group p{font-weight:bold}#color-controls .picker-group p span{font-weight:lighter}#color-controls .picker-group input{flex-grow:1;height:100%;margin-left:1rem;width:auto}body{color:#50c878;min-width:100vw;background-color:#eaeaea;overflow:hidden;height:auto;width:100vw;display:flex;flex-direction:column}body.scroll{overflow:auto;overflow-x:hidden}body main{position:relative;left:0;top:0;height:auto;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;will-change:background-color}body #hiddenElements{height:0;width:0}body #hiddenElements *{height:0;width:0}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/*! exports provided: globalColors, firstPalette, currentColorSetting, colorDisplay, colorName, contrastRatioStringDisplay, contrastRatioNumberDisplay, paletteGenParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalColors", function() { return globalColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstPalette", function() { return firstPalette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentColorSetting", function() { return currentColorSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorDisplay", function() { return colorDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorName", function() { return colorName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contrastRatioStringDisplay", function() { return contrastRatioStringDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contrastRatioNumberDisplay", function() { return contrastRatioNumberDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paletteGenParams", function() { return paletteGenParams; });
/* harmony import */ var _styles_main_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../styles/main.min.css */ "./styles/main.min.css");
/* harmony import */ var _styles_main_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/utils.js */ "./scripts/modules/utils.js");
/* harmony import */ var _modules_paletteOperations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/paletteOperations.js */ "./scripts/modules/paletteOperations.js");
/* harmony import */ var _modules_smUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smUtils.js */ "./scripts/modules/smUtils.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// remember to remove this:
// window.localStorage.clear();





var globalColors = {
  defbgRGB: null,
  deftxtRGB: null,
  defbgHex: null,
  deftxtHex: null,
  colorObject: null,
  globalTheme: null
};
var firstPalette = {
  first: true
};
var contrastRatiosSet = false;
var initialRandomize = true;
var currentColorSetting = {
  setting: "background"
};
var colorDisplay = document.getElementById("color-field");
var colorName = document.getElementsByClassName("color-name")[0];
var contrastRatioDisplay = document.getElementById("contrast-ratio");
var contrastRatioStringDisplay = document.getElementById("contrast-ratio-string");
var contrastRatioNumberDisplay = document.getElementById("contrast-ratio-number");
var colorPicker = document.getElementsByClassName("color-picker")[0];
var bgColorPreview = document.getElementById("bg-color-preview");
var textColorPreview = document.getElementById("text-color-preview");
var bgColorAltPreview = document.getElementById("bg-color-alt-preview");
var textColorAltPreview = document.getElementById("text-color-alt-preview");
var swapColors = document.getElementById("swapColors");
var undo = document.getElementById("undo");
var redo = document.getElementById("redo");
var lockBg = document.getElementById("lockBackground");
var lockText = document.getElementById("lockText");
var paletteBarTemplate = document.getElementById("paletteBarTemplate");
var palettePigmentTemplate = document.getElementById("palettePigmentTemplate");
var addNewPalette = document.getElementById("addNewPalette");
var bgSliders = Array.from(document.getElementsByClassName("colorInput"));
var txtSliders = Array.from(document.getElementsByClassName("colortxtInput"));
var randomParamsStart = document.getElementById("randomParamsStart");
var randomParamsEnd = document.getElementById("randomParamsEnd");
var themeSelect = document.getElementById("themeSelect");
var colorPaletteGenerationSwitch = document.getElementById("paletteGenerationSettings");
var colorGenerationCount = document.getElementById("color-generation-count");
var colorPaletteGenerationSlider = document.getElementById("generation-count-slider");
var colorFactorCount = document.getElementById("color-generation-factor-count");
var colorSeperationFactorSlider = document.getElementById("color-generation-factor");
var colorPaletteCount = 5;
var colorSeperationFactor = 10; // initialize palette generation parameters

var paletteGenParams = {
  setting: paletteGenerationSettings.children[0].innerText,
  count: colorPaletteCount,
  factor: colorSeperationFactor
};
var BODY = document.body;
var urlParams = Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["geturlvars"])();
Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["disableScroll"])();

window.onload = function () {
  Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["setComputedColors"])(true);
  var preloader = document.getElementById("preloader");
  preloader.classList.add("hidden");
  BODY.classList.add("scroll");
  Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["enableScroll"])(); // set default color slider values:

  var bginputs = {
    red: document.getElementById("rInput"),
    green: document.getElementById("gInput"),
    blue: document.getElementById("bInput")
  };
  var txtinputs = {
    red: document.getElementById("trInput"),
    green: document.getElementById("tgInput"),
    blue: document.getElementById("tbInput")
  };
  var hexCodeInput = document.getElementById("hex-code");

  var setCorrectedColor = function setCorrectedColor() {
    try {
      var color = Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["hexToRGBA"])(hexCodeInput.value);
      var rgba = "rgb(".concat(color.r, ", ").concat(color.g, ", ").concat(color.b, ")");
      return currentColorSetting.setting == "background" ? updateBG(rgba) : updateTxt(rgba);
    } catch (e) {
      return;
    }
  }; // allow manual hex code entry


  hexCodeInput.addEventListener("change", function () {
    return setCorrectedColor();
  });
  hexCodeInput.addEventListener("input", function () {
    var allowChars = /[^A-Fa-f0-9|^#]/gi;
    var hexCode = hexCodeInput.value;
    var invalidIndex = hexCode.search(allowChars);
    hexCodeInput.value = hexCodeInput.value.replace(/\s/, "");

    if (invalidIndex != -1) {
      hexCodeInput.value = hexCodeInput.value.substring(0, invalidIndex) + "0" + hexCodeInput.value.substring(invalidIndex + 1);
      setCorrectedColor();
    }

    if (hexCodeInput.value.indexOf("#") != 0) {
      hexCodeInput.value = "#";
    }

    if (hexCodeInput.value.indexOf("#", 1) != -1 && hexCodeInput.value.indexOf("#", 1) != 0) {
      hexCodeInput.value = "#" + hexCodeInput.value.substring(1).replace(/#/gim, "0");
      setCorrectedColor();
    }

    if (hexCodeInput.value.length == 7) setCorrectedColor();
  });
  bginputs.red.value = globalColors.defbgRGB.r;
  bginputs.green.value = globalColors.defbgRGB.g;
  bginputs.blue.value = globalColors.defbgRGB.b;
  txtinputs.red.value = globalColors.deftxtRGB.r;
  txtinputs.green.value = globalColors.deftxtRGB.g;
  txtinputs.blue.value = globalColors.deftxtRGB.b; // update colors and variables containing updated colors;

  var updateBG = function updateBG(rgb) {
    var scc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    colorDisplay.style.backgroundColor = rgb;
    bgColorPreview.style.backgroundColor = rgb;
    bgColorAltPreview.style.backgroundColor = rgb;
    bgSliders.forEach(function (inp) {
      return inp.style.color = rgb;
    });
    if (scc == true) Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["setComputedColors"])();
  };

  var updateTxt = function updateTxt(rgb) {
    var scc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    colorName.style.color = rgb;
    contrastRatioDisplay.style.color = rgb;
    colorPicker.style.color = rgb;
    textColorPreview.style.backgroundColor = rgb;
    textColorAltPreview.style.backgroundColor = rgb;
    _modules_paletteOperations_js__WEBPACK_IMPORTED_MODULE_2__["addToPalette"].style.color = rgb;
    _modules_smUtils_js__WEBPACK_IMPORTED_MODULE_3__["openSettings"].style.color = rgb;
    txtSliders.forEach(function (inp) {
      return inp.style.color = rgb;
    });
    if (scc == true) Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["setComputedColors"])();
  };

  var randomParams = {
    start: "fail",
    end: "aaa"
  };

  var setRandomParams = function setRandomParams(_ref) {
    var start = _ref.start,
        end = _ref.end;

    if (!start && !end) {
      randomParams.start = "fail";
      randomParams.end = "aaa";
    }

    if (start) randomParams.start = start;
    if (end) randomParams.end = end;
  };

  setRandomParams({
    start: null,
    end: null
  }); // makes sure user parameters are valid and fixes them if not, then sets them to the
  // randomParams object.

  var fixParams = function fixParams() {
    contrastRatiosSet = true;
    var valueStart = randomParamsStart.value;
    var valueEnd = randomParamsEnd.value;
    var allRatios = ["fail", "aa large", "aa", "aaa"]; // if the starting parameter comes before the ending one

    if (allRatios.indexOf(valueStart) > allRatios.indexOf(valueEnd)) {
      var newEnd = valueStart;
      var newStart = valueEnd;
      randomParamsStart.value = allRatios[allRatios.indexOf(newStart)];
      randomParamsEnd.value = allRatios[allRatios.indexOf(newEnd)];
      valueEnd = newEnd;
      valueStart = newStart;
    }

    setRandomParams({
      start: valueStart,
      end: valueEnd
    });
  };

  randomParamsStart.addEventListener("input", fixParams);
  randomParamsEnd.addEventListener("input", fixParams);

  var setPaletteGenParams = function setPaletteGenParams() {
    var setting = colorPaletteGenerationSwitch.value;
    var count = parseInt(colorPaletteGenerationSlider.value);
    var factor = parseInt(colorSeperationFactorSlider.value);
    colorGenerationCount.textContent = count;
    colorFactorCount.textContent = factor;
    paletteGenParams.setting = setting;
    paletteGenParams.factor = factor;
    paletteGenParams.count = count;
  };

  colorPaletteGenerationSwitch.addEventListener("input", setPaletteGenParams);
  colorPaletteGenerationSlider.addEventListener("input", setPaletteGenParams);
  colorSeperationFactorSlider.addEventListener("input", setPaletteGenParams);

  if (_modules_paletteOperations_js__WEBPACK_IMPORTED_MODULE_2__["STORAGE"].getItem("darkMode") != undefined && _modules_paletteOperations_js__WEBPACK_IMPORTED_MODULE_2__["STORAGE"].getItem("darkMode") == "false") {
    globalColors.globalTheme = "light";
    themeSelect.selectedIndex = 1;
    BODY.classList.remove("dark");
  } else {
    globalColors.globalTheme = "dark";
    themeSelect.selectedIndex = 0;
    BODY.classList.add("dark");
  }

  themeSelect.addEventListener("input", function () {
    if (themeSelect.value == "dark" && BODY.classList.contains("dark") == false) BODY.classList.add("dark");
    if (themeSelect.value == "light" && BODY.classList.contains("dark") == true) BODY.classList.remove("dark");
    if (BODY.classList.contains("dark")) _modules_paletteOperations_js__WEBPACK_IMPORTED_MODULE_2__["STORAGE"].setItem("darkMode", "true");else _modules_paletteOperations_js__WEBPACK_IMPORTED_MODULE_2__["STORAGE"].setItem("darkMode", "false");
  });

  var getRandomColor = function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  };

  var setRandomColors = function setRandomColors() {
    if (_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["locks"].bgLocked && _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["locks"].textLocked) return false;

    if (_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["history"].colorHistory.length > 0 && initialRandomize == true) {
      initialRandomize = false;
      Array.from(document.getElementsByClassName("control-button")).forEach(function (elem) {
        return elem.classList.remove("disabled");
      });
    }

    var color1 = _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["locks"].bgLocked === true ? globalColors.colorObject.bg.hex : getRandomColor();
    var color2 = _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["locks"].textLocked === true ? globalColors.colorObject.text.hex : getRandomColor();
    var color1RGB = Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["hexToRGBA"])(color1);
    var color2RGB = Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["hexToRGBA"])(color2);
    var nbgRGB = "rgb(".concat(color1RGB.r, ", ").concat(color1RGB.g, ", ").concat(color1RGB.b, ")");
    var ntxtRGB = "rgb(".concat(color2RGB.r, ", ").concat(color2RGB.g, ", ").concat(color2RGB.b, ")");
    bginputs.red.value = color1RGB.r;
    bginputs.green.value = color1RGB.g;
    bginputs.blue.value = color1RGB.b;
    txtinputs.red.value = color2RGB.r;
    txtinputs.green.value = color2RGB.g;
    txtinputs.blue.value = color2RGB.b;

    if (contrastRatiosSet == true) {
      (function () {
        var currentContrast = Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["getContrastRatio"])(color1, color2);
        var contrastRatioNumber = currentContrast.number;
        var acceptableRatios = [randomParams.start, randomParams.end];
        var allRatios = ["fail", "aa large", "aa", "aaa"];

        for (var i in _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["wcagLevels"]) {
          for (var j in _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["wcagLevels"][i]) {
            var levels = _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["wcagLevels"][i][j];

            if (contrastRatioNumber >= levels[0] && contrastRatioNumber <= levels[1]) {
              var allRatiosCopy = [].concat(allRatios);
              acceptableRatios = Array.from(new Set(_toConsumableArray(acceptableRatios)));

              var range = function range(start, end) {
                return new Array(end - start + 1).fill(undefined).map(function (_, b) {
                  return b + start;
                });
              };

              var startIndex = allRatiosCopy.indexOf(acceptableRatios[0]);
              var endIndex = allRatiosCopy.indexOf(acceptableRatios[1]) !== -1 ? allRatiosCopy.indexOf(acceptableRatios[1]) : startIndex;
              var itemsToGet = range(startIndex, endIndex);
              var finalRatios = itemsToGet.map(function (item) {
                return allRatios[item];
              });
              i = i.toLowerCase();

              if (finalRatios.includes(i) == false) {
                try {
                  setRandomColors();
                } catch (e) {
                  CURRENT_ERR = "there is no acceptable color combination for the current settings. please modify contrast ratio limit.";
                  throw new RangeError(CURRENT_ERR);
                }
              } else if (finalRatios.includes(i)) {
                updateBG(nbgRGB, false);
                updateTxt(ntxtRGB, false);
                Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["setComputedColors"])(true);
                break;
              }
            }
          }
        }
      })();
    } else {
      updateBG(nbgRGB, false);
      updateTxt(ntxtRGB, false);
      Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["setComputedColors"])(true);
    }
  };

  BODY.onkeydown = function (e) {
    if (e.keyCode == 32 && document.activeElement == BODY) {
      e.preventDefault();
    }
  };

  BODY.onkeyup = function (e) {
    if (e.keyCode == 32 && document.activeElement == BODY) {
      e.preventDefault();

      if (document.getElementById("randomizeReminder")) {
        var randomizeReminder = document.getElementById("randomizeReminder");
        randomizeReminder.classList.add("hidden");
        setTimeout(function () {
          return randomizeReminder.remove();
        }, 300);
      }

      setRandomColors();
    }
  };

  document.getElementById("randomize-mobile").addEventListener("click", function () {
    return setRandomColors();
  });

  for (var elem in bginputs) {
    if (bginputs.hasOwnProperty(elem)) {
      bginputs[elem].addEventListener("input", function () {
        var nRGB = "rgb(".concat(bginputs.red.value, ", ").concat(bginputs.green.value, ", ").concat(bginputs.blue.value, ")");
        updateBG(nRGB);
      });
    }
  }

  for (var _elem in txtinputs) {
    if (txtinputs.hasOwnProperty(_elem)) {
      txtinputs[_elem].addEventListener("input", function () {
        var nRGB = "rgb(".concat(txtinputs.red.value, ", ").concat(txtinputs.green.value, ", ").concat(txtinputs.blue.value, ")");
        updateTxt(nRGB);
      });
    }
  }

  swapColors.addEventListener("click", function () {
    bginputs.red.value = globalColors.colorObject.text.rgb.r;
    bginputs.green.value = globalColors.colorObject.text.rgb.g;
    bginputs.blue.value = globalColors.colorObject.text.rgb.b;
    txtinputs.red.value = globalColors.colorObject.bg.rgb.r;
    txtinputs.green.value = globalColors.colorObject.bg.rgb.g;
    txtinputs.blue.value = globalColors.colorObject.bg.rgb.b;
    var bRGB = "rgb(".concat(bginputs.red.value, ", ").concat(bginputs.green.value, ", ").concat(bginputs.blue.value, ")");
    var tRGB = "rgb(".concat(txtinputs.red.value, ", ").concat(txtinputs.green.value, ", ").concat(txtinputs.blue.value, ")");
    updateBG(bRGB, false);
    updateTxt(tRGB, false);
    Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["setComputedColors"])(false);
  }); // scrolling stuff

  document.addEventListener("scroll", function () {
    var colorControls = document.getElementById("color-controls");
    var header = document.getElementById("header");

    var getScrollTop = function getScrollTop() {
      if (typeof pageYOffset != "undefined") return pageYOffset;else {
        var B = BODY;
        var D = document.documentElement;
        D = D.clientHeight ? D : B;
        return D.scrollTop;
      }
    };

    var altColorPreview = document.getElementsByClassName("alt-color-display")[0];

    if (getScrollTop() > colorControls.offsetTop - 100) {
      header.classList.add("invert");
      altColorPreview.classList.remove("hidden");
    } else if (getScrollTop() < colorControls.offsetTop - 100 && header.classList.contains("invert")) {
      header.classList.remove("invert");
      altColorPreview.classList.add("hidden");
    }
  }); // pwa installation stuff

  var deferredPrompt;
  var store = window.localStorage;

  var showInstallPrompt = function showInstallPrompt() {
    deferredPrompt.prompt()["catch"](function (err) {
      return console.log(err.message);
    });
    deferredPrompt.userChoice.then(function (choiceResult) {
      if (choiceResult.outcome === "accepted") store.setItem("installed", true);else store.setItem("installed", false);
      deferredPrompt = null;
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  window.addEventListener("beforeinstallprompt", function (e) {
    deferredPrompt = e;
    document.getElementById("pwaInstallButton").addEventListener("click", function () {
      showInstallPrompt();
    });
  }); // undo and redo stuff

  var changeColorHistory = function changeColorHistory(delta) {
    if (_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["history"].colorHistory[_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["history"].colorHistoryIndex + delta] !== undefined) {
      // if (delta == -1) {
      //   colorHistory.splice(colorHistoryIndex, 1);
      // }
      _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["history"].colorHistoryIndex += delta;
      _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["history"].colorHistoryIndex = _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["history"].colorHistoryIndex < 0 ? 0 : _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["history"].colorHistoryIndex > _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["history"].colorHistory.length - 1 ? _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["history"].colorHistory.length - 1 : _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["history"].colorHistoryIndex;
      var color1RGB = Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["hexToRGBA"])(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["history"].colorHistory[_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["history"].colorHistoryIndex].bg.hex);
      var color2RGB = Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["hexToRGBA"])(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["history"].colorHistory[_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["history"].colorHistoryIndex].text.hex);
      var nbgRGB = "rgb(".concat(color1RGB.r, ", ").concat(color1RGB.g, ", ").concat(color1RGB.b, ")");
      var ntxtRGB = "rgb(".concat(color2RGB.r, ", ").concat(color2RGB.g, ", ").concat(color2RGB.b, ")");
      bginputs.red.value = globalColors.colorObject.bg.rgb.r;
      bginputs.green.value = globalColors.colorObject.bg.rgb.g;
      bginputs.blue.value = globalColors.colorObject.bg.rgb.b;
      txtinputs.red.value = globalColors.colorObject.text.rgb.r;
      txtinputs.green.value = globalColors.colorObject.text.rgb.g;
      txtinputs.blue.value = globalColors.colorObject.text.rgb.b;
      updateBG(nbgRGB, false);
      updateTxt(ntxtRGB, false);
      Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["setComputedColors"])(false);
    }

    if (_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["history"].colorHistory[_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["history"].colorHistoryIndex + 1] == undefined) {
      redo.classList.add("disabled");
    } else {
      redo.classList.remove("disabled");
    }

    if (_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["history"].colorHistory[_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["history"].colorHistoryIndex - 1] == undefined) {
      undo.classList.add("disabled");
    } else {
      undo.classList.remove("disabled");
    }
  };

  undo.addEventListener("click", function () {
    changeColorHistory(-1);
  });
  redo.addEventListener("click", function () {
    changeColorHistory(1);
  });
  var OPENLOCK = "&#x1F513;";
  var CLOSELOCK = "&#x1F512;";

  var toggleLock = function toggleLock(element) {
    var locked;

    if (element.innerHTML == "🔓") {
      locked = true;
      element.innerHTML = CLOSELOCK;
    } else {
      locked = false;
      element.innerHTML = OPENLOCK;
    }

    element == lockBg ? locked == true ? _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["locks"].bgLocked = true : _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["locks"].bgLocked = false : locked == true ? _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["locks"].textLocked = true : _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["locks"].textLocked = false;

    if (_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["locks"].bgLocked) {
      for (var _elem2 in bginputs) {
        bginputs[_elem2].disabled = true;
      }
    }

    if (!_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["locks"].bgLocked) {
      for (var _elem3 in bginputs) {
        bginputs[_elem3].disabled = false;
      }
    }

    if (_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["locks"].textLocked) {
      for (var _elem4 in txtinputs) {
        txtinputs[_elem4].disabled = true;
      }
    }

    if (!_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["locks"].textLocked) {
      for (var _elem5 in txtinputs) {
        txtinputs[_elem5].disabled = false;
      }
    }
  };

  lockBg.addEventListener("click", function () {
    return toggleLock(lockBg);
  });
  lockText.addEventListener("click", function () {
    return toggleLock(lockText);
  });

  if (Object.entries(urlParams).length == 2) {
    console.log("[window] url parameters:", urlParams);
    var url = {
      bg: urlParams.bg,
      text: urlParams.text
    };
    var urlBgRGB = Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["hexToRGBA"])(url.bg);
    var urlTextRGB = Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["hexToRGBA"])(url.text);
    var nbgRGB = "rgb(".concat(urlBgRGB.r, ", ").concat(urlBgRGB.g, ", ").concat(urlBgRGB.b, ")");
    var ntxtRGB = "rgb(".concat(urlTextRGB.r, ", ").concat(urlTextRGB.g, ", ").concat(urlTextRGB.b, ")");
    updateBG(nbgRGB, false);
    updateTxt(ntxtRGB, false);
    Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["setComputedColors"])(false);
  } else if (Object.entries(urlParams).length > 2) {
    throw new Error("please provide 2 hex colors in url like this: jpegzilla.com/emerald?bg=color1&text=color2.");
  }
};

var showBackgroundColor = document.getElementById("showBackgroundColor");
var showTextColor = document.getElementById("showTextColor");
var showColorPreviews = document.getElementById("showColorPreviews");
var showFancyColorNames = document.getElementById("showFancyColorNames");
showBackgroundColor.addEventListener("click", function () {
  currentColorSetting.setting = currentColorSetting.setting == "background" ? "background" : "background";
  showTextColor.classList = "";
  showBackgroundColor.classList = "";
  showTextColor.classList.add("inactive");
  showBackgroundColor.classList.add("active");
  Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["setComputedColors"])(false);
});
showTextColor.addEventListener("click", function () {
  currentColorSetting.setting = currentColorSetting.setting == "text" ? "text" : "text";
  showTextColor.classList = "";
  showBackgroundColor.classList = "";
  showTextColor.classList.add("active");
  showBackgroundColor.classList.add("inactive");
  Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["setComputedColors"])(false);
});
showColorPreviews.addEventListener("click", function () {
  var colorPreviews = document.getElementsByClassName("color-previews")[0];
  showColorPreviews.innerText = showColorPreviews.innerText == "color previews: off" ? "color previews: on" : "color previews: off";

  if (showColorPreviews.innerText == "color previews: on") {
    colorPreviews.classList.add("visible");
  } else if (showColorPreviews.innerText == "color previews: off") {
    colorPreviews.classList.remove("visible");
  }
});
showFancyColorNames.addEventListener("click", function () {
  showFancyColorNames.innerText = showFancyColorNames.innerText == "css color names" ? "fancy color names" : "css color names";
  _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["FANCY_COLOR_NAMES"].on = !_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["FANCY_COLOR_NAMES"].on;
  Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__["setComputedColors"])(false);
});

/***/ }),

/***/ "./scripts/modules/canvasOperations.js":
/*!*********************************************!*\
  !*** ./scripts/modules/canvasOperations.js ***!
  \*********************************************/
/*! exports provided: fixDPI, drawSwatches, drawSwatchesMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixDPI", function() { return fixDPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawSwatches", function() { return drawSwatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawSwatchesMobile", function() { return drawSwatchesMobile; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./scripts/modules/utils.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../main.js */ "./scripts/main.js");


var exportCanvas = document.getElementById("export-canvas");
var DPI = window.devicePixelRatio;
var BLACK = "#030303";
var WHITE = "#eaeaea";
var exportNotice = "exported from jpegzilla.com/emerald on ".concat(new Date().toDateString(), ".");
exportCanvas.width = exportCanvas.scrollWidth;
exportCanvas.height = exportCanvas.scrollHeight;
var currentExportObject;
var expCtx = exportCanvas.getContext("2d", {
  alpha: false
});
var fixDPI = function fixDPI() {
  //get CSS height
  //the + prefix casts it to an integer
  //the slice method gets rid of "px"
  var height = +getComputedStyle(exportCanvas).getPropertyValue("height").slice(0, -2); //get CSS width

  var width = +getComputedStyle(exportCanvas).getPropertyValue("width").slice(0, -2); //scale the exportCanvas

  exportCanvas.setAttribute("height", height * DPI);
  exportCanvas.setAttribute("width", width * DPI);
};
var drawSwatches = function drawSwatches(exportObject) {
  currentExportObject = exportObject;
  fixDPI();
  var c = {
    width: exportCanvas.width,
    height: exportCanvas.height
  };
  var swatchCountTotal = exportObject.colorNames.length * 2;
  var REMGAP = 2 * 18;
  var swatchHeight = c.height / 2 - REMGAP;
  var swatchWidth = c.width / (swatchCountTotal / 2);
  var swatchStartPositionX = 0;
  var swatchStartPositionY = 0;

  for (var i = 0; i < exportObject.colorNames.length; i++) {
    var colorName = exportObject.colorNames[i];
    var colorValue = exportObject.palette[i];
    var textColor = "#FFFFFF";
    var bgr = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBA"])(colorValue.bg.hex).r,
        bgg = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBA"])(colorValue.bg.hex).g,
        bgb = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBA"])(colorValue.bg.hex).b;
    var contrast = Math.round((parseInt(bgr) * 299 + parseInt(bgg) * 587 + parseInt(bgb) * 114) / 1000);

    if (contrast > 125) {
      textColor = "#000000";
    }

    expCtx.fillStyle = colorValue.bg.hex;
    expCtx.fillRect(swatchStartPositionX, swatchStartPositionY, swatchWidth, swatchHeight);
    expCtx.font = "".concat(18 * 0.9, "px \"Share Tech Mono\"");
    expCtx.textBaseline = "top";
    expCtx.fillStyle = textColor;
    expCtx.fillText(colorName.bg, swatchStartPositionX + 18, swatchStartPositionY + 18);
    expCtx.font = "".concat(18 * 0.9, "px \"Share Tech Mono\"");
    expCtx.textBaseline = "top";
    expCtx.fillStyle = textColor;
    expCtx.fillText(colorValue.bg.hex, swatchStartPositionX + 18, swatchStartPositionY + 18 * 1.5 + 10);
    swatchStartPositionY += swatchHeight;
    textColor = "#FFFFFF";
    var textr = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBA"])(colorValue.text.hex).r,
        textg = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBA"])(colorValue.text.hex).g,
        textb = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBA"])(colorValue.text.hex).b;
    contrast = Math.round((parseInt(textr) * 299 + parseInt(textg) * 587 + parseInt(textb) * 114) / 1000);

    if (contrast > 125) {
      textColor = "#000000";
    }

    expCtx.fillStyle = colorValue.text.hex;
    expCtx.fillRect(swatchStartPositionX, swatchStartPositionY, swatchWidth, swatchHeight);
    expCtx.font = "".concat(18 * 0.9, "px \"Share Tech Mono\"");
    expCtx.textBaseline = "top";
    expCtx.fillStyle = textColor;
    expCtx.fillText(colorName.text, swatchStartPositionX + 18, swatchStartPositionY + 18);
    expCtx.font = "".concat(18 * 0.9, "px \"Share Tech Mono\"");
    expCtx.textBaseline = "top";
    expCtx.fillStyle = textColor;
    expCtx.fillText(colorValue.text.hex, swatchStartPositionX + 18, swatchStartPositionY + 18 * 1.5 + 10);
    swatchStartPositionX += swatchWidth;
    swatchStartPositionY += swatchHeight;
    expCtx.fillStyle = _main_js__WEBPACK_IMPORTED_MODULE_1__["globalColors"].globalTheme == "dark" ? BLACK : WHITE;
    expCtx.fillRect(0, swatchStartPositionY, c.width, REMGAP * 2);
    expCtx.font = "".concat(18 * 1, "px \"Share Tech Mono\"");
    expCtx.textBaseline = "top";
    expCtx.fillStyle = _main_js__WEBPACK_IMPORTED_MODULE_1__["globalColors"].globalTheme == "dark" ? WHITE : BLACK;
    expCtx.fillText(exportNotice, 18, swatchStartPositionY + 18 * 1.75);
    swatchStartPositionY = 0;
  }
};
var drawSwatchesMobile = function drawSwatchesMobile(exportObject) {
  currentExportObject = exportObject;
  fixDPI();
  var c = {
    width: exportCanvas.width,
    height: exportCanvas.height
  };
  var swatchCountTotal = exportObject.colorNames.length * 2;
  var swatchHeight = c.height / swatchCountTotal;
  var swatchWidth = c.width;
  var swatchStartPositionX = 0;
  var swatchStartPositionY = 0;

  for (var i = 0; i < exportObject.colorNames.length; i++) {
    var colorName = exportObject.colorNames[i];
    var colorValue = exportObject.palette[i];
    var textColor = "#FFFFFF";
    var bgr = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBA"])(colorValue.bg.hex).r,
        bgg = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBA"])(colorValue.bg.hex).g,
        bgb = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBA"])(colorValue.bg.hex).b;
    var contrast = Math.round((parseInt(bgr) * 299 + parseInt(bgg) * 587 + parseInt(bgb) * 114) / 1000);

    if (contrast > 125) {
      textColor = "#000000";
    }

    expCtx.fillStyle = colorValue.bg.hex;
    expCtx.fillRect(swatchStartPositionX, swatchStartPositionY, swatchWidth, swatchHeight);
    expCtx.font = "".concat(18 * 3.5, "px \"Share Tech Mono\"");
    expCtx.textBaseline = "top";
    expCtx.fillStyle = textColor;
    expCtx.fillText("".concat(colorName.bg, ": ").concat(colorValue.bg.hex), swatchStartPositionX + 18 * 2, swatchStartPositionY + 18 * 3);
    swatchStartPositionY += swatchHeight;
    expCtx.fillStyle = colorValue.text.hex;
    expCtx.fillRect(swatchStartPositionX, swatchStartPositionY, swatchWidth, swatchHeight);
    textColor = "#FFFFFF";
    var textr = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBA"])(colorValue.text.hex).r,
        textg = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBA"])(colorValue.text.hex).g,
        textb = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBA"])(colorValue.text.hex).b;
    contrast = Math.round((parseInt(textr) * 299 + parseInt(textg) * 587 + parseInt(textb) * 114) / 1000);

    if (contrast > 125) {
      textColor = "#000000";
    }

    expCtx.font = "".concat(18 * 3, "px \"Share Tech Mono\"");
    expCtx.textBaseline = "top";
    expCtx.fillStyle = textColor;
    expCtx.fillText("".concat(colorName.text, ": ").concat(colorValue.text.hex), swatchStartPositionX + 18 * 2, swatchStartPositionY + 18 * 3);
    swatchStartPositionY += swatchHeight;
  }
};
var mediaTiny = window.matchMedia("(max-width: 900px)");
var mediaSmall = window.matchMedia("(min-width: 1300px)");
mediaTiny.addListener(function (e) {
  if (e.matches) {
    expCtx.clearRect(0, 0, exportCanvas.width, exportCanvas.height);
    if (currentExportObject) drawSwatchesMobile(currentExportObject);
  } else {
    expCtx.clearRect(0, 0, exportCanvas.width, exportCanvas.height);
    if (currentExportObject) drawSwatches(currentExportObject);
  }
});
mediaSmall.addListener(function (e) {
  if (e.matches) {
    expCtx.clearRect(0, 0, exportCanvas.width, exportCanvas.height);
    if (currentExportObject) drawSwatches(currentExportObject);
  }
});

/***/ }),

/***/ "./scripts/modules/paletteOperations.js":
/*!**********************************************!*\
  !*** ./scripts/modules/paletteOperations.js ***!
  \**********************************************/
/*! exports provided: addToPalette, finalizeExportButton, selectExportType, exportTextContainer, currentPaletteIndex, currentPaletteObject, STORAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToPalette", function() { return addToPalette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finalizeExportButton", function() { return finalizeExportButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectExportType", function() { return selectExportType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportTextContainer", function() { return exportTextContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentPaletteIndex", function() { return currentPaletteIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentPaletteObject", function() { return currentPaletteObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE", function() { return STORAGE; });
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../main.js */ "./scripts/main.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./scripts/modules/utils.js");
/* harmony import */ var _canvasOperations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvasOperations.js */ "./scripts/modules/canvasOperations.js");
/* harmony import */ var _smUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smUtils.js */ "./scripts/modules/smUtils.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// palette handling




var addToPalette = document.getElementById("add-to-palette");
var finalizeExportButton = document.getElementById("do-export");
var selectExportType = document.getElementById("selectExportType");
var exportTextContainer = document.getElementsByClassName("export-item-container")[0];
var currentPaletteIndex;
var currentPaletteObject;
var exportType = selectExportType.value;
selectExportType.addEventListener("input", function () {
  exportType = selectExportType.value;
  Array.from(exportTextContainer.children).forEach(function (child) {
    return child.classList.remove("active");
  });
  exportTextContainer.children[selectExportType.selectedIndex].classList.add("active");
});
var STORAGE = window.localStorage;
var PALETTES = STORAGE.getItem("palettes") == undefined ? [[]] : JSON.parse(STORAGE.getItem("palettes"));
var currentPalette = PALETTES.length - 1;
var paletteTotalCount = PALETTES.length;
var paletteHumanIndex = 1;

var savePaletteState = function savePaletteState() {
  var palettesToStore = JSON.stringify(PALETTES);
  localStorage.setItem("palettes", palettesToStore);
};

var paletteContainer = document.getElementsByClassName("palette-container")[0];
var copiedNotification = document.getElementById("copiedNotification");

var makeStyles = function makeStyles(exportObject, type) {
  var sassInfo = [];
  exportObject.palette.forEach(function (pigment, i) {
    var bgName = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["toCamelCase"])(exportObject.colorNames[i].bg);
    var bgHex = pigment.bg.hex;
    var textName = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["toCamelCase"])(exportObject.colorNames[i].text);
    var textHex = pigment.text.hex;
    var swatch = {
      bg: {
        name: bgName,
        hex: bgHex
      },
      text: {
        name: textName,
        hex: textHex
      }
    };
    sassInfo.push(swatch);
  });
  var sassBgColors = [];
  var sassTextColors = [];

  for (var i = 0; i < sassInfo.length; i++) {
    var bgName = sassInfo[i].bg.name;
    var bgHex = sassInfo[i].bg.hex;
    var textName = sassInfo[i].text.name;
    var textHex = sassInfo[i].text.hex;
    sassBgColors.push({
      name: bgName,
      hex: bgHex
    });
    sassTextColors.push({
      name: textName,
      hex: textHex
    });
  }

  var finalArray = sassBgColors.concat(sassTextColors);
  finalArray.sort(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["propSort"])("name"));
  var colorInst = 0;
  finalArray.forEach(function (color, i) {
    if (i > 0 && finalArray[i - 1].name == color.name) {
      colorInst++;
      finalArray[i].name += "-".concat(colorInst);
    } else if (i > 0 && finalArray[i - 1].name == color.name + "-".concat(colorInst)) {
      colorInst++;
      finalArray[i].name += "-".concat(colorInst);
    } else {
      colorInst = 0;
    }
  });
  var str1 = "";
  var str2 = "";

  if (type == "sass") {
    finalArray.forEach(function (color, i) {
      if (finalArray.length - 1 == i) {
        return str1 += "$" + color.name + ": " + color.hex;
      }

      return str1 += "$" + color.name + ": " + color.hex + "\n";
    });
  }

  if (type == "css") {
    finalArray.forEach(function (color, i) {
      if (finalArray.length - 1 == i) {
        return str1 += "--" + color.name + ": " + color.hex;
      }

      return str1 += "--" + color.name + ": " + color.hex + "\n";
    });
  }

  var rgbValues = finalArray.map(function (item) {
    return "rgb(".concat(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["hexToRGBA"])(item.hex).r, ", ").concat(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["hexToRGBA"])(item.hex).g, ", ").concat(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["hexToRGBA"])(item.hex).b, ")");
  });
  var rgbAlts = [];
  finalArray.forEach(function (item, i) {
    var name = item.name;
    var rgb = rgbValues[i];
    rgbAlts.push({
      name: name,
      rgb: rgb
    });
  });

  if (type == "sass") {
    rgbAlts.forEach(function (color, i) {
      if (rgbAlts.length - 1 == i) {
        return str2 += "$" + color.name + ": " + color.rgb;
      }

      return str2 += "$" + color.name + ": " + color.rgb + "\n";
    });
  }

  if (type == "css") {
    rgbAlts.forEach(function (color, i) {
      if (rgbAlts.length - 1 == i) {
        return str2 += "--" + color.name + ": " + color.rgb;
      }

      return str2 += "--" + color.name + ": " + color.rgb + "\n";
    });
  }

  var sassTemplate = "// hex colors\n\n".concat(str1, "\n\n// rgb colors\n\n").concat(str2, "\n  ");

  if (type == "sass") {
    exportTextContainer.children[0].textContent = sassTemplate;
  }

  if (type == "css") {
    exportTextContainer.children[1].textContent = sassTemplate;
  }
};

var makeExportContent = function makeExportContent(exportObject) {
  Array.from(exportTextContainer.children).forEach(function (child) {
    return child.classList.remove("active");
  }); // the two switches are seperated for a reason! remember!

  makeStyles(exportObject, "sass");
  makeStyles(exportObject, "css");

  if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["mobilecheck"])() && window.matchMedia("(max-width: 900px)").matches == false) {
    Object(_canvasOperations_js__WEBPACK_IMPORTED_MODULE_2__["drawSwatches"])(exportObject);
  } else {
    if (window.matchMedia("(max-width: 900px)").matches == true || Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["mobilecheck"])() == true) {
      Object(_canvasOperations_js__WEBPACK_IMPORTED_MODULE_2__["drawSwatchesMobile"])(exportObject);
    } else {
      Object(_canvasOperations_js__WEBPACK_IMPORTED_MODULE_2__["drawSwatches"])(exportObject);
    }
  }

  switch (exportType) {
    case "sass":
      exportTextContainer.children[0].classList.add("active");
      break;

    case "css":
      exportTextContainer.children[1].classList.add("active");
      break;

    case "image":
      exportTextContainer.children[2].classList.add("active");
      break;
  }
};

var exportPalette = function exportPalette(palette, index) {
  var openmodal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (openmodal) Object(_smUtils_js__WEBPACK_IMPORTED_MODULE_3__["openExportModal"])(); // get all colors in the palette, then make some sort of export thing

  var exportingPalette = PALETTES[index];
  var wereColorsFancy = false;

  if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["FANCY_COLOR_NAMES"].on == false) {
    _utils_js__WEBPACK_IMPORTED_MODULE_1__["FANCY_COLOR_NAMES"].on = true;
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["setColorNames"])();
  }

  var colorNames = [];

  for (var i = 0; i < exportingPalette.length; i++) {
    colorNames.push({
      bg: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["findNearestColor"])(exportingPalette[i].bg.hex),
      text: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["findNearestColor"])(exportingPalette[i].text.hex)
    });
  }

  var exportObject = {
    colorNames: colorNames,
    name: palette.name,
    palette: exportingPalette
  };

  if (!wereColorsFancy) {
    _utils_js__WEBPACK_IMPORTED_MODULE_1__["FANCY_COLOR_NAMES"].on = false;
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["setColorNames"])();
  }

  makeExportContent(exportObject);
};

finalizeExportButton.addEventListener("click", function (e) {
  var originalText = finalizeExportButton.textContent;

  switch (exportType) {
    case "sass":
      finalizeExportButton.textContent = "copied to clipboard!";
      copyContent(e, exportTextContainer.children[0], false);
      setTimeout(function () {
        finalizeExportButton.textContent = originalText;
      }, 2000);
      break;

    case "css":
      finalizeExportButton.textContent = "copied to clipboard!";
      copyContent(e, exportTextContainer.children[1]);
      setTimeout(function () {
        finalizeExportButton.textContent = originalText;
      }, 2000);
      break;

    case "image":
      var exportCanvas = document.getElementById("export-canvas");
      var dataURI = exportCanvas.toDataURL();
      var img = new Image();
      img.src = dataURI; // just view image
      // let win = window.open("");
      // win.document.write(img.outerHTML);
      // download image

      var a = document.createElement("a");
      a.href = dataURI;
      a.rel = "noopener noreferrer";
      a.download = "emerald-palette.png";
      a.click();
      break;
  }
});

var paletteControls = function paletteControls(palette, operation, index) {
  currentPaletteIndex = index;
  currentPaletteObject = palette;

  switch (operation) {
    case "remove":
      // animate the removal of palette bar
      palette.classList.add("hide");
      setTimeout(function () {
        paletteHumanIndex--;
        currentPalette--;
        PALETTES.splice(index, 1);
        if (PALETTES.length == 0) PALETTES = [[]];
        paletteTotalCount = PALETTES.length;
        if (currentPalette < 0) currentPalette = 0;
        savePaletteState();
        return palette.remove();
      }, 500);
      break;

    case "export":
      return exportPalette(palette, index);

    default:
      return;
  }
};

var copyContent = function copyContent() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var element = arguments.length > 1 ? arguments[1] : undefined;
  var showNotification = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (e != null) e.preventDefault();
  window.getSelection().selectAllChildren(element);
  document.execCommand("copy");
  if (showNotification) showCopyNotification();
  window.getSelection().removeAllRanges();
};

var setPigmentTextColor = function setPigmentTextColor(pigmentContainer) {
  Array.from(pigmentContainer.children).forEach(function (child) {
    var f = child.style.backgroundColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    var background = {
      r: f[1],
      g: f[2],
      b: f[3]
    };
    var contrast = Math.round((parseInt(background.r) * 299 + parseInt(background.g) * 587 + parseInt(background.b) * 114) / 1000);

    if (contrast > 125 && child.classList.contains("blackText") == false) {
      child.classList.add("blackText");
    } else if (contrast < 125 && child.classList.contains("blackText") == true) {
      child.classList.remove("blackText");
    }
  });
};

var loadSavedPalettes = function loadSavedPalettes() {
  PALETTES.forEach(function (palette) {
    var paletteBar = paletteBarTemplate.cloneNode(true);
    paletteBar.id = "";
    paletteBar.classList.add("palette-bar");
    paletteBar.classList.remove("empty");
    paletteBar.getElementsByClassName("palette-number")[0].textContent = "palette ".concat(paletteHumanIndex);
    var paletteName = paletteBar.getElementsByClassName("palette-number")[0].textContent;
    paletteHumanIndex++;
    var exportButton = paletteBar.getElementsByClassName("export-palette")[0];
    var deleteButton = paletteBar.getElementsByClassName("remove-palette")[0];
    var paletteObject = {
      name: paletteName,
      palette: paletteBar
    };
    paletteContainer.appendChild(paletteBar);
    deleteButton.addEventListener("click", function () {
      return paletteControls(paletteBar, "remove", Array.from(paletteContainer.children).indexOf(paletteBar));
    });
    exportButton.addEventListener("click", function () {
      return paletteControls(paletteObject, "export", Array.from(paletteContainer.children).indexOf(paletteBar));
    });
    palette.forEach(function (pigment) {
      var pigmentContainer = palettePigmentTemplate.cloneNode(true);
      pigmentContainer.children[0].style.backgroundColor = pigment.bg.hex;
      pigmentContainer.children[1].style.backgroundColor = pigment.text.hex;
      pigmentContainer.children[0].textContent = pigment.bg.hex;
      pigmentContainer.children[1].textContent = pigment.text.hex;
      setPigmentTextColor(pigmentContainer);
      pigmentContainer.children[0].addEventListener("click", function (e) {
        return copyContent(e, pigmentContainer.children[0]);
      });
      pigmentContainer.children[1].addEventListener("click", function (e) {
        return copyContent(e, pigmentContainer.children[1]);
      });
      pigmentContainer.id = "";
      pigmentContainer.classList.add("palette-pigment");
      paletteBar.appendChild(pigmentContainer);
    });
  });
};

if (PALETTES && PALETTES.length > 0) {
  if (PALETTES[0].length != 0) loadSavedPalettes();
}

var showCopyNotification = function showCopyNotification() {
  copiedNotification.classList.add("copied");
  setTimeout(function () {
    copiedNotification.classList.remove("copied");
  }, 100);
};

var addNewPaletteBar = function addNewPaletteBar(bgHex, textHex) {
  var alsoAddPigment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var newPaletteBar = paletteBarTemplate.cloneNode(true);
  newPaletteBar.id = "";
  newPaletteBar.classList.add("palette-bar");
  newPaletteBar.classList.remove("empty");
  paletteContainer.appendChild(newPaletteBar);
  newPaletteBar.children[0].getElementsByClassName("palette-number")[0].innerText = "palette ".concat(paletteHumanIndex);
  var paletteName = newPaletteBar.children[0].getElementsByClassName("palette-number")[0].innerText;
  var paletteObject = {
    name: paletteName,
    palette: newPaletteBar
  };
  paletteHumanIndex++;
  if (alsoAddPigment == true) addPigment(newPaletteBar, bgHex, textHex, true);
  var exportButton = newPaletteBar.getElementsByClassName("export-palette")[0];
  var deleteButton = newPaletteBar.getElementsByClassName("remove-palette")[0];
  deleteButton.addEventListener("click", function () {
    // the index of removal has to be defined in this callback because otherwise,
    // the index won't update correctly every time a different 'remove' button is
    // clicked.
    paletteControls(newPaletteBar, "remove", Array.from(paletteContainer.children).indexOf(newPaletteBar));
  });
  exportButton.addEventListener("click", function () {
    return paletteControls(paletteObject, "export", Array.from(paletteContainer.children).indexOf(newPaletteBar));
  });
  paletteTotalCount = PALETTES.length;
};

var addPigment = function addPigment(paletteBar, bgHex, textHex) {
  var saveColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var pigmentContainer = palettePigmentTemplate.cloneNode(true);
  pigmentContainer.children[0].style.backgroundColor = bgHex;
  pigmentContainer.children[1].style.backgroundColor = textHex;
  pigmentContainer.children[0].textContent = bgHex;
  pigmentContainer.children[1].textContent = textHex;
  var bgColor = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["hexToRGBA"])(bgHex);
  var textColor = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["hexToRGBA"])(textHex);

  if (saveColor == true) {
    var localColorObject = {
      bg: {
        hex: bgHex,
        rgb: bgColor
      },
      text: {
        hex: textHex,
        rgb: textColor
      }
    };

    if (PALETTES[currentPalette].length != 0) {
      currentPalette++;
      PALETTES.push([]);
    }

    PALETTES[currentPalette].push(localColorObject);
    savePaletteState();
  }

  setPigmentTextColor(pigmentContainer);
  pigmentContainer.children[0].addEventListener("click", function (e) {
    return copyContent(e, pigmentContainer.children[0]);
  });
  pigmentContainer.children[1].addEventListener("click", function (e) {
    return copyContent(e, pigmentContainer.children[1]);
  });
  pigmentContainer.id = "";
  pigmentContainer.classList.add("palette-pigment");
  paletteBar.appendChild(pigmentContainer);
};

var addColorToPalette = function addColorToPalette(bgColor, textColor) {
  var pigment = palettePigmentTemplate.cloneNode(true);
  pigment.id = "";
  var bgHex = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["rgbToHex"])(bgColor.r, bgColor.g, bgColor.b);
  var textHex = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["rgbToHex"])(textColor.r, textColor.g, textColor.b);
  var currentPaletteBar = paletteContainer.children[paletteTotalCount - 1];
  var localColorObject = {
    bg: {
      hex: bgHex,
      rgb: bgColor
    },
    text: {
      hex: textHex,
      rgb: textColor
    }
  };

  if (PALETTES[currentPalette].length < 5) {
    PALETTES[currentPalette].push(localColorObject);
    addPigment(currentPaletteBar, bgHex, textHex);
  } else addNewPaletteBar(bgHex, textHex);

  savePaletteState();
};

addToPalette.addEventListener("click", function () {
  var bgColor = _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].colorObject.bg.rgb;
  var textColor = _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].colorObject.text.rgb;
  var bgHex = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["rgbToHex"])(bgColor.r, bgColor.g, bgColor.b);
  var textHex = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["rgbToHex"])(textColor.r, textColor.g, textColor.b);
  if (paletteContainer.children.length == 0) addNewPaletteBar(bgHex, textHex, false);
  addColorToPalette(bgColor, textColor);

  if (_main_js__WEBPACK_IMPORTED_MODULE_0__["firstPalette"].first == true) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["scrollSmooth"])(window, "bottom");
    _main_js__WEBPACK_IMPORTED_MODULE_0__["firstPalette"].first = false;
  }
});
addNewPalette.addEventListener("click", function () {
  return addNewPaletteBar(_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].colorObject.bg.hex, _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].colorObject.text.hex);
}); // generate an entire palette from two colors

var makeFullPalette = function makeFullPalette() {
  // the place where the new palette is going to go (unused?)
  // let index = PALETTES.length - 1;
  // let newPalette = PALETTES[index];
  // the amount of colors that need to be generated after the initial one
  var count = _main_js__WEBPACK_IMPORTED_MODULE_0__["paletteGenParams"].count; // rgb values of currently displayed colors

  var obgRGB = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["hexToRGBA"])(_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].colorObject.bg.hex);
  var obtxtRGB = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["hexToRGBA"])(_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].colorObject.text.hex); // arrays for putting the generated colors into

  var bgColors = [];
  var txtColors = [];
  bgColors.push(obgRGB);
  txtColors.push(obtxtRGB); // if color scheme generation setting is gradient
  // use the background color as one endpoint and the text color as the other.
  // generate the palette by interpolating between these two colors with eight steps.
  // in pigments, background color is on the left, text color is on the right.
  // keep that in mind when creating a gradient palette.

  if (_main_js__WEBPACK_IMPORTED_MODULE_0__["paletteGenParams"].setting == "gradient") {
    // create a fresh palette bar with the two current colors
    addNewPaletteBar(_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].colorObject.bg.hex, _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].colorObject.bg.hex);
    var interpolateColor1 = bgColors[0];
    var interpolateColor2 = txtColors[0];

    var interpolate = function interpolate(color1, color2, steps) {
      var interpolateColor = function interpolateColor(color1, color2, factor) {
        if (!factor) factor = 0.5;
        var result = color1.slice();

        for (var i = 0; i < 3; i++) {
          result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
        }

        return result;
      };

      var stepFactor = 1 / (steps - 1),
          result = [];
      color1 = _toConsumableArray(Object.values(color1));
      color2 = _toConsumableArray(Object.values(color2));

      for (var i = 0; i < steps; i++) {
        result.push(interpolateColor(color1, color2, stepFactor * i));
      }

      return result;
    };

    var bgIntp = interpolate(interpolateColor1, interpolateColor2, _main_js__WEBPACK_IMPORTED_MODULE_0__["paletteGenParams"].count);

    for (var i = 1; i < bgIntp.length; i++) {
      var newBgColor = {
        r: bgIntp[i][0],
        g: bgIntp[i][1],
        b: bgIntp[i][2]
      };
      var newTxtColor = {
        r: bgIntp[i][0],
        g: bgIntp[i][1],
        b: bgIntp[i][2]
      };
      bgColors.push(newBgColor);
      txtColors.push(newTxtColor);
    }

    bgColors.forEach(function (color, i) {
      if (i > 0) addColorToPalette(color, txtColors[i]);
    });
  } // color scheme generation setting is monochrome
  // then each generated pigment should have a background / text pigment
  // derived from the original pigments, but all using the same hue.
  // if color scheme generation setting is analogous, use shiftHue
  // to select new colors. if it's monochrome, then just use changeShade
  // with the hex values. use this logic to make sure colors don't get too dark:
  // for (let i = 1; i < 6; i++) {
  //   let newShadeBg, newShadeText;
  //
  //   newShadeBg = changeShade(bgAlts[i - 1], -15);
  //   newShadeText = changeShade(textAlts[i - 1], -15);
  //
  //   if (newShadeBg == "#000000") {
  //     newShadeBg = changeShade(bgAlts[0], 15);
  //     bgAlts.unshift(newShadeBg);
  //   } else bgAlts.push(newShadeBg);
  //
  //   if (newShadeText == "#000000") {
  //     newShadeText = changeShade(textAlts[0], 15);
  //     textAlts.unshift(newShadeText);
  //   } else textAlts.push(newShadeText);
  // }


  if (_main_js__WEBPACK_IMPORTED_MODULE_0__["paletteGenParams"].setting == "monochromatic") {
    // create a fresh palette bar with the two current colors
    addNewPaletteBar(_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].colorObject.bg.hex, _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].colorObject.bg.hex);

    for (var _i = 1; _i < count; _i++) {
      var _newBgColor = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["shiftSat"])(bgColors[_i - 1], -_main_js__WEBPACK_IMPORTED_MODULE_0__["paletteGenParams"].factor);

      var _newTxtColor = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["shiftSat"])(bgColors[_i - 1], -_main_js__WEBPACK_IMPORTED_MODULE_0__["paletteGenParams"].factor);

      bgColors.push(_newBgColor);
      txtColors.push(_newTxtColor);
    }

    bgColors.forEach(function (color, i) {
      if (i > 0) addColorToPalette(color, txtColors[i]);
    });
  } // for this function:
  // I need to take the relevant color (background or text)
  // and using that color's rgb values, I'll generate four
  // other colors that look nice with it, OR generate four
  // colors that are just similar to it (meaning nearly
  // adjacent rgb values).


  var generateNewColor = function generateNewColor(color) {
    // generate a color adjacent to the color argument
    // or complementary??
    // in fact, make a palette generation setting that
    // allows the user to choose whether to generate
    // gradient palettes or complementary color schemes.
    return;
  };

  if (_main_js__WEBPACK_IMPORTED_MODULE_0__["paletteGenParams"].setting == "analogous") {
    // adds a new palette bar, containing two colors
    addNewPaletteBar(_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].colorObject.bg.hex, _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].colorObject.text.hex); // for however many colors the user decides on in the settings, let's...

    for (var _i2 = 1; _i2 < count; _i2++) {
      // ...create colors based on the previous colors, and shift their hue by
      // whatever amount the user puts in the settings (10 degrees default)
      var _newBgColor2 = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["shiftHue"])(bgColors[_i2 - 1], _main_js__WEBPACK_IMPORTED_MODULE_0__["paletteGenParams"].factor);

      var _newTxtColor2 = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["shiftHue"])(txtColors[_i2 - 1], _main_js__WEBPACK_IMPORTED_MODULE_0__["paletteGenParams"].factor); // and then add them to a list of pigments to be displayed later


      bgColors.push(_newBgColor2);
      txtColors.push(_newTxtColor2);
    } // for each color in the generated list...


    bgColors.forEach(function (color, i) {
      // except for the first one, add them all to the newly created palette
      if (i > 0) addColorToPalette(color, txtColors[i]);
    });
  } // save the palettes in localstorage


  savePaletteState();
};

document.getElementById("generate-palette").addEventListener("click", function () {
  return makeFullPalette();
});

/***/ }),

/***/ "./scripts/modules/palettes.js":
/*!*************************************!*\
  !*** ./scripts/modules/palettes.js ***!
  \*************************************/
/*! exports provided: palettes, simpleColors, colorLib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "palettes", function() { return palettes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleColors", function() { return simpleColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorLib", function() { return colorLib; });
var palettes = {};
var simpleColors = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
var colorLib = {
  "#4c4f56": "Abbey",
  "#0048ba": "Absolute Zero",
  "#1b1404": "Acadia",
  "#7cb0a1": "Acapulco",
  "#b0bf1a": "Acid Green",
  "#7cb9e8": "Aero",
  "#c9ffe5": "Aero Blue",
  "#714693": "Affair",
  "#b284be": "African Violet",
  "#00308f": "Air Force Blue",
  "#72a0c1": "Air Superiority Blue",
  "#d4c4a8": "Akaroa",
  "#af002a": "Alabama Crimson",
  "#fafafa": "Alabaster",
  "#f5e9d3": "Albescent White",
  "#93dfb8": "Algae Green",
  "#f0f8ff": "Alice Blue",
  "#84de02": "Alien Armpit",
  "#e32636": "Alizarin Crimson",
  "#c46210": "Alloy Orange",
  "#0076a3": "Allports",
  "#efdecd": "Almond",
  "#907b71": "Almond Frost",
  "#af8f2c": "Alpine",
  "#dbdbdb": "Alto",
  "#a9acb6": "Aluminium",
  "#e52b50": "Amaranth",
  "#f19cbb": "Amaranth Pink",
  "#ab274f": "Amaranth Purple",
  "#d3212d": "Amaranth Red",
  "#3b7a57": "Amazon",
  "#ffbf00": "Amber",
  "#ff033e": "American Rose",
  "#87756e": "Americano",
  "#9966cc": "Amethyst",
  "#a397b4": "Amethyst Smoke",
  "#f9eaf3": "Amour",
  "#7b9f80": "Amulet",
  "#9de5ff": "Anakiwa",
  "#a4c639": "Android Green",
  "#f2f3f4": "Anti Flash White",
  "#cd9575": "Antique Brass",
  "#665d1e": "Antique Bronze",
  "#915c83": "Antique Fuchsia",
  "#841b2d": "Antique Ruby",
  "#faebd7": "Antique White",
  "#e0b646": "Anzac",
  "#008000": "Ao",
  "#dfbe6f": "Apache",
  "#4fa83d": "Apple",
  "#af4d43": "Apple Blossom",
  "#8db600": "Apple Green",
  "#fbceb1": "Apricot",
  "#fffeec": "Apricot White",
  "#014b43": "Aqua Deep",
  "#5fa777": "Aqua Forest",
  "#edf5f5": "Aqua Haze",
  "#a1dad7": "Aqua Island",
  "#eaf9f5": "Aqua Spring",
  "#e8f5f2": "Aqua Squeeze",
  "#7fffd4": "Aquamarine",
  "#71d9e2": "Aquamarine Blue",
  "#110c6c": "Arapawa",
  "#d0ff14": "Arctic Lime",
  "#433e37": "Armadillo",
  "#4b5320": "Army Green",
  "#948771": "Arrowtown",
  "#3b444b": "Arsenic",
  "#8f9779": "Artichoke",
  "#e9d66b": "Arylide Yellow",
  "#c6c3b5": "Ash",
  "#b2beb5": "Ash Grey",
  "#87a96b": "Asparagus",
  "#130a06": "Asphalt",
  "#faeab9": "Astra",
  "#327da0": "Astral",
  "#283a77": "Astronaut",
  "#013e62": "Astronaut Blue",
  "#eef0f3": "Athens Gray",
  "#ecebce": "Aths Special",
  "#97cd2d": "Atlantis",
  "#0a6f75": "Atoll",
  "#97605d": "Au Chico",
  "#3b0910": "Aubergine",
  "#a52a2a": "Auburn",
  "#fdee00": "Aureolin",
  "#6e7f80": "Auro Metal Saurus",
  "#f5ffbe": "Australian Mint",
  "#568203": "Avocado",
  "#4e6649": "Axolotl",
  "#f7c8da": "Azalea",
  "#0d1c19": "Aztec",
  "#c39953": "Aztec Gold",
  "#007fff": "Azure",
  "#f0ffff": "Azure Mist",
  "#dbe9f4": "Azureish White",
  "#89cff0": "Baby Blue",
  "#a1caf1": "Baby Blue Eyes",
  "#fefefa": "Baby Powder",
  "#026395": "Bahama Blue",
  "#a5cb0c": "Bahia",
  "#fff8d1": "Baja White",
  "#ff91af": "Baker Miller Pink",
  "#859faf": "Bali Hai",
  "#21abcd": "Ball Blue",
  "#2a2630": "Baltic Sea",
  "#da6304": "Bamboo",
  "#fae7b5": "Banana Mania",
  "#ffe135": "Banana Yellow",
  "#858470": "Bandicoot",
  "#ded717": "Barberry",
  "#e0218a": "Barbie Pink",
  "#a68b5b": "Barley Corn",
  "#fff4ce": "Barley White",
  "#7c0a02": "Barn Red",
  "#44012d": "Barossa",
  "#292130": "Bastille",
  "#828f72": "Battleship Gray",
  "#7da98d": "Bay Leaf",
  "#273a81": "Bay of Many",
  "#98777b": "Bazaar",
  "#2e5894": "Bdazzled Blue",
  "#bcd4e6": "Beau Blue",
  "#eec1be": "Beauty Bush",
  "#9f8170": "Beaver",
  "#fef2c7": "Beeswax",
  "#f5f5dc": "Beige",
  "#add8ff": "Belgion",
  "#7dd8c6": "Bermuda",
  "#6b8ba2": "Bermuda Gray",
  "#dee5c0": "Beryl Green",
  "#fcfbf3": "Bianca",
  "#9c2542": "Big Dip Oruby",
  "#e88e5a": "Big Foot Feet",
  "#162a40": "Big Stone",
  "#327c14": "Bilbao",
  "#b2a1ea": "Biloba Flower",
  "#373021": "Birch",
  "#d4cd16": "Bird Flower",
  "#1b3162": "Biscay",
  "#497183": "Bismark",
  "#c1b7a4": "Bison Hide",
  "#ffe4c4": "Bisque",
  "#3d2b1f": "Bistre",
  "#868974": "Bitter",
  "#cae00d": "Bitter Lemon",
  "#fe6f5e": "Bittersweet",
  "#bf4f51": "Bittersweet Shimmer",
  "#eededa": "Bizarre",
  "#000000": "Black",
  "#3d0c02": "Black Bean",
  "#54626f": "Black Coral",
  "#0b1304": "Black Forest",
  "#f6f7f7": "Black Haze",
  "#253529": "Black Leather Jacket",
  "#3e2c1c": "Black Marlin",
  "#3b3c36": "Black Olive",
  "#041322": "Black Pearl",
  "#0d0332": "Black Rock",
  "#67032d": "Black Rose",
  "#0a001c": "Black Russian",
  "#bfafb2": "Black Shadows",
  "#f2fafa": "Black Squeeze",
  "#fffef6": "Black White",
  "#4d0135": "Blackberry",
  "#32293a": "Blackcurrant",
  "#ffebcd": "Blanched Almond",
  "#a57164": "Blast Off Bronze",
  "#ff6700": "Blaze Orange",
  "#fef3d8": "Bleach White",
  "#2c2133": "Bleached Cedar",
  "#318ce7": "Bleu De France",
  "#a3e3ed": "Blizzard Blue",
  "#faf0be": "Blond",
  "#dcb4bc": "Blossom",
  "#0000ff": "Blue",
  "#496679": "Blue Bayoux",
  "#a2a2d0": "Blue Bell",
  "#f1e9ff": "Blue Chalk",
  "#010d1a": "Blue Charcoal",
  "#0c8990": "Blue Chill",
  "#380474": "Blue Diamond",
  "#204852": "Blue Dianne",
  "#2c0e8c": "Blue Gem",
  "#6699cc": "Blue Gray",
  "#0d98ba": "Blue Green",
  "#bfbed8": "Blue Haze",
  "#5dadec": "Blue Jeans",
  "#ace5ee": "Blue Lagoon",
  "#553592": "Blue Magenta Violet",
  "#7666c6": "Blue Marguerite",
  "#0066ff": "Blue Ribbon",
  "#d2f6de": "Blue Romance",
  "#126180": "Blue Sapphire",
  "#748881": "Blue Smoke",
  "#016162": "Blue Stone",
  "#8a2be2": "Blue Violet",
  "#042e4c": "Blue Whale",
  "#5072a7": "Blue Yonder",
  "#13264d": "Blue Zodiac",
  "#4f86f7": "Blueberry",
  "#1c1cf0": "Bluebonnet",
  "#18587a": "Blumine",
  "#de5d83": "Blush",
  "#79443b": "Bole",
  "#afb1b8": "Bombay",
  "#e5e0e1": "Bon Jour",
  "#0095b6": "Bondi Blue",
  "#e3dac9": "Bone",
  "#dde26a": "Booger Buster",
  "#5c0120": "Bordeaux",
  "#4e2a5a": "Bossanova",
  "#3b91b4": "Boston Blue",
  "#cc0000": "Boston University Red",
  "#c7dde5": "Botticelli",
  "#006a4e": "Bottle Green",
  "#7a7a7a": "Boulder",
  "#ae809e": "Bouquet",
  "#ba6f1e": "Bourbon",
  "#873260": "Boysenberry",
  "#4a2a04": "Bracken",
  "#0070ff": "Brandeis Blue",
  "#dec196": "Brandy",
  "#cd8429": "Brandy Punch",
  "#bb8983": "Brandy Rose",
  "#b5a642": "Brass",
  "#5da19f": "Breaker Bay",
  "#cb4154": "Brick Red",
  "#fffaf4": "Bridal Heath",
  "#fef0ec": "Bridesmaid",
  "#1dacd6": "Bright Cerulean",
  "#3c4151": "Bright Gray",
  "#66ff00": "Bright Green",
  "#bf94e4": "Bright Lavender",
  "#d891ef": "Bright Lilac",
  "#c32148": "Bright Maroon",
  "#1974d2": "Bright Navy Blue",
  "#b10000": "Bright Red",
  "#fed33c": "Bright Sun",
  "#08e8de": "Bright Turquoise",
  "#d19fe8": "Bright Ube",
  "#ffaa1d": "Bright Yellow",
  "#3399ff": "Brilliant Azure",
  "#f4bbff": "Brilliant Lavender",
  "#ff55a3": "Brilliant Rose",
  "#fb607f": "Brink Pink",
  "#004225": "British Racing Green",
  "#aba196": "Bronco",
  "#cd7f32": "Bronze",
  "#4e420c": "Bronze Olive",
  "#737000": "Bronze Yellow",
  "#4d400f": "Bronzetone",
  "#ffec13": "Broom",
  "#964b00": "Brown",
  "#592804": "Brown Bramble",
  "#492615": "Brown Derby",
  "#401801": "Brown Pod",
  "#af593e": "Brown Rust",
  "#af6e4d": "Brown Sugar",
  "#37290e": "Brown Tumbleweed",
  "#cc9966": "Brown Yellow",
  "#1b4d3e": "Brunswick Green",
  "#ffc1cc": "Bubble Gum",
  "#e7feff": "Bubbles",
  "#622f30": "Buccaneer",
  "#a8ae9c": "Bud",
  "#7bb661": "Bud Green",
  "#c1a004": "Buddha Gold",
  "#f0dc82": "Buff",
  "#480607": "Bulgarian Rose",
  "#864d1e": "Bull Shot",
  "#0d1117": "Bunker",
  "#151f4c": "Bunting",
  "#800020": "Burgundy",
  "#deb887": "Burlywood",
  "#002e20": "Burnham",
  "#ff7034": "Burning Orange",
  "#d99376": "Burning Sand",
  "#a17a74": "Burnished Brown",
  "#420303": "Burnt Maroon",
  "#cc5500": "Burnt Orange",
  "#e97451": "Burnt Sienna",
  "#8a3324": "Burnt Umber",
  "#0d2e1c": "Bush",
  "#f3ad16": "Buttercup",
  "#a1750d": "Buttered Rum",
  "#624e9a": "Butterfly Bush",
  "#fff1b5": "Buttermilk",
  "#fffcea": "Buttery White",
  "#bd33a4": "Byzantine",
  "#702963": "Byzantium",
  "#007aa5": "CG Blue",
  "#e03c31": "CG Red",
  "#4d0a18": "Cab Sav",
  "#d94972": "Cabaret",
  "#3f4c3a": "Cabbage Pont",
  "#587156": "Cactus",
  "#536872": "Cadet",
  "#5f9ea0": "Cadet Blue",
  "#91a3b0": "Cadet Grey",
  "#b04c6a": "Cadillac",
  "#006b3c": "Cadmium Green",
  "#ed872d": "Cadmium Orange",
  "#e30022": "Cadmium Red",
  "#fff600": "Cadmium Yellow",
  "#4b3621": "Cafe Noir",
  "#6f440c": "Cafe Royale",
  "#1e4d2b": "Cal Poly Green",
  "#e0c095": "Calico",
  "#fe9d04": "California",
  "#31728d": "Calypso",
  "#00581a": "Camarone",
  "#a3c1ad": "Cambridge Blue",
  "#893456": "Camelot",
  "#d9b99b": "Cameo",
  "#efbbcc": "Cameo Pink",
  "#3c3910": "Camouflage",
  "#78866b": "Camouflage Green",
  "#d591a4": "Can Can",
  "#f3fb62": "Canary",
  "#ffef00": "Canary Yellow",
  "#fcd917": "Candlelight",
  "#ff0800": "Candy Apple Red",
  "#251706": "Cannon Black",
  "#894367": "Cannon Pink",
  "#3c4443": "Cape Cod",
  "#fee5ac": "Cape Honey",
  "#a26645": "Cape Palliser",
  "#dcedb4": "Caper",
  "#00bfff": "Capri",
  "#592720": "Caput Mortuum",
  "#ffddaf": "Caramel",
  "#eeeee8": "Cararra",
  "#01361c": "Cardin Green",
  "#c41e3a": "Cardinal",
  "#8c055e": "Cardinal Pink",
  "#d29eaa": "Careys Pink",
  "#00cc99": "Caribbean Green",
  "#ea88a8": "Carissma",
  "#f3ffd8": "Carla",
  "#960018": "Carmine",
  "#eb4c42": "Carmine Pink",
  "#ff0038": "Carmine Red",
  "#5c2e01": "Carnaby Tan",
  "#f95a61": "Carnation",
  "#ffa6c9": "Carnation Pink",
  "#b31b1b": "Carnelian",
  "#56a0d3": "Carolina Blue",
  "#f9e0ed": "Carousel Pink",
  "#ed9121": "Carrot Orange",
  "#f8b853": "Casablanca",
  "#2f6168": "Casal",
  "#8ba9a5": "Cascade",
  "#e6bea5": "Cashmere",
  "#adbed1": "Casper",
  "#00563b": "Castleton Green",
  "#52001f": "Castro",
  "#062a78": "Catalina Blue",
  "#703642": "Catawba",
  "#eef6f7": "Catskill White",
  "#e3bebe": "Cavern Pink",
  "#3e1c14": "Cedar",
  "#c95a49": "Cedar Chest",
  "#711a00": "Cedar Wood Finish",
  "#92a1cf": "Ceil",
  "#ace1af": "Celadon",
  "#2f847c": "Celadon Green",
  "#b8c25d": "Celery",
  "#b2ffff": "Celeste",
  "#4997d0": "Celestial Blue",
  "#1e385b": "Cello",
  "#163222": "Celtic",
  "#8d7662": "Cement",
  "#fcfff9": "Ceramic",
  "#de3163": "Cerise",
  "#ec3b83": "Cerise Pink",
  "#007ba7": "Cerulean",
  "#2a52be": "Cerulean Blue",
  "#6d9bc3": "Cerulean Frost",
  "#fff4f3": "Chablis",
  "#516e3d": "Chalet Green",
  "#eed794": "Chalky",
  "#354e8c": "Chambray",
  "#eddcb1": "Chamois",
  "#a0785a": "Chamoisee",
  "#f7e7ce": "Champagne",
  "#f8c3df": "Chantilly",
  "#292937": "Charade",
  "#36454f": "Charcoal",
  "#fff3f1": "Chardon",
  "#ffcd8c": "Chardonnay",
  "#232b2b": "Charleston Green",
  "#baeef9": "Charlotte",
  "#d47494": "Charm",
  "#e68fac": "Charm Pink",
  "#dfff00": "Chartreuse",
  "#40a860": "Chateau Green",
  "#bdb3c7": "Chatelle",
  "#175579": "Chathams Blue",
  "#83aa5d": "Chelsea Cucumber",
  "#9e5302": "Chelsea Gem",
  "#dfcd6f": "Chenin",
  "#fcda98": "Cherokee",
  "#ffb7c5": "Cherry Blossom Pink",
  "#2a0359": "Cherry Pie",
  "#651a14": "Cherrywood",
  "#f8d9e9": "Cherub",
  "#954535": "Chestnut",
  "#8581d9": "Chetwode Blue",
  "#5d5c58": "Chicago",
  "#f1ffc8": "Chiffon",
  "#f77703": "Chilean Fire",
  "#fffde6": "Chilean Heath",
  "#fcffe7": "China Ivory",
  "#a8516e": "China Rose",
  "#aa381e": "Chinese Red",
  "#856088": "Chinese Violet",
  "#cec7a7": "Chino",
  "#a8e3bd": "Chinook",
  "#4aff00": "Chlorophyll Green",
  "#7b3f00": "Chocolate",
  "#33036b": "Christalle",
  "#67a712": "Christi",
  "#e7730a": "Christine",
  "#e8f1d4": "Chrome White",
  "#ffa700": "Chrome Yellow",
  "#0e0e18": "Cinder",
  "#fde1dc": "Cinderella",
  "#98817b": "Cinereous",
  "#e34234": "Cinnabar",
  "#cd607e": "Cinnamon Satin",
  "#55280c": "Cioccolato",
  "#e4d00a": "Citrine",
  "#faf7d6": "Citrine White",
  "#9fa91f": "Citron",
  "#a1c50a": "Citrus",
  "#480656": "Clairvoyant",
  "#d4b6af": "Clam Shell",
  "#7f1734": "Claret",
  "#fbcce7": "Classic Rose",
  "#bdc8b3": "Clay Ash",
  "#8a8360": "Clay Creek",
  "#e9fffd": "Clear Day",
  "#e96e00": "Clementine",
  "#371d09": "Clinker",
  "#c7c4bf": "Cloud",
  "#202e54": "Cloud Burst",
  "#aca59f": "Cloudy",
  "#384910": "Clover",
  "#0047ab": "Cobalt Blue",
  "#481c1c": "Cocoa Bean",
  "#d2691e": "Cocoa Brown",
  "#965a3e": "Coconut",
  "#f8f7dc": "Coconut Cream",
  "#0b0b0b": "Cod Gray",
  "#6f4e37": "Coffee",
  "#2a140e": "Coffee Bean",
  "#9f381d": "Cognac",
  "#3f2500": "Cola",
  "#aba0d9": "Cold Purple",
  "#cebaba": "Cold Turkey",
  "#ffedbc": "Colonial White",
  "#c4d8e2": "Columbia Blue",
  "#5c5d75": "Comet",
  "#517c66": "Como",
  "#c9d9d2": "Conch",
  "#7c7b7a": "Concord",
  "#f2f2f2": "Concrete",
  "#e9d75a": "Confetti",
  "#593737": "Congo Brown",
  "#f88379": "Congo Pink",
  "#02478e": "Congress Blue",
  "#acdd4d": "Conifer",
  "#c6726b": "Contessa",
  "#002e63": "Cool Black",
  "#8c92ac": "Cool Grey",
  "#b87333": "Copper",
  "#7e3a15": "Copper Canyon",
  "#ad6f69": "Copper Penny",
  "#cb6d51": "Copper Red",
  "#996666": "Copper Rose",
  "#944747": "Copper Rust",
  "#ff3800": "Coquelicot",
  "#ff7f50": "Coral",
  "#ff4040": "Coral Red",
  "#c7bca2": "Coral Reef",
  "#a86b6b": "Coral Tree",
  "#893f45": "Cordovan",
  "#606e68": "Corduroy",
  "#c4d0b0": "Coriander",
  "#40291d": "Cork",
  "#e7bf05": "Corn",
  "#f8facd": "Corn Field",
  "#8b6b0b": "Corn Harvest",
  "#6495ed": "Cornflower Blue",
  "#ffb0ac": "Cornflower Lilac",
  "#fff8dc": "Cornsilk",
  "#fad3a2": "Corvette",
  "#76395d": "Cosmic",
  "#2e2d88": "Cosmic Cobalt",
  "#fff8e7": "Cosmic Latte",
  "#ffd8d9": "Cosmos",
  "#615d30": "Costa Del Sol",
  "#ffbcd9": "Cotton Candy",
  "#c2bdb6": "Cotton Seed",
  "#01371a": "County Green",
  "#4d282d": "Cowboy",
  "#81613e": "Coyote Brown",
  "#b95140": "Crail",
  "#db5079": "Cranberry",
  "#462425": "Crater Brown",
  "#1f75fe": "Crayola Blue",
  "#1cac78": "Crayola Green",
  "#ff7538": "Crayola Orange",
  "#ee204d": "Crayola Red",
  "#fce883": "Crayola Yellow",
  "#fffdd0": "Cream",
  "#ffe5a0": "Cream Brulee",
  "#f5c85c": "Cream Can",
  "#1e0f04": "Creole",
  "#737829": "Crete",
  "#dc143c": "Crimson",
  "#be0032": "Crimson Glory",
  "#990000": "Crimson Red",
  "#736d58": "Crocodile",
  "#771f1f": "Crown of Thorns",
  "#1c1208": "Crowshead",
  "#b5ecdf": "Cruise",
  "#004816": "Crusoe",
  "#fd7b33": "Crusta",
  "#924321": "Cumin",
  "#fdffd5": "Cumulus",
  "#fbbeda": "Cupid",
  "#2596d1": "Curious Blue",
  "#507672": "Cutty Sark",
  "#00ffff": "Cyan",
  "#4e82b4": "Cyan Azure",
  "#4682bf": "Cyan Blue Azure",
  "#28589c": "Cyan Cobalt Blue",
  "#188bc2": "Cyan Cornflower Blue",
  "#58427c": "Cyber Grape",
  "#ffd300": "Cyber Yellow",
  "#f56fa1": "Cyclamen",
  "#003e40": "Cyprus",
  "#ffff31": "Daffodil",
  "#012731": "Daintree",
  "#f9e4bc": "Dairy Cream",
  "#4f2398": "Daisy Bush",
  "#6e4b26": "Dallas",
  "#f0e130": "Dandelion",
  "#6093d1": "Danube",
  "#00008b": "Dark Blue",
  "#666699": "Dark Blue Gray",
  "#654321": "Dark Brown",
  "#88654e": "Dark Brown Tangelo",
  "#770f05": "Dark Burgundy",
  "#5d3954": "Dark Byzantium",
  "#a40000": "Dark Candy Apple Red",
  "#08457e": "Dark Cerulean",
  "#986960": "Dark Chestnut",
  "#cd5b45": "Dark Coral",
  "#008b8b": "Dark Cyan",
  "#3c2005": "Dark Ebony",
  "#0a480d": "Dark Fern",
  "#b8860b": "Dark Goldenrod",
  "#013220": "Dark Green",
  "#1f262a": "Dark Gunmetal",
  "#6e6ef9": "Dark Imperial Blue",
  "#1a2421": "Dark Jungle Green",
  "#bdb76b": "Dark Khaki",
  "#734f96": "Dark Lavender",
  "#534b4f": "Dark Liver",
  "#8b008b": "Dark Magenta",
  "#a9a9a9": "Dark Medium Gray",
  "#003366": "Dark Midnight Blue",
  "#4a5d23": "Dark Moss Green",
  "#556b2f": "Dark Olive Green",
  "#ff8c00": "Dark Orange",
  "#9932cc": "Dark Orchid",
  "#779ecb": "Dark Pastel Blue",
  "#03c03c": "Dark Pastel Green",
  "#966fd6": "Dark Pastel Purple",
  "#c23b22": "Dark Pastel Red",
  "#e75480": "Dark Pink",
  "#4f3a3c": "Dark Puce",
  "#301934": "Dark Purple",
  "#872657": "Dark Raspberry",
  "#8b0000": "Dark Red",
  "#e9967a": "Dark Salmon",
  "#560319": "Dark Scarlet",
  "#8fbc8f": "Dark Sea Green",
  "#3c1414": "Dark Sienna",
  "#8cbed6": "Dark Sky Blue",
  "#483d8b": "Dark Slate Blue",
  "#2f4f4f": "Dark Slate Gray",
  "#177245": "Dark Spring Green",
  "#918151": "Dark Tan",
  "#ffa812": "Dark Tangerine",
  "#cc4e5c": "Dark Terra Cotta",
  "#00ced1": "Dark Turquoise",
  "#d1bea8": "Dark Vanilla",
  "#9400d3": "Dark Violet",
  "#9b870c": "Dark Yellow",
  "#00703c": "Dartmouth Green",
  "#555555": "Davys Grey",
  "#a6a29a": "Dawn",
  "#f3e9e5": "Dawn Pink",
  "#7ac488": "De York",
  "#d70a53": "Debian Red",
  "#d2da97": "Deco",
  "#220878": "Deep Blue",
  "#e47698": "Deep Blush",
  "#4a3004": "Deep Bronze",
  "#a9203e": "Deep Carmine",
  "#ef3038": "Deep Carmine Pink",
  "#e9692c": "Deep Carrot Orange",
  "#da3287": "Deep Cerise",
  "#b94e48": "Deep Chestnut",
  "#051040": "Deep Cove",
  "#002900": "Deep Fir",
  "#182d09": "Deep Forest Green",
  "#c154c1": "Deep Fuchsia",
  "#056608": "Deep Green",
  "#0e7c61": "Deep Green Cyan Turquoise",
  "#004b49": "Deep Jungle Green",
  "#333366": "Deep Koamaru",
  "#f5c71a": "Deep Lemon",
  "#9955bb": "Deep Lilac",
  "#cc00cc": "Deep Magenta",
  "#820000": "Deep Maroon",
  "#412010": "Deep Oak",
  "#ff1493": "Deep Pink",
  "#a95c68": "Deep Puce",
  "#850101": "Deep Red",
  "#843f5b": "Deep Ruby",
  "#ff9933": "Deep Saffron",
  "#082567": "Deep Sapphire",
  "#01826b": "Deep Sea",
  "#095859": "Deep Sea Green",
  "#4a646c": "Deep Space Sparkle",
  "#7e5e60": "Deep Taupe",
  "#003532": "Deep Teal",
  "#66424d": "Deep Tuscan Red",
  "#330066": "Deep Violet",
  "#ba8759": "Deer",
  "#b09a95": "Del Rio",
  "#396413": "Dell",
  "#a4a49d": "Delta",
  "#7563a8": "Deluge",
  "#1560bd": "Denim",
  "#2243b6": "Denim Blue",
  "#ffeed8": "Derby",
  "#669999": "Desaturated Cyan",
  "#ae6020": "Desert",
  "#edc9af": "Desert Sand",
  "#f8f8f7": "Desert Storm",
  "#ea3c53": "Desire",
  "#eafffe": "Dew",
  "#db995e": "Di Serria",
  "#b9f2ff": "Diamond",
  "#130000": "Diesel",
  "#696969": "Dim Gray",
  "#5d7747": "Dingley",
  "#c53151": "Dingy Dungeon",
  "#9b7653": "Dirt",
  "#871550": "Disco",
  "#e29418": "Dixie",
  "#1e90ff": "Dodger Blue",
  "#b86d29": "Dogs",
  "#d71868": "Dogwood Rose",
  "#85bb65": "Dollar Bill",
  "#f9ff8b": "Dolly",
  "#646077": "Dolphin",
  "#8e775e": "Domino",
  "#5d4c51": "Don Juan",
  "#664c28": "Donkey Brown",
  "#6b5755": "Dorado",
  "#eee3ad": "Double Colonial White",
  "#fcf4d0": "Double Pearl Lusta",
  "#e6d7b9": "Double Spanish White",
  "#6d6c6c": "Dove Gray",
  "#092256": "Downriver",
  "#6fd0c5": "Downy",
  "#af8751": "Driftwood",
  "#fdf7ad": "Drover",
  "#00009c": "Duke Blue",
  "#a899e6": "Dull Lavender",
  "#383533": "Dune",
  "#e5ccc9": "Dust Storm",
  "#a8989b": "Dusty Gray",
  "#efdfbb": "Dutch White",
  "#b6baa4": "Eagle",
  "#004953": "Eagle Green",
  "#c9b93b": "Earls Green",
  "#fff9e6": "Early Dawn",
  "#e1a95f": "Earth Yellow",
  "#414c7d": "East Bay",
  "#ac91ce": "East Side",
  "#1e9ab0": "Eastern Blue",
  "#e9e3e3": "Ebb",
  "#555d50": "Ebony",
  "#26283b": "Ebony Clay",
  "#311c17": "Eclipse",
  "#c2b280": "Ecru",
  "#f5f3e5": "Ecru White",
  "#fa7814": "Ecstasy",
  "#105852": "Eden",
  "#c8e3d7": "Edgewater",
  "#a2aeab": "Edward",
  "#1b1b1b": "Eerie Black",
  "#fff4dd": "Egg Sour",
  "#ffefc1": "Egg White",
  "#614051": "Eggplant",
  "#f0ead6": "Eggshell",
  "#1034a6": "Egyptian Blue",
  "#1e1708": "El Paso",
  "#8f3e33": "El Salva",
  "#7df9ff": "Electric Blue",
  "#ff003f": "Electric Crimson",
  "#6f00ff": "Electric Indigo",
  "#ccff00": "Electric Lime",
  "#bf00ff": "Electric Purple",
  "#8b00ff": "Electric Violet",
  "#ffff33": "Electric Yellow",
  "#123447": "Elephant",
  "#088370": "Elf Green",
  "#1c7c7d": "Elm",
  "#50c878": "Emerald",
  "#6c3082": "Eminence",
  "#514649": "Emperor",
  "#817377": "Empress",
  "#0056a7": "Endeavour",
  "#f8dd5c": "Energy Yellow",
  "#ba160c": "Engineering International Orange",
  "#022d15": "English Holly",
  "#b48395": "English Lavender",
  "#ab4b52": "English Red",
  "#cc474b": "English Vermillion",
  "#3e2b23": "English Walnut",
  "#8ba690": "Envy",
  "#e1bc64": "Equator",
  "#612718": "Espresso",
  "#211a0e": "Eternity",
  "#96c8a2": "Eton Blue",
  "#44d7a8": "Eucalyptus",
  "#cfa39d": "Eunry",
  "#024e46": "Evening Sea",
  "#1c402e": "Everglade",
  "#010b13": "FOGRA29 Rich Black",
  "#010203": "FOGRA39 Rich Black",
  "#427977": "Faded Jade",
  "#ffefec": "Fair Pink",
  "#7f626d": "Falcon",
  "#c19a6b": "Fallow",
  "#801818": "Falu Red",
  "#b53389": "Fandango",
  "#de5285": "Fandango Pink",
  "#faf3f0": "Fantasy",
  "#f400a1": "Fashion Fuchsia",
  "#e5aa70": "Fawn",
  "#796a78": "Fedora",
  "#9fdd8c": "Feijoa",
  "#4d5d53": "Feldgrau",
  "#63b76c": "Fern",
  "#657220": "Fern Frond",
  "#4f7942": "Fern Green",
  "#704f50": "Ferra",
  "#ff2800": "Ferrari Red",
  "#fbe96c": "Festival",
  "#f0fcea": "Feta",
  "#6c541e": "Field Drab",
  "#b35213": "Fiery Orange",
  "#ff5470": "Fiery Rose",
  "#626649": "Finch",
  "#556d56": "Finlandia",
  "#692d54": "Finn",
  "#405169": "Fiord",
  "#aa4203": "Fire",
  "#e89928": "Fire Bush",
  "#ce2029": "Fire Engine Red",
  "#b22222": "Firebrick",
  "#0e2a30": "Firefly",
  "#e25822": "Flame",
  "#da5b38": "Flame Pea",
  "#ff7d07": "Flamenco",
  "#f2552a": "Flamingo",
  "#fc8eac": "Flamingo Pink",
  "#f7e98e": "Flavescent",
  "#eedc82": "Flax",
  "#7b8265": "Flax Smoke",
  "#6f6a61": "Flint",
  "#a2006d": "Flirt",
  "#fffaf0": "Floral White",
  "#ca3435": "Flush Mahogany",
  "#d8fcfa": "Foam",
  "#d7d0ff": "Fog",
  "#cbcab6": "Foggy Gray",
  "#ff004f": "Folly",
  "#228b22": "Forest Green",
  "#fff1ee": "Forget Me Not",
  "#56b4be": "Fountain Blue",
  "#ffdeb3": "Frangipani",
  "#856d4d": "French Bistre",
  "#0072bb": "French Blue",
  "#fd3f92": "French Fuchsia",
  "#bdbdc6": "French Gray",
  "#86608e": "French Lilac",
  "#9efd38": "French Lime",
  "#d473d4": "French Mauve",
  "#bdedfd": "French Pass",
  "#fd6c9e": "French Pink",
  "#811453": "French Plum",
  "#4e1609": "French Puce",
  "#c72c48": "French Raspberry",
  "#f64a8a": "French Rose",
  "#77b5fe": "French Sky Blue",
  "#8806ce": "French Violet",
  "#ac1e44": "French Wine",
  "#a6e7ff": "Fresh Air",
  "#990066": "Fresh Eggplant",
  "#807e79": "Friar Gray",
  "#b1e2c1": "Fringy Flower",
  "#f57584": "Froly",
  "#edf5dd": "Frost",
  "#e936a7": "Frostbite",
  "#dbfff8": "Frosted Mint",
  "#e4f6e7": "Frostee",
  "#4f9d5d": "Fruit Salad",
  "#ff00ff": "Fuchsia",
  "#7a58c1": "Fuchsia Blue",
  "#ff77ff": "Fuchsia Pink",
  "#cc397b": "Fuchsia Purple",
  "#c74375": "Fuchsia Rose",
  "#bede0d": "Fuego",
  "#eca927": "Fuel Yellow",
  "#e48400": "Fulvous",
  "#1959a8": "Fun Blue",
  "#016d39": "Fun Green",
  "#54534d": "Fuscous Gray",
  "#cc6666": "Fuzzy Wuzzy",
  "#c45655": "Fuzzy Wuzzy Brown",
  "#00ab66": "GO Green",
  "#163531": "Gable Green",
  "#dcdcdc": "Gainsboro",
  "#efefef": "Gallery",
  "#dcb20c": "Galliano",
  "#e49b0f": "Gamboge",
  "#996600": "Gamboge Orange",
  "#ffdf46": "Gargoyle Gas",
  "#d18f1b": "Geebung",
  "#007f66": "Generic Viridian",
  "#15736b": "Genoa",
  "#fb8989": "Geraldine",
  "#d4dfe2": "Geyser",
  "#c7c9d5": "Ghost",
  "#f8f8ff": "Ghost White",
  "#b05c52": "Giants Club",
  "#fe5a1d": "Giants Orange",
  "#523c94": "Gigas",
  "#b8b56a": "Gimblet",
  "#e8f2eb": "Gin",
  "#fff9e2": "Gin Fizz",
  "#b06500": "Ginger",
  "#f8e4bf": "Givry",
  "#80b3c4": "Glacier",
  "#61845f": "Glade Green",
  "#6082b6": "Glaucous",
  "#e6e8fa": "Glitter",
  "#ab92b3": "Glossy Grape",
  "#726d4e": "Go Ben",
  "#3d7d52": "Goblin",
  "#f18200": "Gold Drop",
  "#85754e": "Gold Fusion",
  "#deba13": "Gold Tips",
  "#ffd700": "Golden",
  "#e28913": "Golden Bell",
  "#996515": "Golden Brown",
  "#f0d52d": "Golden Dream",
  "#f5fb3d": "Golden Fizz",
  "#c0362c": "Golden Gate Bridge",
  "#fde295": "Golden Glow",
  "#fcc200": "Golden Poppy",
  "#f0db7d": "Golden Sand",
  "#ffcc5c": "Golden Tainoi",
  "#ffdf00": "Golden Yellow",
  "#daa520": "Goldenrod",
  "#261414": "Gondola",
  "#0b1107": "Gordons Green",
  "#fff14f": "Gorse",
  "#069b81": "Gossamer",
  "#d2f8b0": "Gossip",
  "#6d92a1": "Gothic",
  "#2f3cb3": "Governor Bay",
  "#e4d5b7": "Grain Brown",
  "#ffd38c": "Grandis",
  "#676767": "Granite Gray",
  "#8d8974": "Granite Green",
  "#d5f6e3": "Granny Apple",
  "#84a0a0": "Granny Smith",
  "#a8e4a0": "Granny Smith Apple",
  "#6f2da8": "Grape",
  "#251607": "Graphite",
  "#4a444b": "Gravel",
  "#808080": "Gray",
  "#465945": "Gray Asparagus",
  "#a2aab3": "Gray Chateau",
  "#c3c3bd": "Gray Nickel",
  "#e7ece6": "Gray Nurse",
  "#a9a491": "Gray Olive",
  "#c1becd": "Gray Suit",
  "#00ff00": "Green",
  "#1164b4": "Green Blue",
  "#009966": "Green Cyan",
  "#01a368": "Green Haze",
  "#24500f": "Green House",
  "#25311c": "Green Kelp",
  "#436a0d": "Green Leaf",
  "#a7f432": "Green Lizard",
  "#cbd3b0": "Green Mist",
  "#1d6142": "Green Pea",
  "#6eaea1": "Green Sheen",
  "#a4af6e": "Green Smoke",
  "#b8c1b1": "Green Spring",
  "#032b52": "Green Vogue",
  "#101405": "Green Waterloo",
  "#e8ebe0": "Green White",
  "#adff2f": "Green Yellow",
  "#d54600": "Grenadier",
  "#885818": "Grizzly",
  "#a99a86": "Grullo",
  "#ba0101": "Guardsman Red",
  "#051657": "Gulf Blue",
  "#80b3ae": "Gulf Stream",
  "#9dacb7": "Gull Gray",
  "#b6d3bf": "Gum Leaf",
  "#7ca1a6": "Gumbo",
  "#414257": "Gun Powder",
  "#2a3439": "Gunmetal",
  "#828685": "Gunsmoke",
  "#9a9577": "Gurkha",
  "#98811b": "Hacienda",
  "#6b2a14": "Hairy Heath",
  "#1b1035": "Haiti",
  "#663854": "Halayà Úbe",
  "#85c4cc": "Half Baked",
  "#fdf6d3": "Half Colonial White",
  "#fef7de": "Half Dutch White",
  "#fef4db": "Half Spanish White",
  "#fffee1": "Half and Half",
  "#e5d8af": "Hampton",
  "#446ccf": "Han Blue",
  "#5218fa": "Han Purple",
  "#3fff00": "Harlequin",
  "#46cb18": "Harlequin Green",
  "#e6f2ea": "Harp",
  "#c90016": "Harvard Crimson",
  "#da9100": "Harvest Gold",
  "#5590d9": "Havelock Blue",
  "#9d5616": "Hawaiian Tan",
  "#d4e2fc": "Hawkes Blue",
  "#ff7a00": "Heat Wave",
  "#541012": "Heath",
  "#b7c3d0": "Heather",
  "#b6b095": "Heathered Gray",
  "#2b3228": "Heavy Metal",
  "#df73ff": "Heliotrope",
  "#aa98a9": "Heliotrope Gray",
  "#aa00bb": "Heliotrope Magenta",
  "#5e5d3b": "Hemlock",
  "#907874": "Hemp",
  "#b6316c": "Hibiscus",
  "#6f8e63": "Highland",
  "#aca586": "Hillary",
  "#6a5d1b": "Himalaya",
  "#e6ffe9": "Hint of Green",
  "#fbf9f9": "Hint of Red",
  "#fafde4": "Hint of Yellow",
  "#589aaf": "Hippie Blue",
  "#53824b": "Hippie Green",
  "#ae4560": "Hippie Pink",
  "#a1adb5": "Hit Gray",
  "#ffab81": "Hit Pink",
  "#c8a528": "Hokey Pokey",
  "#65869f": "Hoki",
  "#011d13": "Holly",
  "#4f1c70": "Honey Flower",
  "#f0fff0": "Honeydew",
  "#edfc84": "Honeysuckle",
  "#006db0": "Honolulu Blue",
  "#49796b": "Hookers Green",
  "#d06da1": "Hopbush",
  "#5a87a0": "Horizon",
  "#543d37": "Horses",
  "#604913": "Horses Neck",
  "#ff1dce": "Hot Magenta",
  "#ff69b4": "Hot Pink",
  "#b38007": "Hot Toddy",
  "#cff9f3": "Humming Bird",
  "#355e3b": "Hunter Green",
  "#877c7b": "Hurricane",
  "#b7a458": "Husk",
  "#b1f4e7": "Ice Cold",
  "#71a6d2": "Iceberg",
  "#fcf75e": "Icterine",
  "#319177": "Illuminating Emerald",
  "#f6a4c9": "Illusion",
  "#602f6b": "Imperial",
  "#002395": "Imperial Blue",
  "#ed2939": "Imperial Red",
  "#b0e313": "Inch Worm",
  "#b2ec5d": "Inchworm",
  "#4c516d": "Independence",
  "#138808": "India Green",
  "#cd5c5c": "Indian Red",
  "#4d1e01": "Indian Tan",
  "#e3a857": "Indian Yellow",
  "#4b0082": "Indigo",
  "#091f92": "Indigo Dye",
  "#c26b03": "Indochine",
  "#002fa7": "International Klein Blue",
  "#ff4f00": "International Orange",
  "#5a4fcf": "Iris",
  "#5f3d26": "Irish Coffee",
  "#433120": "Iroko",
  "#d4d7d9": "Iron",
  "#676662": "Ironside Gray",
  "#86483c": "Ironstone",
  "#b3446c": "Irresistible",
  "#f4f0ec": "Isabelline",
  "#009000": "Islamic Green",
  "#fffcee": "Island Spice",
  "#fffff0": "Ivory",
  "#2e0329": "Jacaranda",
  "#3a2a6a": "Jacarta",
  "#2e1905": "Jacko Bean",
  "#20208d": "Jacksons Purple",
  "#00a86b": "Jade",
  "#ef863f": "Jaffa",
  "#c2e8e5": "Jagged Ice",
  "#350e57": "Jagger",
  "#080110": "Jaguar",
  "#5b3013": "Jambalaya",
  "#f4ebd3": "Janna",
  "#9d2933": "Japanese Carmine",
  "#264348": "Japanese Indigo",
  "#0a6906": "Japanese Laurel",
  "#780109": "Japanese Maple",
  "#5b3256": "Japanese Violet",
  "#d87c63": "Japonica",
  "#f8de7e": "Jasmine",
  "#d73b3e": "Jasper",
  "#1fc2c2": "Java",
  "#a50b5e": "Jazzberry Jam",
  "#da614e": "Jelly Bean",
  "#343434": "Jet",
  "#b5d2ce": "Jet Stream",
  "#126b40": "Jewel",
  "#3b1f1f": "Jon",
  "#f4ca16": "Jonquil",
  "#8ab9f1": "Jordy Blue",
  "#544333": "Judge Gray",
  "#7c7b82": "Jumbo",
  "#bdda57": "June Bud",
  "#29ab87": "Jungle Green",
  "#b4cfd3": "Jungle Mist",
  "#6d9292": "Juniper",
  "#eccdb9": "Just Right",
  "#e8000d": "KU Crimson",
  "#5e483e": "Kabul",
  "#004620": "Kaitoke Green",
  "#c6c8bd": "Kangaroo",
  "#1e1609": "Karaka",
  "#ffead4": "Karry",
  "#507096": "Kashmir Blue",
  "#4cbb17": "Kelly Green",
  "#454936": "Kelp",
  "#7c1c05": "Kenyan Copper",
  "#3ab09e": "Keppel",
  "#e8f48c": "Key Lime",
  "#bfc921": "Key Lime Pie",
  "#c3b091": "Khaki",
  "#e1ead4": "Kidnapper",
  "#240c02": "Kilamanjaro",
  "#3a6a47": "Killarney",
  "#736c9f": "Kimberly",
  "#3e0480": "Kingfisher Daisy",
  "#e79fc4": "Kobi",
  "#6b4423": "Kobicha",
  "#6e6d57": "Kokoda",
  "#354230": "Kombu Green",
  "#8f4b0e": "Korma",
  "#ffbd5f": "Koromiko",
  "#ffe772": "Kournikova",
  "#886221": "Kumera",
  "#368716": "La Palma",
  "#b3c110": "La Rioja",
  "#087830": "La Salle Green",
  "#d6cadd": "Languid Lavender",
  "#26619c": "Lapis Lazuli",
  "#c6e610": "Las Palmas",
  "#c8b568": "Laser",
  "#749378": "Laurel",
  "#a9ba9d": "Laurel Green",
  "#cf1020": "Lava",
  "#b57edc": "Lavender",
  "#fff0f5": "Lavender Blush",
  "#c4c3d0": "Lavender Gray",
  "#9457eb": "Lavender Indigo",
  "#ee82ee": "Lavender Magenta",
  "#e6e6fa": "Lavender Mist",
  "#fbaed2": "Lavender Pink",
  "#967bb6": "Lavender Purple",
  "#fba0e3": "Lavender Rose",
  "#7cfc00": "Lawn Green",
  "#967059": "Leather",
  "#fff700": "Lemon",
  "#fffacd": "Lemon Chiffon",
  "#cca01d": "Lemon Curry",
  "#ac9e22": "Lemon Ginger",
  "#fdff00": "Lemon Glacier",
  "#9b9e8f": "Lemon Grass",
  "#e3ff00": "Lemon Lime",
  "#f6eabe": "Lemon Meringue",
  "#fff44f": "Lemon Yellow",
  "#ba93d8": "Lenurple",
  "#545aa7": "Liberty",
  "#1a1110": "Licorice",
  "#fdd5b1": "Light Apricot",
  "#add8e6": "Light Blue",
  "#fe2e2e": "Light Brilliant Red",
  "#b5651d": "Light Brown",
  "#e66771": "Light Carmine Pink",
  "#88ace0": "Light Cobalt Blue",
  "#f08080": "Light Coral",
  "#93ccea": "Light Cornflower Blue",
  "#f56991": "Light Crimson",
  "#e0ffff": "Light Cyan",
  "#ff5ccd": "Light Deep Pink",
  "#c8ad7f": "Light French Beige",
  "#f984ef": "Light Fuchsia Pink",
  "#fafad2": "Light Goldenrod Yellow",
  "#d3d3d3": "Light Gray",
  "#cc99cc": "Light Grayish Magenta",
  "#90ee90": "Light Green",
  "#ffb3de": "Light Hot Pink",
  "#f0e68c": "Light Khaki",
  "#d39bcb": "Light Medium Orchid",
  "#addfad": "Light Moss Green",
  "#e6a8d7": "Light Orchid",
  "#b19cd9": "Light Pastel Purple",
  "#ffb6c1": "Light Pink",
  "#ffa07a": "Light Salmon",
  "#ff9999": "Light Salmon Pink",
  "#20b2aa": "Light Sea Green",
  "#87cefa": "Light Sky Blue",
  "#778899": "Light Slate Gray",
  "#b0c4de": "Light Steel Blue",
  "#b38b6d": "Light Taupe",
  "#afeeee": "Light Turquoise",
  "#ffffe0": "Light Yellow",
  "#fcc01e": "Lightning Yellow",
  "#c8a2c8": "Lilac",
  "#9874d3": "Lilac Bush",
  "#ae98aa": "Lilac Luster",
  "#c8aabf": "Lily",
  "#e7f8ff": "Lily White",
  "#76bd17": "Lima",
  "#bfff00": "Lime",
  "#32cd32": "Lime Green",
  "#6f9d02": "Limeade",
  "#747d63": "Limed Ash",
  "#ac8a56": "Limed Oak",
  "#394851": "Limed Spruce",
  "#9dc209": "Limerick",
  "#195905": "Lincoln Green",
  "#faf0e6": "Linen",
  "#d9e4f5": "Link Water",
  "#ab0563": "Lipstick",
  "#423921": "Lisbon Brown",
  "#6ca0dc": "Little Boy Blue",
  "#674c47": "Liver",
  "#987456": "Liver Chestnut",
  "#4d282e": "Livid Brown",
  "#eef4de": "Loafer",
  "#bdc9ce": "Loblolly",
  "#2c8c84": "Lochinvar",
  "#007ec7": "Lochmara",
  "#a8af8e": "Locust",
  "#242a1d": "Log Cabin",
  "#aaa9cd": "Logan",
  "#dfcfdb": "Lola",
  "#bea6c3": "London Hue",
  "#6d0101": "Lonestar",
  "#863c3c": "Lotus",
  "#460b41": "Loulou",
  "#af9f1c": "Lucky",
  "#1a1a68": "Lucky Point",
  "#ffe4cd": "Lumber",
  "#3c493a": "Lunar Green",
  "#e62020": "Lust",
  "#a7882c": "Luxor Gold",
  "#697e9a": "Lynch",
  "#18453b": "MSU Green",
  "#d9f7ff": "Mabel",
  "#ffbd88": "Macaroni And Cheese",
  "#ffb97b": "Macaroni and Cheese",
  "#b7f0be": "Madang",
  "#09255d": "Madison",
  "#3f3002": "Madras",
  "#ca1f7b": "Magenta",
  "#9f4576": "Magenta Haze",
  "#cc338b": "Magenta Pink",
  "#aaf0d1": "Magic Mint",
  "#ff4466": "Magic Potion",
  "#f8f4ff": "Magnolia",
  "#c04000": "Mahogany",
  "#b06608": "Mai Tai",
  "#fbec5d": "Maize",
  "#6050dc": "Majorelle Blue",
  "#897d6d": "Makara",
  "#444954": "Mako",
  "#0bda51": "Malachite",
  "#7dc8f7": "Malibu",
  "#233418": "Mallard",
  "#bdb2a1": "Malta",
  "#8e8190": "Mamba",
  "#979aaa": "Manatee",
  "#ad781b": "Mandalay",
  "#f37a48": "Mandarin",
  "#e25465": "Mandy",
  "#f2c3b2": "Mandys Pink",
  "#ff8243": "Mango Tango",
  "#f5c999": "Manhattan",
  "#74c365": "Mantis",
  "#8b9c90": "Mantle",
  "#eeef78": "Manz",
  "#880085": "Mardi Gras",
  "#eaa221": "Marigold",
  "#fbe870": "Marigold Yellow",
  "#286acd": "Mariner",
  "#800000": "Maroon",
  "#520c17": "Maroon Oak",
  "#0b0f08": "Marshland",
  "#afa09e": "Martini",
  "#363050": "Martinique",
  "#f8db9d": "Marzipan",
  "#403b38": "Masala",
  "#1b659d": "Matisse",
  "#b05d54": "Matrix",
  "#4e3b41": "Matterhorn",
  "#e0b0ff": "Mauve",
  "#915f6d": "Mauve Taupe",
  "#ef98aa": "Mauvelous",
  "#d8c2d5": "Maverick",
  "#47abcc": "Maximum Blue",
  "#fafa37": "Maximum Yellow",
  "#4c9141": "May Green",
  "#73c2fb": "Maya Blue",
  "#e5b73b": "Meat Brown",
  "#66ddaa": "Medium Aquamarine",
  "#0000cd": "Medium Blue",
  "#e2062c": "Medium Candy Apple Red",
  "#035096": "Medium Electric Blue",
  "#1c352d": "Medium Jungle Green",
  "#ba55d3": "Medium Orchid",
  "#9370db": "Medium Purple",
  "#bb3385": "Medium Red Violet",
  "#aa4069": "Medium Ruby",
  "#3cb371": "Medium Sea Green",
  "#80daeb": "Medium Sky Blue",
  "#7b68ee": "Medium Slate Blue",
  "#c9dc87": "Medium Spring Bud",
  "#00fa9a": "Medium Spring Green",
  "#48d1cc": "Medium Turquoise",
  "#d9603b": "Medium Vermilion",
  "#e4c2d5": "Melanie",
  "#300529": "Melanzane",
  "#f8b878": "Mellow Apricot",
  "#fdbcb4": "Melon",
  "#c7c1ff": "Melrose",
  "#e5e5e5": "Mercury",
  "#f6f0e6": "Merino",
  "#413c37": "Merlin",
  "#831923": "Merlot",
  "#ff00fd": "Metal Pink",
  "#49371b": "Metallic Bronze",
  "#71291d": "Metallic Copper",
  "#d4af37": "Metallic Gold",
  "#0a7e8c": "Metallic Seaweed",
  "#9c7c38": "Metallic Sunburst",
  "#d07d12": "Meteor",
  "#3c1f76": "Meteorite",
  "#e4007c": "Mexican Pink",
  "#a72525": "Mexican Red",
  "#5f5f6e": "Mid Gray",
  "#702670": "Midnight",
  "#191970": "Midnight Blue",
  "#041004": "Midnight Moss",
  "#2d2510": "Mikado",
  "#ffc40c": "Mikado Yellow",
  "#faffa4": "Milan",
  "#b81104": "Milano Red",
  "#fff6d4": "Milk Punch",
  "#594433": "Millbrook",
  "#f8fdd3": "Mimosa",
  "#e3f988": "Mindaro",
  "#323232": "Mine Shaft",
  "#3f5d53": "Mineral Green",
  "#36747d": "Ming",
  "#f5e050": "Minion Yellow",
  "#3f307f": "Minsk",
  "#3eb489": "Mint",
  "#f5fffa": "Mint Cream",
  "#98ff98": "Mint Green",
  "#f1eec1": "Mint Julep",
  "#c4f4eb": "Mint Tulip",
  "#161928": "Mirage",
  "#d1d2dd": "Mischka",
  "#c4c4bc": "Mist Gray",
  "#bbb477": "Misty Moss",
  "#ffe4e1": "Misty Rose",
  "#7f7589": "Mobster",
  "#6e1d14": "Moccaccino",
  "#ffe4b5": "Moccasin",
  "#782d19": "Mocha",
  "#c04737": "Mojo",
  "#ffa194": "Mona Lisa",
  "#8b0723": "Monarch",
  "#4a3c30": "Mondo",
  "#b5a27f": "Mongoose",
  "#8a8389": "Monsoon",
  "#83d0c6": "Monte Carlo",
  "#c7031e": "Monza",
  "#7f76d3": "Moody Blue",
  "#fcfeda": "Moon Glow",
  "#dcddcc": "Moon Mist",
  "#d6cef6": "Moon Raker",
  "#73a9c2": "Moonstone Blue",
  "#ae0c00": "Mordant Red",
  "#9edee0": "Morning Glory",
  "#441d00": "Morocco Brown",
  "#504351": "Mortar",
  "#036a6e": "Mosque",
  "#8a9a5b": "Moss Green",
  "#30ba8f": "Mountain Meadow",
  "#959396": "Mountain Mist",
  "#997a8d": "Mountbatten Pink",
  "#b78e5c": "Muddy Waters",
  "#aa8b5b": "Muesli",
  "#306030": "Mughal Green",
  "#c54b8c": "Mulberry",
  "#5c0536": "Mulberry Wood",
  "#8c472f": "Mule Fawn",
  "#4e4562": "Mulled Wine",
  "#828e84": "Mummys Tomb",
  "#0093af": "Munsell Blue",
  "#00a877": "Munsell Green",
  "#9f00c5": "Munsell Purple",
  "#f2003c": "Munsell Red",
  "#efcc00": "Munsell Yellow",
  "#ffdb58": "Mustard",
  "#d69188": "My Pink",
  "#ffb31f": "My Sin",
  "#317873": "Myrtle Green",
  "#d65282": "Mystic",
  "#ad4379": "Mystic Maroon",
  "#0087bd": "NCS Blue",
  "#009f6b": "NCS Green",
  "#c40233": "NCS Red",
  "#f6adc6": "Nadeshiko Pink",
  "#4b5d52": "Nandor",
  "#aca494": "Napa",
  "#2a8000": "Napier Green",
  "#fada5e": "Naples Yellow",
  "#edf9f1": "Narvik",
  "#8b8680": "Natural Gray",
  "#ffdead": "Navajo White",
  "#000080": "Navy",
  "#cbdbd6": "Nebula",
  "#ffe2c5": "Negroni",
  "#ffa343": "Neon Carrot",
  "#fe4164": "Neon Fuchsia",
  "#39ff14": "Neon Green",
  "#8eabc1": "Nepal",
  "#7cb7bb": "Neptune",
  "#140600": "Nero",
  "#646e75": "Nevada",
  "#214fc6": "New Car",
  "#f3d69d": "New Orleans",
  "#d7837f": "New York Pink",
  "#06a189": "Niagara",
  "#727472": "Nickel",
  "#1f120f": "Night Rider",
  "#aa375a": "Night Shadz",
  "#193751": "Nile Blue",
  "#b7b1b1": "Nobel",
  "#bab1a2": "Nomad",
  "#a4dded": "Non Photo Blue",
  "#059033": "North Texas Green",
  "#a8bd9f": "Norway",
  "#c59922": "Nugget",
  "#81422c": "Nutmeg",
  "#683600": "Nutmeg Wood Finish",
  "#e9ffdb": "Nyanza",
  "#feefce": "Oasis",
  "#02866f": "Observatory",
  "#4f42b5": "Ocean Blue",
  "#0077be": "Ocean Boat Blue",
  "#48bf91": "Ocean Green",
  "#cc7722": "Ochre",
  "#e6f8f3": "Off Green",
  "#fef9e3": "Off Yellow",
  "#fd5240": "Ogre Odor",
  "#281e15": "Oil",
  "#901e1e": "Old Brick",
  "#43302e": "Old Burgundy",
  "#724a2f": "Old Copper",
  "#cfb53b": "Old Gold",
  "#563c5c": "Old Heliotrope",
  "#fdf5e6": "Old Lace",
  "#796878": "Old Lavender",
  "#867e36": "Old Moss Green",
  "#c08081": "Old Rose",
  "#848482": "Old Silver",
  "#808000": "Olive",
  "#6b8e23": "Olive Drab",
  "#3c341f": "Olive Drab Seven",
  "#b5b35c": "Olive Green",
  "#8b8470": "Olive Haze",
  "#716e10": "Olivetone",
  "#9ab973": "Olivine",
  "#cdf4ff": "Onahau",
  "#2f270e": "Onion",
  "#353839": "Onyx",
  "#a9c6c2": "Opal",
  "#b784a7": "Opera Mauve",
  "#8e6f70": "Opium",
  "#377475": "Oracle",
  "#ff7f00": "Orange",
  "#ff9f00": "Orange Peel",
  "#ff4500": "Orange Red",
  "#c45719": "Orange Roughy",
  "#fa5b3d": "Orange Soda",
  "#fefced": "Orange White",
  "#f8d568": "Orange Yellow",
  "#da70d6": "Orchid",
  "#f2bdcd": "Orchid Pink",
  "#fffdf3": "Orchid White",
  "#9b4703": "Oregon",
  "#6c2e1f": "Organ",
  "#015e85": "Orient",
  "#c69191": "Oriental Pink",
  "#f3fbd4": "Orinoco",
  "#fb4f14": "Orioles Orange",
  "#878d91": "Oslo Gray",
  "#e9f8ed": "Ottoman",
  "#414a4c": "Outer Space",
  "#ff6e4a": "Outrageous Orange",
  "#002147": "Oxford Blue",
  "#779e86": "Oxley",
  "#dafaff": "Oyster Bay",
  "#e9cecd": "Oyster Pink",
  "#a65529": "Paarl",
  "#776f61": "Pablo",
  "#1ca9c9": "Pacific Blue",
  "#778120": "Pacifika",
  "#411f10": "Paco",
  "#ade6c4": "Padua",
  "#006600": "Pakistan Green",
  "#273be2": "Palatinate Blue",
  "#682860": "Palatinate Purple",
  "#987654": "Pale Brown",
  "#ffff99": "Pale Canary",
  "#af4035": "Pale Carmine",
  "#9bc4e2": "Pale Cerulean",
  "#ddadaf": "Pale Chestnut",
  "#da8a67": "Pale Copper",
  "#abcdef": "Pale Cornflower Blue",
  "#87d3f8": "Pale Cyan",
  "#e6be8a": "Pale Gold",
  "#eee8aa": "Pale Goldenrod",
  "#98fb98": "Pale Green",
  "#dcd0ff": "Pale Lavender",
  "#c0d3b9": "Pale Leaf",
  "#f984e5": "Pale Magenta",
  "#ff99cc": "Pale Magenta Pink",
  "#988d77": "Pale Oyster",
  "#fadadd": "Pale Pink",
  "#dda0dd": "Pale Plum",
  "#fdfeb8": "Pale Prim",
  "#db7093": "Pale Red Violet",
  "#96ded1": "Pale Robin Egg Blue",
  "#ffe1f2": "Pale Rose",
  "#c9c0bb": "Pale Silver",
  "#6e7783": "Pale Sky",
  "#c3bfc1": "Pale Slate",
  "#ecebbd": "Pale Spring Bud",
  "#bc987e": "Pale Taupe",
  "#cc99ff": "Pale Violet",
  "#09230f": "Palm Green",
  "#19330e": "Palm Leaf",
  "#f4f2ee": "Pampas",
  "#eaf6ee": "Panache",
  "#edcdab": "Pancho",
  "#78184a": "Pansy Purple",
  "#0018a8": "Pantone Blue",
  "#00ad43": "Pantone Green",
  "#d0417e": "Pantone Magenta",
  "#ff5800": "Pantone Orange",
  "#d74894": "Pantone Pink",
  "#fedf00": "Pantone Yellow",
  "#009b7d": "Paolo Veronese Green",
  "#ffefd5": "Papaya Whip",
  "#8d0226": "Paprika",
  "#e63e62": "Paradise Pink",
  "#317d82": "Paradiso",
  "#f1e9d2": "Parchment",
  "#fff46e": "Paris Daisy",
  "#26056a": "Paris M",
  "#cadcd4": "Paris White",
  "#134f19": "Parsley",
  "#aec6cf": "Pastel Blue",
  "#836953": "Pastel Brown",
  "#cfcfc4": "Pastel Gray",
  "#77dd77": "Pastel Green",
  "#f49ac2": "Pastel Magenta",
  "#ffb347": "Pastel Orange",
  "#dea5a4": "Pastel Pink",
  "#b39eb5": "Pastel Purple",
  "#ff6961": "Pastel Red",
  "#cb99c9": "Pastel Violet",
  "#fdfd96": "Pastel Yellow",
  "#639a8f": "Patina",
  "#def5ff": "Pattens Blue",
  "#260368": "Paua",
  "#d7c498": "Pavlova",
  "#536878": "Paynes Grey",
  "#ffcba4": "Peach",
  "#fff0db": "Peach Cream",
  "#ffcc99": "Peach Orange",
  "#ffdab9": "Peach Puff",
  "#ffdcd6": "Peach Schnapps",
  "#fadfad": "Peach Yellow",
  "#782f16": "Peanut",
  "#d1e231": "Pear",
  "#eae0c8": "Pearl",
  "#88d8c0": "Pearl Aqua",
  "#e8e0d5": "Pearl Bush",
  "#fcf4dc": "Pearl Lusta",
  "#32c6a6": "Pearl Mystic Turquoise",
  "#b768a2": "Pearly Purple",
  "#716b56": "Peat",
  "#3eabbf": "Pelorous",
  "#e3f5e1": "Peppermint",
  "#a9bef2": "Perano",
  "#d0bef8": "Perfume",
  "#e6e200": "Peridot",
  "#e1e6d6": "Periglacial Blue",
  "#ccccff": "Periwinkle",
  "#c3cde6": "Periwinkle Gray",
  "#e12c2c": "Permanent Geranium Lake",
  "#1c39bb": "Persian Blue",
  "#00a693": "Persian Green",
  "#32127a": "Persian Indigo",
  "#d99058": "Persian Orange",
  "#f77fbe": "Persian Pink",
  "#701c1c": "Persian Plum",
  "#cc3333": "Persian Red",
  "#fe28a2": "Persian Rose",
  "#ec5800": "Persimmon",
  "#cd853f": "Peru",
  "#7f3a02": "Peru Tan",
  "#7c7631": "Pesto",
  "#db9690": "Petite Orchid",
  "#96a8a1": "Pewter",
  "#8ba8b7": "Pewter Blue",
  "#a3807b": "Pharlap",
  "#000f89": "Phthalo Blue",
  "#123524": "Phthalo Green",
  "#fff39d": "Picasso",
  "#6e4826": "Pickled Bean",
  "#314459": "Pickled Bluewood",
  "#45b1e8": "Picton Blue",
  "#c30b4e": "Pictorial Carmine",
  "#fdd7e4": "Pig Pink",
  "#afbdd9": "Pigeon Post",
  "#fddde6": "Piggy Pink",
  "#333399": "Pigment Blue",
  "#00a550": "Pigment Green",
  "#ed1c24": "Pigment Red",
  "#6d5e54": "Pine Cone",
  "#c7cd90": "Pine Glade",
  "#01796f": "Pine Green",
  "#171f04": "Pine Tree",
  "#ffc0cb": "Pink",
  "#fc74fd": "Pink Flamingo",
  "#e1c0c8": "Pink Flare",
  "#ffddf4": "Pink Lace",
  "#fff1d8": "Pink Lady",
  "#d8b2d1": "Pink Lavender",
  "#ff9966": "Pink Orange",
  "#e7accf": "Pink Pearl",
  "#980036": "Pink Raspberry",
  "#f78fa7": "Pink Sherbet",
  "#beb5b7": "Pink Swan",
  "#c96323": "Piper",
  "#fef4cc": "Pipi",
  "#ffe1df": "Pippin",
  "#ba7f03": "Pirate Gold",
  "#93c572": "Pistachio",
  "#c0d8b6": "Pixie Green",
  "#391285": "Pixie Powder",
  "#ff9000": "Pizazz",
  "#c99415": "Pizza",
  "#27504b": "Plantation",
  "#e5e4e2": "Platinum",
  "#8e4585": "Plum",
  "#5946b2": "Plump Purple",
  "#8f021c": "Pohutukawa",
  "#e5f9f6": "Polar",
  "#5da493": "Polished Pine",
  "#8da8cc": "Polo Blue",
  "#f34723": "Pomegranate",
  "#660045": "Pompadour",
  "#be4f62": "Popstar",
  "#eff2f3": "Porcelain",
  "#eaae69": "Porsche",
  "#251f4f": "Port Gore",
  "#ffffb4": "Portafino",
  "#8b9fee": "Portage",
  "#f9e663": "Portica",
  "#ff5a36": "Portland Orange",
  "#f5e7e2": "Pot Pourri",
  "#8c5738": "Potters Clay",
  "#bcc9c2": "Powder Ash",
  "#b0e0e6": "Powder Blue",
  "#9a3820": "Prairie Sand",
  "#d0c0e5": "Prelude",
  "#f0e2ec": "Prim",
  "#edea99": "Primrose",
  "#ff85cf": "Princess Perfume",
  "#f58025": "Princeton Orange",
  "#00b7eb": "Process Cyan",
  "#ff0090": "Process Magenta",
  "#fef5f1": "Provincial Pink",
  "#003153": "Prussian Blue",
  "#df00ff": "Psychedelic Purple",
  "#cc8899": "Puce",
  "#7d2c14": "Pueblo",
  "#3fc1aa": "Puerto Rico",
  "#644117": "Pullman Brown",
  "#3b331c": "Pullman Green",
  "#c2cac4": "Pumice",
  "#ff7518": "Pumpkin",
  "#b1610b": "Pumpkin Skin",
  "#dc4333": "Punch",
  "#4d3d14": "Punga",
  "#800080": "Purple",
  "#69359c": "Purple Heart",
  "#9678b6": "Purple Mountain Majesty",
  "#4e5180": "Purple Navy",
  "#fe4eda": "Purple Pizzazz",
  "#9c51b6": "Purple Plum",
  "#50404d": "Purple Taupe",
  "#9a4eae": "Purpureus",
  "#e7cd8c": "Putty",
  "#fffdf4": "Quarter Pearl Lusta",
  "#f7f2e1": "Quarter Spanish White",
  "#51484f": "Quartz",
  "#436b95": "Queen Blue",
  "#e8ccd7": "Queen Pink",
  "#a6a6a6": "Quick Silver",
  "#bd978e": "Quicksand",
  "#d6d6d1": "Quill Gray",
  "#8e3a59": "Quinacridone Magenta",
  "#623f2d": "Quincy",
  "#0247fe": "RYB Blue",
  "#66b032": "RYB Green",
  "#fb9902": "RYB Orange",
  "#fe2712": "RYB Red",
  "#8601af": "RYB Violet",
  "#fefe33": "RYB Yellow",
  "#0c1911": "Racing Green",
  "#ff355e": "Radical Red",
  "#eadab8": "Raffia",
  "#b9c8ac": "Rainee",
  "#242124": "Raisin Black",
  "#fbab60": "Rajah",
  "#2e3222": "Rangitoto",
  "#1c1e13": "Rangoon Green",
  "#e30b5d": "Raspberry",
  "#e25098": "Raspberry Pink",
  "#727b89": "Raven",
  "#d68a59": "Raw Sienna",
  "#826644": "Raw Umber",
  "#ff33cc": "Razzle Dazzle Rose",
  "#e3256b": "Razzmatazz",
  "#8d4e85": "Razzmic Berry",
  "#663399": "Rebecca Purple",
  "#3c1206": "Rebel",
  "#ff0000": "Red",
  "#7b3801": "Red Beech",
  "#8e0000": "Red Berry",
  "#da6a41": "Red Damask",
  "#860111": "Red Devil",
  "#ff5349": "Red Orange",
  "#6e0902": "Red Oxide",
  "#e40078": "Red Purple",
  "#ed0a3f": "Red Ribbon",
  "#80341f": "Red Robin",
  "#fd3a4a": "Red Salsa",
  "#d05f04": "Red Stage",
  "#c71585": "Red Violet",
  "#a45a52": "Redwood",
  "#c9ffa2": "Reef",
  "#9f821c": "Reef Gold",
  "#013f6a": "Regal Blue",
  "#522d80": "Regalia",
  "#86949f": "Regent Gray",
  "#aad6e6": "Regent St Blue",
  "#feebf3": "Remy",
  "#a86515": "Reno Sand",
  "#002387": "Resolution Blue",
  "#2c1632": "Revolver",
  "#2e3f62": "Rhino",
  "#777696": "Rhythm",
  "#fffef0": "Rice Cake",
  "#eeffe2": "Rice Flower",
  "#004040": "Rich Black",
  "#f1a7fe": "Rich Brilliant Lavender",
  "#d70040": "Rich Carmine",
  "#0892d0": "Rich Electric Blue",
  "#a85307": "Rich Gold",
  "#a76bcf": "Rich Lavender",
  "#b666d2": "Rich Lilac",
  "#b03060": "Rich Maroon",
  "#444c38": "Rifle Green",
  "#bbd009": "Rio Grande",
  "#f4d81c": "Ripe Lemon",
  "#410056": "Ripe Plum",
  "#8be6d8": "Riptide",
  "#434c59": "River Bed",
  "#704241": "Roast Coffee",
  "#eac674": "Rob Roy",
  "#00cccc": "Robin Egg Blue",
  "#4d3833": "Rock",
  "#9eb1cd": "Rock Blue",
  "#ba450c": "Rock Spray",
  "#8a7f80": "Rocket Metallic",
  "#c9b29b": "Rodeo Dust",
  "#747d83": "Rolling Stone",
  "#de6360": "Roman",
  "#795d4c": "Roman Coffee",
  "#838996": "Roman Silver",
  "#fffefd": "Romance",
  "#ffd2b7": "Romantic",
  "#ecc54e": "Ronchi",
  "#a62f20": "Roof Terracotta",
  "#8e4d1e": "Rope",
  "#ff007f": "Rose",
  "#f9429e": "Rose Bonbon",
  "#fbb2a3": "Rose Bud",
  "#800b47": "Rose Bud Cherry",
  "#9e5e6f": "Rose Dust",
  "#674846": "Rose Ebony",
  "#e7bcb4": "Rose Fog",
  "#b76e79": "Rose Gold",
  "#ff66cc": "Rose Pink",
  "#c21e56": "Rose Red",
  "#905d5d": "Rose Taupe",
  "#ab4e52": "Rose Vale",
  "#fff6f5": "Rose White",
  "#bf5500": "Rose of Sharon",
  "#65000b": "Rosewood",
  "#d40000": "Rosso Corsa",
  "#bc8f8f": "Rosy Brown",
  "#c6a84b": "Roti",
  "#a23b6c": "Rouge",
  "#5d8aa8": "Royal Air Force Blue",
  "#0038a8": "Royal Azure",
  "#4169e1": "Royal Blue",
  "#ca2c92": "Royal Fuchsia",
  "#ab3472": "Royal Heath",
  "#7851a9": "Royal Purple",
  "#ce4676": "Ruber",
  "#d10056": "Rubine Red",
  "#e0115f": "Ruby",
  "#9b111e": "Ruby Red",
  "#ff0028": "Ruddy",
  "#bb6528": "Ruddy Brown",
  "#e18e96": "Ruddy Pink",
  "#a81c07": "Rufous",
  "#796989": "Rum",
  "#f9f8e4": "Rum Swizzle",
  "#80461b": "Russet",
  "#755a57": "Russett",
  "#679267": "Russian Green",
  "#32174d": "Russian Violet",
  "#b7410e": "Rust",
  "#480404": "Rustic Red",
  "#86560a": "Rusty Nail",
  "#da2c43": "Rusty Red",
  "#ff7e00": "SAE ECE Amber",
  "#043927": "Sacramento State Green",
  "#4c3024": "Saddle",
  "#8b4513": "Saddle Brown",
  "#ff7800": "Safety Orange",
  "#eed202": "Safety Yellow",
  "#f4c430": "Saffron",
  "#f9bf58": "Saffron Mango",
  "#bcb88a": "Sage",
  "#b7a214": "Sahara",
  "#f1e788": "Sahara Sand",
  "#b8e0f9": "Sail",
  "#097f4b": "Salem",
  "#fa8072": "Salmon",
  "#ff91a4": "Salmon Pink",
  "#fedb8d": "Salomie",
  "#685e6e": "Salt Box",
  "#f1f7f2": "Saltpan",
  "#3a2010": "Sambuca",
  "#0b6207": "San Felix",
  "#304b6a": "San Juan",
  "#456cac": "San Marino",
  "#967117": "Sand Dune",
  "#aa8d6f": "Sandal",
  "#ab917a": "Sandrift",
  "#796d62": "Sandstone",
  "#ecd540": "Sandstorm",
  "#f5e7a2": "Sandwisp",
  "#ffeac8": "Sandy Beach",
  "#f4a460": "Sandy Brown",
  "#92000a": "Sangria",
  "#8d3d38": "Sanguine Brown",
  "#b16d52": "Santa Fe",
  "#9fa0b1": "Santas Gray",
  "#507d2a": "Sap Green",
  "#ded4a4": "Sapling",
  "#0f52ba": "Sapphire",
  "#0067a5": "Sapphire Blue",
  "#555b10": "Saratoga",
  "#ff4681": "Sasquatch Socks",
  "#e6e4d4": "Satin Linen",
  "#cba135": "Satin Sheen Gold",
  "#fff5f3": "Sauvignon",
  "#fff4e0": "Sazerac",
  "#675fa6": "Scampi",
  "#cffaf4": "Scandal",
  "#ff2400": "Scarlet",
  "#431560": "Scarlet Gum",
  "#950015": "Scarlett",
  "#585562": "Scarpa Flow",
  "#a9b497": "Schist",
  "#ffd800": "School Bus Yellow",
  "#8b847e": "Schooner",
  "#0066cc": "Science Blue",
  "#2ebfd4": "Scooter",
  "#695f62": "Scorpion",
  "#fffbdc": "Scotch Mist",
  "#66ff66": "Screamin Green",
  "#006994": "Sea Blue",
  "#fba129": "Sea Buckthorn",
  "#2e8b57": "Sea Green",
  "#c5dbca": "Sea Mist",
  "#78a39c": "Sea Nymph",
  "#ed989e": "Sea Pink",
  "#4bc7cf": "Sea Serpent",
  "#80ccea": "Seagull",
  "#59260b": "Seal Brown",
  "#731e8f": "Seance",
  "#fff5ee": "Seashell",
  "#1b2f11": "Seaweed",
  "#f0eefd": "Selago",
  "#ffba00": "Selective Yellow",
  "#704214": "Sepia",
  "#2b0202": "Sepia Black",
  "#9e5b40": "Sepia Skin",
  "#fff4e8": "Serenade",
  "#8a795d": "Shadow",
  "#778ba5": "Shadow Blue",
  "#9ac2b8": "Shadow Green",
  "#aaa5a9": "Shady Lady",
  "#4eabd1": "Shakespeare",
  "#fbffba": "Shalimar",
  "#ffcff1": "Shampoo",
  "#33cc99": "Shamrock",
  "#009e60": "Shamrock Green",
  "#25272c": "Shark",
  "#8fd400": "Sheen Green",
  "#004950": "Sherpa Blue",
  "#02402c": "Sherwood Green",
  "#e8b9b3": "Shilo",
  "#d98695": "Shimmering Blush",
  "#6b4e31": "Shingle Fawn",
  "#5fa778": "Shiny Shamrock",
  "#788bba": "Ship Cove",
  "#3e3a44": "Ship Gray",
  "#b20931": "Shiraz",
  "#e292c0": "Shocking",
  "#fc0fc0": "Shocking Pink",
  "#5f6672": "Shuttle Gray",
  "#646a54": "Siam",
  "#f3e7bb": "Sidecar",
  "#882d17": "Sienna",
  "#bdb1a8": "Silk",
  "#c0c0c0": "Silver",
  "#acacac": "Silver Chalice",
  "#5d89ba": "Silver Lake Blue",
  "#c4aead": "Silver Pink",
  "#bfc1c2": "Silver Sand",
  "#66b58f": "Silver Tree",
  "#9fd7d3": "Sinbad",
  "#cb410b": "Sinopia",
  "#7a013a": "Siren",
  "#718080": "Sirocco",
  "#d3cbba": "Sisal",
  "#ff3855": "Sizzling Red",
  "#ffdb00": "Sizzling Sunrise",
  "#cae6da": "Skeptic",
  "#007474": "Skobeloff",
  "#87ceeb": "Sky Blue",
  "#cf71af": "Sky Magenta",
  "#6a5acd": "Slate Blue",
  "#708090": "Slate Gray",
  "#299617": "Slimy Green",
  "#003399": "Smalt",
  "#51808f": "Smalt Blue",
  "#ff6d3a": "Smashed Pumpkin",
  "#c84186": "Smitten",
  "#738276": "Smoke",
  "#832a0d": "Smokey Topaz",
  "#605b73": "Smoky",
  "#100c08": "Smoky Black",
  "#933d41": "Smoky Topaz",
  "#fffafa": "Snow",
  "#f7faf7": "Snow Drift",
  "#e4ffd1": "Snow Flurry",
  "#d6ffdb": "Snowy Mint",
  "#e2d8ed": "Snuff",
  "#cec8ef": "Soap",
  "#fffbf9": "Soapstone",
  "#d1c6b4": "Soft Amber",
  "#f5edef": "Soft Peach",
  "#893843": "Solid Pink",
  "#fef8e2": "Solitaire",
  "#eaf6ff": "Solitude",
  "#757575": "Sonic Silver",
  "#fd7c07": "Sorbus",
  "#ceb98f": "Sorrell Brown",
  "#6a6051": "Soya Bean",
  "#1d2951": "Space Cadet",
  "#807532": "Spanish Bistre",
  "#0070b8": "Spanish Blue",
  "#d10047": "Spanish Carmine",
  "#e51a4c": "Spanish Crimson",
  "#989898": "Spanish Gray",
  "#009150": "Spanish Green",
  "#e86100": "Spanish Orange",
  "#f7bfbe": "Spanish Pink",
  "#e60026": "Spanish Red",
  "#00aae4": "Spanish Sky Blue",
  "#4c2882": "Spanish Violet",
  "#007f5c": "Spanish Viridian",
  "#9e1316": "Spartan Crimson",
  "#2f5a57": "Spectra",
  "#6a442e": "Spice",
  "#8b5f4d": "Spicy Mix",
  "#74640d": "Spicy Mustard",
  "#816e71": "Spicy Pink",
  "#b6d1ea": "Spindle",
  "#0fc0fc": "Spiro Disco Ball",
  "#79deec": "Spray",
  "#a7fc00": "Spring Bud",
  "#87ff2a": "Spring Frost",
  "#00ff7f": "Spring Green",
  "#578363": "Spring Leaves",
  "#accbb1": "Spring Rain",
  "#f6ffdc": "Spring Sun",
  "#f8f6f1": "Spring Wood",
  "#c1d7b0": "Sprout",
  "#aaabb7": "Spun Pearl",
  "#8f8176": "Squirrel",
  "#23297a": "St Patricks Blue",
  "#2d569b": "St Tropaz",
  "#8a8f8a": "Stack",
  "#007bb8": "Star Command Blue",
  "#9f9f9c": "Star Dust",
  "#e5d7bd": "Stark White",
  "#ecf245": "Starship",
  "#4682b4": "Steel Blue",
  "#262335": "Steel Gray",
  "#cc33cc": "Steel Pink",
  "#5f8a8b": "Steel Teal",
  "#9c3336": "Stiletto",
  "#928573": "Stonewall",
  "#646463": "Storm Dust",
  "#717486": "Storm Gray",
  "#4f666a": "Stormcloud",
  "#000741": "Stratos",
  "#e4d96f": "Straw",
  "#fc5a8d": "Strawberry",
  "#956387": "Strikemaster",
  "#325d52": "Stromboli",
  "#714ab2": "Studio",
  "#bac7c9": "Submarine",
  "#f9fff6": "Sugar Cane",
  "#914e75": "Sugar Plum",
  "#c1f07c": "Sulu",
  "#96bbab": "Summer Green",
  "#fbac13": "Sun",
  "#ff404c": "Sunburnt Cyclops",
  "#c9b35b": "Sundance",
  "#ffb1b3": "Sundown",
  "#e4d422": "Sunflower",
  "#e16865": "Sunglo",
  "#ffcc33": "Sunglow",
  "#f2f27a": "Sunny",
  "#e3ab57": "Sunray",
  "#fad6a5": "Sunset",
  "#fd5e53": "Sunset Orange",
  "#ff9e2c": "Sunshade",
  "#cf6ba9": "Super Pink",
  "#ffc901": "Supernova",
  "#bbd7c1": "Surf",
  "#cfe5d2": "Surf Crest",
  "#0c7a79": "Surfie Green",
  "#87ab39": "Sushi",
  "#888387": "Suva Gray",
  "#001b1c": "Swamp",
  "#acb78e": "Swamp Green",
  "#dcf0ea": "Swans Down",
  "#a83731": "Sweet Brown",
  "#fbea8c": "Sweet Corn",
  "#fd9fa2": "Sweet Pink",
  "#d3cdc5": "Swirl",
  "#ddd6d5": "Swiss Coffee",
  "#908d39": "Sycamore",
  "#a02712": "Tabasco",
  "#edb381": "Tacao",
  "#d6c562": "Tacha",
  "#e97c07": "Tahiti Gold",
  "#eef0c8": "Tahuna Sands",
  "#b32d29": "Tall Poppy",
  "#a8a589": "Tallow",
  "#991613": "Tamarillo",
  "#341515": "Tamarind",
  "#d2b48c": "Tan",
  "#fa9d5a": "Tan Hide",
  "#d9dcc1": "Tana",
  "#03163c": "Tangaroa",
  "#f94d00": "Tangelo",
  "#f28500": "Tangerine",
  "#ffcc00": "Tangerine Yellow",
  "#ed7a1c": "Tango",
  "#e4717a": "Tango Pink",
  "#7b7874": "Tapa",
  "#b05e81": "Tapestry",
  "#e1f6e8": "Tara",
  "#073a50": "Tarawera",
  "#fb4d46": "Tart Orange",
  "#cfdccf": "Tasman",
  "#483c32": "Taupe",
  "#8b8589": "Taupe Gray",
  "#692545": "Tawny Port",
  "#1e433c": "Te Papa Green",
  "#c1bab0": "Tea",
  "#d0f0c0": "Tea Green",
  "#f4c2c2": "Tea Rose",
  "#b19461": "Teak",
  "#008080": "Teal",
  "#367588": "Teal Blue",
  "#99e6b3": "Teal Deer",
  "#00827f": "Teal Green",
  "#cf3476": "Telemagenta",
  "#3b000b": "Temptress",
  "#cd5700": "Tenne",
  "#ffe6c7": "Tequila",
  "#e2725b": "Terra Cotta",
  "#f8f99c": "Texas",
  "#ffb555": "Texas Rose",
  "#b69d98": "Thatch",
  "#403d19": "Thatch Green",
  "#d8bfd8": "Thistle",
  "#cccaa8": "Thistle Green",
  "#de6fa1": "Thulian Pink",
  "#33292f": "Thunder",
  "#c02b18": "Thunderbird",
  "#c1440e": "Tia Maria",
  "#c3d1d1": "Tiara",
  "#063537": "Tiber",
  "#fc89ac": "Tickle Me Pink",
  "#f1ffad": "Tidal",
  "#bfb8b0": "Tide",
  "#0abab5": "Tiffany Blue",
  "#e08d3c": "Tigers Eye",
  "#16322c": "Timber Green",
  "#dbd7d2": "Timberwolf",
  "#f0eeff": "Titan White",
  "#eee600": "Titanium Yellow",
  "#9a6e61": "Toast",
  "#715d47": "Tobacco Brown",
  "#3a0020": "Toledo",
  "#1b0245": "Tolopea",
  "#3f583b": "Tom Thumb",
  "#ff6347": "Tomato",
  "#e79f8c": "Tonys Pink",
  "#746cc0": "Toolbox",
  "#ffc87c": "Topaz",
  "#0f2d9e": "Torea Bay",
  "#1450aa": "Tory Blue",
  "#8d3f3f": "Tosca",
  "#991b07": "Totem Pole",
  "#a9bdbf": "Tower Gray",
  "#fd0e35": "Tractor Red",
  "#5fb3ac": "Tradewind",
  "#e6ffff": "Tranquil",
  "#fffde8": "Travertine",
  "#fc9c1d": "Tree Poppy",
  "#3b2820": "Treehouse",
  "#7c881a": "Trendy Green",
  "#8c6495": "Trendy Pink",
  "#e64e03": "Trinidad",
  "#c3ddf9": "Tropical Blue",
  "#00755e": "Tropical Rain Forest",
  "#cda4de": "Tropical Violet",
  "#4a4e5a": "Trout",
  "#0073cf": "True Blue",
  "#8a73d6": "True V",
  "#363534": "Tuatara",
  "#ffddcd": "Tuft Bush",
  "#417dc1": "Tufts Blue",
  "#ff878d": "Tulip",
  "#eab33b": "Tulip Tree",
  "#deaa88": "Tumbleweed",
  "#353542": "Tuna",
  "#4a4244": "Tundora",
  "#fae600": "Turbo",
  "#b57281": "Turkish Rose",
  "#cabb48": "Turmeric",
  "#40e0d0": "Turquoise",
  "#00ffef": "Turquoise Blue",
  "#a0d6b4": "Turquoise Green",
  "#2a380b": "Turtle Green",
  "#7c4848": "Tuscan Red",
  "#a67b5b": "Tuscan Tan",
  "#c09999": "Tuscany",
  "#eef3c3": "Tusk",
  "#c5994b": "Tussock",
  "#fff1f9": "Tutu",
  "#e4cfde": "Twilight",
  "#eefdff": "Twilight Blue",
  "#8a496b": "Twilight Lavender",
  "#c2955d": "Twine",
  "#66023c": "Tyrian Purple",
  "#0033aa": "UA Blue",
  "#d9004c": "UA Red",
  "#536895": "UCLA Blue",
  "#ffb300": "UCLA Gold",
  "#3cd070": "UFO Green",
  "#014421": "UP Forest Green",
  "#7b1113": "UP Maroon",
  "#004f98": "USAFA Blue",
  "#8878c3": "Ube",
  "#ff6fff": "Ultra Pink",
  "#3f00ff": "Ultramarine",
  "#4166f5": "Ultramarine Blue",
  "#635147": "Umber",
  "#ffddca": "Unbleached Silk",
  "#f9e6f4": "Underage Pink",
  "#5b92e5": "United Nations Blue",
  "#b78727": "University Of California Gold",
  "#f77f00": "University Of Tennessee Orange",
  "#ffff66": "Unmellow Yellow",
  "#ae2029": "Upsdell Red",
  "#e1ad21": "Urobilin",
  "#d3003f": "Utah Crimson",
  "#d84437": "Valencia",
  "#350e42": "Valentino",
  "#2b194f": "Valhalla",
  "#49170c": "Van Cleef",
  "#664228": "Van Dyke Brown",
  "#f3e5ab": "Vanilla",
  "#f38fa9": "Vanilla Ice",
  "#fff6df": "Varden",
  "#c5b358": "Vegas Gold",
  "#c80815": "Venetian Red",
  "#055989": "Venice Blue",
  "#928590": "Venus",
  "#43b3ae": "Verdigris",
  "#495400": "Verdun Green",
  "#d9381e": "Vermilion",
  "#a020f0": "Veronica",
  "#74bbfb": "Very Light Azure",
  "#6666ff": "Very Light Blue",
  "#64e986": "Very Light Malachite Green",
  "#ffb077": "Very Light Tangelo",
  "#ffdfbf": "Very Pale Orange",
  "#ffffbf": "Very Pale Yellow",
  "#b14a0b": "Vesuvius",
  "#534491": "Victoria",
  "#549019": "Vida Loca",
  "#64ccdb": "Viking",
  "#983d61": "Vin Rouge",
  "#cb8fa9": "Viola",
  "#290c5e": "Violent Violet",
  "#7f00ff": "Violet",
  "#324ab2": "Violet Blue",
  "#991199": "Violet Eggplant",
  "#f75394": "Violet Red",
  "#40826d": "Viridian",
  "#009698": "Viridian Green",
  "#ffefa1": "Vis Vis",
  "#7c9ed9": "Vista Blue",
  "#fcf8f7": "Vista White",
  "#cc9900": "Vivid Amber",
  "#922724": "Vivid Auburn",
  "#9f1d35": "Vivid Burgundy",
  "#da1d81": "Vivid Cerise",
  "#00aaee": "Vivid Cerulean",
  "#cc0033": "Vivid Crimson",
  "#ff9900": "Vivid Gamboge",
  "#a6d608": "Vivid Lime Green",
  "#00cc33": "Vivid Malachite",
  "#b80ce3": "Vivid Mulberry",
  "#ff5f00": "Vivid Orange",
  "#ffa000": "Vivid Orange Peel",
  "#cc00ff": "Vivid Orchid",
  "#ff006c": "Vivid Raspberry",
  "#f70d1a": "Vivid Red",
  "#df6124": "Vivid Red Tangelo",
  "#00ccff": "Vivid Sky Blue",
  "#f07427": "Vivid Tangelo",
  "#ffa089": "Vivid Tangerine",
  "#e56024": "Vivid Vermilion",
  "#9f00ff": "Vivid Violet",
  "#ffe302": "Vivid Yellow",
  "#ceff00": "Volt",
  "#533455": "Voodoo",
  "#10121d": "Vulcan",
  "#decbc6": "Wafer",
  "#5a6e9c": "Waikawa Gray",
  "#363c0d": "Waiouru",
  "#773f1a": "Walnut",
  "#004242": "Warm Black",
  "#788a25": "Wasabi",
  "#a1e9de": "Water Leaf",
  "#056f57": "Watercourse",
  "#7b7c94": "Waterloo ",
  "#a4f4f9": "Waterspout",
  "#dcd747": "Wattle",
  "#ffddcf": "Watusi",
  "#ffc0a8": "Wax Flower",
  "#f7dbe6": "We Peep",
  "#7fff00": "Web Chartreuse",
  "#ffa500": "Web Orange",
  "#4e7f9e": "Wedgewood",
  "#7c98ab": "Weldon Blue",
  "#b43332": "Well Read",
  "#645452": "Wenge",
  "#625119": "West Coast",
  "#ff910f": "West Side",
  "#dcd9d2": "Westar",
  "#f19bab": "Wewak",
  "#f5deb3": "Wheat",
  "#f3edcf": "Wheatfield",
  "#d59a6f": "Whiskey",
  "#f7f5fa": "Whisper",
  "#ffffff": "White",
  "#ddf9f1": "White Ice",
  "#f8f7fc": "White Lilac",
  "#f8f0e8": "White Linen",
  "#fef8ff": "White Pointer",
  "#eae8d4": "White Rock",
  "#f5f5f5": "White Smoke",
  "#a2add0": "Wild Blue Yonder",
  "#d470a2": "Wild Orchid",
  "#ece090": "Wild Rice",
  "#f4f4f4": "Wild Sand",
  "#ff43a4": "Wild Strawberry",
  "#fc6c85": "Wild Watermelon",
  "#b9c46a": "Wild Willow",
  "#3a686c": "William",
  "#dfecda": "Willow Brook",
  "#65745d": "Willow Grove",
  "#fd5800": "Willpower Orange",
  "#3c0878": "Windsor",
  "#a75502": "Windsor Tan",
  "#722f37": "Wine",
  "#591d35": "Wine Berry",
  "#673147": "Wine Dregs",
  "#d5d195": "Winter Hazel",
  "#ff007c": "Winter Sky",
  "#a0e6ff": "Winter Wizard",
  "#56887d": "Wintergreen Dream",
  "#fef4f8": "Wisp Pink",
  "#c9a0dc": "Wisteria",
  "#a4a6d3": "Wistful",
  "#fffc99": "Witch Haze",
  "#261105": "Wood Bark",
  "#4d5328": "Woodland",
  "#302a0f": "Woodrush",
  "#0c0d0f": "Woodsmoke",
  "#483131": "Woody Brown",
  "#006400": "X11 Dark Green",
  "#bebebe": "X11 Gray",
  "#738678": "Xanadu",
  "#0f4d92": "Yale Blue",
  "#1c2841": "Yankees Blue",
  "#ffff00": "Yellow",
  "#9acd32": "Yellow Green",
  "#716338": "Yellow Metal",
  "#ffae42": "Yellow Orange",
  "#fff000": "Yellow Rose",
  "#fea904": "Yellow Sea",
  "#ffc3c0": "Your Pink",
  "#7b6608": "Yukon Gold",
  "#cec291": "Yuma",
  "#0014a8": "Zaffre",
  "#685558": "Zambezi",
  "#daecd6": "Zanah",
  "#e5841b": "Zest",
  "#292319": "Zeus",
  "#bfdbe2": "Ziggurat",
  "#ebc2af": "Zinnwaldite",
  "#2c1608": "Zinnwaldite Brown",
  "#f4f8ff": "Zircon",
  "#e4d69b": "Zombie",
  "#39a78e": "Zomp",
  "#a59b91": "Zorba",
  "#044022": "Zuccini",
  "#edf6ff": "Zumthor"
};

/***/ }),

/***/ "./scripts/modules/smUtils.js":
/*!************************************!*\
  !*** ./scripts/modules/smUtils.js ***!
  \************************************/
/*! exports provided: modalContainer, closeSettings, clearData, closeMessage, closeExport, openSettings, settingsBox, messageBox, exportBox, closeModal, activateModal, openSettingsModal, openExportModal, showMessageModal, statusMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalContainer", function() { return modalContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSettings", function() { return closeSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearData", function() { return clearData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeMessage", function() { return closeMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeExport", function() { return closeExport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSettings", function() { return openSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsBox", function() { return settingsBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageBox", function() { return messageBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportBox", function() { return exportBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateModal", function() { return activateModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSettingsModal", function() { return openSettingsModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openExportModal", function() { return openExportModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMessageModal", function() { return showMessageModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusMessage", function() { return statusMessage; });
var modalContainer = document.getElementById("modal-container");
var closeSettings = document.getElementById("close-settings");
var clearData = document.getElementById("clear-data");
var closeMessage = document.getElementById("close-message");
var closeExport = document.getElementById("close-export");
var openSettings = document.getElementById("open-settings");
var settingsBox = document.getElementsByClassName("settings-box")[0];
var messageBox = document.getElementsByClassName("message-box")[0];
var exportBox = document.getElementsByClassName("export-box")[0];
var closeModal = function closeModal() {
  Array.from(modalContainer.children).forEach(function (child) {
    return child.classList.remove("active");
  });

  if (modalContainer.classList.contains("fadeBg")) {
    modalContainer.classList.remove("fadeBg");
  }

  return modalContainer.classList.contains("active") ? modalContainer.classList.remove("active") : false;
};
var activateModal = function activateModal() {
  return modalContainer.classList.contains("active") ? false : modalContainer.classList.add("active");
};
var openSettingsModal = function openSettingsModal() {
  activateModal();
  modalContainer.classList.add("fadeBg");
  settingsBox.classList.add("active");
};
var openExportModal = function openExportModal() {
  activateModal();
  modalContainer.classList.add("fadeBg");
  exportBox.classList.add("active");
};
var showMessageModal = function showMessageModal(type, message, duration) {
  activateModal();
  messageBox.classList.add("active");
  var messageTextContainer = messageBox.getElementsByClassName("message-inner")[0];

  switch (type) {
    case "error":
      messageBox.classList.add("error");
      break;
  }

  messageTextContainer.innerText = message;
  setTimeout(function () {
    messageBox.classList.remove("active");

    switch (type) {
      case "error":
        messageBox.classList.remove("error");
        break;
    }
  }, duration);
};
modalContainer.addEventListener("click", function (e) {
  e.target == modalContainer ? closeModal() : false;
});
[closeSettings, closeExport].forEach(function (button) {
  return button.addEventListener("click", closeModal, false);
});
closeMessage.addEventListener("click", function () {
  return messageBox.classList.remove("active");
});
clearData.addEventListener("click", function () {
  var original = clearData.innerText;
  clearData.innerText = "data cleared! refreshing.";
  STORAGE.clear();
  setTimeout(function () {
    clearData.innerText = original;
    setTimeout(function () {
      return window.location.reload(true);
    }, 500);
  }, 2000);
});
openSettings.addEventListener("click", function () {
  return openSettingsModal();
});

window.onerror = function (msg, src, line, col, err) {
  statusMessage("error", err);
};

var statusMessage = function statusMessage(type, message) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8000;
  showMessageModal(type, message, duration);
};

/***/ }),

/***/ "./scripts/modules/utils.js":
/*!**********************************!*\
  !*** ./scripts/modules/utils.js ***!
  \**********************************/
/*! exports provided: FANCY_COLOR_NAMES, CURRENT_ERR, history, locks, initColors, currentColors, objectFlip, setColorNames, hexToColorName, hexToRGBA, hslToRGB, rgbToDHSL, rgbToHSL, rgbToNHSL, shiftHue, shiftSat, calculateLuminance, getContrastRatio, changeShade, rgbToHex, hexDigits, hex, wcagLevels, colorHexArray, fancyColorHexArray, findNearestColor, findNearestAAAColor, setColorSwatchListeners, setComputedColors, mobilecheck, disableScroll, enableScroll, selectText, geturlvars, scrollSmooth, propSort, toCamelCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FANCY_COLOR_NAMES", function() { return FANCY_COLOR_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_ERR", function() { return CURRENT_ERR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locks", function() { return locks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initColors", function() { return initColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentColors", function() { return currentColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectFlip", function() { return objectFlip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setColorNames", function() { return setColorNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToColorName", function() { return hexToColorName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRGBA", function() { return hexToRGBA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslToRGB", function() { return hslToRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToDHSL", function() { return rgbToDHSL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHSL", function() { return rgbToHSL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToNHSL", function() { return rgbToNHSL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shiftHue", function() { return shiftHue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shiftSat", function() { return shiftSat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateLuminance", function() { return calculateLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrastRatio", function() { return getContrastRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeShade", function() { return changeShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexDigits", function() { return hexDigits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wcagLevels", function() { return wcagLevels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorHexArray", function() { return colorHexArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fancyColorHexArray", function() { return fancyColorHexArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNearestColor", function() { return findNearestColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNearestAAAColor", function() { return findNearestAAAColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setColorSwatchListeners", function() { return setColorSwatchListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setComputedColors", function() { return setComputedColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobilecheck", function() { return mobilecheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableScroll", function() { return disableScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableScroll", function() { return enableScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectText", function() { return selectText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geturlvars", function() { return geturlvars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollSmooth", function() { return scrollSmooth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propSort", function() { return propSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCamelCase", function() { return toCamelCase; });
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../main.js */ "./scripts/main.js");
/* harmony import */ var _palettes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palettes.js */ "./scripts/modules/palettes.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var FANCY_COLOR_NAMES = {
  on: false
};
var CURRENT_ERR = "";
var LUM_LOWER = 0.03928;
var LUM_DIVISOR_H = 12.92;
var LUM_DIVISOR_L = 1.055;
var LUM_ADDEND = 0.055;
var LUM_EXP = 2.4;
var LUM_COEFF = 0.2126;
var LUM_R_ADDEND = 0.7152;
var LUM_G_ADDEND = 0.0722;
var RGB_MAX = 255;
var history = {
  colorHistory: [],
  colorHistoryIndex: 0,
  initialColorHistory: true
};
var locks = {
  textLocked: false,
  bgLocked: false
};
var initColors = {
  background: "#50c878",
  text: "#eaeaea"
};
var currentColors = {
  background: "#50c878",
  text: "#eaeaea"
};
var objectFlip = function objectFlip(obj) {
  var ret = {};
  Object.keys(obj).forEach(function (key) {
    ret[obj[key]] = key;
  });
  return ret;
};
var backgroundShades = document.getElementsByClassName("bg-shades-container")[0];
var textShades = document.getElementsByClassName("text-shades-container")[0];
var cssColorNames;
var setColorNames = function setColorNames() {
  if (FANCY_COLOR_NAMES.on == true) {
    cssColorNames = objectFlip(_palettes_js__WEBPACK_IMPORTED_MODULE_1__["colorLib"]);
  } else {
    cssColorNames = _palettes_js__WEBPACK_IMPORTED_MODULE_1__["simpleColors"];
  }
};
setColorNames(); // usage: hexToColorName(cssColorNames, "#ffffff")

var hexToColorName = function hexToColorName(colors, hex) {
  return Object.keys(colors).find(function (key) {
    return colors[key] === hex;
  });
};
var hexToRGBA = function hexToRGBA(hex) {
  if (!hex || typeof hex != "string" || hex.length < 3) return false;
  if (hex.split("").indexOf("#") == 0) hex = hex.substring(1);
  var acceptableCharacters = /^(?:[0-9a-fA-F]{3,8})$/;
  if (!hex.match(acceptableCharacters)) throw new Error("parameter '".concat(hex, "' is not a valid hex color."));

  if (hex.length == 6) {
    var rgb = parseInt(hex, 16);
    var r = rgb >> 16 & 0xff;
    var g = rgb >> 8 & 0xff;
    var b = rgb & 0xff;

    if (isNaN(r) || isNaN(g) || isNaN(b)) {
      throw new Error("please enter rgb(a) values only between 0 and F.");
    }

    return {
      r: r,
      g: g,
      b: b
    };
  } else if (hex.length == 3) {
    hex.split("");
    hex = [hex[0], hex[0], hex[1], hex[1], hex[2], hex[2]];
    hex = "0x" + hex.join("");

    var _rgb = parseInt(hex, 16);

    var _r = _rgb >> 16 & 0xff;

    var _g = _rgb >> 8 & 0xff;

    var _b = _rgb & 0xff;

    if (isNaN(_r) || isNaN(_g) || isNaN(_b)) {
      throw new Error("please enter rgb(a) values only between 0 and F.");
    }

    return {
      r: _r,
      g: _g,
      b: _b
    };
  } else if (hex.length == 8) {
    var a = hex.substring(6, 8);
    hex = hex.substring(0, 6);

    var _rgb2 = parseInt(hex, 16);

    var _r2 = _rgb2 >> 16 & 0xff;

    var _g2 = _rgb2 >> 8 & 0xff;

    var _b2 = _rgb2 & 0xff;

    a = "0x" + a;
    a = parseInt(a);

    if (isNaN(a) || isNaN(_r2) || isNaN(_g2) || isNaN(_b2)) {
      throw new Error("please enter rgb(a) values only between 0 and F.");
    }

    return {
      r: _r2,
      g: _g2,
      b: _b2,
      a: a
    };
  } else if (hex.length == 4) {
    var _a = hex.substring(3, 4).split("");

    hex = hex.substring(0, 3).split("");
    hex = [hex[0], hex[0], hex[1], hex[1], hex[2], hex[2]];
    hex = "0x" + hex.join("");
    _a = [_a[0], _a[0]];
    _a = "0x" + _a.join("");
    _a = parseInt(_a);

    var _rgb3 = parseInt(hex, 16);

    var _r3 = _rgb3 >> 16 & 0xff;

    var _g3 = _rgb3 >> 8 & 0xff;

    var _b3 = _rgb3 & 0xff;

    if (isNaN(_a) || isNaN(_r3) || isNaN(_g3) || isNaN(_b3)) {
      throw new Error("please enter rgb(a) values only between 0 and F.");
    }

    return {
      r: _r3,
      g: _g3,
      b: _b3,
      a: _a
    };
  } else {
    throw new Error("parameter '".concat(hex, "' is not valid."));
  }
};
var hslToRGB = function hslToRGB(h, s, l) {
  var r, g, b;
  if (s == 0) r = g = b = l;else {
    var hueToRGB = function hueToRGB(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hueToRGB(p, q, h + 1 / 3);
    g = hueToRGB(p, q, h);
    b = hueToRGB(p, q, h - 1 / 3);
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}; // returns h, s, and l in the set [0, 1]

var rgbToDHSL = function rgbToDHSL(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b),
      min = Math.min(r, g, b);
  var h,
      s,
      l = (max + min) / 2;
  if (max == min) h = s = 0;else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }
  return {
    h: h,
    s: s,
    l: l
  };
};
var rgbToHSL = function rgbToHSL(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var l = (max + min) / 2;
  var s = 0;
  var h = 0;

  if (max != min) {
    if (l < 0.5) s = (max - min) / (max + min);else s = (max - min) / (2 - max - min);
    if (r == max) h = (g - b) / (max - min);else if (g == max) h = 2 + (b - r) / (max - min);else h = 4 + (r - g) / (max - min);
  }

  l = l * 100;
  s = s * 100;
  h = h * 60;
  if (h < 0) h += 360;
  return {
    h: h.toFixed(2),
    s: s.toFixed(2) + "%",
    l: l.toFixed(2) + "%"
  };
}; // rgb to NumberHSL

var rgbToNHSL = function rgbToNHSL(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var l = (max + min) / 2;
  var s = 0;
  var h = 0;

  if (max != min) {
    if (l < 0.5) s = (max - min) / (max + min);else s = (max - min) / (2 - max - min);
    if (r == max) h = (g - b) / (max - min);else if (g == max) h = 2 + (b - r) / (max - min);else h = 4 + (r - g) / (max - min);
  }

  l = l * 100;
  s = s * 100;
  h = h * 60; // if hue is less than zero, wrap it around to be back in range

  if (h < 0) h += 360;
  return {
    h: h,
    s: s,
    l: l
  };
}; // function to change color's hue

var shiftHue = function shiftHue(rgb, deg) {
  var hsl = rgbToNHSL(rgb.r, rgb.g, rgb.b);
  if (deg > 100 || deg < 0) throw new RangeError("amount of hue shifting in shiftHue must be within the range [0, 100].");
  hsl.h += deg;
  if (hsl.h < 0) hsl.h += 360;
  if (hsl.h > 360) hsl.h -= 360;
  hsl.h /= 360;
  hsl.s /= 100;
  hsl.l /= 100;
  return hslToRGB(hsl.h, hsl.s, hsl.l);
}; // function to change color's hue

var shiftSat = function shiftSat(rgb, deg) {
  var hsl = rgbToNHSL(rgb.r, rgb.g, rgb.b);
  if (deg > 100 || deg < -100) throw new RangeError("amount of hue shifting in shiftHue must be within the range [-100, 100].");
  hsl.s += deg;
  if (hsl.s < 0) hsl.s += 100;
  if (hsl.s > 100) hsl.s -= 100;
  hsl.h /= 360;
  hsl.s /= 100;
  hsl.l /= 100;
  return hslToRGB(hsl.h, hsl.s, hsl.l);
}; // luminance calculation based on this:
// https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
// which is also where these constants are from

var calculateLuminance = function calculateLuminance(r, g, b) {
  var srgb = [r, g, b].map(function (val) {
    return val / 255;
  });

  var _srgb$map = srgb.map(function (val) {
    return val <= LUM_LOWER ? val / LUM_DIVISOR_H : Math.pow((val + LUM_ADDEND) / LUM_DIVISOR_L, LUM_EXP);
  }),
      _srgb$map2 = _slicedToArray(_srgb$map, 3),
      R = _srgb$map2[0],
      G = _srgb$map2[1],
      B = _srgb$map2[2];

  var L = LUM_COEFF * R + LUM_R_ADDEND * G + LUM_G_ADDEND * B;
  return L;
}; // best: 7:1 ratio (getContrastRatio returns 7)

var getContrastRatio = function getContrastRatio(text, bg) {
  var txRGB = hexToRGBA(text);
  var bgRGB = hexToRGBA(bg);
  var lum1 = calculateLuminance(txRGB.r, txRGB.g, txRGB.b);
  var lum2 = calculateLuminance(bgRGB.r, bgRGB.g, bgRGB.b);
  var light = Math.max(lum1, lum2);
  var dark = Math.min(lum1, lum2);
  var contrast = (light + 0.05) / (dark + 0.05);
  var contrastNum = Math.floor(contrast * 100) / 100;
  var contrastString = "".concat((light + 0.05).toFixed(2), ":").concat((dark + 0.05).toFixed(2));
  return {
    number: contrastNum,
    string: contrastString
  };
}; // change hex color shade by amount

var changeShade = function changeShade(color, amount) {
  var usePound = false;

  if (color[0] == "#") {
    color = color.slice(1);
    usePound = true;
  }

  var num = parseInt(color, 16);
  var r = (num >> 16) + amount;
  if (r > 255) r = 255;else if (r < 0) r = 0;
  var b = (num >> 8 & 0x00ff) + amount;
  if (b > 255) b = 255;else if (b < 0) b = 0;
  var g = (num & 0x0000ff) + amount;
  if (g > 255) g = 255;else if (g < 0) g = 0;
  return (usePound ? "#" : "") + String("000000" + (g | b << 8 | r << 16).toString(16)).slice(-6);
};
var rgbToHex = function rgbToHex(r, g, b) {
  return "#".concat(hex(r)).concat(hex(g)).concat(hex(b));
};
var hexDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
var hex = function hex(num) {
  return isNaN(num) ? "00" : hexDigits[(num - num % 16) / 16] + hexDigits[num % 16];
};
var wcagLevels = {
  fail: {
    range: [0, 3]
  },
  "aa Large": {
    range: [3, 4.5]
  },
  aa: {
    range: [4.5, 7]
  },
  aaa: {
    range: [7, 22]
  }
};
var colorHexArray = Array.from(Object.values(cssColorNames));
var fancyColorHexArray = Array.from(Object.values(objectFlip(_palettes_js__WEBPACK_IMPORTED_MODULE_1__["colorLib"])));
var lastKnownClosestColor; // findNearestColor finds the name in the color lib that is closest to the color
// supplies as an argument

var findNearestColor = function findNearestColor(hex) {
  if (typeof hex !== "string") throw new Error("findNearestColor needs a hex color in string format. the parameter passed was type ".concat(_typeof(hex), "."));
  var rgba1 = hexToRGBA(hex);
  var delta = FANCY_COLOR_NAMES.on == false ? 3 * 256 * 256 : 9 * 2332 * 2332;
  var rgba2, result;

  if (FANCY_COLOR_NAMES.on === false) {
    colorHexArray.forEach(function (colorInArray) {
      rgba2 = hexToRGBA(colorInArray);

      if (Math.pow(rgba2.r - rgba1.r, 2) + Math.pow(rgba2.g - rgba1.g, 2) + Math.pow(rgba2.b - rgba1.b, 2) < delta) {
        delta = Math.pow(rgba2.r - rgba1.r, 2) + Math.pow(rgba2.g - rgba1.g, 2) + Math.pow(rgba2.b - rgba1.b, 2);
        lastKnownClosestColor = colorInArray;
        result = colorInArray;
      }
    });
  } else {
    fancyColorHexArray.forEach(function (colorInArray) {
      rgba2 = hexToRGBA(colorInArray);

      if (Math.pow(rgba2.r - rgba1.r, 2) + Math.pow(rgba2.g - rgba1.g, 2) + Math.pow(rgba2.b - rgba1.b, 2) < delta) {
        delta = Math.pow(rgba2.r - rgba1.r, 2) + Math.pow(rgba2.g - rgba1.g, 2) + Math.pow(rgba2.b - rgba1.b, 2);
        lastKnownClosestColor = colorInArray;
        result = colorInArray;
      }
    });
  }

  var results;
  var colorToFind = result !== undefined ? result : lastKnownClosestColor;

  for (var key in cssColorNames) {
    if (cssColorNames.hasOwnProperty(key)) if (cssColorNames[key].indexOf(colorToFind) != -1) results = key;
  }

  return results;
};
var findNearestAAAColor = function findNearestAAAColor(background, text) {
  var nearestTo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "text";
  // get current contrast ratio
  var currCr = getContrastRatio(text, background).number; // return same colors if it's already a ratio >= 7

  if (currCr >= 7) return {
    background: background,
    text: text
  };
  var nearestAAAColor; // get rgb values for background and foreground

  background = text.replace(/^\s*#|\s*$/g, "");
  text = text.replace(/^\s*#|\s*$/g, ""); // function to change the brightness of a color

  var changeBrightness = function changeBrightness(hex, percent) {
    var r = parseInt(hex.substring(0, 2), 16),
        g = parseInt(hex.substring(2, 4), 16),
        b = parseInt(hex.substring(4), 16);
    return "#" + (0 | (1 << 8) + r + (256 - r) * percent / 100).toString(16).substring(1) + (0 | (1 << 8) + g + (256 - g) * percent / 100).toString(16).substring(1) + (0 | (1 << 8) + b + (256 - b) * percent / 100).toString(16).substring(1);
  };

  changeBrightness(background, 10); // get brightness of both colors
  // if contrast ratio is not aaa... (nearestTo is the color that will be changed)

  while (currCr < 7) {
    break;
  }

  return nearestTo == "background" ? {
    background: nearestAAAColor,
    text: text
  } : {
    background: background,
    text: nearestAAAColor
  };
}; // this is a method for allowing the user to copy a color swatch's contents by clicking on it

var setColorSwatchListeners = function setColorSwatchListeners() {
  var copyColor = function copyColor(element, e) {
    e.preventDefault();
    window.getSelection().selectAllChildren(element);
    document.execCommand("copy");
  };

  Array.from(backgroundShades.children).forEach(function (element) {
    element.addEventListener("click", function (e) {
      copyColor(element, e);
    });
  });
  Array.from(textShades.children).forEach(function (element) {
    element.addEventListener("click", function (e) {
      copyColor(element, e);
    });
  });
};
setColorSwatchListeners(); // this is called to update global colors every time a color slider is changed

var setComputedColors = function setComputedColors() {
  var pushToHistory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  setColorNames();
  var bgrgb = getComputedStyle(_main_js__WEBPACK_IMPORTED_MODULE_0__["colorDisplay"]).backgroundColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  var txtrgb = getComputedStyle(_main_js__WEBPACK_IMPORTED_MODULE_0__["colorName"]).color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  var f = bgrgb;
  var background = {
    r: f[1],
    g: f[2],
    b: f[3]
  };
  var brightness = Math.round((parseInt(background.r) * 299 + parseInt(background.g) * 587 + parseInt(background.b) * 114) / 1000);

  if (brightness > 125 && header.classList.contains("black") == false) {
    header.classList.add("black");
  } else if (brightness < 125 && header.classList.contains("black") == true) {
    header.classList.remove("black");
  }

  _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].defbgRGB = {
    r: bgrgb[1],
    g: bgrgb[2],
    b: bgrgb[3]
  };
  _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].defbgHex = rgbToHex(_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].defbgRGB.r, _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].defbgRGB.g, _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].defbgRGB.b);
  _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].deftxtRGB = {
    r: txtrgb[1],
    g: txtrgb[2],
    b: txtrgb[3]
  };
  _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].deftxtHex = rgbToHex(_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].deftxtRGB.r, _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].deftxtRGB.g, _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].deftxtRGB.b);
  var bgCssName = document.getElementById("css-name");
  var rBGVal = document.getElementById("redBGValue");
  var gBGVal = document.getElementById("greenBGValue");
  var bBGVal = document.getElementById("blueBGValue");
  var rtxtVal = document.getElementById("redtxtValue");
  var gtxtVal = document.getElementById("greentxtValue");
  var btxtVal = document.getElementById("bluetxtValue");
  var hexBGVal = document.getElementById("hex-code");
  var rgbBGVal = document.getElementById("rgb-code");
  var hslBGVal = document.getElementById("hsl-code");
  var hslVals = rgbToHSL(_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].defbgRGB.r, _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].defbgRGB.g, _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].defbgRGB.b);
  var hsltxtVals = rgbToHSL(_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].deftxtRGB.r, _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].deftxtRGB.g, _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].deftxtRGB.b);
  var currentContrast = getContrastRatio(_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].deftxtHex, _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].defbgHex);
  var contrastRatioNumber = currentContrast.number;
  var contrastRatioString = currentContrast.string;
  var bgColorName = hexToColorName(cssColorNames, _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].defbgHex);
  var txtColorName = hexToColorName(cssColorNames, _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].deftxtHex);
  var oldColorObject = _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].colorObject;
  _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].colorObject = {
    bg: {
      rgb: _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].defbgRGB,
      hex: _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].defbgHex
    },
    text: {
      rgb: _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].deftxtRGB,
      hex: _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].deftxtHex
    }
  };

  if (_main_js__WEBPACK_IMPORTED_MODULE_0__["currentColorSetting"].setting == "background") {
    hexBGVal.value = _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].defbgHex;
    rgbBGVal.innerText = "rgb(".concat(_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].defbgRGB.r, ", ").concat(_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].defbgRGB.g, ", ").concat(_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].defbgRGB.b, ")");
    hslBGVal.innerText = "hsl(".concat(hslVals.h, ", ").concat(hslVals.s, ", ").concat(hslVals.l, ")");
    bgCssName.innerText = bgColorName ? "color name (actual): ".concat(bgColorName.toLowerCase()) : "color name (closest): ".concat(findNearestColor(_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].defbgHex).toLowerCase());
  } else if (_main_js__WEBPACK_IMPORTED_MODULE_0__["currentColorSetting"].setting == "text") {
    hexBGVal.value = _main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].deftxtHex;
    rgbBGVal.innerText = "rgb(".concat(_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].deftxtRGB.r, ", ").concat(_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].deftxtRGB.g, ", ").concat(_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].deftxtRGB.b, ")");
    hslBGVal.innerText = "hsl(".concat(hsltxtVals.h, ", ").concat(hsltxtVals.s, ", ").concat(hsltxtVals.l, ")");
    bgCssName.innerText = txtColorName ? "color name (actual): ".concat(txtColorName.toLowerCase()) : "color name (closest): ".concat(findNearestColor(_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].deftxtHex).toLowerCase());
  }

  rBGVal.innerText = bgrgb[1];
  gBGVal.innerText = bgrgb[2];
  bBGVal.innerText = bgrgb[3];
  rtxtVal.innerText = txtrgb[1];
  gtxtVal.innerText = txtrgb[2];
  btxtVal.innerText = txtrgb[3];
  _main_js__WEBPACK_IMPORTED_MODULE_0__["contrastRatioStringDisplay"].innerText = "contrast ratio: ".concat(contrastRatioString);

  for (var i in wcagLevels) {
    for (var j in wcagLevels[i]) {
      var levels = wcagLevels[i][j];

      if (contrastRatioNumber >= levels[0] && contrastRatioNumber <= levels[1]) {
        _main_js__WEBPACK_IMPORTED_MODULE_0__["contrastRatioNumberDisplay"].innerText = "wcag: ".concat(contrastRatioNumber.toFixed(2).toString().padEnd(4, "0").padStart(5, "0"), " (").concat(i.toUpperCase(), ")");
      }
    }
  }

  if (history.initialColorHistory == true && pushToHistory == true) {
    history.initialColorHistory = false;
    history.colorHistory.push(_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].colorObject);
  }

  if (oldColorObject != undefined && pushToHistory == true) {
    history.colorHistory.push(_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].colorObject);
    history.colorHistoryIndex++;
  }

  var bgAlts = [_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].colorObject.bg.hex];
  var textAlts = [_main_js__WEBPACK_IMPORTED_MODULE_0__["globalColors"].colorObject.text.hex];

  for (var _i2 = 1; _i2 < 6; _i2++) {
    var newShadeBg = void 0,
        newShadeText = void 0;
    newShadeBg = changeShade(bgAlts[_i2 - 1], -15);
    newShadeText = changeShade(textAlts[_i2 - 1], -15);

    if (newShadeBg == "#000000") {
      newShadeBg = changeShade(bgAlts[0], 15);
      bgAlts.unshift(newShadeBg);
    } else bgAlts.push(newShadeBg);

    if (newShadeText == "#000000") {
      newShadeText = changeShade(textAlts[0], 15);
      textAlts.unshift(newShadeText);
    } else textAlts.push(newShadeText);
  } // function determines the lightness of the background of the alternative shades
  // and uses that information to determine whether the text in the alternative
  // shade box should be black or white


  var manageBoxTextColor = function manageBoxTextColor(box) {
    var f = getComputedStyle(box)["background-color"].match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    var background = {
      r: f[1],
      g: f[2],
      b: f[3]
    };
    var brightness = Math.round((parseInt(background.r) * 299 + parseInt(background.g) * 587 + parseInt(background.b) * 114) / 1000);

    if (brightness > 125 && box.classList.contains("blackText") == false) {
      box.classList.add("blackText");
      header.classList.add("black");
    } else if (brightness < 125 && box.classList.contains("blackText") == true) {
      box.classList.remove("blackText");
      header.classList.remove("black");
    }
  };

  Array.from(backgroundShades.children).forEach(function (box, i) {
    box.style.backgroundColor = bgAlts[i];
    box.children[0].textContent = bgAlts[i].toString();
    manageBoxTextColor(box);
  });
  Array.from(textShades.children).forEach(function (box, i) {
    box.style.backgroundColor = textAlts[i];
    box.children[0].textContent = textAlts[i].toString();
    manageBoxTextColor(box);
  });
  enableScroll();
};
var mobilecheck = function mobilecheck() {
  var check = false;

  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);

  return check;
}; // enable/disable scrolling
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36

var keys = {
  37: 1,
  38: 1,
  39: 1,
  40: 1
};

var preventDefault = function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
};

var preventDefaultForScrollKeys = function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
};

var disableScroll = function disableScroll() {
  if (window.addEventListener) window.addEventListener("DOMMouseScroll", preventDefault, false);
  document.addEventListener("wheel", preventDefault, {
    passive: false
  });
  window.onwheel = preventDefault;
  window.onmousewheel = document.onmousewheel = preventDefault;
  window.ontouchmove = preventDefault;
  document.onkeydown = preventDefaultForScrollKeys;
};
var enableScroll = function enableScroll() {
  if (window.removeEventListener) window.removeEventListener("DOMMouseScroll", preventDefault, false);
  document.removeEventListener("wheel", preventDefault, {
    passive: false
  });
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
};
var selectText = function selectText(element) {
  element = document.getElementById(element);

  if (document.body.createTextRange) {
    var range = document.body.createTextRange();
    range.moveToElementText(element);
    range.select();
  } else if (window.getSelection) {
    var selection = window.getSelection();

    var _range = document.createRange();

    _range.selectNodeContents(element);

    selection.removeAllRanges();
    selection.addRange(_range);
  } else {
    console.warn("could not select text in element: unsupported browser.");
  }
};
var geturlvars = function geturlvars() {
  var vars = {};
  var regex = /[?&]+([^=&]+)=([^&]*)/gi;
  window.location.href.replace(regex, function (match, key, val) {
    return vars[key] = val;
  });
  return vars;
};
var updateMessage = document.getElementById("updateMessage");
var triggerUpdate = document.getElementById("triggerUpdate");
var closeUpdateMessage = document.getElementById("closeUpdateMessage");

var showUpdateMessage = function showUpdateMessage() {
  updateMessage.classList.add("visible");
  triggerUpdate.addEventListener("click", function () {
    return location.reload(true);
  });
  closeUpdateMessage.addEventListener("click", function () {
    return updateMessage.classList.remove("visible");
  });
};

var scrollSmooth = function scrollSmooth(parent, target) {
  if (target == "bottom") {
    parent.scrollTo({
      behavior: "smooth",
      left: 0,
      top: document.body.scrollHeight
    });
  } else if (target instanceof Node) {
    parent.scrollTo({
      behavior: "smooth",
      left: 0,
      top: target.offsetTop
    });
  }
};
var propSort = function propSort(prop) {
  var order = 1;

  if (prop[0] === "-") {
    order = -1;
    prop = prop.substring(1);
  }

  return function (a, b) {
    return order == -1 ? b[prop].localeCompare(a[prop]) : a[prop].localeCompare(b[prop]);
  };
};
var toCamelCase = function toCamelCase(string) {
  return string.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index == 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, "");
};

/***/ }),

/***/ "./styles/main.min.css":
/*!*****************************!*\
  !*** ./styles/main.min.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.min.css */ "./node_modules/css-loader/dist/cjs.js!./styles/main.min.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=main.6bf5cd219781ea977d9a.js.map