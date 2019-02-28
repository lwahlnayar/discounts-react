webpackHotUpdate("main",{

/***/ "./src/shared/Container/Searchbar.js":
/*!*******************************************!*\
  !*** ./src/shared/Container/Searchbar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Searchbar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _Searchbar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Searchbar.css */ \"./src/shared/Container/Searchbar.css\");\n/* harmony import */ var _Searchbar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Searchbar_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../axios */ \"./src/axios.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\n\nvar Searchbar =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Searchbar, _Component);\n\n  function Searchbar() {\n    var _this;\n\n    _classCallCheck(this, Searchbar);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Searchbar).call(this));\n    _this.state = {\n      searchResults: []\n    };\n    _this.search = _this.search.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.ajaxCall = _this.ajaxCall.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(Searchbar, [{\n    key: \"search\",\n    value: function search(e) {\n      if (e.target.value.length == \"0\") {\n        return this.setState({\n          searchResults: []\n        });\n      }\n\n      var input = {\n        input: e.target.value\n      };\n      if (this.timerId) clearTimeout(this.timerId);\n      this.timerId = setTimeout(this.ajaxCall, 2500, input);\n    }\n  }, {\n    key: \"ajaxCall\",\n    value: function ajaxCall(obj) {\n      var _this2 = this;\n\n      _axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/search-retailers-api\", obj).then(function (_ref) {\n        var data = _ref.data;\n\n        _this2.setState({\n          searchResults: data.searchResults\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"searchbar\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        placeholder: \"Find a shop\",\n        onChange: this.search\n      }));\n    }\n  }]);\n\n  return Searchbar;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/shared/Container/Searchbar.js?");

/***/ })

})