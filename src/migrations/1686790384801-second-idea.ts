import { MigrationInterface, QueryRunner } from "typeorm";

export class secondIdea1686790384801 implements MigrationInterface {
    name = 'secondIdea1686790384801'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule" DROP COLUMN "start_date"`);
        await queryRunner.query(`ALTER TABLE "schedule" DROP COLUMN "end_date"`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD "day_quantity" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule" DROP COLUMN "day_quantity"`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD "end_date" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD "start_date" character varying NOT NULL`);
    }

}
