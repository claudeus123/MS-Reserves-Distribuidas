import { MigrationInterface, QueryRunner } from "typeorm";

export class ThirdIdea1686790633986 implements MigrationInterface {
    name = 'ThirdIdea1686790633986'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule" ALTER COLUMN "start_time" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedule" ALTER COLUMN "end_time" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule" ALTER COLUMN "end_time" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedule" ALTER COLUMN "start_time" SET NOT NULL`);
    }

}
