import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1686183726704 implements MigrationInterface {
    name = 'Init1686183726704'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "items" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" integer, "placeId" integer, CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "places" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "city" character varying NOT NULL, "institutionId" integer, CONSTRAINT "PK_1afab86e226b4c3bc9a74465c12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "institutions" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_0be7539dcdba335470dc05e9690" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_12755d19f001675602aa1ac37e9" FOREIGN KEY ("placeId") REFERENCES "places"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "places" ADD CONSTRAINT "FK_7044765937b305c51f1cfe81043" FOREIGN KEY ("institutionId") REFERENCES "institutions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "places" DROP CONSTRAINT "FK_7044765937b305c51f1cfe81043"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_12755d19f001675602aa1ac37e9"`);
        await queryRunner.query(`DROP TABLE "institutions"`);
        await queryRunner.query(`DROP TABLE "places"`);
        await queryRunner.query(`DROP TABLE "items"`);
    }

}
