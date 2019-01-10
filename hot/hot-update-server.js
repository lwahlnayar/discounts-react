exports.id = "main";
exports.modules = {

/***/ "./src/retailers.js":
false,

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {var express = __webpack_require__(/*! express */ \"express\");\n\nvar app = express();\napp.use(express.static(\"build\"));\napp.get(\"*\", function (req, res) {\n  res.sendFile(__dirname + \"/index.html\");\n  console.log(\"booom\");\n});\napp.listen(8080, function () {\n  console.log(\"Main server listening on port 8080 ->\");\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/renderHtml.js":
false,

/***/ "./src/server/router.js":
false,

/***/ "./src/server/routes.js":
false,

/***/ "./src/shared/Container/Footer.css":
false,

/***/ "./src/shared/Container/Footer.js":
false,

/***/ "./src/shared/Container/Header.css":
false,

/***/ "./src/shared/Container/Header.js":
false,

/***/ "./src/shared/Container/NotFound.js":
false,

/***/ "./src/shared/Presentational/App.css":
false,

/***/ "./src/shared/Presentational/App.js":
false,

/***/ "./src/shared/Presentational/Home.css":
false,

/***/ "./src/shared/Presentational/Home.js":
false,

/***/ "./src/shared/Presentational/Retailer.css":
false,

/***/ "./src/shared/Presentational/Retailer.js":
false,

/***/ "react":
false,

/***/ "react-dom/server":
false,

/***/ "react-router-dom":
false

};