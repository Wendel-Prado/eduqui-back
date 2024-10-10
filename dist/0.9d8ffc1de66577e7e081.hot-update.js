"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 32:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiService = void 0;
const common_1 = __webpack_require__(6);
const axios_1 = __webpack_require__(33);
const constants_1 = __webpack_require__(12);
let ApiService = class ApiService {
    constructor() {
        this.axiosInstance = axios_1.default.create({
            baseURL: constants_1.BASE_URL_API,
            headers: {
                'Content-Type': 'application/json',
                Authorization: constants_1.TOKEN_API,
            },
        });
    }
    async request(method, url, data, config) {
        try {
            const response = await this.axiosInstance.request({
                method,
                url,
                data,
                ...config,
            });
            return response;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.ApiService = ApiService;
exports.ApiService = ApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ApiService);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e751b85fee90adbc44dd")
/******/ })();
/******/ 
/******/ }
;