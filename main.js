/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/environments/environment.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.environment = void 0;
exports.environment = {
    production: false,
    apiUrl: process.env.API_URL || 'localhost:3333',
    apiPort: process.env.API_PORT || 3333,
    dashboardUrl: process.env.DASHBOARD_URL || 'localhost:4444',
    dashboardPort: process.env.DASHBOARD_PORT || 4444,
    nodeEnv: "development" || 0,
    salt: process.env.BCRYPT_SALT || 10,
    paths: {
        temp: process.env.TEMP_PATH || 'temp',
        public: process.env.PUBLIC_PATH || 'public',
        uploads: process.env.UPLOADS_PATH || 'uploads',
        i18n: process.env.I18N || '/assets/i18n',
    },
    database: {
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
    },
    jwt: {
        issuer: process.env.ISSUER || 'http://chnirt.github.io',
        dashboard: {
            accessTokenConfig: {
                secret: process.env.JWT_DASHBOARD_ACCESS_TOKEN_SECRET ||
                    'dashboardAccessTokenSecret',
                expiresIn: process.env.JWT_DASHBOARD_ACCESS_TOKEN_EXPIRES_IN || '3h',
            },
            refreshTokenConfig: {
                secret: process.env.JWT_DASHBOARD_REFRESH_TOKEN_SECRET ||
                    'dashboardRefreshTokenSecret',
                expiresIn: process.env.JWT_DASHBOARD_REFRESH_TOKEN_EXPIRES_IN || '1d',
            },
        },
        store: {
            accessTokenConfig: {
                secret: process.env.JWT_STORE_ACCESS_TOKEN_SECRET ||
                    'storeAccessTokenSecret',
                expiresIn: process.env.JWT_STORE_ACCESS_TOKEN_EXPIRES_IN || '3h',
            },
            refreshTokenConfig: {
                secret: process.env.JWT_STORE_REFRESH_TOKEN_SECRET ||
                    'storeRefreshTokenSecret',
                expiresIn: process.env.JWT_STORE_REFRESH_TOKEN_EXPIRES_IN || '1d',
            },
        },
    },
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_PORT || 6379,
    },
};


/***/ }),

/***/ "./src/modules/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const api_core_1 = __webpack_require__("../../libs/api-core/src/index.ts");
const environment_1 = __webpack_require__("./src/environments/environment.ts");
const auth_1 = __webpack_require__("./src/modules/auth/index.ts");
const asset_1 = __webpack_require__("./src/modules/asset/index.ts");
const home_1 = __webpack_require__("./src/modules/home/index.ts");
const product_1 = __webpack_require__("./src/modules/product/index.ts");
const product_category_1 = __webpack_require__("./src/modules/product-category/index.ts");
const user_1 = __webpack_require__("./src/modules/user/index.ts");
const order_1 = __webpack_require__("./src/modules/order/index.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [() => environment_1.environment],
                isGlobal: true,
                cache: true,
            }),
            api_core_1.ApiCoreModule,
            auth_1.AuthModule,
            asset_1.AssetModule,
            home_1.HomeModule,
            order_1.OrderModule,
            product_1.ProductModule,
            product_category_1.ProductCategoryModule,
            user_1.UserModule,
        ],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/modules/asset/asset.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssetController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const platform_express_1 = __webpack_require__("@nestjs/platform-express");
__webpack_require__("multer");
const asset_service_1 = __webpack_require__("./src/modules/asset/asset.service.ts");
let AssetController = class AssetController {
    constructor(assetService) {
        this.assetService = assetService;
    }
    // @Get(':assetId')
    // async getImage(
    //     @Param('assetId') assetId: string,
    //     @Query('width') width: number,
    //     @Res() res: Response,
    // ) {
    //     const { resizedImage, mimeType } =
    //         await this.assetService.getResizedImage(assetId, width)
    //     res.setHeader('Content-Type', mimeType)
    //     return res.send(resizedImage)
    // }
    uploadFile(file) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return { url: file.path };
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    tslib_1.__param(0, (0, common_1.UploadedFile)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof Express !== "undefined" && (_b = Express.Multer) !== void 0 && _b.File) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AssetController.prototype, "uploadFile", null);
AssetController = tslib_1.__decorate([
    (0, common_1.Controller)('assets'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof asset_service_1.AssetService !== "undefined" && asset_service_1.AssetService) === "function" ? _a : Object])
], AssetController);
exports.AssetController = AssetController;


/***/ }),

/***/ "./src/modules/asset/asset.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssetModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const platform_express_1 = __webpack_require__("@nestjs/platform-express");
const multer_1 = __webpack_require__("multer");
const path_1 = __webpack_require__("path");
const constant_1 = __webpack_require__("../../libs/constant/src/index.ts");
const asset_controller_1 = __webpack_require__("./src/modules/asset/asset.controller.ts");
const asset_service_1 = __webpack_require__("./src/modules/asset/asset.service.ts");
let AssetModule = class AssetModule {
};
AssetModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            platform_express_1.MulterModule.registerAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    dest: configService.get('paths.temp'),
                    fileFilter(req, file, callback) {
                        const extention = (0, path_1.extname)(file.originalname)
                            .toLowerCase()
                            .slice(1);
                        if (!constant_1.FILE_EXTENTION.includes(extention))
                            callback(new common_1.BadRequestException('Unsupported File'), false);
                        callback(null, true);
                    },
                    limits: { fileSize: constant_1.FILE_SIZE },
                    storage: (0, multer_1.diskStorage)({
                        destination: configService.get('paths.temp'),
                        filename: function (req, file, callback) {
                            const extention = (0, path_1.extname)(file.originalname).toLowerCase();
                            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                            callback(null, uniqueSuffix + extention);
                        },
                    }),
                }),
            }),
        ],
        providers: [asset_service_1.AssetService],
        controllers: [asset_controller_1.AssetController],
        exports: [asset_service_1.AssetService],
    })
], AssetModule);
exports.AssetModule = AssetModule;


/***/ }),

/***/ "./src/modules/asset/asset.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssetService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mime_types_1 = __webpack_require__("mime-types");
const path_1 = __webpack_require__("path");
const sharp_1 = tslib_1.__importDefault(__webpack_require__("sharp"));
const typeorm_1 = __webpack_require__("typeorm");
const database_1 = __webpack_require__("../../libs/api-core/src/lib/database/index.ts");
const service_1 = __webpack_require__("../../libs/api-core/src/lib/services/index.ts");
const constant_1 = __webpack_require__("../../libs/constant/src/index.ts");
const api_1 = __webpack_require__("../../libs/utils/src/lib/api-utils/index.ts");
let AssetService = class AssetService extends service_1.TransactionBaseService {
    constructor(entityManager) {
        super(entityManager);
        this.entityManager = entityManager;
    }
    get assetRepository() {
        return this.activeManager_.getRepository(database_1.Asset);
    }
    createAsset(createAssetDto, newDirectory) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { url } = createAssetDto, assetDto = tslib_1.__rest(createAssetDto, ["url"]);
            const fileData = yield this.resizeImage(url, newDirectory);
            const newAsset = yield this.assetRepository.save(Object.assign(Object.assign({}, assetDto), fileData));
            return newAsset;
        });
    }
    updateAsset(assetId, updateAssetDto, newDirectory) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const asset = yield this.assetRepository.findOneBy({ id: assetId });
            const { url } = updateAssetDto, assetDto = tslib_1.__rest(updateAssetDto, ["url"]);
            if (url || (url === null || url === void 0 ? void 0 : url.length)) {
                const fileData = yield this.resizeImage(url, newDirectory);
                Object.assign(asset, fileData);
            }
            Object.assign(asset, assetDto);
            const newAsset = yield this.assetRepository.save(asset);
            return newAsset;
        });
    }
    resizeImage(url, directory) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let sizesUrls = constant_1.DEFAULT_SIZE_URL;
            const fileName = (0, path_1.basename)(url);
            const baseDirectory = yield this.getBaseDirectory(directory);
            const mimeType = (0, mime_types_1.lookup)(fileName) || 'image/png';
            for (const resize of constant_1.FILE_WIDTH) {
                const sharpedImage = (0, sharp_1.default)(url);
                sharpedImage.resize(resize);
                yield api_1.FileUtils.CreateFolder((0, path_1.join)(baseDirectory, `${resize}`));
                const outputFilePath = (0, path_1.join)(baseDirectory, `${resize}`, `${fileName}`);
                sizesUrls[resize] = outputFilePath;
                yield sharpedImage.toFile(outputFilePath);
            }
            return { sizesUrls, mimeType };
        });
    }
    getBaseDirectory(directory) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const baseDirectory = (0, path_1.join)(directory);
            const splitDirectory = baseDirectory.split(path_1.sep);
            if (splitDirectory.length > 1) {
                let toBaseDirectory = '';
                for (const dir of splitDirectory) {
                    toBaseDirectory = (0, path_1.join)(toBaseDirectory, dir);
                    yield api_1.FileUtils.CreateFolder(toBaseDirectory);
                }
            }
            else
                yield api_1.FileUtils.CreateFolder(baseDirectory);
            return baseDirectory;
        });
    }
};
AssetService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _a : Object])
], AssetService);
exports.AssetService = AssetService;


/***/ }),

/***/ "./src/modules/asset/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./src/modules/asset/asset.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./src/modules/asset/asset.service.ts"), exports);


/***/ }),

/***/ "./src/modules/auth/auth.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const api_1 = __webpack_require__("../../libs/utils/src/lib/api-utils/index.ts");
const user_1 = __webpack_require__("./src/modules/user/index.ts");
const auth_service_1 = __webpack_require__("./src/modules/auth/auth.service.ts");
const dashboard_auth_controller_1 = __webpack_require__("./src/modules/auth/dashboard-auth.controller.ts");
const store_auth_controller_1 = __webpack_require__("./src/modules/auth/store-auth.controller.ts");
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [api_1.JwtHelperModule, user_1.UserModule],
        providers: [auth_service_1.AuthService],
        controllers: [dashboard_auth_controller_1.DashboardAuthController, store_auth_controller_1.StoreAuthController],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./src/modules/auth/auth.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("typeorm");
const service_1 = __webpack_require__("../../libs/api-core/src/lib/services/index.ts");
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
const api_1 = __webpack_require__("../../libs/utils/src/lib/api-utils/index.ts");
const user_1 = __webpack_require__("./src/modules/user/index.ts");
let AuthService = class AuthService extends service_1.TransactionBaseService {
    constructor(entityManager, jwtService, employeeService, customerService) {
        super(entityManager);
        this.jwtService = jwtService;
        this.employeeService = employeeService;
        this.customerService = customerService;
    }
    register(registerDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.customerService.checkUserExistByUsername(registerDto.username);
            return this.atomicPhase_((transactionManager) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const newUser = yield this.customerService
                    .withTransaction(transactionManager)
                    .createUser(registerDto);
                return true;
            }));
        });
    }
    dashboardLogin(loginDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.employeeService.findUserForLogin(loginDto);
            const tokenPayload = {
                id: user.id,
                username: user.username,
                role: user.role,
            };
            const tokens = yield this.jwtService.generateTokens(tokenPayload, types_1.TokenType.DASHBOARD);
            return Object.assign(Object.assign({}, tokens), { user });
        });
    }
    dashboardLoginWithRefreshToken(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const tokenPayload = {
                id: req.user.id,
                username: req.user.username,
                role: req.user.role,
            };
            const tokens = yield this.jwtService.generateTokens(tokenPayload, types_1.TokenType.DASHBOARD);
            return Object.assign(Object.assign({}, tokens), { user: req.user });
        });
    }
    storeLogin(loginDto, tokenType) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.customerService.findUserForLogin(loginDto);
            const tokenPayload = {
                id: user.id,
                username: user.username,
            };
            const tokens = yield this.jwtService.generateTokens(tokenPayload, tokenType);
            return Object.assign(Object.assign({}, tokens), { user });
        });
    }
};
AuthService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _a : Object, typeof (_b = typeof api_1.JwtHelperService !== "undefined" && api_1.JwtHelperService) === "function" ? _b : Object, typeof (_c = typeof user_1.EmployeeService !== "undefined" && user_1.EmployeeService) === "function" ? _c : Object, typeof (_d = typeof user_1.CustomerService !== "undefined" && user_1.CustomerService) === "function" ? _d : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/modules/auth/dashboard-auth.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashboardAuthController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const dto_1 = __webpack_require__("../../libs/dto/src/index.ts");
const passport_1 = __webpack_require__("../../libs/api-core/src/lib/passport/index.ts");
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
const auth_service_1 = __webpack_require__("./src/modules/auth/auth.service.ts");
let DashboardAuthController = class DashboardAuthController {
    constructor(authService) {
        this.authService = authService;
    }
    login(loginDto) {
        return this.authService.dashboardLogin(loginDto);
    }
    loginWithRefreshToken(req) {
        return this.authService.dashboardLoginWithRefreshToken(req);
    }
};
tslib_1.__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('login'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof dto_1.LoginDto !== "undefined" && dto_1.LoginDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DashboardAuthController.prototype, "login", null);
tslib_1.__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(passport_1.DashboardJwtRefreshTokenGuard),
    (0, common_1.Post)('refresh-token'),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof types_1.StoreRequest !== "undefined" && types_1.StoreRequest) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DashboardAuthController.prototype, "loginWithRefreshToken", null);
DashboardAuthController = tslib_1.__decorate([
    (0, common_1.Controller)('dashboard/auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], DashboardAuthController);
exports.DashboardAuthController = DashboardAuthController;


/***/ }),

/***/ "./src/modules/auth/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./src/modules/auth/auth.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./src/modules/auth/auth.service.ts"), exports);


/***/ }),

/***/ "./src/modules/auth/store-auth.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StoreAuthController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const dto_1 = __webpack_require__("../../libs/dto/src/index.ts");
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
const auth_service_1 = __webpack_require__("./src/modules/auth/auth.service.ts");
let StoreAuthController = class StoreAuthController {
    constructor(authService) {
        this.authService = authService;
    }
    register(registerDto) {
        return this.authService.register(registerDto);
    }
    login(loginDto) {
        return this.authService.storeLogin(loginDto, types_1.TokenType.STORE);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)('register'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof dto_1.RegisterDto !== "undefined" && dto_1.RegisterDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StoreAuthController.prototype, "register", null);
tslib_1.__decorate([
    (0, common_1.Post)('login'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof dto_1.LoginDto !== "undefined" && dto_1.LoginDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StoreAuthController.prototype, "login", null);
StoreAuthController = tslib_1.__decorate([
    (0, common_1.Controller)('store/auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], StoreAuthController);
exports.StoreAuthController = StoreAuthController;


/***/ }),

/***/ "./src/modules/home/home.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HomeController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const home_service_1 = __webpack_require__("./src/modules/home/home.service.ts");
let HomeController = class HomeController {
    constructor(homeService) {
        this.homeService = homeService;
    }
    home() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.homeService.home();
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], HomeController.prototype, "home", null);
HomeController = tslib_1.__decorate([
    (0, common_1.Controller)('store/home'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof home_service_1.HomeService !== "undefined" && home_service_1.HomeService) === "function" ? _a : Object])
], HomeController);
exports.HomeController = HomeController;


/***/ }),

/***/ "./src/modules/home/home.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HomeModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const product_category_1 = __webpack_require__("./src/modules/product-category/index.ts");
const home_controller_1 = __webpack_require__("./src/modules/home/home.controller.ts");
const home_service_1 = __webpack_require__("./src/modules/home/home.service.ts");
let HomeModule = class HomeModule {
};
HomeModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [product_category_1.ProductCategoryModule],
        providers: [home_service_1.HomeService],
        controllers: [home_controller_1.HomeController],
    })
], HomeModule);
exports.HomeModule = HomeModule;


/***/ }),

/***/ "./src/modules/home/home.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HomeService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const product_category_1 = __webpack_require__("./src/modules/product-category/index.ts");
let HomeService = class HomeService {
    constructor(productCategoryService) {
        this.productCategoryService = productCategoryService;
    }
    home() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const productsCategoriesWithProducts = yield this.productCategoryService.getProductsCategories();
            return {
                productsCategoriesWithProducts,
            };
        });
    }
};
HomeService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof product_category_1.ProductCategoryService !== "undefined" && product_category_1.ProductCategoryService) === "function" ? _a : Object])
], HomeService);
exports.HomeService = HomeService;


/***/ }),

/***/ "./src/modules/home/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./src/modules/home/home.module.ts"), exports);


/***/ }),

/***/ "./src/modules/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./src/modules/app.module.ts"), exports);


/***/ }),

/***/ "./src/modules/order/controllers/dashboard-order.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashboardOrderController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const guard_1 = __webpack_require__("../../libs/api-core/src/lib/guards/index.ts");
const passport_1 = __webpack_require__("../../libs/api-core/src/lib/passport/index.ts");
const dto_1 = __webpack_require__("../../libs/dto/src/index.ts");
const order_service_1 = __webpack_require__("./src/modules/order/order.service.ts");
let DashboardOrderController = class DashboardOrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    getOrders() {
        return this.orderService.getOrders();
    }
    getOrder(orderId) {
        return this.orderService.getOrderById(orderId);
    }
    updateStatus(orderId, updateStatusDto) {
        return this.orderService.updateStatus(orderId, updateStatusDto);
    }
    deleteOrder(orderId) {
        return this.orderService.deleteOrder(orderId);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], DashboardOrderController.prototype, "getOrders", null);
tslib_1.__decorate([
    (0, common_1.Get)(':orderId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    tslib_1.__param(0, (0, common_1.Param)('orderId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], DashboardOrderController.prototype, "getOrder", null);
tslib_1.__decorate([
    (0, common_1.Put)('status/:orderId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    tslib_1.__param(0, (0, common_1.Param)('orderId')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_d = typeof dto_1.UpdateOrderStatusDto !== "undefined" && dto_1.UpdateOrderStatusDto) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DashboardOrderController.prototype, "updateStatus", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':orderId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    tslib_1.__param(0, (0, common_1.Param)('orderId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], DashboardOrderController.prototype, "deleteOrder", null);
DashboardOrderController = tslib_1.__decorate([
    (0, common_1.Controller)('dashboard/orders'),
    (0, common_1.UseGuards)(passport_1.DashboardJwtAccessTokenGuard, guard_1.RolesGuard),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof order_service_1.OrderService !== "undefined" && order_service_1.OrderService) === "function" ? _a : Object])
], DashboardOrderController);
exports.DashboardOrderController = DashboardOrderController;


/***/ }),

/***/ "./src/modules/order/controllers/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./src/modules/order/controllers/dashboard-order.controller.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./src/modules/order/controllers/store-order.controller.ts"), exports);


/***/ }),

/***/ "./src/modules/order/controllers/store-order.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StoreOrderController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const order_service_1 = __webpack_require__("./src/modules/order/order.service.ts");
const dto_1 = __webpack_require__("../../libs/dto/src/index.ts");
let StoreOrderController = class StoreOrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    createOrder(createOrderDto) {
        return this.orderService.createOrder(createOrderDto);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateOrderDto !== "undefined" && dto_1.CreateOrderDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StoreOrderController.prototype, "createOrder", null);
StoreOrderController = tslib_1.__decorate([
    (0, common_1.Controller)('store/orders'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof order_service_1.OrderService !== "undefined" && order_service_1.OrderService) === "function" ? _a : Object])
], StoreOrderController);
exports.StoreOrderController = StoreOrderController;


/***/ }),

/***/ "./src/modules/order/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./src/modules/order/order.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./src/modules/order/order.service.ts"), exports);


/***/ }),

/***/ "./src/modules/order/order.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const product_1 = __webpack_require__("./src/modules/product/index.ts");
const controllers_1 = __webpack_require__("./src/modules/order/controllers/index.ts");
const order_service_1 = __webpack_require__("./src/modules/order/order.service.ts");
let OrderModule = class OrderModule {
};
OrderModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [product_1.ProductModule],
        providers: [order_service_1.OrderService],
        controllers: [controllers_1.DashboardOrderController, controllers_1.StoreOrderController],
        exports: [order_service_1.OrderService],
    })
], OrderModule);
exports.OrderModule = OrderModule;


/***/ }),

/***/ "./src/modules/order/order.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("typeorm");
const database_1 = __webpack_require__("../../libs/api-core/src/lib/database/index.ts");
const service_1 = __webpack_require__("../../libs/api-core/src/lib/services/index.ts");
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
const product_1 = __webpack_require__("./src/modules/product/index.ts");
let OrderService = class OrderService extends service_1.TransactionBaseService {
    constructor(entityManager, productService) {
        super(entityManager);
        this.entityManager = entityManager;
        this.productService = productService;
    }
    get orderRepository() {
        var _a;
        const manager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.entityManager;
        return manager.getRepository(database_1.Order);
    }
    get orderItemRepository() {
        var _a;
        const manager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.entityManager;
        return manager.getRepository(database_1.OrderItem);
    }
    getOrders() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orders = yield this.orderRepository.find({
                withDeleted: true,
                relations: ['orderItems'],
            });
            return orders;
        });
    }
    getOrderById(orderId, throwError = false, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const order = yield this.orderRepository.findOne(Object.assign(Object.assign({}, options), { where: { id: orderId }, relations: ['orderItems'] }));
            if (!order && throwError)
                throw new common_1.BadRequestException(types_1.HttpException.NOT_FOUND, types_1.Property.ORDER);
            return order;
        });
    }
    createOrder(createOrderDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { productsIds } = createOrderDto, rest = tslib_1.__rest(createOrderDto, ["productsIds"]);
            const products = yield this.productService.productRepository.find({
                where: { id: (0, typeorm_1.In)(productsIds) },
                relations: ['productCategory', 'productCategory.asset', 'assets'],
            });
            if (!products.length)
                throw new common_1.BadRequestException('Error In Order Items');
            const orderItems = this.orderItemRepository.create(products.map((product) => ({ product })));
            rest.totalPrice = products.reduce((prev, current) => +prev + +current.price, 0);
            let order = this.orderRepository.create(Object.assign(Object.assign({}, rest), { orderItems }));
            order = yield this.orderRepository.save(order);
            return order;
        });
    }
    updateOrder(orderId, updateOrderDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
    updateStatus(orderId, updateStatusDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.orderRepository.update({ id: orderId }, Object.assign({}, updateStatusDto));
            return { message: types_1.HttpException.SUCCESSFUL };
        });
    }
    deleteOrder(orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.orderRepository.update({ id: orderId }, { status: types_1.OrderStatus.CANCELED });
            yield this.orderRepository.softDelete(orderId);
        });
    }
    restoreOrder(orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.orderRepository.restore(orderId);
        });
    }
};
OrderService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _a : Object, typeof (_b = typeof product_1.ProductService !== "undefined" && product_1.ProductService) === "function" ? _b : Object])
], OrderService);
exports.OrderService = OrderService;


/***/ }),

/***/ "./src/modules/product-category/controllers/dashboard-product-category.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashboardProductCategoryController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const dto_1 = __webpack_require__("../../libs/dto/src/index.ts");
const passport_1 = __webpack_require__("../../libs/api-core/src/lib/passport/index.ts");
const product_category_service_1 = __webpack_require__("./src/modules/product-category/product-category.service.ts");
let DashboardProductCategoryController = class DashboardProductCategoryController {
    constructor(productCategoryService) {
        this.productCategoryService = productCategoryService;
    }
    getProductsCategories() {
        return this.productCategoryService.getProductsCategories();
    }
    getAllProductsCategories() {
        return this.productCategoryService.getProductsCategories({
            withDeleted: true,
        });
    }
    getProductCategory(productCategoryId) {
        return this.productCategoryService.getProductCategoryById(productCategoryId, true, { relations: ['products', 'product.asset', 'asset'] });
    }
    createProductCategory(createProductCategoryDto) {
        return this.productCategoryService.createProductCategory(createProductCategoryDto);
    }
    updateProductCategory(productCategoryId, updateProductCategoryDto) {
        return this.productCategoryService.updateProductCategory(productCategoryId, updateProductCategoryDto);
    }
    restoreProductCategory(productCategoryId) {
        return this.productCategoryService.restoreProductCategory(productCategoryId);
    }
    deleteProductCategory(productCategoryId) {
        return this.productCategoryService.deleteProductCategory(productCategoryId);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], DashboardProductCategoryController.prototype, "getProductsCategories", null);
tslib_1.__decorate([
    (0, common_1.Get)('all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], DashboardProductCategoryController.prototype, "getAllProductsCategories", null);
tslib_1.__decorate([
    (0, common_1.Get)(':productCategoryId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    tslib_1.__param(0, (0, common_1.Param)('productCategoryId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], DashboardProductCategoryController.prototype, "getProductCategory", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof dto_1.CreateProductCategoryDto !== "undefined" && dto_1.CreateProductCategoryDto) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], DashboardProductCategoryController.prototype, "createProductCategory", null);
tslib_1.__decorate([
    (0, common_1.Put)(':productCategoryId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    tslib_1.__param(0, (0, common_1.Param)('productCategoryId')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_g = typeof dto_1.UpdateProductCategoryDto !== "undefined" && dto_1.UpdateProductCategoryDto) === "function" ? _g : Object]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], DashboardProductCategoryController.prototype, "updateProductCategory", null);
tslib_1.__decorate([
    (0, common_1.Put)('restore/:productCategoryId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    tslib_1.__param(0, (0, common_1.Param)('productCategoryId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], DashboardProductCategoryController.prototype, "restoreProductCategory", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':productCategoryId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    tslib_1.__param(0, (0, common_1.Param)('productCategoryId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], DashboardProductCategoryController.prototype, "deleteProductCategory", null);
DashboardProductCategoryController = tslib_1.__decorate([
    (0, common_1.Controller)('dashboard/products-categories'),
    (0, common_1.UseGuards)(passport_1.DashboardJwtAccessTokenGuard),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof product_category_service_1.ProductCategoryService !== "undefined" && product_category_service_1.ProductCategoryService) === "function" ? _a : Object])
], DashboardProductCategoryController);
exports.DashboardProductCategoryController = DashboardProductCategoryController;


/***/ }),

/***/ "./src/modules/product-category/controllers/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./src/modules/product-category/controllers/dashboard-product-category.controller.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./src/modules/product-category/controllers/store-product-category.controller.ts"), exports);


/***/ }),

/***/ "./src/modules/product-category/controllers/store-product-category.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StoreProductCategoryController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const product_category_service_1 = __webpack_require__("./src/modules/product-category/product-category.service.ts");
let StoreProductCategoryController = class StoreProductCategoryController {
    constructor(productCategoryService) {
        this.productCategoryService = productCategoryService;
    }
    getProductsCategories() {
        return this.productCategoryService.getProductsCategories();
    }
    getProductCategory(productCategoryId) {
        return this.productCategoryService.getProductCategoryById(productCategoryId);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], StoreProductCategoryController.prototype, "getProductsCategories", null);
tslib_1.__decorate([
    (0, common_1.Get)(':productCategoryId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    tslib_1.__param(0, (0, common_1.Param)('productCategoryId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], StoreProductCategoryController.prototype, "getProductCategory", null);
StoreProductCategoryController = tslib_1.__decorate([
    (0, common_1.Controller)('store/products-categories'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof product_category_service_1.ProductCategoryService !== "undefined" && product_category_service_1.ProductCategoryService) === "function" ? _a : Object])
], StoreProductCategoryController);
exports.StoreProductCategoryController = StoreProductCategoryController;


/***/ }),

/***/ "./src/modules/product-category/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./src/modules/product-category/product-category.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./src/modules/product-category/product-category.service.ts"), exports);


/***/ }),

/***/ "./src/modules/product-category/product-category.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductCategoryModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const asset_1 = __webpack_require__("./src/modules/asset/index.ts");
const controllers_1 = __webpack_require__("./src/modules/product-category/controllers/index.ts");
const product_category_service_1 = __webpack_require__("./src/modules/product-category/product-category.service.ts");
let ProductCategoryModule = class ProductCategoryModule {
};
ProductCategoryModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [asset_1.AssetModule],
        providers: [product_category_service_1.ProductCategoryService],
        controllers: [
            controllers_1.DashboardProductCategoryController,
            controllers_1.StoreProductCategoryController,
        ],
        exports: [product_category_service_1.ProductCategoryService],
    })
], ProductCategoryModule);
exports.ProductCategoryModule = ProductCategoryModule;


/***/ }),

/***/ "./src/modules/product-category/product-category.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductCategoryService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("typeorm");
const database_1 = __webpack_require__("../../libs/api-core/src/lib/database/index.ts");
const service_1 = __webpack_require__("../../libs/api-core/src/lib/services/index.ts");
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
const asset_1 = __webpack_require__("./src/modules/asset/index.ts");
let ProductCategoryService = class ProductCategoryService extends service_1.TransactionBaseService {
    constructor(entityManager, assetService) {
        super(entityManager);
        this.entityManager = entityManager;
        this.assetService = assetService;
    }
    get productCategoryRepository() {
        return this.activeManager_.getRepository(database_1.ProductCategory);
    }
    getProductsCategories(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const productsCategories = yield this.productCategoryRepository.find(Object.assign(Object.assign({}, options), { relations: ['products', 'products.assets', 'asset'] }));
            return productsCategories;
        });
    }
    getProductCategoryById(productCategoryId, throwError = false, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const productCategory = yield this.productCategoryRepository.findOne(Object.assign(Object.assign({}, options), { where: { id: productCategoryId } }));
            if (!productCategory && throwError)
                throw new common_1.BadRequestException(types_1.HttpException.NOT_FOUND, types_1.Property.CATEGORY);
            return productCategory;
        });
    }
    createProductCategory(createProductCategoryDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { asset: createAssetDto } = createProductCategoryDto, productCategoryDto = tslib_1.__rest(createProductCategoryDto, ["asset"]);
            return this.atomicPhase_((transactionManager) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let newProductCategory = this.productCategoryRepository.create(productCategoryDto);
                newProductCategory = yield this.productCategoryRepository.save(newProductCategory);
                const assetDirectory = `uploads/products-categories/${newProductCategory.id}`;
                const newAsset = yield this.assetService
                    .withTransaction(transactionManager)
                    .createAsset(createAssetDto, assetDirectory);
                newProductCategory.asset = newAsset;
                newProductCategory = yield this.productCategoryRepository.save(newProductCategory);
                return newProductCategory;
            }));
        });
    }
    updateProductCategory(productCategoryId, updateProductCategoryDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { asset: updateAssetDto } = updateProductCategoryDto, productCategoryDto = tslib_1.__rest(updateProductCategoryDto, ["asset"]);
            const productCategory = yield this.getProductCategoryById(productCategoryId, true);
            Object.assign(productCategory, productCategoryDto);
            return this.atomicPhase_((transactionManager) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const assetDirectory = `uploads/products-categories/${productCategory.id}`;
                // if (updateAssetDto)
                //     await this.assetService
                //         .withTransaction(transactionManager)
                //         .updateAsset(
                //             productCategory.assetId,
                //             updateAssetDto,
                //             assetDirectory,
                //         )
                const updatedProductCategory = yield this.productCategoryRepository.save(productCategory);
                return updatedProductCategory;
            }));
        });
    }
    deleteProductCategory(productCategoryId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.productCategoryRepository.softDelete(productCategoryId);
        });
    }
    restoreProductCategory(productCategoryId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.productCategoryRepository.restore(productCategoryId);
        });
    }
};
ProductCategoryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _a : Object, typeof (_b = typeof asset_1.AssetService !== "undefined" && asset_1.AssetService) === "function" ? _b : Object])
], ProductCategoryService);
exports.ProductCategoryService = ProductCategoryService;


/***/ }),

/***/ "./src/modules/product/controllers/dashboard-product.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashboardProductController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const guard_1 = __webpack_require__("../../libs/api-core/src/lib/guards/index.ts");
const passport_1 = __webpack_require__("../../libs/api-core/src/lib/passport/index.ts");
const dto_1 = __webpack_require__("../../libs/dto/src/index.ts");
const product_service_1 = __webpack_require__("./src/modules/product/product.service.ts");
let DashboardProductController = class DashboardProductController {
    constructor(productService) {
        this.productService = productService;
    }
    getProducts() {
        return this.productService.getProducts();
    }
    getProduct(productId) {
        return this.productService.getProductById(productId);
    }
    createProduct(createProductDto) {
        return this.productService.createProduct(createProductDto);
    }
    updateProduct(productId, updateProductDto) {
        return this.productService.updateProduct(productId, updateProductDto);
    }
    restoreProduct(productId) {
        return this.productService.restoreProduct(productId);
    }
    deleteProduct(productId) {
        return this.productService.deleteProduct(productId);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], DashboardProductController.prototype, "getProducts", null);
tslib_1.__decorate([
    (0, common_1.Get)(':productId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    tslib_1.__param(0, (0, common_1.Param)('productId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], DashboardProductController.prototype, "getProduct", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof dto_1.CreateProductDto !== "undefined" && dto_1.CreateProductDto) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], DashboardProductController.prototype, "createProduct", null);
tslib_1.__decorate([
    (0, common_1.Put)(':productId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    tslib_1.__param(0, (0, common_1.Param)('productId')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_f = typeof dto_1.UpdateProductDto !== "undefined" && dto_1.UpdateProductDto) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], DashboardProductController.prototype, "updateProduct", null);
tslib_1.__decorate([
    (0, common_1.Put)('restore/:productId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    tslib_1.__param(0, (0, common_1.Param)('productId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], DashboardProductController.prototype, "restoreProduct", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':productId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    tslib_1.__param(0, (0, common_1.Param)('productId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], DashboardProductController.prototype, "deleteProduct", null);
DashboardProductController = tslib_1.__decorate([
    (0, common_1.Controller)('dashboard/products'),
    (0, common_1.UseGuards)(passport_1.DashboardJwtAccessTokenGuard, guard_1.RolesGuard),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" ? _a : Object])
], DashboardProductController);
exports.DashboardProductController = DashboardProductController;


/***/ }),

/***/ "./src/modules/product/controllers/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./src/modules/product/controllers/dashboard-product.controller.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./src/modules/product/controllers/store-product.controller.ts"), exports);


/***/ }),

/***/ "./src/modules/product/controllers/store-product.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StoreProductController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const product_service_1 = __webpack_require__("./src/modules/product/product.service.ts");
let StoreProductController = class StoreProductController {
    constructor(productService) {
        this.productService = productService;
    }
    getProducts() {
        return this.productService.getProducts();
    }
    getProduct(productId) {
        return this.productService.getProductById(productId);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], StoreProductController.prototype, "getProducts", null);
tslib_1.__decorate([
    (0, common_1.Get)(':productId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    tslib_1.__param(0, (0, common_1.Param)('productId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], StoreProductController.prototype, "getProduct", null);
StoreProductController = tslib_1.__decorate([
    (0, common_1.Controller)('store/products'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" ? _a : Object])
], StoreProductController);
exports.StoreProductController = StoreProductController;


/***/ }),

/***/ "./src/modules/product/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./src/modules/product/product.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./src/modules/product/product.service.ts"), exports);


/***/ }),

/***/ "./src/modules/product/product.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const asset_1 = __webpack_require__("./src/modules/asset/index.ts");
const product_category_1 = __webpack_require__("./src/modules/product-category/index.ts");
const controllers_1 = __webpack_require__("./src/modules/product/controllers/index.ts");
const product_service_1 = __webpack_require__("./src/modules/product/product.service.ts");
let ProductModule = class ProductModule {
};
ProductModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [asset_1.AssetModule, product_category_1.ProductCategoryModule],
        providers: [product_service_1.ProductService],
        controllers: [controllers_1.DashboardProductController, controllers_1.StoreProductController],
        exports: [product_service_1.ProductService],
    })
], ProductModule);
exports.ProductModule = ProductModule;


/***/ }),

/***/ "./src/modules/product/product.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("typeorm");
const database_1 = __webpack_require__("../../libs/api-core/src/lib/database/index.ts");
const service_1 = __webpack_require__("../../libs/api-core/src/lib/services/index.ts");
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
const asset_1 = __webpack_require__("./src/modules/asset/index.ts");
const product_category_1 = __webpack_require__("./src/modules/product-category/index.ts");
let ProductService = class ProductService extends service_1.TransactionBaseService {
    constructor(entityManager, assetService, productCategoryService) {
        super(entityManager);
        this.entityManager = entityManager;
        this.assetService = assetService;
        this.productCategoryService = productCategoryService;
    }
    get productRepository() {
        var _a;
        const manager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.entityManager;
        return manager.getRepository(database_1.Product);
    }
    getProducts() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const products = yield this.productRepository.find({
                relations: ['productCategory', 'productCategory.asset', 'assets'],
                withDeleted: true,
            });
            return products;
        });
    }
    getProductById(productId, throwError = false, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const product = yield this.productRepository.findOne(Object.assign(Object.assign({}, options), { where: { id: productId } }));
            if (!product && throwError)
                throw new common_1.BadRequestException(types_1.HttpException.NOT_FOUND, types_1.Property.PRODUCT);
            return product;
        });
    }
    createProduct(createProductDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { assets: createAssetsDto } = createProductDto, productDto = tslib_1.__rest(createProductDto, ["assets"]);
            yield this.productCategoryService.getProductCategoryById(productDto.productCategoryId, true);
            return this.atomicPhase_((transactionManager) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let newProduct = this.productRepository.create(productDto);
                newProduct = yield this.productRepository.save(newProduct);
                const assetDirectory = `uploads/products/${newProduct.id}`;
                const newAssets = yield Promise.all(createAssetsDto.map((createAssetDto) => this.assetService
                    .withTransaction(transactionManager)
                    .createAsset(createAssetDto, assetDirectory)));
                newProduct.assets = newAssets;
                newProduct = yield this.productRepository.save(newProduct);
                return newProduct;
            }));
        });
    }
    updateProduct(productId, updateProductDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { assets: updateAssetsDto } = updateProductDto, productDto = tslib_1.__rest(updateProductDto, ["assets"]);
            if (productDto.productCategoryId)
                yield this.productCategoryService.getProductCategoryById(productDto.productCategoryId);
            const product = yield this.getProductById(productId, true);
            Object.assign(product, productDto);
            return this.atomicPhase_((transactionManager) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                // if (updateAssetDto) {
                //     const assetDirectory = `uploads/products/${product.id}`
                //     await this.assetService
                //         .withTransaction(transactionManager)
                //         .updateAsset(
                //             product.assetId,
                //             updateAssetDto,
                //             assetDirectory,
                //         )
                // }
                const updatedProduct = yield this.productRepository.save(product);
                return updatedProduct;
            }));
        });
    }
    deleteProduct(productId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // const product = await this.getProductById(productId, true)
            yield this.productRepository.softDelete(productId);
        });
    }
    restoreProduct(productId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // const product = await this.getProductById(productId, true)
            yield this.productRepository.restore(productId);
        });
    }
};
ProductService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _a : Object, typeof (_b = typeof asset_1.AssetService !== "undefined" && asset_1.AssetService) === "function" ? _b : Object, typeof (_c = typeof product_category_1.ProductCategoryService !== "undefined" && product_category_1.ProductCategoryService) === "function" ? _c : Object])
], ProductService);
exports.ProductService = ProductService;


/***/ }),

/***/ "./src/modules/user/controllers/customer.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomerController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const services_1 = __webpack_require__("./src/modules/user/services/index.ts");
let CustomerController = class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }
};
CustomerController = tslib_1.__decorate([
    (0, common_1.Controller)('dashboard/customers'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.CustomerService !== "undefined" && services_1.CustomerService) === "function" ? _a : Object])
], CustomerController);
exports.CustomerController = CustomerController;


/***/ }),

/***/ "./src/modules/user/controllers/employee.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmployeeController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const decorator_1 = __webpack_require__("../../libs/api-core/src/lib/decorators/index.ts");
const guard_1 = __webpack_require__("../../libs/api-core/src/lib/guards/index.ts");
const passport_1 = __webpack_require__("../../libs/api-core/src/lib/passport/index.ts");
const dto_1 = __webpack_require__("../../libs/dto/src/index.ts");
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
const services_1 = __webpack_require__("./src/modules/user/services/index.ts");
let EmployeeController = class EmployeeController {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    getUsers() {
        return this.employeeService.getUsers();
    }
    getUser(employeeId) {
        return this.employeeService.getUserById(employeeId);
    }
    addUser(createEmployeeDto) {
        return this.employeeService.createUser(createEmployeeDto);
    }
    updateUser(employeeId, updateEmployeeDto) {
        return this.employeeService.updateUser(employeeId, updateEmployeeDto);
    }
    updatePassword(employeeId, updateEmployeeDto) {
        return this.employeeService.updatePassword(employeeId, updateEmployeeDto);
    }
    deleteUser(employeeId) {
        return this.employeeService.deleteUser(employeeId);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], EmployeeController.prototype, "getUsers", null);
tslib_1.__decorate([
    (0, common_1.Get)(':employeeId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    tslib_1.__param(0, (0, common_1.Param)('employeeId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], EmployeeController.prototype, "getUser", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, decorator_1.Roles)([types_1.UserRole.ADMIN]),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof dto_1.CreateEmployeeDto !== "undefined" && dto_1.CreateEmployeeDto) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], EmployeeController.prototype, "addUser", null);
tslib_1.__decorate([
    (0, common_1.Put)(':employeeId'),
    (0, decorator_1.Roles)([types_1.UserRole.ADMIN]),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    tslib_1.__param(0, (0, common_1.Param)('employeeId')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_e = typeof dto_1.UpdateEmployeeDto !== "undefined" && dto_1.UpdateEmployeeDto) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], EmployeeController.prototype, "updateUser", null);
tslib_1.__decorate([
    (0, common_1.Put)('password/:employeeId'),
    (0, decorator_1.Roles)([types_1.UserRole.ADMIN]),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    tslib_1.__param(0, (0, common_1.Param)('employeeId')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_f = typeof dto_1.UpdatePasswordDto !== "undefined" && dto_1.UpdatePasswordDto) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], EmployeeController.prototype, "updatePassword", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':employeeId'),
    (0, decorator_1.Roles)([types_1.UserRole.ADMIN]),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    tslib_1.__param(0, (0, common_1.Param)('employeeId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], EmployeeController.prototype, "deleteUser", null);
EmployeeController = tslib_1.__decorate([
    (0, common_1.Controller)('dashboard/employees'),
    (0, common_1.UseGuards)(passport_1.DashboardJwtAccessTokenGuard, guard_1.RolesGuard),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.EmployeeService !== "undefined" && services_1.EmployeeService) === "function" ? _a : Object])
], EmployeeController);
exports.EmployeeController = EmployeeController;


/***/ }),

/***/ "./src/modules/user/controllers/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./src/modules/user/controllers/customer.controller.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./src/modules/user/controllers/employee.controller.ts"), exports);


/***/ }),

/***/ "./src/modules/user/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./src/modules/user/services/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./src/modules/user/user.module.ts"), exports);


/***/ }),

/***/ "./src/modules/user/services/customer.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomerService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("typeorm");
const database_1 = __webpack_require__("../../libs/api-core/src/lib/database/index.ts");
const service_1 = __webpack_require__("../../libs/api-core/src/lib/services/index.ts");
const api_1 = __webpack_require__("../../libs/utils/src/lib/api-utils/index.ts");
let CustomerService = class CustomerService extends service_1.TransactionBaseService {
    constructor(entityManager, bcryptService) {
        super(entityManager);
        this.bcryptService = bcryptService;
    }
    get customerRepository() {
        return this.activeManager_.getRepository(database_1.Customer);
    }
    createUser(createUserDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { password } = createUserDto;
            const hashedPassword = yield this.bcryptService.hash(password);
            let newUser = this.customerRepository.create(Object.assign(Object.assign({}, createUserDto), { password: hashedPassword }));
            newUser = yield this.customerRepository.save(newUser);
            return newUser;
        });
    }
    findUserForLogin(loginDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { password, username } = loginDto;
            const user = yield this.checkUserExistByUsername(username, {}, false, true);
            yield this.bcryptService.checkUserPassword(password, user.password);
            return user;
        });
    }
    checkUserExistByUsername(username, findOptions, throwErrorIfExist = false, throwErrorIfNotExist = false) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.findUserByUsername(username, findOptions);
            if (user && throwErrorIfExist)
                throw new common_1.BadRequestException('User With This Phone Number Is Already Exist In Database');
            if (!user && throwErrorIfNotExist)
                throw new common_1.BadRequestException('User With This Phone Number Does Not Exist In The Database');
            return user;
        });
    }
    findUserByUsername(username, findOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.customerRepository.findOneBy(Object.assign({ username }, findOptions));
            return user;
        });
    }
};
CustomerService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _a : Object, typeof (_b = typeof api_1.BcryptService !== "undefined" && api_1.BcryptService) === "function" ? _b : Object])
], CustomerService);
exports.CustomerService = CustomerService;


/***/ }),

/***/ "./src/modules/user/services/employee.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmployeeService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("typeorm");
const database_1 = __webpack_require__("../../libs/api-core/src/lib/database/index.ts");
const service_1 = __webpack_require__("../../libs/api-core/src/lib/services/index.ts");
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
const api_1 = __webpack_require__("../../libs/utils/src/lib/api-utils/index.ts");
let EmployeeService = class EmployeeService extends service_1.TransactionBaseService {
    constructor(entityManager, bcryptService) {
        super(entityManager);
        this.entityManager = entityManager;
        this.bcryptService = bcryptService;
    }
    get employeeRepository() {
        return this.activeManager_.getRepository(database_1.Employee);
    }
    getUsers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const employees = yield this.employeeRepository.find({
                order: { role: 1, createdAt: 1 },
            });
            return employees;
        });
    }
    getUserById(employeeId, throwError = false) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const employee = yield this.employeeRepository.findOne({
                where: { id: employeeId },
            });
            if (!employee && throwError)
                throw new common_1.BadRequestException(types_1.HttpException.NOT_FOUND);
            return employee;
        });
    }
    createUser(createEmployeeDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { password } = createEmployeeDto;
            const hashedPassword = yield this.bcryptService.hash(password);
            let newEmployee = this.employeeRepository.create(Object.assign(Object.assign({}, createEmployeeDto), { password: hashedPassword }));
            newEmployee = yield this.employeeRepository.save(newEmployee);
            return newEmployee;
        });
    }
    updateUser(employeeId, updateEmployeeDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { username } = updateEmployeeDto;
            const user = yield this.getUserById(employeeId);
            const checkUsername = yield this.employeeRepository.findOneBy({
                id: (0, typeorm_1.Not)(employeeId),
                username,
            });
            if (checkUsername)
                throw new common_1.BadRequestException('Phone Number Already Exist');
            Object.assign(user, updateEmployeeDto);
            yield this.employeeRepository.save(user);
            return user;
        });
    }
    updatePassword(employeeId, updatePasswordDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.getUserById(employeeId);
            const { oldPassword, newPassword } = updatePasswordDto;
            if (oldPassword !== newPassword) {
                yield this.bcryptService.checkUserPassword(oldPassword, user.password);
                const newHashedPassword = yield this.bcryptService.hash(newPassword);
                user.password = newHashedPassword;
                yield this.employeeRepository.save(user);
                return true;
            }
            return false;
        });
    }
    deleteUser(employeeId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.getUserById(employeeId, true);
            yield this.employeeRepository.softDelete(user.id);
        });
    }
    findUserForLogin(loginDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { password, username } = loginDto;
            const user = yield this.checkUserExistByUsername(username, {}, false, true);
            yield this.bcryptService.checkUserPassword(password, user.password);
            return user;
        });
    }
    checkUserExistByUsername(username, findOptions, throwErrorIfExist = false, throwErrorIfNotExist = false) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.findUserByUsername(username, findOptions);
            if (user && throwErrorIfExist)
                throw new common_1.BadRequestException(types_1.HttpException.USER_ALREADY_EXIST);
            if (!user && throwErrorIfNotExist)
                throw new common_1.BadRequestException(types_1.HttpException.USER_NOT_EXIST);
            return user;
        });
    }
    findUserByUsername(username, findOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const employee = yield this.employeeRepository.findOneBy(Object.assign({ username }, findOptions));
            return employee;
        });
    }
};
EmployeeService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _a : Object, typeof (_b = typeof api_1.BcryptService !== "undefined" && api_1.BcryptService) === "function" ? _b : Object])
], EmployeeService);
exports.EmployeeService = EmployeeService;


/***/ }),

/***/ "./src/modules/user/services/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./src/modules/user/services/customer.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./src/modules/user/services/employee.service.ts"), exports);


/***/ }),

/***/ "./src/modules/user/user.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const api_1 = __webpack_require__("../../libs/utils/src/lib/api-utils/index.ts");
const controllers_1 = __webpack_require__("./src/modules/user/controllers/index.ts");
const services_1 = __webpack_require__("./src/modules/user/services/index.ts");
let UserModule = class UserModule {
};
UserModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [api_1.BcryptModule],
        providers: [services_1.CustomerService, services_1.EmployeeService],
        controllers: [controllers_1.CustomerController, controllers_1.EmployeeController],
        exports: [services_1.CustomerService, services_1.EmployeeService],
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),

/***/ "../../libs/api-core/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/index.ts"), exports);


/***/ }),

/***/ "../../libs/api-core/src/lib/api-core.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiCoreModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const database_module_1 = __webpack_require__("../../libs/api-core/src/lib/database/database.module.ts");
const filters_1 = __webpack_require__("../../libs/api-core/src/lib/filters/index.ts");
const i18n_1 = __webpack_require__("../../libs/api-core/src/lib/i18n/index.ts");
const passport_module_1 = __webpack_require__("../../libs/api-core/src/lib/passport/passport.module.ts");
const queues_1 = __webpack_require__("../../libs/api-core/src/lib/queues/index.ts");
const schedule_1 = __webpack_require__("../../libs/api-core/src/lib/schedule/index.ts");
const static_server_1 = __webpack_require__("../../libs/api-core/src/lib/static-server/index.ts");
let ApiCoreModule = class ApiCoreModule {
};
ApiCoreModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            i18n_1.MyI18nModule,
            passport_module_1.MyPassportModule,
            queues_1.QueueModule,
            schedule_1.MyScheduleModule,
            static_server_1.MyStaticServerModule,
        ],
        providers: [
            common_1.Logger,
            {
                provide: core_1.APP_FILTER,
                useClass: filters_1.HttpExceptionFilter,
            },
        ],
    })
], ApiCoreModule);
exports.ApiCoreModule = ApiCoreModule;


/***/ }),

/***/ "../../libs/api-core/src/lib/database/database.config.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DATA_SOURCE_OPTIONS = void 0;
__webpack_require__("dotenv/config");
const typeorm_1 = __webpack_require__("typeorm");
const typeorm_naming_strategies_1 = __webpack_require__("typeorm-naming-strategies");
const entities_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/index.ts");
const migrations_1 = __webpack_require__("../../libs/api-core/src/lib/database/migrations/index.ts");
exports.DATA_SOURCE_OPTIONS = {
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10),
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    entities: entities_1.ENTITIES,
    migrations: migrations_1.MIGRATIONS,
    synchronize: false,
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
    migrationsTableName: 'typeorm_migrations',
    migrationsRun: false,
};
exports["default"] = new typeorm_1.DataSource(exports.DATA_SOURCE_OPTIONS);


/***/ }),

/***/ "../../libs/api-core/src/lib/database/database.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const database_config_1 = __webpack_require__("../../libs/api-core/src/lib/database/database.config.ts");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot(database_config_1.DATA_SOURCE_OPTIONS)],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ }),

/***/ "../../libs/api-core/src/lib/database/entities/asset.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Asset = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
const base_entity_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/base.entity.ts");
const product_category_entity_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/product-category.entity.ts");
const product_entity_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/product.entity.ts");
let Asset = class Asset extends base_entity_1.BaseEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    tslib_1.__metadata("design:type", String)
], Asset.prototype, "title", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    tslib_1.__metadata("design:type", Number)
], Asset.prototype, "order", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    tslib_1.__metadata("design:type", String)
], Asset.prototype, "mimeType", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof types_1.ISizeUrl !== "undefined" && types_1.ISizeUrl) === "function" ? _a : Object)
], Asset.prototype, "sizesUrls", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => product_category_entity_1.ProductCategory, (productCategory) => productCategory.asset),
    tslib_1.__metadata("design:type", typeof (_b = typeof product_category_entity_1.ProductCategory !== "undefined" && product_category_entity_1.ProductCategory) === "function" ? _b : Object)
], Asset.prototype, "productCategory", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.assets),
    (0, typeorm_1.JoinColumn)(),
    tslib_1.__metadata("design:type", typeof (_c = typeof product_entity_1.Product !== "undefined" && product_entity_1.Product) === "function" ? _c : Object)
], Asset.prototype, "product", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Asset.prototype, "productId", void 0);
Asset = tslib_1.__decorate([
    (0, typeorm_1.Entity)({ orderBy: { order: 'ASC' } })
], Asset);
exports.Asset = Asset;


/***/ }),

/***/ "../../libs/api-core/src/lib/database/entities/base.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseEntity = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
class BaseEntity {
}
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], BaseEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], BaseEntity.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], BaseEntity.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], BaseEntity.prototype, "deletedAt", void 0);
exports.BaseEntity = BaseEntity;


/***/ }),

/***/ "../../libs/api-core/src/lib/database/entities/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ENTITIES = void 0;
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/database/entities/asset.entity.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/database/entities/order/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/database/entities/product-category.entity.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/database/entities/product.entity.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/database/entities/user/index.ts"), exports);
const asset_entity_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/asset.entity.ts");
const order_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/order/index.ts");
const product_category_entity_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/product-category.entity.ts");
const product_entity_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/product.entity.ts");
const user_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/user/index.ts");
exports.ENTITIES = [
    asset_entity_1.Asset,
    order_1.Order,
    order_1.OrderItem,
    product_category_entity_1.ProductCategory,
    product_entity_1.Product,
    user_1.Customer,
    user_1.Employee,
];


/***/ }),

/***/ "../../libs/api-core/src/lib/database/entities/order/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/database/entities/order/order-item.entity.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/database/entities/order/order.entity.ts"), exports);


/***/ }),

/***/ "../../libs/api-core/src/lib/database/entities/order/order-item.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderItem = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
const base_entity_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/base.entity.ts");
const product_entity_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/product.entity.ts");
const order_entity_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/order/order.entity.ts");
let OrderItem = class OrderItem extends base_entity_1.BaseEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => order_entity_1.Order, (order) => order.orderItems),
    tslib_1.__metadata("design:type", typeof (_a = typeof order_entity_1.Order !== "undefined" && order_entity_1.Order) === "function" ? _a : Object)
], OrderItem.prototype, "order", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    tslib_1.__metadata("design:type", String)
], OrderItem.prototype, "orderId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb' }),
    tslib_1.__metadata("design:type", typeof (_b = typeof product_entity_1.Product !== "undefined" && product_entity_1.Product) === "function" ? _b : Object)
], OrderItem.prototype, "product", void 0);
OrderItem = tslib_1.__decorate([
    (0, typeorm_1.Entity)({ orderBy: { createdAt: 'DESC' } })
], OrderItem);
exports.OrderItem = OrderItem;


/***/ }),

/***/ "../../libs/api-core/src/lib/database/entities/order/order.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Order = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
const base_entity_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/base.entity.ts");
const order_item_entity_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/order/order-item.entity.ts");
let Order = class Order extends base_entity_1.BaseEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 10, scale: 2 }),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "email", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ length: 2048 }),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "notes", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "region", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "address", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "country", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enumName: 'order_status',
        enum: types_1.OrderStatus,
        default: types_1.OrderStatus.PENDING,
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof types_1.OrderStatus !== "undefined" && types_1.OrderStatus) === "function" ? _a : Object)
], Order.prototype, "status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => order_item_entity_1.OrderItem, (orderItems) => orderItems.order, {
        cascade: true,
        onDelete: 'CASCADE',
    }),
    tslib_1.__metadata("design:type", Array)
], Order.prototype, "orderItems", void 0);
Order = tslib_1.__decorate([
    (0, typeorm_1.Entity)({ orderBy: { createdAt: 'DESC' } })
], Order);
exports.Order = Order;


/***/ }),

/***/ "../../libs/api-core/src/lib/database/entities/product-category.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductCategory = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
const asset_entity_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/asset.entity.ts");
const base_entity_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/base.entity.ts");
const product_entity_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/product.entity.ts");
let ProductCategory = class ProductCategory extends base_entity_1.BaseEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    tslib_1.__metadata("design:type", String)
], ProductCategory.prototype, "name_ar", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    tslib_1.__metadata("design:type", String)
], ProductCategory.prototype, "name_en", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], ProductCategory.prototype, "order", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.Product, (product) => product.productCategory, {
        cascade: true,
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCategory.prototype, "products", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => asset_entity_1.Asset, (asset) => asset.productCategory, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'asset_id' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof asset_entity_1.Asset !== "undefined" && asset_entity_1.Asset) === "function" ? _a : Object)
], ProductCategory.prototype, "asset", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: true }),
    tslib_1.__metadata("design:type", String)
], ProductCategory.prototype, "assetId", void 0);
ProductCategory = tslib_1.__decorate([
    (0, typeorm_1.Entity)({ orderBy: { deletedAt: 'DESC', order: 'ASC' } })
], ProductCategory);
exports.ProductCategory = ProductCategory;


/***/ }),

/***/ "../../libs/api-core/src/lib/database/entities/product.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Product = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
const asset_entity_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/asset.entity.ts");
const base_entity_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/base.entity.ts");
const product_category_entity_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/product-category.entity.ts");
let Product = class Product extends base_entity_1.BaseEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "name_ar", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "name_en", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 10, scale: 2 }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "price", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "model", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "details_ar", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "details_en", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', array: true }),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "colors", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', array: true }),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "sizes", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => product_category_entity_1.ProductCategory),
    (0, typeorm_1.JoinColumn)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof product_category_entity_1.ProductCategory !== "undefined" && product_category_entity_1.ProductCategory) === "function" ? _a : Object)
], Product.prototype, "productCategory", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "productCategoryId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => asset_entity_1.Asset, (asset) => asset.product, { cascade: true }),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "assets", void 0);
Product = tslib_1.__decorate([
    (0, typeorm_1.Entity)({ orderBy: { deletedAt: 'DESC', createdAt: 'DESC' } })
], Product);
exports.Product = Product;


/***/ }),

/***/ "../../libs/api-core/src/lib/database/entities/user/base-user.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseUser = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
const base_entity_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/base.entity.ts");
class BaseUser extends base_entity_1.BaseEntity {
}
tslib_1.__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    tslib_1.__metadata("design:type", String)
], BaseUser.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    tslib_1.__metadata("design:type", String)
], BaseUser.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ length: 255, unique: true }),
    tslib_1.__metadata("design:type", String)
], BaseUser.prototype, "username", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ length: 1024 }),
    tslib_1.__metadata("design:type", String)
], BaseUser.prototype, "password", void 0);
exports.BaseUser = BaseUser;


/***/ }),

/***/ "../../libs/api-core/src/lib/database/entities/user/customer.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Customer = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
const base_user_entity_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/user/base-user.entity.ts");
let Customer = class Customer extends base_user_entity_1.BaseUser {
};
Customer = tslib_1.__decorate([
    (0, typeorm_1.Entity)({ orderBy: { createdAt: 'DESC' } })
], Customer);
exports.Customer = Customer;


/***/ }),

/***/ "../../libs/api-core/src/lib/database/entities/user/employee.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Employee = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
const base_user_entity_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/user/base-user.entity.ts");
let Employee = class Employee extends base_user_entity_1.BaseUser {
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: types_1.UserRole, default: types_1.UserRole.EMPLOYEE }),
    tslib_1.__metadata("design:type", typeof (_a = typeof types_1.UserRole !== "undefined" && types_1.UserRole) === "function" ? _a : Object)
], Employee.prototype, "role", void 0);
Employee = tslib_1.__decorate([
    (0, typeorm_1.Entity)({ orderBy: { role: 'DESC', createdAt: 'DESC' } })
], Employee);
exports.Employee = Employee;


/***/ }),

/***/ "../../libs/api-core/src/lib/database/entities/user/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/database/entities/user/base-user.entity.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/database/entities/user/customer.entity.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/database/entities/user/employee.entity.ts"), exports);


/***/ }),

/***/ "../../libs/api-core/src/lib/database/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/database/database.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/database/entities/index.ts"), exports);


/***/ }),

/***/ "../../libs/api-core/src/lib/database/migrations/1699205616669-initDatabase.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InitDatabase1699205616669 = void 0;
const tslib_1 = __webpack_require__("tslib");
class InitDatabase1699205616669 {
    constructor() {
        this.name = 'InitDatabase1699205616669';
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name_ar" character varying(255) NOT NULL, "name_en" character varying(255) NOT NULL, "price" numeric(10,2) NOT NULL, "details_ar" character varying NOT NULL, "details_en" character varying NOT NULL, "colors" text array NOT NULL, "sizes" text array NOT NULL, "product_category_id" uuid NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "product_category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name_ar" character varying(255) NOT NULL, "name_en" character varying(255) NOT NULL, "order" integer NOT NULL, "asset_id" uuid, CONSTRAINT "REL_22113bfe470ccc165bca1cabd8" UNIQUE ("asset_id"), CONSTRAINT "PK_0dce9bc93c2d2c399982d04bef1" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "asset" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "title" character varying(255) NOT NULL, "order" integer NOT NULL DEFAULT '1', "mime_type" character varying(255) NOT NULL, "sizes_urls" jsonb NOT NULL, "product_id" uuid, CONSTRAINT "PK_1209d107fe21482beaea51b745e" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "customer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "first_name" character varying(255) NOT NULL, "last_name" character varying(255) NOT NULL, "username" character varying(255) NOT NULL, "password" character varying(1024) NOT NULL, CONSTRAINT "UQ_cb485a32c0e8b9819c08c1b1a1b" UNIQUE ("username"), CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TYPE "public"."employee_role_enum" AS ENUM('Admin', 'Employee')`);
            yield queryRunner.query(`CREATE TABLE "employee" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "first_name" character varying(255) NOT NULL, "last_name" character varying(255) NOT NULL, "username" character varying(255) NOT NULL, "password" character varying(1024) NOT NULL, "role" "public"."employee_role_enum" NOT NULL DEFAULT 'Employee', CONSTRAINT "UQ_389fe2fe09430efb8eabc4e1b6e" UNIQUE ("username"), CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_c385a97195418da0bd3a08ceced" FOREIGN KEY ("product_category_id") REFERENCES "product_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "product_category" ADD CONSTRAINT "FK_22113bfe470ccc165bca1cabd81" FOREIGN KEY ("asset_id") REFERENCES "asset"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "asset" ADD CONSTRAINT "FK_980f83643b37cdae0d37df0c3e8" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "asset" DROP CONSTRAINT "FK_980f83643b37cdae0d37df0c3e8"`);
            yield queryRunner.query(`ALTER TABLE "product_category" DROP CONSTRAINT "FK_22113bfe470ccc165bca1cabd81"`);
            yield queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_c385a97195418da0bd3a08ceced"`);
            yield queryRunner.query(`DROP TABLE "employee"`);
            yield queryRunner.query(`DROP TYPE "public"."employee_role_enum"`);
            yield queryRunner.query(`DROP TABLE "customer"`);
            yield queryRunner.query(`DROP TABLE "asset"`);
            yield queryRunner.query(`DROP TABLE "product_category"`);
            yield queryRunner.query(`DROP TABLE "product"`);
        });
    }
}
exports.InitDatabase1699205616669 = InitDatabase1699205616669;


/***/ }),

/***/ "../../libs/api-core/src/lib/database/migrations/1699460585178-updateProduct.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProduct1699460585178 = void 0;
const tslib_1 = __webpack_require__("tslib");
class UpdateProduct1699460585178 {
    constructor() {
        this.name = 'UpdateProduct1699460585178';
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TYPE "public"."order_status" AS ENUM('Pending', 'Canceled', 'On Way', 'Delivered')`);
            yield queryRunner.query(`CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "total_price" numeric(10,2) NOT NULL, "email" character varying(255) NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "phone" character varying(255) NOT NULL, "notes" character varying(2048) NOT NULL, "region" character varying NOT NULL, "address" character varying NOT NULL, "country" character varying NOT NULL, "status" "public"."order_status" NOT NULL DEFAULT 'Pending', CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "order_item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "order_id" uuid NOT NULL, "product" jsonb NOT NULL, CONSTRAINT "PK_d01158fe15b1ead5c26fd7f4e90" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "model" character varying(255) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_e9674a6053adbaa1057848cddfa" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_e9674a6053adbaa1057848cddfa"`);
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "model"`);
            yield queryRunner.query(`DROP TABLE "order_item"`);
            yield queryRunner.query(`DROP TABLE "order"`);
            yield queryRunner.query(`DROP TYPE "public"."order_status"`);
        });
    }
}
exports.UpdateProduct1699460585178 = UpdateProduct1699460585178;


/***/ }),

/***/ "../../libs/api-core/src/lib/database/migrations/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MIGRATIONS = void 0;
const _1699205616669_initDatabase_1 = __webpack_require__("../../libs/api-core/src/lib/database/migrations/1699205616669-initDatabase.ts");
const _1699460585178_updateProduct_1 = __webpack_require__("../../libs/api-core/src/lib/database/migrations/1699460585178-updateProduct.ts");
exports.MIGRATIONS = [
    _1699205616669_initDatabase_1.InitDatabase1699205616669,
    _1699460585178_updateProduct_1.UpdateProduct1699460585178,
];


/***/ }),

/***/ "../../libs/api-core/src/lib/decorators/get-user.decorator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetUser = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const GetUser = (userData) => (0, common_1.createParamDecorator)((data = userData, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (data) {
        if (typeof data === 'object') {
            const newReq = {};
            data.map((item) => (newReq[item] = request.user[item]));
            return newReq;
        }
        else
            return request.user[data];
    }
    return request.user;
})();
exports.GetUser = GetUser;


/***/ }),

/***/ "../../libs/api-core/src/lib/decorators/ignore-global-guards.decorator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IgnoreGlobalGuardsDecorator = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const constant_1 = __webpack_require__("../../libs/constant/src/index.ts");
const IgnoreGlobalGuardsDecorator = () => (0, common_1.SetMetadata)(constant_1.IGNORE_GLOBAL_GUARDS, true);
exports.IgnoreGlobalGuardsDecorator = IgnoreGlobalGuardsDecorator;


/***/ }),

/***/ "../../libs/api-core/src/lib/decorators/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/decorators/get-user.decorator.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/decorators/ignore-global-guards.decorator.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/decorators/public.decorator.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/decorators/roles.decorator.ts"), exports);


/***/ }),

/***/ "../../libs/api-core/src/lib/decorators/public.decorator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const constant_1 = __webpack_require__("../../libs/constant/src/index.ts");
const Public = () => (0, common_1.SetMetadata)(constant_1.IS_PUBLIC_KEY, true);
exports.Public = Public;


/***/ }),

/***/ "../../libs/api-core/src/lib/decorators/roles.decorator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const constant_1 = __webpack_require__("../../libs/constant/src/index.ts");
const Roles = (roles) => (0, common_1.SetMetadata)(constant_1.ROLES_KEY, roles);
exports.Roles = Roles;


/***/ }),

/***/ "../../libs/api-core/src/lib/filters/http-exception.filter.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const nestjs_i18n_1 = __webpack_require__("nestjs-i18n");
let HttpExceptionFilter = class HttpExceptionFilter {
    constructor(i18n, logger) {
        this.i18n = i18n;
        this.logger = logger;
    }
    catch(exception, host) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ctx = host.switchToHttp();
            const response = ctx.getResponse();
            const request = ctx.getRequest();
            const statusCode = exception.getStatus();
            const errorDetail = exception.getResponse()['detail'];
            const lang = request.headers['accept-language'] || 'en';
            const error = `${lang}.${exception.message}`;
            const property = exception.getResponse()['error'];
            this.logger.error(exception);
            response.status(statusCode).json({
                statusCode,
                errors: errorDetail
                    ? `${exception.message}, ${errorDetail}`
                    : yield this.i18n.translate(error, {
                        lang: lang,
                        args: {
                            property: property,
                        },
                    }),
            });
        });
    }
};
HttpExceptionFilter = tslib_1.__decorate([
    (0, common_1.Catch)(common_1.HttpException),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof nestjs_i18n_1.I18nService !== "undefined" && nestjs_i18n_1.I18nService) === "function" ? _a : Object, typeof (_b = typeof common_1.Logger !== "undefined" && common_1.Logger) === "function" ? _b : Object])
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;


/***/ }),

/***/ "../../libs/api-core/src/lib/filters/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/filters/http-exception.filter.ts"), exports);


/***/ }),

/***/ "../../libs/api-core/src/lib/guards/base.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const constant_1 = __webpack_require__("../../libs/constant/src/index.ts");
let BaseGuard = class BaseGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    isPublic(context) {
        const isPublic = this.reflector.getAllAndOverride(constant_1.IS_PUBLIC_KEY, [context.getHandler(), context.getClass()]);
        return isPublic;
    }
    roles(context) {
        const roles = this.reflector.getAllAndOverride(constant_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        return roles;
    }
};
BaseGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], BaseGuard);
exports.BaseGuard = BaseGuard;


/***/ }),

/***/ "../../libs/api-core/src/lib/guards/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/guards/base.guard.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/guards/roles.guard.ts"), exports);


/***/ }),

/***/ "../../libs/api-core/src/lib/guards/roles.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
const base_guard_1 = __webpack_require__("../../libs/api-core/src/lib/guards/base.guard.ts");
let RolesGuard = class RolesGuard extends base_guard_1.BaseGuard {
    constructor(reflector) {
        super(reflector);
    }
    canActivate(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const isPublic = this.isPublic(context);
            if (isPublic)
                return true;
            const roles = this.roles(context);
            const { user } = context.switchToHttp().getRequest();
            if (roles) {
                const checkRole = roles.includes(user === null || user === void 0 ? void 0 : user.role);
                if (checkRole)
                    return true;
                throw new common_1.ForbiddenException(types_1.HttpException.FORBIDDEN);
            }
            return true;
        });
    }
};
RolesGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], RolesGuard);
exports.RolesGuard = RolesGuard;


/***/ }),

/***/ "../../libs/api-core/src/lib/i18n/i18n.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MyI18nModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const nestjs_i18n_1 = __webpack_require__("nestjs-i18n");
const path_1 = __webpack_require__("path");
let MyI18nModule = class MyI18nModule {
};
MyI18nModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_i18n_1.I18nModule.forRootAsync({
                inject: [config_1.ConfigService],
                resolvers: [new nestjs_i18n_1.AcceptLanguageResolver()],
                useFactory: (configService) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                    return ({
                        fallbackLanguage: 'en',
                        loaderOptions: {
                            path: (0, path_1.join)(__dirname, configService.get('paths.i18n')),
                            watch: true,
                        },
                    });
                }),
            }),
        ],
    })
], MyI18nModule);
exports.MyI18nModule = MyI18nModule;


/***/ }),

/***/ "../../libs/api-core/src/lib/i18n/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/i18n/i18n.module.ts"), exports);


/***/ }),

/***/ "../../libs/api-core/src/lib/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/api-core.module.ts"), exports);


/***/ }),

/***/ "../../libs/api-core/src/lib/passport/guards/dashboard-jwt-access-token.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashboardJwtAccessTokenGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const passport_1 = __webpack_require__("@nestjs/passport");
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
const strategies_1 = __webpack_require__("../../libs/api-core/src/lib/passport/strategies/index.ts");
let DashboardJwtAccessTokenGuard = class DashboardJwtAccessTokenGuard extends (0, passport_1.AuthGuard)(strategies_1.StrategyName.DASHBOARD_ACCESS_TOKEN_STRATEGY) {
    constructor(reflector) {
        super();
        this.reflector = reflector;
    }
    canActivate(context) {
        return super.canActivate(context);
    }
    handleRequest(err, user, info) {
        if (err || !user)
            throw err || new common_1.UnauthorizedException(types_1.HttpException.UNAUTHORIZED);
        return user;
    }
};
DashboardJwtAccessTokenGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], DashboardJwtAccessTokenGuard);
exports.DashboardJwtAccessTokenGuard = DashboardJwtAccessTokenGuard;


/***/ }),

/***/ "../../libs/api-core/src/lib/passport/guards/dashboard-jwt-refresh-token.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashboardJwtRefreshTokenGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
const strategies_1 = __webpack_require__("../../libs/api-core/src/lib/passport/strategies/index.ts");
let DashboardJwtRefreshTokenGuard = class DashboardJwtRefreshTokenGuard extends (0, passport_1.AuthGuard)(strategies_1.StrategyName.DASHBOARD_REFRESH_TOKEN_STRATEGY) {
    canActivate(context) {
        return super.canActivate(context);
    }
    handleRequest(err, user, info) {
        if (err || !user)
            throw err || new common_1.UnauthorizedException(types_1.HttpException.UNAUTHORIZED);
        return user;
    }
};
DashboardJwtRefreshTokenGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], DashboardJwtRefreshTokenGuard);
exports.DashboardJwtRefreshTokenGuard = DashboardJwtRefreshTokenGuard;


/***/ }),

/***/ "../../libs/api-core/src/lib/passport/guards/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/passport/guards/dashboard-jwt-access-token.guard.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/passport/guards/dashboard-jwt-refresh-token.guard.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/passport/guards/store-jwt-access-token.guard.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/passport/guards/store-jwt-refresh-token.guard.ts"), exports);


/***/ }),

/***/ "../../libs/api-core/src/lib/passport/guards/store-jwt-access-token.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StoreJwtAccessTokenGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
const strategies_1 = __webpack_require__("../../libs/api-core/src/lib/passport/strategies/index.ts");
let StoreJwtAccessTokenGuard = class StoreJwtAccessTokenGuard extends (0, passport_1.AuthGuard)(strategies_1.StrategyName.STORE_ACCESS_TOKEN_STRATEGY) {
    canActivate(context) {
        return super.canActivate(context);
    }
    handleRequest(err, user, info) {
        if (err || !user)
            throw err || new common_1.UnauthorizedException(types_1.HttpException.UNAUTHORIZED);
        return user;
    }
};
StoreJwtAccessTokenGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], StoreJwtAccessTokenGuard);
exports.StoreJwtAccessTokenGuard = StoreJwtAccessTokenGuard;


/***/ }),

/***/ "../../libs/api-core/src/lib/passport/guards/store-jwt-refresh-token.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StoreJwtRefreshTokenStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
const strategies_1 = __webpack_require__("../../libs/api-core/src/lib/passport/strategies/index.ts");
let StoreJwtRefreshTokenStrategy = class StoreJwtRefreshTokenStrategy extends (0, passport_1.AuthGuard)(strategies_1.StrategyName.STORE_REFRESH_TOKEN_STRATEGY) {
    canActivate(context) {
        return super.canActivate(context);
    }
    handleRequest(err, user, info) {
        if (err || !user)
            throw err || new common_1.UnauthorizedException(types_1.HttpException.UNAUTHORIZED);
        return user;
    }
};
StoreJwtRefreshTokenStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)()
], StoreJwtRefreshTokenStrategy);
exports.StoreJwtRefreshTokenStrategy = StoreJwtRefreshTokenStrategy;


/***/ }),

/***/ "../../libs/api-core/src/lib/passport/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/passport/guards/index.ts"), exports);


/***/ }),

/***/ "../../libs/api-core/src/lib/passport/passport.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MyPassportModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
const strategies_1 = __webpack_require__("../../libs/api-core/src/lib/passport/strategies/index.ts");
let MyPassportModule = class MyPassportModule {
};
MyPassportModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [passport_1.PassportModule],
        providers: [
            strategies_1.DashboardJwtAccessTokenStrategy,
            strategies_1.DashboardJwtRefreshTokenStrategy,
            strategies_1.StoreJwtAccessTokenStrategy,
            strategies_1.StoreJwtRefreshTokenStrategy,
        ],
        exports: [],
    })
], MyPassportModule);
exports.MyPassportModule = MyPassportModule;


/***/ }),

/***/ "../../libs/api-core/src/lib/passport/strategies/dashboard-jwt-access-token.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashboardJwtAccessTokenStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const passport_1 = __webpack_require__("@nestjs/passport");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const typeorm_1 = __webpack_require__("typeorm");
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
const entities_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/index.ts");
const strategy_name_enum_1 = __webpack_require__("../../libs/api-core/src/lib/passport/strategies/strategy-name.enum.ts");
let DashboardJwtAccessTokenStrategy = class DashboardJwtAccessTokenStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, strategy_name_enum_1.StrategyName.DASHBOARD_ACCESS_TOKEN_STRATEGY) {
    constructor(configService, dataSource) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('jwt.dashboard.accessTokenConfig.secret'),
        });
        this.configService = configService;
        this.dataSource = dataSource;
    }
    get employeeRepository() {
        return this.dataSource.getRepository(entities_1.Employee);
    }
    validate(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { id, username, role } = payload;
            const user = yield this.employeeRepository.findOneBy({
                id,
                username,
                role,
            });
            if (!user)
                throw new common_1.UnauthorizedException(types_1.HttpException.NOT_FOUND, types_1.Property.USER);
            delete user.password;
            return user;
        });
    }
};
DashboardJwtAccessTokenStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.DataSource !== "undefined" && typeorm_1.DataSource) === "function" ? _b : Object])
], DashboardJwtAccessTokenStrategy);
exports.DashboardJwtAccessTokenStrategy = DashboardJwtAccessTokenStrategy;


/***/ }),

/***/ "../../libs/api-core/src/lib/passport/strategies/dashboard-jwt-refresh-token.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashboardJwtRefreshTokenStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const passport_1 = __webpack_require__("@nestjs/passport");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const strategy_name_enum_1 = __webpack_require__("../../libs/api-core/src/lib/passport/strategies/strategy-name.enum.ts");
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
const typeorm_1 = __webpack_require__("typeorm");
const entities_1 = __webpack_require__("../../libs/api-core/src/lib/database/entities/index.ts");
let DashboardJwtRefreshTokenStrategy = class DashboardJwtRefreshTokenStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, strategy_name_enum_1.StrategyName.DASHBOARD_REFRESH_TOKEN_STRATEGY) {
    constructor(configService, dataSource) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromHeader('dashboard-refresh-token'),
            ignoreExpiration: false,
            secretOrKey: configService.get('jwt.dashboard.refreshTokenConfig.secret'),
        });
        this.configService = configService;
        this.dataSource = dataSource;
    }
    get employeeRepository() {
        return this.dataSource.getRepository(entities_1.Employee);
    }
    validate(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { id, username, role } = payload;
            const user = yield this.employeeRepository.findOneBy({
                id,
                username,
                role,
            });
            if (!user)
                throw new common_1.UnauthorizedException(types_1.HttpException.NOT_FOUND, types_1.Property.USER);
            delete user.password;
            return user;
        });
    }
};
DashboardJwtRefreshTokenStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.DataSource !== "undefined" && typeorm_1.DataSource) === "function" ? _b : Object])
], DashboardJwtRefreshTokenStrategy);
exports.DashboardJwtRefreshTokenStrategy = DashboardJwtRefreshTokenStrategy;


/***/ }),

/***/ "../../libs/api-core/src/lib/passport/strategies/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/passport/strategies/dashboard-jwt-access-token.strategy.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/passport/strategies/dashboard-jwt-refresh-token.strategy.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/passport/strategies/store-jwt-access-token.strategy.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/passport/strategies/store-jwt-refresh-token.strategy.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/passport/strategies/strategy-name.enum.ts"), exports);


/***/ }),

/***/ "../../libs/api-core/src/lib/passport/strategies/store-jwt-access-token.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var StoreJwtAccessTokenStrategy_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StoreJwtAccessTokenStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const passport_1 = __webpack_require__("@nestjs/passport");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const strategy_name_enum_1 = __webpack_require__("../../libs/api-core/src/lib/passport/strategies/strategy-name.enum.ts");
let StoreJwtAccessTokenStrategy = StoreJwtAccessTokenStrategy_1 = class StoreJwtAccessTokenStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, strategy_name_enum_1.StrategyName.STORE_ACCESS_TOKEN_STRATEGY) {
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: configService.get('jwt.store.accessTokenConfig.secret'),
        });
        this.configService = configService;
    }
    validate(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('🚀 ~ file: store-jwt-access-token.strategy.ts:24 ~ validate ~ payload:', payload);
            console.log(StoreJwtAccessTokenStrategy_1.name);
        });
    }
};
StoreJwtAccessTokenStrategy = StoreJwtAccessTokenStrategy_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], StoreJwtAccessTokenStrategy);
exports.StoreJwtAccessTokenStrategy = StoreJwtAccessTokenStrategy;


/***/ }),

/***/ "../../libs/api-core/src/lib/passport/strategies/store-jwt-refresh-token.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var StoreJwtRefreshTokenStrategy_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StoreJwtRefreshTokenStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const passport_1 = __webpack_require__("@nestjs/passport");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const strategy_name_enum_1 = __webpack_require__("../../libs/api-core/src/lib/passport/strategies/strategy-name.enum.ts");
let StoreJwtRefreshTokenStrategy = StoreJwtRefreshTokenStrategy_1 = class StoreJwtRefreshTokenStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, strategy_name_enum_1.StrategyName.STORE_REFRESH_TOKEN_STRATEGY) {
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromHeader('store-refresh-token'),
            ignoreExpiration: false,
            secretOrKey: configService.get('jwt.store.refreshTokenConfig.secret'),
        });
        this.configService = configService;
    }
    validate(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(StoreJwtRefreshTokenStrategy_1.name);
        });
    }
};
StoreJwtRefreshTokenStrategy = StoreJwtRefreshTokenStrategy_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], StoreJwtRefreshTokenStrategy);
exports.StoreJwtRefreshTokenStrategy = StoreJwtRefreshTokenStrategy;


/***/ }),

/***/ "../../libs/api-core/src/lib/passport/strategies/strategy-name.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StrategyName = void 0;
var StrategyName;
(function (StrategyName) {
    StrategyName["DASHBOARD_ACCESS_TOKEN_STRATEGY"] = "DashboardJwtAccessTokenStrategy";
    StrategyName["DASHBOARD_REFRESH_TOKEN_STRATEGY"] = "DashboardJwtRefreshTokenStrategy";
    StrategyName["STORE_ACCESS_TOKEN_STRATEGY"] = "StoreJwtAccessTokenStrategy";
    StrategyName["STORE_REFRESH_TOKEN_STRATEGY"] = "StoreJwtRefreshTokenStrategy";
})(StrategyName = exports.StrategyName || (exports.StrategyName = {}));


/***/ }),

/***/ "../../libs/api-core/src/lib/queues/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/queues/queue-config.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/queues/queue.module.ts"), exports);


/***/ }),

/***/ "../../libs/api-core/src/lib/queues/queue-config.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BullConfigService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
let BullConfigService = class BullConfigService {
    constructor(configService) {
        this.configService = configService;
    }
    createSharedConfiguration() {
        const { host, port } = this.configService.get('redis');
        return { redis: { host, port } };
    }
};
BullConfigService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], BullConfigService);
exports.BullConfigService = BullConfigService;


/***/ }),

/***/ "../../libs/api-core/src/lib/queues/queue.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueueModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const bull_1 = __webpack_require__("@nestjs/bull");
const common_1 = __webpack_require__("@nestjs/common");
const queue_config_service_1 = __webpack_require__("../../libs/api-core/src/lib/queues/queue-config.service.ts");
let QueueModule = class QueueModule {
};
QueueModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            bull_1.BullModule.forRootAsync({
                useClass: queue_config_service_1.BullConfigService,
            }),
        ],
        providers: [],
    })
], QueueModule);
exports.QueueModule = QueueModule;


/***/ }),

/***/ "../../libs/api-core/src/lib/schedule/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/schedule/schedule.module.ts"), exports);


/***/ }),

/***/ "../../libs/api-core/src/lib/schedule/schedule.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MyScheduleModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const schedule_1 = __webpack_require__("@nestjs/schedule");
let MyScheduleModule = class MyScheduleModule {
};
MyScheduleModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [schedule_1.ScheduleModule.forRoot()],
        providers: [],
        exports: [],
    })
], MyScheduleModule);
exports.MyScheduleModule = MyScheduleModule;


/***/ }),

/***/ "../../libs/api-core/src/lib/services/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/services/transaction-base.service.ts"), exports);


/***/ }),

/***/ "../../libs/api-core/src/lib/services/transaction-base.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionBaseService = void 0;
const tslib_1 = __webpack_require__("tslib");
class TransactionBaseService {
    get activeManager_() {
        var _a;
        return (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
    }
    constructor(manager) {
        this.manager = manager;
        this.manager_ = manager;
    }
    withTransaction(transactionManager) {
        if (!transactionManager) {
            return this;
        }
        const cloned = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        cloned.manager_ = transactionManager;
        cloned.transactionManager_ = transactionManager;
        return cloned;
    }
    shouldRetryTransaction_(err) {
        if (!(err === null || err === void 0 ? void 0 : err.code)) {
            return false;
        }
        const code = err === null || err === void 0 ? void 0 : err.code;
        return code === '40001' || code === '40P01';
    }
    /**
     * Wraps some work within a transactional block. If the service already has
     * a transaction manager attached this will be reused, otherwise a new
     * transaction manager is created.
     * @param work - the transactional work to be done
     * @param isolationOrErrorHandler - the isolation level to be used for the work.
     * @param maybeErrorHandlerOrDontFail Potential error handler
     * @return the result of the transactional work
     */
    atomicPhase_(work, isolationOrErrorHandler, maybeErrorHandlerOrDontFail) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let errorHandler = maybeErrorHandlerOrDontFail;
            let isolation = isolationOrErrorHandler;
            let dontFail = false;
            if (typeof isolationOrErrorHandler === 'function') {
                isolation = null;
                errorHandler = isolationOrErrorHandler;
                dontFail = !!maybeErrorHandlerOrDontFail;
            }
            if (this.transactionManager_) {
                const doWork = (m) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    this.manager_ = m;
                    this.transactionManager_ = m;
                    try {
                        return yield work(m);
                    }
                    catch (error) {
                        if (errorHandler) {
                            const queryRunner = this.transactionManager_.queryRunner;
                            if (queryRunner && queryRunner.isTransactionActive) {
                                yield queryRunner.rollbackTransaction();
                            }
                            yield errorHandler(error);
                        }
                        throw error;
                    }
                });
                return yield doWork(this.transactionManager_);
            }
            else {
                const temp = this.manager_;
                const doWork = (m) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    this.manager_ = m;
                    this.transactionManager_ = m;
                    try {
                        const result = yield work(m);
                        this.manager_ = temp;
                        this.transactionManager_ = undefined;
                        return result;
                    }
                    catch (error) {
                        this.manager_ = temp;
                        this.transactionManager_ = undefined;
                        throw error;
                    }
                });
                if (isolation && this.manager_) {
                    let result;
                    try {
                        result = yield this.manager_.transaction(isolation, (m) => tslib_1.__awaiter(this, void 0, void 0, function* () { return doWork(m); }));
                        return result;
                    }
                    catch (error) {
                        if (this.shouldRetryTransaction_(error)) {
                            return this.manager_.transaction(isolation, (m) => tslib_1.__awaiter(this, void 0, void 0, function* () { return doWork(m); }));
                        }
                        else {
                            if (errorHandler) {
                                yield errorHandler(error);
                            }
                            throw error;
                        }
                    }
                }
                try {
                    return yield this.manager_.transaction((m) => tslib_1.__awaiter(this, void 0, void 0, function* () { return doWork(m); }));
                }
                catch (error) {
                    if (errorHandler) {
                        const result = yield errorHandler(error);
                        if (dontFail) {
                            return result;
                        }
                    }
                    throw error;
                }
            }
        });
    }
}
exports.TransactionBaseService = TransactionBaseService;


/***/ }),

/***/ "../../libs/api-core/src/lib/static-server/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/api-core/src/lib/static-server/static-server.module.ts"), exports);


/***/ }),

/***/ "../../libs/api-core/src/lib/static-server/static-server.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MyStaticServerModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const serve_static_1 = __webpack_require__("@nestjs/serve-static");
const path_1 = __webpack_require__("path");
const api_1 = __webpack_require__("../../libs/utils/src/lib/api-utils/index.ts");
let MyStaticServerModule = class MyStaticServerModule {
};
MyStaticServerModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                    const uploadsPath = configService.get('paths.uploads');
                    const uploadsFullPath = (0, path_1.join)(process.cwd(), uploadsPath);
                    const publicPath = configService.get('paths.public');
                    const publicFullPath = (0, path_1.join)(process.cwd(), publicPath);
                    const tempPath = configService.get('paths.temp');
                    const tempFullPath = (0, path_1.join)(process.cwd(), tempPath);
                    yield api_1.FileUtils.CreateFolder(uploadsFullPath);
                    yield api_1.FileUtils.CreateFolder(publicFullPath);
                    return [
                        { rootPath: uploadsFullPath, serveRoot: '/uploads' },
                        { rootPath: publicFullPath, serveRoot: '/public' },
                        { rootPath: tempFullPath, serveRoot: '/temp' },
                    ];
                }),
            }),
        ],
    })
], MyStaticServerModule);
exports.MyStaticServerModule = MyStaticServerModule;


/***/ }),

/***/ "../../libs/constant/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/constant/src/lib/index.ts"), exports);


/***/ }),

/***/ "../../libs/constant/src/lib/asset.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_SIZE_URL = exports.FILE_EXTENTION = exports.FILE_WIDTH = exports.FILE_SIZE = void 0;
exports.FILE_SIZE = 1024 * 1024 * 10;
exports.FILE_WIDTH = [720, 480, 360];
exports.FILE_EXTENTION = ['png', 'jpeg', 'jpg'];
exports.DEFAULT_SIZE_URL = {
    '360': 'public/thumbnail.png',
    '480': 'public/thumbnail.png',
    '720': 'public/thumbnail.png',
};


/***/ }),

/***/ "../../libs/constant/src/lib/decorator.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ROLES_KEY = exports.IS_PUBLIC_KEY = exports.IGNORE_GLOBAL_GUARDS = void 0;
exports.IGNORE_GLOBAL_GUARDS = 'ignoreGlobalGuards';
exports.IS_PUBLIC_KEY = 'isPublic';
exports.ROLES_KEY = 'roles';


/***/ }),

/***/ "../../libs/constant/src/lib/default-data.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultProductCategory = exports.defaultProduct = exports.defaultUpdatePassword = exports.defaultEmployee = exports.defaultSizes = exports.defaultColors = exports.priceUnit = void 0;
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
exports.priceUnit = {
    en: 'S.P',
    ar: 'ل.س',
};
exports.defaultColors = [
    { label: 'red', value: 'red' },
    { label: 'green', value: 'green' },
    { label: 'yellow', value: 'yellow' },
    { label: 'black', value: 'black' },
    { label: 'gray', value: 'gray' },
    { label: 'cyan', value: 'cyan' },
    { label: 'white', value: 'white' },
    { label: 'purple', value: 'purple' },
    { label: 'blue', value: 'blue' },
    { label: 'wheat', value: 'wheat' },
];
exports.defaultSizes = [];
for (let i = 1; i <= 100; i++) {
    const obj = {
        label: i.toString(),
        value: i.toString(),
    };
    exports.defaultSizes.push(obj);
}
exports.defaultEmployee = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    passwordConfirm: '',
    role: types_1.UserRole.EMPLOYEE,
};
exports.defaultUpdatePassword = {
    oldPassword: '',
    newPassword: '',
    newPasswordConfirm: '',
};
exports.defaultProduct = {
    name_ar: '',
    name_en: '',
    price: 0,
    details_ar: '',
    details_en: '',
    productCategoryId: '',
    colors: [],
    sizes: [],
    model: '',
    assets: [
        {
            title: '',
            order: 1,
            url: 'public/thumbnail.png',
        },
    ],
};
exports.defaultProductCategory = {
    name_ar: '',
    name_en: '',
    order: 1,
    asset: {
        title: '',
        order: 1,
        url: 'public/thumbnail.png',
    },
};


/***/ }),

/***/ "../../libs/constant/src/lib/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/constant/src/lib/asset.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/constant/src/lib/decorator.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/constant/src/lib/default-data.ts"), exports);


/***/ }),

/***/ "../../libs/dto/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/index.ts"), exports);


/***/ }),

/***/ "../../libs/dto/src/lib/asset/create-asset.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAssetDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const validators_1 = __webpack_require__("../../libs/validators/src/index.ts");
class CreateAssetDto {
}
tslib_1.__decorate([
    (0, validators_1.IsOptional)(),
    (0, validators_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateAssetDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNumber)(),
    (0, validators_1.Min)(0),
    (0, validators_1.Max)(10),
    tslib_1.__metadata("design:type", Number)
], CreateAssetDto.prototype, "order", void 0);
tslib_1.__decorate([
    (0, validators_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateAssetDto.prototype, "url", void 0);
exports.CreateAssetDto = CreateAssetDto;


/***/ }),

/***/ "../../libs/dto/src/lib/asset/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/asset/create-asset.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/asset/update-asset.dto.ts"), exports);


/***/ }),

/***/ "../../libs/dto/src/lib/asset/update-asset.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAssetDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const mapped_types_1 = __webpack_require__("@nestjs/mapped-types");
const create_asset_dto_1 = __webpack_require__("../../libs/dto/src/lib/asset/create-asset.dto.ts");
const validators_1 = __webpack_require__("../../libs/validators/src/index.ts");
class UpdateAssetDto extends (0, mapped_types_1.PartialType)(create_asset_dto_1.CreateAssetDto) {
}
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], UpdateAssetDto.prototype, "assetId", void 0);
exports.UpdateAssetDto = UpdateAssetDto;


/***/ }),

/***/ "../../libs/dto/src/lib/auth/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/auth/login.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/auth/register.dto.ts"), exports);


/***/ }),

/***/ "../../libs/dto/src/lib/auth/login.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const validators_1 = __webpack_require__("../../libs/validators/src/index.ts");
class LoginDto {
}
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)()
    // @IsNumberString()
    ,
    (0, validators_1.MaxLength)(255),
    tslib_1.__metadata("design:type", String)
], LoginDto.prototype, "username", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)()
    // @MinLength(6)
    // @MaxLength(20)
    // @Matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/,
    // )
    ,
    tslib_1.__metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
exports.LoginDto = LoginDto;


/***/ }),

/***/ "../../libs/dto/src/lib/auth/register.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const validators_1 = __webpack_require__("../../libs/validators/src/index.ts");
class RegisterDto {
}
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    (0, validators_1.MinLength)(1),
    (0, validators_1.MaxLength)(255),
    tslib_1.__metadata("design:type", String)
], RegisterDto.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    (0, validators_1.MinLength)(1),
    (0, validators_1.MaxLength)(255),
    tslib_1.__metadata("design:type", String)
], RegisterDto.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsNumberString)(),
    (0, validators_1.MinLength)(1),
    (0, validators_1.MaxLength)(255),
    tslib_1.__metadata("design:type", String)
], RegisterDto.prototype, "username", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    (0, validators_1.MinLength)(6),
    (0, validators_1.MaxLength)(20)
    // @Matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/,
    //     {
    //         message: `Password must be: Min 1 uppercase letter, Min 1 lowercase letter, Min 1 special character, Min 1 number, Min 6 characters, Max 20 characters.`,
    //     },
    // )
    ,
    tslib_1.__metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
tslib_1.__decorate([
    (0, validators_1.IsMatch)('password'),
    tslib_1.__metadata("design:type", String)
], RegisterDto.prototype, "passwordConfirm", void 0);
exports.RegisterDto = RegisterDto;


/***/ }),

/***/ "../../libs/dto/src/lib/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/asset/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/auth/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/product/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/order/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/product-category/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/user/index.ts"), exports);


/***/ }),

/***/ "../../libs/dto/src/lib/order/create-order.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateOrderDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const validators_1 = __webpack_require__("../../libs/validators/src/index.ts");
class CreateOrderDto {
}
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateOrderDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateOrderDto.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateOrderDto.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateOrderDto.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateOrderDto.prototype, "notes", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateOrderDto.prototype, "region", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateOrderDto.prototype, "address", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateOrderDto.prototype, "country", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsArray)(),
    (0, validators_1.IsUUID)('all', { each: true }),
    tslib_1.__metadata("design:type", Array)
], CreateOrderDto.prototype, "productsIds", void 0);
exports.CreateOrderDto = CreateOrderDto;


/***/ }),

/***/ "../../libs/dto/src/lib/order/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/order/create-order.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/order/update-order.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/order/update-status.dto.ts"), exports);


/***/ }),

/***/ "../../libs/dto/src/lib/order/update-order.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateOrderDto = void 0;
const mapped_types_1 = __webpack_require__("@nestjs/mapped-types");
const create_order_dto_1 = __webpack_require__("../../libs/dto/src/lib/order/create-order.dto.ts");
class UpdateOrderDto extends (0, mapped_types_1.PartialType)(create_order_dto_1.CreateOrderDto) {
}
exports.UpdateOrderDto = UpdateOrderDto;


/***/ }),

/***/ "../../libs/dto/src/lib/order/update-status.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateOrderStatusDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
const validators_1 = __webpack_require__("../../libs/validators/src/index.ts");
class UpdateOrderStatusDto {
}
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsEnum)(types_1.OrderStatus),
    tslib_1.__metadata("design:type", typeof (_a = typeof types_1.OrderStatus !== "undefined" && types_1.OrderStatus) === "function" ? _a : Object)
], UpdateOrderStatusDto.prototype, "status", void 0);
exports.UpdateOrderStatusDto = UpdateOrderStatusDto;


/***/ }),

/***/ "../../libs/dto/src/lib/product-category/create-product-category.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateProductCategoryDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const validators_1 = __webpack_require__("../../libs/validators/src/index.ts");
const class_transformer_1 = __webpack_require__("class-transformer");
const asset_1 = __webpack_require__("../../libs/dto/src/lib/asset/index.ts");
class CreateProductCategoryDto {
}
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    (0, validators_1.MaxLength)(255),
    tslib_1.__metadata("design:type", String)
], CreateProductCategoryDto.prototype, "name_ar", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    (0, validators_1.MaxLength)(255),
    tslib_1.__metadata("design:type", String)
], CreateProductCategoryDto.prototype, "name_en", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsNumber)(),
    (0, validators_1.Min)(1),
    (0, validators_1.Max)(1000000),
    tslib_1.__metadata("design:type", Number)
], CreateProductCategoryDto.prototype, "order", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => asset_1.CreateAssetDto),
    (0, validators_1.ValidateNested)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof asset_1.CreateAssetDto !== "undefined" && asset_1.CreateAssetDto) === "function" ? _a : Object)
], CreateProductCategoryDto.prototype, "asset", void 0);
exports.CreateProductCategoryDto = CreateProductCategoryDto;


/***/ }),

/***/ "../../libs/dto/src/lib/product-category/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/product-category/create-product-category.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/product-category/update-product-category.dto.ts"), exports);


/***/ }),

/***/ "../../libs/dto/src/lib/product-category/update-product-category.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProductCategoryDto = void 0;
const mapped_types_1 = __webpack_require__("@nestjs/mapped-types");
const create_product_category_dto_1 = __webpack_require__("../../libs/dto/src/lib/product-category/create-product-category.dto.ts");
class UpdateProductCategoryDto extends (0, mapped_types_1.PartialType)(create_product_category_dto_1.CreateProductCategoryDto) {
}
exports.UpdateProductCategoryDto = UpdateProductCategoryDto;


/***/ }),

/***/ "../../libs/dto/src/lib/product/create-product.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateProductDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_transformer_1 = __webpack_require__("class-transformer");
const validators_1 = __webpack_require__("../../libs/validators/src/index.ts");
const asset_1 = __webpack_require__("../../libs/dto/src/lib/asset/index.ts");
class CreateProductDto {
}
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    (0, validators_1.MaxLength)(255),
    tslib_1.__metadata("design:type", String)
], CreateProductDto.prototype, "name_ar", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    (0, validators_1.MaxLength)(255),
    tslib_1.__metadata("design:type", String)
], CreateProductDto.prototype, "name_en", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    (0, validators_1.MaxLength)(255),
    tslib_1.__metadata("design:type", String)
], CreateProductDto.prototype, "model", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsNumber)(),
    (0, validators_1.Min)(0),
    (0, validators_1.Max)(1000000),
    (0, class_transformer_1.Transform)((params) => +params.value),
    tslib_1.__metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateProductDto.prototype, "details_ar", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateProductDto.prototype, "details_en", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsArray)(),
    (0, validators_1.IsString)({ each: true }),
    tslib_1.__metadata("design:type", Array)
], CreateProductDto.prototype, "sizes", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsArray)(),
    (0, validators_1.IsString)({ each: true }),
    tslib_1.__metadata("design:type", Array)
], CreateProductDto.prototype, "colors", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], CreateProductDto.prototype, "productCategoryId", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsArray)(),
    (0, validators_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => asset_1.CreateAssetDto),
    tslib_1.__metadata("design:type", Array)
], CreateProductDto.prototype, "assets", void 0);
exports.CreateProductDto = CreateProductDto;


/***/ }),

/***/ "../../libs/dto/src/lib/product/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/product/create-product.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/product/update-product.dto.ts"), exports);


/***/ }),

/***/ "../../libs/dto/src/lib/product/update-product.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProductDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const mapped_types_1 = __webpack_require__("@nestjs/mapped-types");
const class_transformer_1 = __webpack_require__("class-transformer");
const validators_1 = __webpack_require__("../../libs/validators/src/index.ts");
const asset_1 = __webpack_require__("../../libs/dto/src/lib/asset/index.ts");
const create_product_dto_1 = __webpack_require__("../../libs/dto/src/lib/product/create-product.dto.ts");
class UpdateProductDto extends (0, mapped_types_1.PartialType)((0, mapped_types_1.OmitType)(create_product_dto_1.CreateProductDto, ['assets'])) {
}
tslib_1.__decorate([
    (0, validators_1.IsOptional)(),
    (0, validators_1.IsArray)(),
    (0, class_transformer_1.Type)(() => asset_1.UpdateAssetDto),
    (0, validators_1.ValidateNested)(),
    tslib_1.__metadata("design:type", Array)
], UpdateProductDto.prototype, "assets", void 0);
exports.UpdateProductDto = UpdateProductDto;


/***/ }),

/***/ "../../libs/dto/src/lib/user/create-customer.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCustomerDto = void 0;
const mapped_types_1 = __webpack_require__("@nestjs/mapped-types");
const create_user_dto_1 = __webpack_require__("../../libs/dto/src/lib/user/create-user.dto.ts");
class CreateCustomerDto extends (0, mapped_types_1.OmitType)(create_user_dto_1.CreateUserDto, []) {
}
exports.CreateCustomerDto = CreateCustomerDto;


/***/ }),

/***/ "../../libs/dto/src/lib/user/create-employee.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateEmployeeDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const mapped_types_1 = __webpack_require__("@nestjs/mapped-types");
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
const validators_1 = __webpack_require__("../../libs/validators/src/index.ts");
const create_user_dto_1 = __webpack_require__("../../libs/dto/src/lib/user/create-user.dto.ts");
class CreateEmployeeDto extends (0, mapped_types_1.IntersectionType)(create_user_dto_1.CreateUserDto) {
}
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsEnum)(types_1.UserRole),
    tslib_1.__metadata("design:type", typeof (_a = typeof types_1.UserRole !== "undefined" && types_1.UserRole) === "function" ? _a : Object)
], CreateEmployeeDto.prototype, "role", void 0);
exports.CreateEmployeeDto = CreateEmployeeDto;


/***/ }),

/***/ "../../libs/dto/src/lib/user/create-user.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const validators_1 = __webpack_require__("../../libs/validators/src/index.ts");
class CreateUserDto {
}
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    (0, validators_1.MaxLength)(255),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    (0, validators_1.MaxLength)(255),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsNumberString)(),
    (0, validators_1.MinLength)(1),
    (0, validators_1.MaxLength)(255),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "username", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    (0, validators_1.MinLength)(6),
    (0, validators_1.MaxLength)(20)
    // @Matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/,
    //     {
    //         message: `Password must be: Min 1 uppercase letter, Min 1 lowercase letter, Min 1 special character, Min 1 number, Min 6 characters, Max 20 characters.`,
    //     },
    // )
    ,
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
tslib_1.__decorate([
    (0, validators_1.IsMatch)('password'),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "passwordConfirm", void 0);
exports.CreateUserDto = CreateUserDto;


/***/ }),

/***/ "../../libs/dto/src/lib/user/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/user/create-customer.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/user/create-employee.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/user/create-user.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/user/update-employee.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/dto/src/lib/user/update-password.dto.ts"), exports);


/***/ }),

/***/ "../../libs/dto/src/lib/user/update-employee.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateEmployeeDto = void 0;
const mapped_types_1 = __webpack_require__("@nestjs/mapped-types");
const create_employee_dto_1 = __webpack_require__("../../libs/dto/src/lib/user/create-employee.dto.ts");
class UpdateEmployeeDto extends (0, mapped_types_1.PartialType)((0, mapped_types_1.OmitType)(create_employee_dto_1.CreateEmployeeDto, ['password', 'passwordConfirm'])) {
}
exports.UpdateEmployeeDto = UpdateEmployeeDto;


/***/ }),

/***/ "../../libs/dto/src/lib/user/update-password.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePasswordDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const validators_1 = __webpack_require__("../../libs/validators/src/index.ts");
class UpdatePasswordDto {
}
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UpdatePasswordDto.prototype, "oldPassword", void 0);
tslib_1.__decorate([
    (0, validators_1.IsNotEmpty)(),
    (0, validators_1.IsString)(),
    (0, validators_1.MinLength)(6),
    (0, validators_1.MaxLength)(20),
    (0, validators_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/, {
        message: `Password must be: Min 1 uppercase letter, Min 1 lowercase letter, Min 1 special character, Min 1 number, Min 6 characters, Max 20 characters.`,
    }),
    tslib_1.__metadata("design:type", String)
], UpdatePasswordDto.prototype, "newPassword", void 0);
tslib_1.__decorate([
    (0, validators_1.IsMatch)('newPassword'),
    tslib_1.__metadata("design:type", String)
], UpdatePasswordDto.prototype, "newPasswordConfirm", void 0);
exports.UpdatePasswordDto = UpdatePasswordDto;


/***/ }),

/***/ "../../libs/types/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/index.ts"), exports);


/***/ }),

/***/ "../../libs/types/src/lib/asset/asset.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/asset/file-direction.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileDirection = void 0;
var FileDirection;
(function (FileDirection) {
    FileDirection["TEMP"] = "temp";
    FileDirection["PRODUCTS"] = "products";
    FileDirection["PRODUCTS_CATEGORIES"] = "products-categories";
    FileDirection["USERS"] = "users";
})(FileDirection = exports.FileDirection || (exports.FileDirection = {}));


/***/ }),

/***/ "../../libs/types/src/lib/asset/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/asset/asset.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/asset/file-direction.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/asset/size-url.interface.ts"), exports);


/***/ }),

/***/ "../../libs/types/src/lib/asset/size-url.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/base/base-request.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/base/base-response.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/base/base.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseInterface = void 0;
class BaseInterface {
}
exports.BaseInterface = BaseInterface;


/***/ }),

/***/ "../../libs/types/src/lib/base/custom-atoms.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomAtoms = void 0;
var CustomAtoms;
(function (CustomAtoms) {
})(CustomAtoms = exports.CustomAtoms || (exports.CustomAtoms = {}));


/***/ }),

/***/ "../../libs/types/src/lib/base/custom-use-mutation-options.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/base/custom-use-query-options.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/base/dir.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Dir = void 0;
var Dir;
(function (Dir) {
    Dir["RTL"] = "rtl";
    Dir["LTR"] = "ltr";
})(Dir = exports.Dir || (exports.Dir = {}));


/***/ }),

/***/ "../../libs/types/src/lib/base/errors-response.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/base/http-exception.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpException = void 0;
var HttpException;
(function (HttpException) {
    HttpException["OK"] = "OK";
    HttpException["CREATED"] = "CREATED";
    HttpException["ACCEPTED"] = "ACCEPTED";
    HttpException["SUCCESSFUL"] = "SUCCESSFUL";
    HttpException["NO_CONTENT"] = "NO_CONTENT";
    HttpException["FOUND"] = "FOUND";
    HttpException["BAD_REQUEST"] = "BAD_REQUEST";
    HttpException["UNAUTHORIZED"] = "UNAUTHORIZED";
    HttpException["WS_UNAUTHORIZED"] = "WS_UNAUTHORIZED";
    HttpException["FORBIDDEN"] = "FORBIDDEN";
    HttpException["DELETED_SUCCESSFULLY"] = "DELETED_SUCCESSFULLY";
    HttpException["NO_DATA"] = "NO_DATA";
    HttpException["REGISTER_VERIFICATION"] = "REGISTER_VERIFICATION";
    HttpException["FORGOT_PASSWORD"] = "FORGOT_PASSWORD";
    HttpException["RESET_PASSWORD"] = "RESET_PASSWORD";
    HttpException["LOGOUT"] = "LOGOUT";
    HttpException["NOT_FOUND"] = "NOT_FOUND";
    HttpException["ERROR"] = "ERROR";
    HttpException["WRONG_DETAILS"] = "WRONG_DETAILS";
    HttpException["ACCOUNT_NOT_ACTIVE"] = "ACCOUNT_NOT_ACTIVE";
    HttpException["ACCOUNT_ACTIVE"] = "ACCOUNT_ACTIVE";
    HttpException["ACCOUNT_NOT_VERIFIED"] = "ACCOUNT_NOT_VERIFIED";
    HttpException["ACCOUNT_VERIFIED"] = "ACCOUNT_VERIFIED";
    HttpException["NEW_PASSWORD_NOT_MATCH"] = "NEW_PASSWORD_NOT_MATCH";
    HttpException["OLD_PASSWORD_NOT_SAME_ENTERED"] = "OLD_PASSWORD_NOT_SAME_ENTERED";
    HttpException["NEW_PASSWORD_SAME_OLD"] = "NEW_PASSWORD_SAME_OLD";
    HttpException["ADDED_BEFORE"] = "ADDED_BEFORE";
    HttpException["PARAM_WRONG"] = "PARAM_WRONG";
    HttpException["CAN_NOT_DELETE_SHOULD_HAVE_ONE_AT_LEAST"] = "CAN_NOT_DELETE_SHOULD_HAVE_ONE_AT_LEAST";
    HttpException["SHOULD_BE_LESS"] = "SHOULD_BE_LESS";
    HttpException["SHOULD_BE_GREATER"] = "SHOULD_BE_GREATER";
    HttpException["DELETE_YOURSELF"] = "DELETE_YOURSELF";
    HttpException["NOT_RELATED_TO_YOU"] = "NOT_RELATED_TO_YOU";
    HttpException["NOT_VALID"] = "NOT_VALID";
    HttpException["EMPTY"] = "EMPTY";
    HttpException["INVALID"] = "INVALID";
    HttpException["CANNOT_CANCELLED"] = "CANNOT_CANCELLED";
    HttpException["USER_ALREADY_EXIST"] = "USER_ALREADY_EXIST";
    HttpException["USER_NOT_EXIST"] = "USER_NOT_EXIST";
})(HttpException = exports.HttpException || (exports.HttpException = {}));


/***/ }),

/***/ "../../libs/types/src/lib/base/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/base/base-request.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/base/base-response.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/base/base.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/base/custom-atoms.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/base/custom-use-mutation-options.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/base/custom-use-query-options.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/base/dir.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/base/errors-response.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/base/http-exception.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/base/languages.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/base/property.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/base/routes.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/base/static.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/base/themes.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/base/translations.enum.ts"), exports);


/***/ }),

/***/ "../../libs/types/src/lib/base/languages.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Languages = void 0;
var Languages;
(function (Languages) {
    Languages["AR"] = "ar";
    Languages["EN"] = "en";
})(Languages = exports.Languages || (exports.Languages = {}));


/***/ }),

/***/ "../../libs/types/src/lib/base/property.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Property = void 0;
var Property;
(function (Property) {
    Property["ADDRESS"] = "address";
    Property["ADDRESS1"] = "address1";
    Property["ADDRESS2"] = "address2";
    Property["ADDRESSES"] = "addresses";
    Property["ADMIN"] = "admin";
    Property["BODY"] = "body";
    Property["BRANCH"] = "branch";
    Property["BRANCH_TYPE"] = "branchType";
    Property["BRANCH_ID"] = "branchId";
    Property["BRAND_ID"] = "brandId";
    Property["BREAK_POINT"] = "breakPoint";
    Property["CATEGORY"] = "category";
    Property["CANCELLATION_NOTES"] = "cancellationNotes";
    Property["CART"] = "cart";
    Property["CART_ITEMS"] = "cartItems";
    Property["CATEGORY_ID"] = "categoryId";
    Property["CITY"] = "city";
    Property["COMPANY"] = "company";
    Property["COMPANY_ID"] = "companyId";
    Property["CONFIRM_NEW_PASSWORD"] = "confirmNewPassword";
    Property["CONFIRM_PASSWORD"] = "confirmPassword";
    Property["COST"] = "cost";
    Property["CUSTOMER_ID"] = "customerId";
    Property["CUSTOMER_BRANCH_ID"] = "customerBranchId";
    Property["DESCRIPTION"] = "description";
    Property["DELETED_PERMISSIONS"] = "deletedPermissions";
    Property["DELIVERY_NOTE"] = "deliveryNote";
    Property["DELIVERY_ADDRESS_ID"] = "deliveryAddressId";
    Property["DELETED_IMAGES"] = "deletedImages";
    Property["DISTRICT"] = "district";
    Property["EMAIL"] = "email";
    Property["ENABLED_FROM"] = "enabledFrom";
    Property["ENABLED_TO"] = "enabledTo";
    Property["FIRST_NAME"] = "firstName";
    Property["FCM_TOKEN"] = "fcmToken";
    Property["ID"] = "id";
    Property["IS_DEFAULT"] = "isDefault";
    Property["IS_ACTIVE"] = "isActive";
    Property["INVENTORY_ID"] = "inventoryId";
    Property["IN_OUT"] = "inOut";
    Property["LAST_NAME"] = "lastName";
    Property["LONGITUDE"] = "longitude";
    Property["LATITUDE"] = "latitude";
    Property["LONG_DESCRIPTION"] = "longDescription";
    Property["MANAGE_PRODUCT_TRACKING_ID"] = "manageProductTrackingId";
    Property["METADATA"] = "metadata";
    Property["NAME"] = "name";
    Property["NEW_PASSWORD"] = "newPassword";
    Property["NAME_OF_REPRESENTATIVE"] = "nameOfRepresentative";
    Property["ORDER"] = "order";
    Property["ORDER_ITEMS"] = "orderItems";
    Property["ORDER_STATUS"] = "orderStatus";
    Property["PASSWORD"] = "password";
    Property["PHONE_NUMBER"] = "phoneNumber";
    Property["PERMISSION_ID"] = "permissionId";
    Property["PERMISSIONS"] = "permissions";
    Property["PERMISSION"] = "permission";
    Property["PARENT_ID"] = "parentId";
    Property["PRODUCT_CATEGORY"] = "product";
    Property["PRODUCT"] = "product";
    Property["PRODUCT_IDS"] = "productsIds";
    Property["PRODUCTS_COST"] = "productsCost";
    Property["PRICE"] = "price";
    Property["PAYMENT_METHOD"] = "paymentMethod";
    Property["PACK_SIZE"] = "packSize";
    Property["PERIOD_OF_SUBSCRIPTION"] = "periodOfSubscription";
    Property["PAYMENT_STATUS"] = "paymentStatus";
    Property["QUANTITY"] = "quantity";
    Property["QUANTITIES"] = "quantities";
    Property["QUANTITY_PRICE"] = "quantityPrice";
    Property["ROLE_ID"] = "roleId";
    Property["ROLES"] = "roles";
    Property["ROLE"] = "role";
    Property["REWARD_POINTS"] = "rewardPoints";
    Property["SHIPPING_COST"] = "shippingCost";
    Property["SUB_TOTAL"] = "subtotal";
    Property["SHOW_ON_DASHBOARD"] = "showOnDashboard";
    Property["SORT_ORDER"] = "sortOrder";
    Property["SELLER_ID"] = "sellerId";
    Property["SELLER_BRANCH_ID"] = "sellerBranchId";
    Property["SHORT_DESCRIPTION"] = "shortDescription";
    Property["SKU"] = "sku";
    Property["STATUS"] = "status";
    Property["SUBSCRIPTION_ID"] = "subscriptionId";
    Property["SUBSCRIPTION_PLAN_ID"] = "subscriptionPlanId";
    Property["TOKEN"] = "token";
    Property["TITLE"] = "title";
    Property["TITLE_OF_REPRESENTATIVE"] = "titleOfRepresentative";
    Property["TYPE"] = "type";
    Property["USER"] = "user";
    Property["SELLER"] = "seller";
    Property["USER_ID"] = "userId";
    Property["VAT_NUMBER"] = "vatNumber";
    Property["ZIP_CODE"] = "zipCode";
})(Property = exports.Property || (exports.Property = {}));


/***/ }),

/***/ "../../libs/types/src/lib/base/routes.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiRoutes = exports.PageRoute = void 0;
var PageRoute;
(function (PageRoute) {
    PageRoute["NOT_FOUND"] = "Not-Found";
    PageRoute["AUTH"] = "Auth";
    PageRoute["LOGIN"] = "Login";
    PageRoute["DASHBOARD"] = "Dashboard";
    PageRoute["EMPLOYEES"] = "Employees";
    PageRoute["PRODUCTS"] = "Products";
    PageRoute["PRODUCTS_CATEGORIES"] = "Products-Categories";
    PageRoute["SETTINGS"] = "Settings";
    PageRoute["ORDERS"] = "Orders";
    PageRoute["EDIT_PASSWORD"] = "Edit-Password";
    PageRoute["ADD"] = "Add";
    PageRoute["EDIT"] = "Edit";
    PageRoute["SHOW"] = "Show";
})(PageRoute = exports.PageRoute || (exports.PageRoute = {}));
var ApiRoutes;
(function (ApiRoutes) {
    ApiRoutes["LOGIN"] = "dashboard/auth/login";
    ApiRoutes["REFRESH_TOKEN"] = "dashboard/auth/refresh-token";
    ApiRoutes["ASSET"] = "assets";
    ApiRoutes["EMPLOYEES"] = "dashboard/employees";
    ApiRoutes["PRODUCTS"] = "dashboard/products";
    ApiRoutes["PRODUCTS_CATEGORIES"] = "dashboard/products-categories";
    ApiRoutes["ORDERS"] = "dashboard/orders";
})(ApiRoutes = exports.ApiRoutes || (exports.ApiRoutes = {}));


/***/ }),

/***/ "../../libs/types/src/lib/base/static.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Static = void 0;
var Static;
(function (Static) {
    Static["CURRENT_USER"] = "current-user";
    Static["DIR"] = "dir";
    Static["I18N_LNG"] = "i18nextLng";
    Static["ROOT_URL"] = "rootUrl";
    Static["ROOT_API"] = "rootApi";
    Static["THEME"] = "theme";
    Static["ACCESS_TOKEN"] = "accessToken";
    Static["REFRESH_TOKEN"] = "refreshToken";
    Static["SOCKET"] = "socket";
    Static["SIDEBAR"] = "sidebar";
    Static["CURRENT_PAGE"] = "current-page";
    Static["NAVBAR_BUTTON_PATH"] = "navbar-button-path";
    Static["NAVBAR_BUTTON_SHOW"] = "navbar-button-show";
})(Static = exports.Static || (exports.Static = {}));


/***/ }),

/***/ "../../libs/types/src/lib/base/themes.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Themes = void 0;
var Themes;
(function (Themes) {
    Themes["DARK"] = "dark";
    Themes["LIGHT"] = "light";
})(Themes = exports.Themes || (exports.Themes = {}));


/***/ }),

/***/ "../../libs/types/src/lib/base/translations.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Translations = void 0;
exports.Translations = {
    PAGES: {
        DASHBOARD: 'PAGES.DASHBOARD',
        LOGIN: 'PAGES.LOGIN',
        EMPLOYEES: 'PAGES.EMPLOYEES',
        PRODUCTS: 'PAGES.PRODUCTS',
        PRODUCTS_CATEGORIES: 'PAGES.PRODUCTS_CATEGORIES',
        SETTINGS: 'PAGES.SETTINGS',
        ORDERS: 'PAGES.ORDERS',
        PAGE_NOT_FOUND: 'PAGES.PAGE_NOT_FOUND',
        ADD: 'PAGES.ADD',
        EDIT: 'PAGES.EDIT',
        SHOW: 'PAGES.SHOW',
    },
    AUTH: {
        LOGGED_BEFORE: 'AUTH.LOGGED_BEFORE',
        LOGIN: 'AUTH.LOGIN',
        LOGOUT: 'AUTH.LOGOUT',
    },
    COMMON: {
        RETURN_TO: 'COMMON.RETURN_TO',
        FAILED_MESSAGE: 'COMMON.FAILED_MESSAGE',
        SUCCESS_MESSAGE: 'COMMON.SUCCESS_MESSAGE',
        SUCCESS_ADD: 'COMMON.SUCCESS_ADD',
        CLOSE: 'COMMON.CLOSE',
        OK: 'COMMON.OK',
        INFORMATION: 'COMMON.INFORMATION',
        PERSONAL_INFORMATION: 'COMMON.PERSONAL_INFORMATION',
        PRIVATE_INFORMATION: 'COMMON.PRIVATE_INFORMATION',
        VISUAL_INFORMATION: 'COMMON.VISUAL_INFORMATION',
        WORK_INFORMATION: 'COMMON.WORK_INFORMATION',
        DELETE_MESSAGE: 'COMMON.DELETE_MESSAGE',
        RESTORE_MESSAGE: 'COMMON.RESTORE_MESSAGE',
        NO_DATA_TO_SHOW: 'COMMON.NO_DATA_TO_SHOW',
    },
    KEY: {
        ADD: 'KEY.ADD',
        EDIT: 'KEY.EDIT',
        EDIT_PASSWORD: 'KEY.EDIT_PASSWORD',
        SHOW: 'KEY.SHOW',
        DELETE: 'KEY.DELETE',
        DELETED: 'KEY.DELETED',
        CONFIRM: 'KEY.CONFIRM',
        BACK: 'KEY.BACK',
        NAME: 'KEY.NAME',
        NAME_AR: 'KEY.NAME_AR',
        NAME_EN: 'KEY.NAME_EN',
        PRICE: 'KEY.PRICE',
        ORDER: 'KEY.ORDER',
        CATEGORY: 'KEY.CATEGORY',
        ADMIN: 'KEY.ADMIN',
        EMPLOYEE: 'KEY.EMPLOYEE',
        EMAIL: 'KEY.EMAIL',
        ROLE: 'KEY.ROLE',
        RESTORE: 'KEY.RESTORE',
        FULLNAME: 'KEY.FULLNAME',
        FIRST_NAME: 'KEY.FIRST_NAME',
        LAST_NAME: 'KEY.LAST_NAME',
        USERNAME: 'KEY.USERNAME',
        PASSWORD: 'KEY.PASSWORD',
        OLD_PASSWORD: 'KEY.OLD_PASSWORD',
        NEW_PASSWORD: 'KEY.NEW_PASSWORD',
        CONFIRM_PASSWORD: 'KEY.CONFIRM_PASSWORD',
        PHONE_NUMBER: 'KEY.PHONE_NUMBER',
        ADDRESS: 'KEY.ADDRESS',
        ASSET_TITLE: 'KEY.ASSET_TITLE',
        PRODUCT_ASSET: 'KEY.PRODUCT_ASSET',
        CATEGORY_ASSET: 'KEY.CATEGORY_ASSET',
        JOB: 'KEY.JOB',
        SETTINGS: 'KEY.SETTINGS',
        ADDED_BY: 'KEY.ADDED_BY',
        TAKEN_BY: 'KEY.TAKEN_BY',
        OWE: 'KEY.OWE',
        DETAILS: 'KEY.DETAILS',
        DETAILS_AR: 'KEY.DETAILS_AR',
        DETAILS_EN: 'KEY.DETAILS_EN',
        AMOUNT: 'KEY.AMOUNT',
        BONUS: 'KEY.BONUS',
        CREATED_AT: 'KEY.CREATED_AT',
        LANGUAGE: 'KEY.LANGUAGE',
        DARK: 'KEY.DARK',
        LIGHT: 'KEY.LIGHT',
        UUID: 'KEY.UUID',
        REGION: 'KEY.REGION',
        STATUS: 'KEY.STATUS',
        MODEL: 'KEY.MODEL',
        COLORS: 'KEY.COLORS',
        SIZES: 'KEY.SIZES',
    },
    EXAMPLE: {
        DOCTOR_NAME: 'EXAMPLE.DOCTOR_NAME',
        DOCTOR_INFO: 'EXAMPLE.DOCTOR_INFO',
    },
    TABLES: {
        EMPLOYEES: {},
        PATIENTS: {},
        SALARIES: {},
        EXPENSES: {},
        DEBTS: {},
        INVENTORY: {},
        SETTINGS: {},
    },
};


/***/ }),

/***/ "../../libs/types/src/lib/environment/database.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/environment/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/environment/database.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/environment/jwt.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/environment/redis.interface.ts"), exports);


/***/ }),

/***/ "../../libs/types/src/lib/environment/jwt.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/environment/redis.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/asset/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/base/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/environment/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/order/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/product/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/product-category/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/request/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/response/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/token/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/user/index.ts"), exports);


/***/ }),

/***/ "../../libs/types/src/lib/order/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/order/order-item.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/order/order-status.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/order/order.interface.ts"), exports);


/***/ }),

/***/ "../../libs/types/src/lib/order/order-item.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/order/order-status.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "Pending";
    OrderStatus["CANCELED"] = "Canceled";
    OrderStatus["ON_WAY"] = "On Way";
    OrderStatus["DELIVERED"] = "Delivered";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));


/***/ }),

/***/ "../../libs/types/src/lib/order/order.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/product-category/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/product-category/product-category.interface.ts"), exports);


/***/ }),

/***/ "../../libs/types/src/lib/product-category/product-category.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/product/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/product/product.interface.ts"), exports);


/***/ }),

/***/ "../../libs/types/src/lib/product/product.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/request/base.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/request/delete.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/request/get.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/request/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/request/base.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/request/delete.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/request/get.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/request/post.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/request/update.ts"), exports);


/***/ }),

/***/ "../../libs/types/src/lib/request/post.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/request/update.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/response/employees.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/response/error.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/response/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/response/employees.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/response/login.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/response/product.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/response/error.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/response/product-category.ts"), exports);


/***/ }),

/***/ "../../libs/types/src/lib/response/login.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/response/product-category.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/response/product.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/token/dashboard-payload.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/token/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/token/dashboard-payload.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/token/payload.type.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/token/store-payload.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/token/token-type.enum.ts"), exports);


/***/ }),

/***/ "../../libs/types/src/lib/token/payload.type.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/token/store-payload.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/token/token-type.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenType = void 0;
var TokenType;
(function (TokenType) {
    TokenType["DASHBOARD"] = "dashboard";
    TokenType["STORE"] = "store";
})(TokenType = exports.TokenType || (exports.TokenType = {}));


/***/ }),

/***/ "../../libs/types/src/lib/user/base-user.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/user/customer.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/user/employee.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/types/src/lib/user/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/user/base-user.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/user/customer.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/user/employee.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/user/user-role.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/types/src/lib/user/user-type.enum.ts"), exports);


/***/ }),

/***/ "../../libs/types/src/lib/user/user-role.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "Admin";
    UserRole["EMPLOYEE"] = "Employee";
})(UserRole = exports.UserRole || (exports.UserRole = {}));


/***/ }),

/***/ "../../libs/types/src/lib/user/user-type.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserType = void 0;
var UserType;
(function (UserType) {
    UserType["ADMIN"] = "Admin";
    UserType["EMPLOYEE"] = "Employee";
    UserType["CUSTOMER"] = "Customer";
})(UserType = exports.UserType || (exports.UserType = {}));


/***/ }),

/***/ "../../libs/utils/src/lib/api-utils/bcrypt/bcrypt.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BcryptModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const bcrypt_service_1 = __webpack_require__("../../libs/utils/src/lib/api-utils/bcrypt/bcrypt.service.ts");
let BcryptModule = class BcryptModule {
};
BcryptModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [bcrypt_service_1.BcryptService],
        exports: [bcrypt_service_1.BcryptService],
    })
], BcryptModule);
exports.BcryptModule = BcryptModule;


/***/ }),

/***/ "../../libs/utils/src/lib/api-utils/bcrypt/bcrypt.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BcryptService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const bcryptjs_1 = __webpack_require__("bcryptjs");
const types_1 = __webpack_require__("../../libs/types/src/index.ts");
let BcryptService = class BcryptService {
    constructor(configService) {
        this.configService = configService;
        this.salt = this.configService.getOrThrow('salt');
    }
    hash(text) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const hashedText = yield (0, bcryptjs_1.hash)(text, +this.salt);
            return hashedText;
        });
    }
    compare(text, hash) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const compared = yield (0, bcryptjs_1.compare)(text, hash);
            return compared;
        });
    }
    checkUserPassword(text, hash) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const compare = yield this.compare(text, hash);
            if (!compare)
                throw new common_1.BadRequestException(types_1.HttpException.WRONG_DETAILS);
        });
    }
};
BcryptService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], BcryptService);
exports.BcryptService = BcryptService;


/***/ }),

/***/ "../../libs/utils/src/lib/api-utils/bcrypt/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/utils/src/lib/api-utils/bcrypt/bcrypt.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/utils/src/lib/api-utils/bcrypt/bcrypt.service.ts"), exports);


/***/ }),

/***/ "../../libs/utils/src/lib/api-utils/file.util.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateFolder = void 0;
const tslib_1 = __webpack_require__("tslib");
const promises_1 = __webpack_require__("fs/promises");
const CreateFolder = (path) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, promises_1.mkdir)(path);
    }
    catch (error) {
        // console.log('🚀 ~ file: file.util.ts:7 ~ CreateFolder ~ error:', error)
        console.log('Folder Is Already Exist');
    }
});
exports.CreateFolder = CreateFolder;


/***/ }),

/***/ "../../libs/utils/src/lib/api-utils/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileUtils = void 0;
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/utils/src/lib/api-utils/bcrypt/index.ts"), exports);
exports.FileUtils = tslib_1.__importStar(__webpack_require__("../../libs/utils/src/lib/api-utils/file.util.ts"));
tslib_1.__exportStar(__webpack_require__("../../libs/utils/src/lib/api-utils/jwt/index.ts"), exports);


/***/ }),

/***/ "../../libs/utils/src/lib/api-utils/jwt/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/utils/src/lib/api-utils/jwt/jwt-helper.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/utils/src/lib/api-utils/jwt/jwt-helper.service.ts"), exports);


/***/ }),

/***/ "../../libs/utils/src/lib/api-utils/jwt/jwt-helper.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtHelperModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const jwt_1 = __webpack_require__("@nestjs/jwt");
const jwt_helper_service_1 = __webpack_require__("../../libs/utils/src/lib/api-utils/jwt/jwt-helper.service.ts");
let JwtHelperModule = class JwtHelperModule {
};
JwtHelperModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [jwt_1.JwtModule],
        providers: [jwt_helper_service_1.JwtHelperService],
        exports: [jwt_helper_service_1.JwtHelperService],
    })
], JwtHelperModule);
exports.JwtHelperModule = JwtHelperModule;


/***/ }),

/***/ "../../libs/utils/src/lib/api-utils/jwt/jwt-helper.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtHelperService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const jwt_1 = __webpack_require__("@nestjs/jwt");
let JwtHelperService = class JwtHelperService {
    constructor(configService, jwtService) {
        this.configService = configService;
        this.jwtService = jwtService;
    }
    generateTokens(payload, tokensType) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { accessTokenConfig, refreshTokenConfig } = yield this.configService.getOrThrow(`jwt.${tokensType}`);
            const accessToken = yield this.generateToken(payload, accessTokenConfig);
            const refreshToken = yield this.generateToken(payload, refreshTokenConfig);
            return { accessToken, refreshToken };
        });
    }
    verifyAccessToken(accessToken, tokensType) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const accessTokenConfig = yield this.configService.getOrThrow(`jwt.${tokensType}.accessTokenConfig`);
            const accessTokenPayload = yield this.verifyToken(accessToken, accessTokenConfig);
            return accessTokenPayload;
        });
    }
    verifyRefreshToken(refreshToken, tokensType) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const refreshTokenConfig = yield this.configService.getOrThrow(`jwt.${tokensType}.refreshTokenConfig`);
            const refreshTokenPayload = yield this.verifyToken(refreshToken, refreshTokenConfig);
            return refreshTokenPayload;
        });
    }
    generateToken(payload, config) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const token = yield this.jwtService.signAsync(payload, Object.assign({}, config));
            return token;
        });
    }
    verifyToken(token, config) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const payload = yield this.jwtService.verifyAsync(token, config);
            return payload;
        });
    }
};
JwtHelperService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], JwtHelperService);
exports.JwtHelperService = JwtHelperService;


/***/ }),

/***/ "../../libs/validators/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/index.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
// export * from './exist';
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-array/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-boolean/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-date-string/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-email/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-enum/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-match/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-mime-type/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-not-empty/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-not-empty-object/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-number/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-number-string/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-object/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-optional/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-string/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-uuid/index.ts"), exports);
// export * from './unique';
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-uuid-array/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/length/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/matches/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/max/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/max-length/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/min/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/min-length/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/validate-error.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/validate-nested/index.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/is-array/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-array/is_array.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/is-array/is_array.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsArray = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const validate_error_1 = __webpack_require__("../../libs/validators/src/lib/validate-error.ts");
const IsArray = (validationOptions) => (0, class_validator_1.IsArray)(Object.assign(Object.assign({}, validationOptions), { message: validate_error_1.ValidateErrors.IS_ARRAY }));
exports.IsArray = IsArray;


/***/ }),

/***/ "../../libs/validators/src/lib/is-boolean/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-boolean/is-boolean.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/is-boolean/is-boolean.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsBoolean = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const validate_error_1 = __webpack_require__("../../libs/validators/src/lib/validate-error.ts");
const IsBoolean = (validationOptions) => (0, class_validator_1.IsBoolean)(Object.assign(Object.assign({}, validationOptions), { message: validate_error_1.ValidateErrors.IS_BOOLEAN }));
exports.IsBoolean = IsBoolean;


/***/ }),

/***/ "../../libs/validators/src/lib/is-date-string/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-date-string/is-date-string.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/is-date-string/is-date-string.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsDateString = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const validate_error_1 = __webpack_require__("../../libs/validators/src/lib/validate-error.ts");
const IsDateString = (options, validationOptions) => (0, class_validator_1.IsDateString)(options, Object.assign(Object.assign({}, validationOptions), { message: validate_error_1.ValidateErrors.IS_DATE_STRING }));
exports.IsDateString = IsDateString;


/***/ }),

/***/ "../../libs/validators/src/lib/is-email/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-email/is-email.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/is-email/is-email.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsEmail = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const validate_error_1 = __webpack_require__("../../libs/validators/src/lib/validate-error.ts");
const IsEmail = (options, validationOptions) => (0, class_validator_1.IsEmail)(options, Object.assign(Object.assign({}, validationOptions), { message: validate_error_1.ValidateErrors.IS_EMAIL }));
exports.IsEmail = IsEmail;


/***/ }),

/***/ "../../libs/validators/src/lib/is-enum/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-enum/is-enum.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/is-enum/is-enum.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsEnum = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const validate_error_1 = __webpack_require__("../../libs/validators/src/lib/validate-error.ts");
const IsEnum = (entity, validationOptions) => (0, class_validator_1.IsEnum)(entity, Object.assign(Object.assign({}, validationOptions), { message: validate_error_1.ValidateErrors.IS_ENUM }));
exports.IsEnum = IsEnum;


/***/ }),

/***/ "../../libs/validators/src/lib/is-match/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-match/is-match.decorator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/is-match/is-match.decorator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MatchConstraint = exports.IsMatch = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
const IsMatch = (property, validationOptions) => {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [property],
            validator: MatchConstraint,
        });
    };
};
exports.IsMatch = IsMatch;
let MatchConstraint = class MatchConstraint {
    validate(value, args) {
        const [relatedPropertyName] = args.constraints;
        const relatedValue = args.object[relatedPropertyName];
        return value === relatedValue;
    }
    defaultMessage(args) {
        return args.property + ' must match ' + args.constraints[0];
    }
};
MatchConstraint = tslib_1.__decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'Match' })
], MatchConstraint);
exports.MatchConstraint = MatchConstraint;


/***/ }),

/***/ "../../libs/validators/src/lib/is-mime-type/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-mime-type/is-mime-type.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/is-mime-type/is-mime-type.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsMimeType = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const validate_error_1 = __webpack_require__("../../libs/validators/src/lib/validate-error.ts");
const IsMimeType = (validationOptions) => (0, class_validator_1.IsMimeType)(Object.assign(Object.assign({}, validationOptions), { message: validate_error_1.ValidateErrors.IS_MIME_TYPE }));
exports.IsMimeType = IsMimeType;


/***/ }),

/***/ "../../libs/validators/src/lib/is-not-empty-object/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-not-empty-object/is-not-empty-object.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/is-not-empty-object/is-not-empty-object.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsNotEmptyObject = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const validate_error_1 = __webpack_require__("../../libs/validators/src/lib/validate-error.ts");
const IsNotEmptyObject = (options, validationOptions) => (0, class_validator_1.IsNotEmptyObject)(options, Object.assign(Object.assign({}, validationOptions), { message: validate_error_1.ValidateErrors.IS_NOT_EMPTY_OBJECT }));
exports.IsNotEmptyObject = IsNotEmptyObject;


/***/ }),

/***/ "../../libs/validators/src/lib/is-not-empty/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-not-empty/is-not-empty.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/is-not-empty/is-not-empty.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsNotEmpty = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const validate_error_1 = __webpack_require__("../../libs/validators/src/lib/validate-error.ts");
const IsNotEmpty = (validationOptions) => (0, class_validator_1.IsNotEmpty)(Object.assign(Object.assign({}, validationOptions), { message: validate_error_1.ValidateErrors.IS_NOT_EMPTY }));
exports.IsNotEmpty = IsNotEmpty;


/***/ }),

/***/ "../../libs/validators/src/lib/is-number-string/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-number-string/is-number-string.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/is-number-string/is-number-string.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsNumberString = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const validate_error_1 = __webpack_require__("../../libs/validators/src/lib/validate-error.ts");
const IsNumberString = (options, validationOptions) => (0, class_validator_1.IsNumberString)(options, Object.assign(Object.assign({}, validationOptions), { message: validate_error_1.ValidateErrors.IS_NUMBER_STRING }));
exports.IsNumberString = IsNumberString;


/***/ }),

/***/ "../../libs/validators/src/lib/is-number/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-number/is-number.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/is-number/is-number.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsNumber = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const validate_error_1 = __webpack_require__("../../libs/validators/src/lib/validate-error.ts");
const IsNumber = (options, validationOptions) => (0, class_validator_1.IsNumber)(options, Object.assign(Object.assign({}, validationOptions), { message: validate_error_1.ValidateErrors.IS_NUMBER }));
exports.IsNumber = IsNumber;


/***/ }),

/***/ "../../libs/validators/src/lib/is-object/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-object/is-object.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/is-object/is-object.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsObject = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const validate_error_1 = __webpack_require__("../../libs/validators/src/lib/validate-error.ts");
const IsObject = (validationOptions) => (0, class_validator_1.IsObject)(Object.assign(Object.assign({}, validationOptions), { message: validate_error_1.ValidateErrors.IS_OBJECT }));
exports.IsObject = IsObject;


/***/ }),

/***/ "../../libs/validators/src/lib/is-optional/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-optional/is-optional.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/is-optional/is-optional.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsOptional = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const IsOptional = (validationOptions) => (0, class_validator_1.IsOptional)(Object.assign({}, validationOptions));
exports.IsOptional = IsOptional;


/***/ }),

/***/ "../../libs/validators/src/lib/is-string/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-string/is-string.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/is-string/is-string.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsString = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const validate_error_1 = __webpack_require__("../../libs/validators/src/lib/validate-error.ts");
const IsString = (validationOptions) => (0, class_validator_1.IsString)(Object.assign(Object.assign({}, validationOptions), { message: validate_error_1.ValidateErrors.IS_STRING }));
exports.IsString = IsString;


/***/ }),

/***/ "../../libs/validators/src/lib/is-uuid-array/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-uuid-array/uuid-array.validator.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-uuid-array/is-uuid-array.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/is-uuid-array/is-uuid-array.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsUUIDArray = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const uuid_array_validator_1 = __webpack_require__("../../libs/validators/src/lib/is-uuid-array/uuid-array.validator.ts");
function IsUUIDArray(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsUUIDArray',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: uuid_array_validator_1.UUIDArrayRole,
        });
    };
}
exports.IsUUIDArray = IsUUIDArray;


/***/ }),

/***/ "../../libs/validators/src/lib/is-uuid-array/uuid-array.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UUIDArrayRole = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const class_validator_1 = __webpack_require__("class-validator");
let UUIDArrayRole = class UUIDArrayRole {
    constructor() { }
    validate(value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                for (let i = 0; i < value.length; i++) {
                    const item = value[i];
                    const check = (0, class_validator_1.isUUID)(item);
                    if (!check)
                        return false;
                }
                return true;
            }
            catch (e) {
                return false;
            }
            return true;
        });
    }
    defaultMessage(args) {
        return `${args.property} Should Be Array Of UUID`;
    }
};
UUIDArrayRole = tslib_1.__decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'IsUUIDArray', async: true }),
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], UUIDArrayRole);
exports.UUIDArrayRole = UUIDArrayRole;


/***/ }),

/***/ "../../libs/validators/src/lib/is-uuid/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/is-uuid/is-uuid.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/is-uuid/is-uuid.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsUUID = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const validate_error_1 = __webpack_require__("../../libs/validators/src/lib/validate-error.ts");
const IsUUID = (version, validationOptions) => (0, class_validator_1.IsUUID)(version, Object.assign(Object.assign({}, validationOptions), { message: validate_error_1.ValidateErrors.IS_UUID }));
exports.IsUUID = IsUUID;


/***/ }),

/***/ "../../libs/validators/src/lib/length/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/length/length.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/length/length.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Length = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const nestjs_i18n_1 = __webpack_require__("nestjs-i18n");
const validate_error_1 = __webpack_require__("../../libs/validators/src/lib/validate-error.ts");
const Length = (min, max, validationOptions) => (0, class_validator_1.Length)(min, max, Object.assign(Object.assign({}, validationOptions), { message: (0, nestjs_i18n_1.i18nValidationMessage)(validate_error_1.ValidateErrors.LENGTH, {
        num1: min,
        num2: max,
    }) }));
exports.Length = Length;
// export interface ValidatorConstraintInterfaceCustom {
//   validate(
//     value: any,
//     validationArguments?: ValidationArguments
//   ): Promise<boolean> | boolean;
//   defaultMessage?(validationArguments?: ValidationArguments): string;
// }
// @ValidatorConstraint({ name: 'Length', async: true })
// @Injectable()
// class LengthRole implements ValidatorConstraintInterfaceCustom {
//   constructor(
//     private errorMessage: { error: string; constraint: number }[] = []
//   ) {}
//   async validate(value: string, args: ValidationArguments): Promise<boolean> {
//     this.errorMessage = [];
//     const length = value.length;
//     const minLength = args.constraints[0];
//     const maxLength = args.constraints[1];
//     if (length < minLength)
//       this.errorMessage = [
//         ...this.errorMessage,
//         { error: 'LengthMin', constraint: minLength },
//       ];
//     if (length > maxLength)
//       this.errorMessage = [
//         ...this.errorMessage,
//         { error: 'LengthMax', constraint: maxLength },
//       ];
//     if (this.errorMessage.length) return false;
//     return true;
//   }
//   defaultMessage(args: ValidationArguments): string {
//     // var errors = '';
//     // for (let i = 0; i < this.errorMessage.length; i++) {
//     //   const error = 'validation.' + this.errorMessage[i].error;
//     //   errors += await i18n.t(error, {
//     //     args: {
//     //       num: this.errorMessage[i].constraint,
//     //     },
//     //   });
//     // }
//     return 'Length({num: 1})';
//   }
// }
// export function Length(
//   min: number,
//   max?: number,
//   validationOptions?: ValidationOptions
// ) {
//   return function (object: any, propertyName: string) {
//     registerDecorator({
//       name: 'Length',
//       target: object.constructor,
//       propertyName: propertyName,
//       constraints: [min, max],
//       options: validationOptions,
//       validator: LengthRole,
//     });
//   };
// }


/***/ }),

/***/ "../../libs/validators/src/lib/matches/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/matches/matches.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/matches/matches.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Matches = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const validate_error_1 = __webpack_require__("../../libs/validators/src/lib/validate-error.ts");
const Matches = (pattern, validationOptions) => (0, class_validator_1.Matches)(pattern, Object.assign(Object.assign({}, validationOptions), { message: validate_error_1.ValidateErrors.MATCHES }));
exports.Matches = Matches;


/***/ }),

/***/ "../../libs/validators/src/lib/max-length/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/max-length/max-length.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/max-length/max-length.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MaxLength = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const nestjs_i18n_1 = __webpack_require__("nestjs-i18n");
const validate_error_1 = __webpack_require__("../../libs/validators/src/lib/validate-error.ts");
const MaxLength = (maxValue, validationOptions) => (0, class_validator_1.MaxLength)(maxValue, Object.assign(Object.assign({}, validationOptions), { message: (0, nestjs_i18n_1.i18nValidationMessage)(validate_error_1.ValidateErrors.MAX, {
        num: maxValue,
    }) }));
exports.MaxLength = MaxLength;


/***/ }),

/***/ "../../libs/validators/src/lib/max/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/max/max.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/max/max.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Max = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const nestjs_i18n_1 = __webpack_require__("nestjs-i18n");
const validate_error_1 = __webpack_require__("../../libs/validators/src/lib/validate-error.ts");
const Max = (maxValue, validationOptions) => (0, class_validator_1.Max)(maxValue, Object.assign(Object.assign({}, validationOptions), { message: (0, nestjs_i18n_1.i18nValidationMessage)(validate_error_1.ValidateErrors.MAX, {
        num: maxValue,
    }) }));
exports.Max = Max;


/***/ }),

/***/ "../../libs/validators/src/lib/min-length/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/min-length/min-length.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/min-length/min-length.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MinLength = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const nestjs_i18n_1 = __webpack_require__("nestjs-i18n");
const validate_error_1 = __webpack_require__("../../libs/validators/src/lib/validate-error.ts");
const MinLength = (minValue, validationOptions) => (0, class_validator_1.MinLength)(minValue, Object.assign(Object.assign({}, validationOptions), { message: (0, nestjs_i18n_1.i18nValidationMessage)(validate_error_1.ValidateErrors.MIN, {
        num: minValue,
    }) }));
exports.MinLength = MinLength;


/***/ }),

/***/ "../../libs/validators/src/lib/min/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/min/min.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/min/min.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Min = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const nestjs_i18n_1 = __webpack_require__("nestjs-i18n");
const validate_error_1 = __webpack_require__("../../libs/validators/src/lib/validate-error.ts");
const Min = (minValue, validationOptions) => (0, class_validator_1.Min)(minValue, Object.assign(Object.assign({}, validationOptions), { message: (0, nestjs_i18n_1.i18nValidationMessage)(validate_error_1.ValidateErrors.MIN, {
        num: minValue,
    }) }));
exports.Min = Min;


/***/ }),

/***/ "../../libs/validators/src/lib/validate-error.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidateErrors = void 0;
var ValidateErrors;
(function (ValidateErrors) {
    ValidateErrors["EXIST"] = "validation.Exist";
    ValidateErrors["FILE"] = "validation.File";
    ValidateErrors["IS_ARRAY"] = "validation.IsArray";
    ValidateErrors["IS_BOOLEAN"] = "validation.IsBoolean";
    ValidateErrors["IS_DATE_STRING"] = "validation.IsDateString";
    ValidateErrors["IS_EMAIL"] = "validation.IsEmail";
    ValidateErrors["IS_ENUM"] = "validation.IsEnum";
    ValidateErrors["IS_MATCH"] = "validation.IsMatch";
    ValidateErrors["IS_MIME_TYPE"] = "validation.IsMimeType";
    ValidateErrors["IS_NOT_EMPTY"] = "validation.IsNotEmpty";
    ValidateErrors["IS_NOT_EMPTY_OBJECT"] = "validation.IsNotEmptyObject";
    ValidateErrors["IS_NUMBER"] = "validation.IsNumber";
    ValidateErrors["IS_NUMBER_STRING"] = "validation.IsNumberString";
    ValidateErrors["IS_OBJECT"] = "validation.IsObject";
    ValidateErrors["IS_STRING"] = "validation.IsString";
    ValidateErrors["IS_UUID"] = "validation.IsUUID";
    ValidateErrors["IS_UUID_ARRAY"] = "validation.IsUUIDArray";
    ValidateErrors["LENGTH"] = "validation.Length";
    ValidateErrors["MATCHES"] = "validation.Matches";
    ValidateErrors["MAX"] = "validation.Max";
    ValidateErrors["MAX_LENGTH"] = "validation.MaxLength";
    ValidateErrors["MIN"] = "validation.Min";
    ValidateErrors["MIN_LENGTH"] = "validation.MinLength";
    ValidateErrors["UNIQUE"] = "validation.Unique";
    ValidateErrors["LENGTH_MIN"] = "validation.LengthMin";
    ValidateErrors["LENGTH_MAX"] = "validation.LengthMax";
})(ValidateErrors = exports.ValidateErrors || (exports.ValidateErrors = {}));


/***/ }),

/***/ "../../libs/validators/src/lib/validate-nested/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/validators/src/lib/validate-nested/validate-nested.validator.ts"), exports);


/***/ }),

/***/ "../../libs/validators/src/lib/validate-nested/validate-nested.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidateNested = void 0;
const class_validator_1 = __webpack_require__("class-validator");
const ValidateNested = (validationOptions) => (0, class_validator_1.ValidateNested)(Object.assign({}, validationOptions));
exports.ValidateNested = ValidateNested;


/***/ }),

/***/ "@nestjs/bull":
/***/ ((module) => {

module.exports = require("@nestjs/bull");

/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/mapped-types":
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

/***/ }),

/***/ "@nestjs/passport":
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/platform-express":
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@nestjs/schedule":
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "@nestjs/serve-static":
/***/ ((module) => {

module.exports = require("@nestjs/serve-static");

/***/ }),

/***/ "@nestjs/typeorm":
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "bcryptjs":
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "class-transformer":
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "dotenv/config":
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "mime-types":
/***/ ((module) => {

module.exports = require("mime-types");

/***/ }),

/***/ "multer":
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "nestjs-i18n":
/***/ ((module) => {

module.exports = require("nestjs-i18n");

/***/ }),

/***/ "passport-jwt":
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "sharp":
/***/ ((module) => {

module.exports = require("sharp");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "typeorm":
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "typeorm-naming-strategies":
/***/ ((module) => {

module.exports = require("typeorm-naming-strategies");

/***/ }),

/***/ "fs/promises":
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const nestjs_i18n_1 = __webpack_require__("nestjs-i18n");
const modules_1 = __webpack_require__("./src/modules/index.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(modules_1.AppModule);
        const globalPrefix = process.env.PREFIX || 'api/v1';
        app.setGlobalPrefix(globalPrefix);
        app.enableCors();
        app.useGlobalFilters(new nestjs_i18n_1.I18nValidationExceptionFilter());
        app.useGlobalPipes(new common_1.ValidationPipe({
            whitelist: true,
            transform: true,
            exceptionFactory: nestjs_i18n_1.i18nValidationErrorFactory,
        }));
        const port = process.env.API_PORT || 3333;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map