/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/projects/project-2/controller.js":
/*!*********************************************************!*\
  !*** ./src/components/projects/project-2/controller.js ***!
  \*********************************************************/
/***/ (function() {

//
// Controller
//

/* global jQuery */

//
// Initialization
//

(function ($) {
  const bsbProject2 = {
    gridSelector: '.bsb-project-2-grid',
    itemSelector: '.bsb-project-2-item',
    grid: '',
    // Initiated
    initiated() {
      // Element
      const el = document.querySelector(bsbProject2.gridSelector);
      // Selector Validation
      if (typeof el !== 'undefined' && el !== null) {
        el.classList.add('bsb-project-2-initiated');
      }
    },
    // Init
    init() {
      // Element
      const el = $(bsbProject2.gridSelector);

      // Selector Validation
      if (el.length > 0) {
        // Isotope Grid
        bsbProject2.grid = el.imagesLoaded(function () {
          // init Isotope after all images have loaded
          bsbProject2.grid.isotope({
            // options
            itemSelector: bsbProject2.itemSelector,
            layoutMode: 'packery',
            transitionDuration: '0.8s'
          });
        });

        // Isotope Initiated
        bsbProject2.initiated();
      }
    }
  };

  //
  // Document Ready Modules
  //

  function docReadyModules() {}

  //
  // Window Load Modules
  //

  function winLoadModules() {
    bsbProject2.init();
  }

  //
  // Document Ready
  //

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', docReadyModules);
  } else {
    docReadyModules();
  }

  //
  // Window Load
  //

  window.addEventListener('load', winLoadModules, false);
})(jQuery);

/***/ }),

/***/ "./src/components/projects/project-2/component.scss":
/*!**********************************************************!*\
  !*** ./src/components/projects/project-2/component.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!********************************************************!*\
  !*** ./src/components/projects/project-2/project-2.js ***!
  \********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.scss */ "./src/components/projects/project-2/component.scss");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/components/projects/project-2/controller.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_controller__WEBPACK_IMPORTED_MODULE_1__);
//
// SASS
//



//
// JS
//


}();
/******/ })()
;
//# sourceMappingURL=project-2.js.map