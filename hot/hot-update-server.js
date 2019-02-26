exports.id = "main";
exports.modules = {

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ \"./src/server/router.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ \"./src/server/db.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_db__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(\"build\"));\napp.get(\"/all-retailers-api\", function (req, res) {\n  _db__WEBPACK_IMPORTED_MODULE_2___default.a.allRetailers().then(function (retailers) {\n    res.json({\n      retailers: retailers.rows.map(function (_ref) {\n        var name = _ref.name,\n            url = _ref.url,\n            id = _ref.id;\n        return {\n          name: name,\n          url: url,\n          id: id\n        };\n      })\n    });\n  });\n});\napp.get(\"/rlp-data-api/:id\", function (req, res) {\n  var id = req.params.id;\n  _db__WEBPACK_IMPORTED_MODULE_2___default.a.retailerData(id).then(function (retailer) {\n    // retailer.rows[0].kw1 = retailer.rows[0].kw1[0].toUpperCase();\n    // console.log(retailer.rows[0]);\n    res.json({\n      retailer: retailer.rows[0]\n    });\n  });\n});\napp.post(\"/search-retailers-api\", function (req, res) {\n  console.log(req); // db.search().then(retailers => {\n  //     console.log(retailers);\n  // });\n\n  res.json({\n    yo: \"yo\"\n  });\n});\napp.get(\"*\", _router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.listen(8080, function () {\n  console.log(\"Main server listening on port 8080 --->\");\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ })

};