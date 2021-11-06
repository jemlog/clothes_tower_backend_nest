"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEntity1635878030932 = void 0;
class updateEntity1635878030932 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE cloth ADD create_at DATE`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE cloth DELETE COLUMN create_at`);
    }
}
exports.updateEntity1635878030932 = updateEntity1635878030932;
//# sourceMappingURL=1635878030932-updateEntity.js.map