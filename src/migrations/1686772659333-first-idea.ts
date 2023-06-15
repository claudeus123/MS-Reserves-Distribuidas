import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstIdea1686772659333 implements MigrationInterface {
    name = 'FirstIdea1686772659333'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedule" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "start_time" character varying NOT NULL, "end_time" character varying NOT NULL, "start_date" character varying NOT NULL, "end_date" character varying NOT NULL, "typeId" integer, CONSTRAINT "PK_1c05e42aec7371641193e180046" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "types" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "default_image" character varying NOT NULL, CONSTRAINT "PK_33b81de5358589c738907c3559b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reserves" ("id" SERIAL NOT NULL, "client_id" integer NOT NULL, "available" boolean NOT NULL, "start_time" character varying NOT NULL, "end_time" character varying NOT NULL, "start_date" character varying NOT NULL, "end_date" character varying NOT NULL, "itemId" integer, CONSTRAINT "REL_f3f05475404804ca87c028304c" UNIQUE ("itemId"), CONSTRAINT "PK_e38489955a3c1a3880737f466ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "items" ADD "typeId" integer`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "UQ_320084ab9c4f93a78ae873119c1" UNIQUE ("typeId")`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD CONSTRAINT "FK_3115467ab2fa3267649ad1e9197" FOREIGN KEY ("typeId") REFERENCES "types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_320084ab9c4f93a78ae873119c1" FOREIGN KEY ("typeId") REFERENCES "types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reserves" ADD CONSTRAINT "FK_f3f05475404804ca87c028304c6" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reserves" DROP CONSTRAINT "FK_f3f05475404804ca87c028304c6"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_320084ab9c4f93a78ae873119c1"`);
        await queryRunner.query(`ALTER TABLE "schedule" DROP CONSTRAINT "FK_3115467ab2fa3267649ad1e9197"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "UQ_320084ab9c4f93a78ae873119c1"`);
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "typeId"`);
        await queryRunner.query(`DROP TABLE "reserves"`);
        await queryRunner.query(`DROP TABLE "types"`);
        await queryRunner.query(`DROP TABLE "schedule"`);
    }

}
