(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vuejs-uib-pagination"] = factory();
	else
		root["vuejs-uib-pagination"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = identity;
/* harmony export (immutable) */ __webpack_exports__["b"] = isDefined;
function identity(value) {
    return value;
}
function isDefined(value) {
    return typeof value !== "undefined";
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_data__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_watch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_index_html__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_index_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__template_index_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_props__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_methods__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_computed__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_directives__ = __webpack_require__(8);







function install(Vue, options) {
    Vue.component("uib-pagination", {
        data: __WEBPACK_IMPORTED_MODULE_0__core_data__["a" /* default */],
        props: __WEBPACK_IMPORTED_MODULE_3__core_props__,
        watch: __WEBPACK_IMPORTED_MODULE_1__core_watch__["a" /* default */],
        methods: __WEBPACK_IMPORTED_MODULE_4__core_methods__,
        template: __WEBPACK_IMPORTED_MODULE_2__template_index_html___default.a,
        computed: __WEBPACK_IMPORTED_MODULE_5__core_computed__,
        directives: __WEBPACK_IMPORTED_MODULE_6__core_directives__
    });
}

/* harmony default export */ __webpack_exports__["default"] = (install);
if (typeof window !== "undefined" && window["Vue"]) {
    window["Vue"].use(install);
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = (function () {
    var currentPage = __WEBPACK_IMPORTED_MODULE_0__utils__["b" /* isDefined */](this.value.currentPage) ? this.value.currentPage : 1;
    var data = { currentPage: currentPage };
    return data;
});
;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var watch = {
    "value.currentPage": function (value, oldValue) {
        this.currentPage = value;
        if (oldValue == null) {
            return;
        }
        this.$emit("change");
    }
};
/* harmony default export */ __webpack_exports__["a"] = (watch);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<ul class=pagination role=menu> <li role=menuitem v-if=boundaryLinks :class=\"{ disabled: isNoPreviousOrDisabled }\" class=pagination-first> <a href @click=\"selectPage(1, $event)\" :disabled=isNoPreviousOrDisabled v-uib-tabindex-toggle=isNoPreviousOrDisabled>{{ getText('first') }}</a> </li> <li role=menuitem v-if=directionLinks :class=\"{ disabled: isNoPreviousOrDisabled }\" class=pagination-prev> <a href @click=\"selectPage(currentPage - 1, $event)\" :disabled=isNoPreviousOrDisabled v-uib-tabindex-toggle=isNoPreviousOrDisabled>{{ getText('previous') }}</a> </li> <li role=menuitem v-for=\"(page, index) in pages\" :key=index :class=\"{ active: page.active, disabled: disabled && !page.active }\" class=pagination-page> <a href @click=\"selectPage(page.number, $event)\" :disabled=\"disabled && !page.active\" v-uib-tabindex-toggle=\"disabled && !page.active\" v-html=page.text></a> </li> <li role=menuitem v-if=directionLinks :class=\"{ disabled: isNoNextOrDisabled }\" class=pagination-next> <a href @click=\"selectPage(currentPage + 1, $event)\" :disabled=isNoNextOrDisabled v-uib-tabindex-toggle=isNoNextOrDisabled>{{ getText('next') }}</a> </li> <li role=menuitem v-if=boundaryLinks :class=\"{ disabled: isNoNextOrDisabled }\" class=pagination-last> <a href @click=\"selectPage(totalPages, $event)\" :disabled=isNoNextOrDisabled v-uib-tabindex-toggle=isNoNextOrDisabled>{{ getText('last') }}</a> </li> </ul>";

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundaryLinks", function() { return boundaryLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundaryLinkNumbers", function() { return boundaryLinkNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionLinks", function() { return directionLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disabled", function() { return disabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstText", function() { return firstText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceEllipses", function() { return forceEllipses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemsPerPage", function() { return itemsPerPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastText", function() { return lastText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxSize", function() { return maxSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextText", function() { return nextText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageLabel", function() { return pageLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previousText", function() { return previousText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalItems", function() { return totalItems; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

var boundaryLinks = {
    type: Boolean,
    default: false
};
var boundaryLinkNumbers = {
    type: Boolean,
    default: false
};
var directionLinks = {
    type: Boolean,
    default: true
};
var disabled = {
    type: Boolean,
    default: false
};
var firstText = {
    type: String,
    default: "First"
};
var forceEllipses = {
    type: Boolean,
    default: false
};
var itemsPerPage = {
    type: Number,
    default: 10
};
var lastText = {
    type: String,
    default: "Last"
};
var maxSize = {
    type: Number,
    default: undefined
};
var nextText = {
    type: String,
    default: "Next"
};
/* vModel { currentPage: 1, numPages: 10 } */
var value = {
    type: Object,
    required: true,
    validator: function (value) {
        return !__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* isDefined */](value.currentPage) || typeof value.currentPage === "number";
    }
};
var pageLabel = {
    type: Function,
    default: __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* identity */]
};
var previousText = {
    type: String,
    default: "Previous"
};
var rotate = {
    type: Boolean,
    default: true
};
var totalItems = {
    type: Number,
    default: 0
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getText"] = getText;
/* harmony export (immutable) */ __webpack_exports__["selectPage"] = selectPage;
/* harmony export (immutable) */ __webpack_exports__["makePage"] = makePage;
/* harmony export (immutable) */ __webpack_exports__["createDataForModel"] = createDataForModel;
function getText(key) {
    return this[key + "Text"];
}
function selectPage(page, evt) {
    if (evt) {
        evt.preventDefault();
    }
    var clickAllowed = !this.disabled || !evt;
    if (clickAllowed && this.currentPage !== page && page > 0 && page <= this.totalPages) {
        if (evt && evt.target) {
            evt.target.blur();
        }
        this.currentPage = page;
    }
}
function makePage(number, text, isActive) {
    return { number: number, text: text, active: isActive };
}
function createDataForModel(currentPage, numPages) {
    var data = { currentPage: currentPage, numPages: numPages };
    Object.defineProperties(data, {
        numPages: {
            get: function () {
                return numPages;
            }
        }
    });
    return data;
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["isNoPreviousOrDisabled"] = isNoPreviousOrDisabled;
/* harmony export (immutable) */ __webpack_exports__["isNoNextOrDisabled"] = isNoNextOrDisabled;
/* harmony export (immutable) */ __webpack_exports__["noNext"] = noNext;
/* harmony export (immutable) */ __webpack_exports__["noPrevious"] = noPrevious;
/* harmony export (immutable) */ __webpack_exports__["totalPages"] = totalPages;
/* harmony export (immutable) */ __webpack_exports__["pages"] = pages;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

function isNoPreviousOrDisabled() {
    return this.noPrevious || this.disabled;
}
function isNoNextOrDisabled() {
    return this.noNext || this.disabled;
}
function noNext() {
    return this.value.currentPage === this.totalPages;
}
function noPrevious() {
    return this.value.currentPage === 1;
}
function totalPages() {
    var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
    return Math.max(totalPages || 0, 1);
}
function pages() {
    var pages = [];
    if (this.currentPage <= 0 || this.currentPage > this.totalPages) {
        return pages;
    }
    // Default page limits
    var startPage = 1, endPage = this.totalPages;
    var isMaxSized = __WEBPACK_IMPORTED_MODULE_0__utils__["b" /* isDefined */](this.maxSize) && this.maxSize < this.totalPages;
    // recompute if maxSize
    if (isMaxSized) {
        if (this.rotate) {
            // Current page is displayed in the middle of the visible ones 
            startPage = Math.max(this.currentPage - Math.floor(this.maxSize / 2), 1);
            endPage = startPage + this.maxSize - 1;
            // Adjust if limit is exceeded
            if (endPage > this.totalPages) {
                endPage = this.totalPages;
                startPage = endPage - this.maxSize + 1;
            }
        }
        else {
            // Visible pages are paginated with maxSize
            startPage = (Math.ceil(this.currentPage / this.maxSize) - 1) * this.maxSize + 1;
            // Adjust last page if limit is exceeded
            endPage = Math.min(startPage + this.maxSize - 1, this.totalPages);
        }
    }
    // Add page number links
    for (var number = startPage; number <= endPage; number++) {
        var page = this.makePage(number, this.pageLabel(number), number === this.currentPage);
        pages.push(page);
    }
    // Add links to move between page sets
    if (isMaxSized && this.maxSize > 0 && (!this.rotate || this.forceEllipses || this.boundaryLinkNumbers)) {
        if (startPage > 1) {
            if (!this.boundaryLinkNumbers || startPage > 3) {
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (this.boundaryLinkNumbers) {
                if (startPage === 3) {
                    var secondPageLink = this.makePage(2, '2', false);
                    pages.unshift(secondPageLink);
                }
                //add the first page
                var firstPageLink = this.makePage(1, '1', false);
                pages.unshift(firstPageLink);
            }
        }
        if (endPage < this.totalPages) {
            if (!this.boundaryLinkNumbers || endPage < this.totalPages - 2) {
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
            if (this.boundaryLinkNumbers) {
                if (endPage === this.totalPages - 2) {
                    var secondToLastPageLink = this.makePage(this.totalPages - 1, this.totalPages - 1, false);
                    pages.push(secondToLastPageLink);
                }
                //add the last page
                var lastPageLink = this.makePage(this.totalPages, this.totalPages, false);
                pages.push(lastPageLink);
            }
        }
    }
    //  Emit the new data to the parent.
    this.$emit("input", this.createDataForModel(this.currentPage, this.totalPages));
    return pages;
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["uibTabindexToggle"] = uibTabindexToggle;
function uibTabindexToggle(el, binding) {
    if (binding.value)
        el.setAttribute("tabindex", "-1");
    else
        el.removeAttribute("tabindex");
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=vuejs-uib-pagination.js.map