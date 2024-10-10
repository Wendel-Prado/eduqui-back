"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 18:
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
exports.UserService = void 0;
const common_1 = __webpack_require__(6);
const mongoose_1 = __webpack_require__(10);
const mongoose_2 = __webpack_require__(19);
const user_schema_1 = __webpack_require__(20);
const jwt_1 = __webpack_require__(9);
const bcrypt = __webpack_require__(21);
let UserService = class UserService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async createUser(createUserDto) {
        const { name, email, password } = createUserDto;
        if (!name || !email || !password)
            throw new common_1.BadRequestException('Nome, email e senha são obrigatórios!');
        const user = await this.findUserByUsername(email);
        if (user)
            throw new common_1.BadRequestException('Email cadastrado!');
        if (password.length < 6)
            throw new common_1.BadRequestException('A senha deve ter pelo menos 6 caracteres.');
        createUserDto.password = await this.encriptPassword(password);
        const createdUser = new this.userModel(createUserDto);
        createdUser.save();
        const payload = { email: createdUser.email, sub: String(createdUser._id) };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async findUserByUsername(email) {
        return await this.userModel.findOne({ email }).exec();
    }
    async encriptPassword(password) {
        return await bcrypt.hash(password, 10);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], UserService);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1984ba44da37ba89345c")
/******/ })();
/******/ 
/******/ }
;