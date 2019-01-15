exports.id = "main";
exports.modules = {

/***/ "./src/server/db.js":
/*!**************************!*\
  !*** ./src/server/db.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var spicedPg = __webpack_require__(/*! spiced-pg */ \"spiced-pg\"); //Makes connection from server to database\n\n\nvar db = spicedPg(process.env.DATABASE_URL || __webpack_require__(/*! ../../secrets.json */ \"./secrets.json\").pgLocalLogin);\n\nmodule.exports.allRetailers = function () {\n  return db.query(\"SELECT * FROM retailers\");\n}; // module.exports.createRetailer = (\n//     name,\n//     quality,\n//     active_vouchers,\n//     published,\n//     indexed,\n//     kw1,\n//     url\n// ) => {\n//     const query = `INSERT INTO retailers (name, quality, active_vouchers, published, indexed, KW1, url) VALUES ($1, $2, $3, $4, $5, $6, $7)`;\n//     return db.query(query, [\n//         name,\n//         quality,\n//         active_vouchers,\n//         published,\n//         indexed,\n//         kw1,\n//         url\n//     ]);\n// };\n\n//# sourceURL=webpack:///./src/server/db.js?");

/***/ })

};