"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClothController = void 0;
const openapi = require("@nestjs/swagger");
const updateCloth_dto_1 = require("./dto/updateCloth.dto");
const createCloth_dto_1 = require("./dto/createCloth.dto");
const common_1 = require("@nestjs/common");
const cloth_service_1 = require("./cloth.service");
const cloth_entity_1 = require("./domain/cloth.entity");
const dotenv = require("dotenv");
const swagger_1 = require("@nestjs/swagger");
dotenv.config();
let ClothController = class ClothController {
    constructor(clothService) {
        this.clothService = clothService;
    }
    getAllClothes() {
        return this.clothService.getAllClothes();
    }
    getMatchClothes(myQuery) {
        console.log('hello my name is jemin');
        return this.clothService.getMatchClothes(myQuery);
    }
    getClothById(id) {
        return this.clothService.getClothById(id);
    }
    createCloth(createClothDto) {
        return this.clothService.createCloth(createClothDto);
    }
    updateCloth(id, updateClothDto) {
        return this.clothService.updateCloth(id, updateClothDto);
    }
    deleteCloth(id) {
        return this.clothService.deleteCloth(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Clothes are successfully found',
    }),
    (0, swagger_1.ApiOperation)({
        summary: '?????? ??? ??????',
        description: '???????????? ?????? ?????? ?????? ????????????',
    }),
    openapi.ApiResponse({ status: 200, type: [require("./domain/cloth.entity").Cloth] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClothController.prototype, "getAllClothes", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ description: 'success' }),
    (0, common_1.Get)('/search'),
    (0, swagger_1.ApiOperation)({
        summary: '????????? ?????? ??? ??????',
        description: '???????????? json?????? ???????????? ???????????? ??????',
    }),
    openapi.ApiResponse({ status: 200, type: [require("./domain/cloth.entity").Cloth] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClothController.prototype, "getMatchClothes", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: `cloth is successfully found`,
    }),
    (0, swagger_1.ApiOperation)({
        summary: '?????? id??? ??? ??????',
        description: 'id??? ???????????? ?????? ???????????? ?????? ????????????.',
    }),
    openapi.ApiResponse({ status: 200, type: require("./domain/cloth.entity").Cloth }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClothController.prototype, "getClothById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    openapi.ApiResponse({ status: 201, type: require("./domain/cloth.entity").Cloth }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createCloth_dto_1.CreateClothDto]),
    __metadata("design:returntype", void 0)
], ClothController.prototype, "createCloth", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '??? ?????? ??????' }),
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateCloth_dto_1.UpdateClothDto]),
    __metadata("design:returntype", void 0)
], ClothController.prototype, "updateCloth", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '??? ?????? ??????' }),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClothController.prototype, "deleteCloth", null);
ClothController = __decorate([
    (0, swagger_1.ApiTags)('cloth'),
    (0, common_1.Controller)('cloth'),
    __metadata("design:paramtypes", [cloth_service_1.ClothService])
], ClothController);
exports.ClothController = ClothController;
//# sourceMappingURL=cloth.controller.js.map