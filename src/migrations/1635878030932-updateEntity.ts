import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateEntity1635878030932 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE cloth ADD create_at DATE`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE cloth DELETE COLUMN create_at`);
  }
}
