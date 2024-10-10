"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 29:
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VideoController = void 0;
const common_1 = __webpack_require__(6);
const jwt_auth_guard_1 = __webpack_require__(30);
const video_service_1 = __webpack_require__(31);
let VideoController = class VideoController {
    constructor(videoService) {
        this.videoService = videoService;
    }
    listVideos(page) {
        return this.videoService.listVideos(page);
    }
    getVideoById(id) {
        return this.videoService.getVideo(id);
    }
    searchVideos(searchQuery) {
        return this.videoService.findVideoByTitle(searchQuery);
    }
};
exports.VideoController = VideoController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('page/:page'),
    __param(0, (0, common_1.Param)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "listVideos", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "getVideoById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('search/:title'),
    __param(0, (0, common_1.Param)('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "searchVideos", null);
exports.VideoController = VideoController = __decorate([
    (0, common_1.Controller)('videos'),
    __metadata("design:paramtypes", [typeof (_a = typeof video_service_1.VideoService !== "undefined" && video_service_1.VideoService) === "function" ? _a : Object])
], VideoController);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("82f2d0206f1880269163")
/******/ })();
/******/ 
/******/ }
;