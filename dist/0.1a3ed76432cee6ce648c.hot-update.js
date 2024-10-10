"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 8:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(6);
const jwt_1 = __webpack_require__(9);
const mongoose_1 = __webpack_require__(10);
const jwt_config_1 = __webpack_require__(11);
const constants_1 = __webpack_require__(12);
const auth_controller_1 = __webpack_require__(13);
const database_module_1 = __webpack_require__(22);
const jwt_strategy_1 = __webpack_require__(24);
const user_schema_1 = __webpack_require__(20);
const auth_service_1 = __webpack_require__(17);
const user_service_1 = __webpack_require__(18);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            jwt_1.JwtModule.registerAsync({
                useClass: jwt_config_1.JwtConfigService,
            }),
            mongoose_1.MongooseModule.forFeature([{ name: constants_1.USER_MODEL, schema: user_schema_1.UserSchema }]),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, user_service_1.UserService, jwt_strategy_1.JwtStrategy, jwt_config_1.JwtConfigService],
    })
], AuthModule);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("28fa915580884a5e5100")
/******/ })();
/******/ 
/******/ }
;