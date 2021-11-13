"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClothDto = void 0;
const createCloth_dto_1 = require("./createCloth.dto");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateClothDto extends (0, mapped_types_1.PartialType)(createCloth_dto_1.CreateClothDto) {
}
exports.UpdateClothDto = UpdateClothDto;
//# sourceMappingURL=updateCloth.dto.js.map