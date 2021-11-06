"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const cloth_service_1 = require("./cloth.service");
describe('ClothService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [cloth_service_1.ClothService],
        }).compile();
        service = module.get(cloth_service_1.ClothService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=cloth.service.spec.js.map