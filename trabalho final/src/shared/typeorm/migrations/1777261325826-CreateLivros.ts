import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateLivros1777261325826 implements MigrationInterface {
    name = 'CreateLivros1777261325826'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "livros" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "autores" text NOT NULL, "ano" integer NOT NULL, "tipo" character varying NOT NULL, "quantidade" integer NOT NULL DEFAULT '0', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_69daba516e6b0dd45f49c4d8d52" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "livros"`);
    }

}
