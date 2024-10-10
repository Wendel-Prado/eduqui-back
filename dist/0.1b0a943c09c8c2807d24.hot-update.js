"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 31:
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VideoService = void 0;
const common_1 = __webpack_require__(6);
const mongoose_1 = __webpack_require__(10);
const mongoose_2 = __webpack_require__(19);
const api_service_1 = __webpack_require__(32);
const redis_config_1 = __webpack_require__(34);
let VideoService = class VideoService {
    constructor(videoModel, api) {
        this.videoModel = videoModel;
        this.api = api;
    }
    async listVideos(page) {
        const cacheKey = `videos-page-${page || 1}`;
        try {
            const cachedData = await redis_config_1.default.get(cacheKey);
            if (cachedData) {
                const data = JSON.parse(cachedData);
                return this.findVideoViews(data) || [];
            }
            const url = `videos/?page=${page || 1}`;
            const { data } = await this.api.request('GET', url);
            const processedData = await this.findVideoViews(data);
            await this.setCache(cacheKey, processedData);
            return processedData || [];
        }
        catch (err) {
            return err;
        }
    }
    async getVideo(id) {
        if (!id)
            throw new common_1.BadRequestException('É necessário um ID válido');
        try {
            const url = `videos/${id}`;
            const { data } = await this.api.request('GET', url);
            let video = await this.updateVideoViews(data.id);
            if (!video)
                video = await this.insertVideo(data.id, data.title);
            if (video)
                data.views = video.views;
            return data || {};
        }
        catch (err) {
            return err;
        }
    }
    async findVideoByTitle(searchQuery) {
        const cacheKey = `videos-title-${searchQuery}`;
        try {
            const cachedData = await redis_config_1.default.get(cacheKey);
            if (cachedData) {
                const data = JSON.parse(cachedData);
                return this.findVideoViews(data);
            }
            const url = `videos/?title=${searchQuery}`;
            const { data } = await this.api.request('GET', url);
            const processedData = await this.findVideoViews(data);
            await this.setCache(cacheKey, processedData);
            return processedData || [];
        }
        catch (err) {
            return err;
        }
    }
    async insertVideo(video_id, title) {
        return await new this.videoModel({
            video_id,
            title,
            views: 1,
        }).save();
    }
    async updateVideoViews(video_id) {
        return await this.videoModel
            .findOneAndUpdate({ video_id }, { $inc: { views: 1 } }, { new: true })
            .lean();
    }
    async findVideoViews(data) {
        const ids = data.videos?.map((row) => row.id);
        const videosViews = await this.videoModel
            .find({ video_id: { $in: ids } })
            .lean();
        data.videos.forEach((row) => {
            const videoFound = videosViews.find((e) => e.video_id == row.id);
            if (videoFound) {
                row.views = videoFound.views;
            }
        });
        return data;
    }
    async setCache(cacheKey, data) {
        await redis_config_1.default.set(cacheKey, JSON.stringify(data), {
            EX: 3600,
        });
    }
};
exports.VideoService = VideoService;
exports.VideoService = VideoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Video')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof api_service_1.ApiService !== "undefined" && api_service_1.ApiService) === "function" ? _b : Object])
], VideoService);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6d850d933816b12393e6")
/******/ })();
/******/ 
/******/ }
;