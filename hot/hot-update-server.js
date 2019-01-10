exports.id = "main";
exports.modules = {

/***/ "./src/retailers.js":
/*!**************************!*\
  !*** ./src/retailers.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar retailers = [{\n  path: \"/amazon-discount-code\",\n  name: \"Amazon\",\n  id: \"1\"\n}, {\n  path: \"/zalando-promo-code\",\n  name: \"Zalando\",\n  id: \"2\"\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (retailers);\n\n//# sourceURL=webpack:///./src/retailers.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ \"./src/server/router.js\");\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(\"build\"));\napp.get(\"*\", _router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.listen(8080, function () {\n  console.log(\"Main server listening on port 8080 --->\");\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/renderHtml.js":
/*!**********************************!*\
  !*** ./src/server/renderHtml.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderHtml; });\nfunction renderHtml(html) {\n  return \"<!doctype html>\\n  <head>\\n  <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"main.css\\\">\\n  </head>\\n  <title></title>\\n    <body>\\n      <div id=\\\"root\\\">\".concat(html, \"</div>\\n      <script src=\\\"/bundle.js\\\"></script>\\n    </body>\\n  </html>\\n\");\n}\n\n//# sourceURL=webpack:///./src/server/renderHtml.js?");

/***/ }),

/***/ "./src/server/router.js":
/*!******************************!*\
  !*** ./src/server/router.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return router; });\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ \"./src/server/routes.js\");\n/* harmony import */ var _renderHtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderHtml */ \"./src/server/renderHtml.js\");\n/* harmony import */ var _shared_Presentational_App_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Presentational/App.js */ \"./src/shared/Presentational/App.js\");\n\n\n\n\n\n\nfunction router(req, res) {\n  var match = _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].reduce(function (acc, route) {\n    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"matchPath\"])(req.url, {\n      path: route,\n      exact: true\n    }) || acc;\n  }, null);\n\n  if (!match) {\n    res.status(404).send(\"Page not found!\");\n    return;\n  }\n\n  var context = {};\n  var html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_0__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    context: context,\n    location: req.url\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_Presentational_App_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)));\n  res.status(200).send(Object(_renderHtml__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(html));\n}\n\n//# sourceURL=webpack:///./src/server/router.js?");

/***/ }),

/***/ "./src/server/routes.js":
/*!******************************!*\
  !*** ./src/server/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_Presentational_Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/Presentational/Home.js */ \"./src/shared/Presentational/Home.js\");\n/* harmony import */ var _shared_Presentational_Retailer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Presentational/Retailer.js */ \"./src/shared/Presentational/Retailer.js\");\n/* harmony import */ var _shared_Container_NotFound_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Container/NotFound.js */ \"./src/shared/Container/NotFound.js\");\n/* harmony import */ var _retailers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../retailers */ \"./src/retailers.js\");\n\n\n\n\nvar routes = [\"/\"];\n\nif (_retailers__WEBPACK_IMPORTED_MODULE_3__[\"default\"].length > 0) {\n  for (var r = 0; r <= _retailers__WEBPACK_IMPORTED_MODULE_3__[\"default\"].length - 1; ++r) {\n    routes.push(_retailers__WEBPACK_IMPORTED_MODULE_3__[\"default\"][r].path);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/server/routes.js?");

/***/ }),

/***/ "./src/shared/Container/Footer.css":
/*!*****************************************!*\
  !*** ./src/shared/Container/Footer.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/shared/Container/Footer.css?");

/***/ }),

/***/ "./src/shared/Container/Footer.js":
/*!****************************************!*\
  !*** ./src/shared/Container/Footer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.css */ \"./src/shared/Container/Footer.css\");\n/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Footer = function Footer(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", null, \"Yo! Here goes Footer\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/shared/Container/Footer.js?");

/***/ }),

/***/ "./src/shared/Container/Header.css":
/*!*****************************************!*\
  !*** ./src/shared/Container/Header.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/shared/Container/Header.css?");

/***/ }),

/***/ "./src/shared/Container/Header.js":
/*!****************************************!*\
  !*** ./src/shared/Container/Header.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.css */ \"./src/shared/Container/Header.css\");\n/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Header = function Header(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, \"Yo! Here goes Header\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/shared/Container/Header.js?");

/***/ }),

/***/ "./src/shared/Container/NotFound.js":
/*!******************************************!*\
  !*** ./src/shared/Container/NotFound.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar NotFound = function NotFound(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"404! Not found.\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\n\n//# sourceURL=webpack:///./src/shared/Container/NotFound.js?");

/***/ }),

/***/ "./src/shared/Presentational/App.css":
/*!*******************************************!*\
  !*** ./src/shared/Presentational/App.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/shared/Presentational/App.css?");

/***/ }),

/***/ "./src/shared/Presentational/App.js":
/*!******************************************!*\
  !*** ./src/shared/Presentational/App.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ \"./src/shared/Presentational/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _retailers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../retailers.js */ \"./src/retailers.js\");\n/* harmony import */ var _Container_Header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Container/Header.js */ \"./src/shared/Container/Header.js\");\n/* harmony import */ var _Container_Footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Container/Footer.js */ \"./src/shared/Container/Footer.js\");\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Home.js */ \"./src/shared/Presentational/Home.js\");\n/* harmony import */ var _Retailer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Retailer.js */ \"./src/shared/Presentational/Retailer.js\");\n/* harmony import */ var _Container_NotFound_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Container/NotFound.js */ \"./src/shared/Container/NotFound.js\");\n\n\n\n\n\n\n\n\n\nfunction App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container_Header_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/\",\n    exact: true,\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        retailers: _retailers_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n      });\n    }\n  }), _retailers_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function (_ref) {\n    var path = _ref.path,\n        id = _ref.id;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      path: path,\n      exact: true,\n      key: id,\n      render: function render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Retailer_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          id: id\n        });\n      }\n    });\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    component: _Container_NotFound_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container_Footer_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n}\n\n//# sourceURL=webpack:///./src/shared/Presentational/App.js?");

/***/ }),

/***/ "./src/shared/Presentational/Home.css":
/*!********************************************!*\
  !*** ./src/shared/Presentational/Home.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/shared/Presentational/Home.css?");

/***/ }),

/***/ "./src/shared/Presentational/Home.js":
/*!*******************************************!*\
  !*** ./src/shared/Presentational/Home.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.css */ \"./src/shared/Presentational/Home.css\");\n/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Home =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: \"render\",\n    value: function render() {\n      var top20 = this.props.retailers.map(function (_ref) {\n        var path = _ref.path,\n            name = _ref.name,\n            id = _ref.id;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          key: id\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: path\n        }, name));\n      });\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n        id: \"home\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        id: \"home-layout\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Welcome to our Discounts Page/SEO KW 1\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"supppp good quality content good quality content good quality content good quality content good quality content good quality content good quality content good quality content good quality content good quality content good quality content good quality content good quality content good quality content good quality content good quality content good quality content good quality content good quality content good quality content good quality content good quality content good quality content good quality content\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"random SEO keyword 2 here\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"figure\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"figure\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"figure\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"figure\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"figure\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"figure\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, top20)));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/shared/Presentational/Home.js?");

/***/ }),

/***/ "./src/shared/Presentational/Retailer.css":
/*!************************************************!*\
  !*** ./src/shared/Presentational/Retailer.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/shared/Presentational/Retailer.css?");

/***/ }),

/***/ "./src/shared/Presentational/Retailer.js":
/*!***********************************************!*\
  !*** ./src/shared/Presentational/Retailer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Retailer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Retailer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Retailer.css */ \"./src/shared/Presentational/Retailer.css\");\n/* harmony import */ var _Retailer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Retailer_css__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Retailer =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Retailer, _Component);\n\n  function Retailer() {\n    _classCallCheck(this, Retailer);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Retailer).apply(this, arguments));\n  }\n\n  _createClass(Retailer, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n        id: \"rlp\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        id: \"retailer-layout\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Retailer landing page: \", this.props.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"RLP CONTENT RLP CONTENT RLP CONTEEENT\")));\n    }\n  }]);\n\n  return Retailer;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/shared/Presentational/Retailer.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

};