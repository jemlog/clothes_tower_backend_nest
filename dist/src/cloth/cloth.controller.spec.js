"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const cloth_controller_1 = require("./cloth.controller");
describe('ClothController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [cloth_controller_1.ClothController],
        }).compile();
        controller = module.get(cloth_controller_1.ClothController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=cloth.controller.spec.js.map