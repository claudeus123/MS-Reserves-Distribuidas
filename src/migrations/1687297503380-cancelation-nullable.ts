import { MigrationInterface, QueryRunner } from "typeorm";

export class CancelationNullable1687297503380 implements MigrationInterface {
    name = 'CancelationNullable1687297503380'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reserves" ADD "cancelled" boolean`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reserves" DROP COLUMN "cancelled"`);
    }

}
