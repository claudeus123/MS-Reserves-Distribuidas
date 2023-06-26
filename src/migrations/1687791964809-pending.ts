import { MigrationInterface, QueryRunner } from "typeorm";

export class Pending1687791964809 implements MigrationInterface {
    name = 'Pending1687791964809'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reserves" ADD "pending" boolean`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reserves" DROP COLUMN "pending"`);
    }

}
