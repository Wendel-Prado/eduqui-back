"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 11:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtConfigService = void 0;
const common_1 = __webpack_require__(6);
const constants_1 = __webpack_require__(12);
let JwtConfigService = class JwtConfigService {
    createJwtOptions() {
        return {
            secret: constants_1.JWT_SECRET,
            global: true,
            signOptions: { expiresIn: '12h' },
        };
    }
};
exports.JwtConfigService = JwtConfigService;
exports.JwtConfigService = JwtConfigService = __decorate([
    (0, common_1.Injectable)()
], JwtConfigService);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0ee6a2d7f4b0ef919f4a")
/******/ })();
/******/ 
/******/ }
;