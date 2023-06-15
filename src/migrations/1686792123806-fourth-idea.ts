import { MigrationInterface, QueryRunner } from "typeorm";

export class FourthIdea1686792123806 implements MigrationInterface {
    name = 'FourthIdea1686792123806'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "types" ALTER COLUMN "default_image" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "types" ALTER COLUMN "default_image" SET NOT NULL`);
    }

}
