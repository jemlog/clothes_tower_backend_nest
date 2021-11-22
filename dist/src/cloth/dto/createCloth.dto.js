"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClothDto = void 0;
const openapi = require("@nestjs/swagger");
class CreateClothDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { top_bottom: { required: true, type: () => String }, short_long: { required: true, type: () => String }, color: { required: true, type: () => String }, material: { required: true, type: () => String } };
    }
}
exports.CreateClothDto = CreateClothDto;
//# sourceMappingURL=createCloth.dto.js.map