"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 28:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VideoModule = void 0;
const common_1 = __webpack_require__(6);
const mongoose_1 = __webpack_require__(10);
const constants_1 = __webpack_require__(12);
const video_controller_1 = __webpack_require__(29);
const database_module_1 = __webpack_require__(22);
const video_schema_1 = __webpack_require__(36);
const api_service_1 = __webpack_require__(32);
const video_service_1 = __webpack_require__(31);
let VideoModule = class VideoModule {
};
exports.VideoModule = VideoModule;
exports.VideoModule = VideoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            mongoose_1.MongooseModule.forFeature([{ name: constants_1.VIDEO_MODEL, schema: video_schema_1.VideoSchema }]),
        ],
        controllers: [video_controller_1.VideoController],
        providers: [video_service_1.VideoService, api_service_1.ApiService],
    })
], VideoModule);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9d8ffc1de66577e7e081")
/******/ })();
/******/ 
/******/ }
;