import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1686860097386 implements MigrationInterface {
    name = 'Init1686860097386'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedule" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "start_time" character varying, "end_time" character varying, "day_quantity" integer NOT NULL, "typeId" integer, CONSTRAINT "PK_1c05e42aec7371641193e180046" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "types" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "default_image" character varying, CONSTRAINT "PK_33b81de5358589c738907c3559b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reserves" ("id" SERIAL NOT NULL, "client_id" integer NOT NULL, "available" boolean NOT NULL, "start_time" character varying, "end_time" character varying, "start_date" character varying, "end_date" character varying, "itemId" integer, CONSTRAINT "PK_e38489955a3c1a3880737f466ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "items" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" integer, "placeId" integer, "typeId" integer, CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "places" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "city" character varying NOT NULL, "institutionId" integer, CONSTRAINT "PK_1afab86e226b4c3bc9a74465c12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "institutions" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_0be7539dcdba335470dc05e9690" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD CONSTRAINT "FK_3115467ab2fa3267649ad1e9197" FOREIGN KEY ("typeId") REFERENCES "types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reserves" ADD CONSTRAINT "FK_f3f05475404804ca87c028304c6" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_12755d19f001675602aa1ac37e9" FOREIGN KEY ("placeId") REFERENCES "places"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_320084ab9c4f93a78ae873119c1" FOREIGN KEY ("typeId") REFERENCES "types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "places" ADD CONSTRAINT "FK_7044765937b305c51f1cfe81043" FOREIGN KEY ("institutionId") REFERENCES "institutions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "places" DROP CONSTRAINT "FK_7044765937b305c51f1cfe81043"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_320084ab9c4f93a78ae873119c1"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_12755d19f001675602aa1ac37e9"`);
        await queryRunner.query(`ALTER TABLE "reserves" DROP CONSTRAINT "FK_f3f05475404804ca87c028304c6"`);
        await queryRunner.query(`ALTER TABLE "schedule" DROP CONSTRAINT "FK_3115467ab2fa3267649ad1e9197"`);
        await queryRunner.query(`DROP TABLE "institutions"`);
        await queryRunner.query(`DROP TABLE "places"`);
        await queryRunner.query(`DROP TABLE "items"`);
        await queryRunner.query(`DROP TABLE "reserves"`);
        await queryRunner.query(`DROP TABLE "types"`);
        await queryRunner.query(`DROP TABLE "schedule"`);
    }

}
