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
exports.ClothService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cloth_entity_1 = require("src/cloth/domain/cloth.entity");
const typeorm_2 = require("typeorm");
let ClothService = class ClothService {
    constructor(clothRepository, connection) {
        this.clothRepository = clothRepository;
        this.connection = connection;
    }
    async getAllClothes() {
        const clothes = await this.clothRepository.find();
        return clothes;
    }
    async getClothById(id) {
        const result = await this.clothRepository.findOne(id);
        if (!result) {
            throw new common_1.NotFoundException(`id ${id} not found`);
        }
        return result;
    }
    async createCloth(cloth) {
        const { top_bottom, short_long, color, material } = cloth;
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const newCloth = this.clothRepository.create({
                top_bottom,
                short_long,
                color,
                material,
            });
            const cloth = await queryRunner.manager.save(newCloth);
            await queryRunner.commitTransaction();
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
        }
        finally {
            await queryRunner.release();
            return cloth;
        }
    }
    async updateCloth(id, user) {
        const result = await this.clothRepository.update(id, user);
        return result;
    }
    async deleteCloth(id) {
        const result = await this.clothRepository.delete(id);
        return result;
    }
    async getMatchClothes(cloth) {
        const { top_bottom, short_long, color, material } = cloth;
        try {
            const selectedClothes = await this.clothRepository.find({
                where: {
                    top_bottom: top_bottom ? top_bottom : (0, typeorm_2.Not)('null'),
                    short_long: short_long ? short_long : (0, typeorm_2.Not)('null'),
                    color: color ? color : (0, typeorm_2.Not)('null'),
                    material: material ? material : (0, typeorm_2.Not)('null'),
                },
                order: {
                    id: 'ASC',
                },
            });
            return selectedClothes;
        }
        catch (error) {
            console.error(error);
            throw new common_1.NotFoundException('not found');
        }
    }
};
ClothService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cloth_entity_1.Cloth)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Connection])
], ClothService);
exports.ClothService = ClothService;
//# sourceMappingURL=cloth.service.js.map