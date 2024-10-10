"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 23:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.databaseProviders = void 0;
const mongoose = __webpack_require__(19);
const constants_1 = __webpack_require__(12);
exports.databaseProviders = [
    {
        provide: constants_1.DATABASE_CONNECTION,
        useFactory: () => mongoose.connect(constants_1.DATABASE_CONNECTION),
    },
];


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("92972050a57401cdcfc4")
/******/ })();
/******/ 
/******/ }
;