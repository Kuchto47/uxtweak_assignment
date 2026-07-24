import { MigrationInterface, QueryRunner } from 'typeorm';

export class RestrictLengthsOfChatroomAndUserNames1784877615086 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "chatroom" ALTER COLUMN "name" TYPE varchar(40)`,
    );
    await queryRunner.query(
      `ALTER TABLE "message" ALTER COLUMN "sender_name" TYPE varchar(25)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "message" ALTER COLUMN "sender_name" TYPE varchar(255)`,
    );
    await queryRunner.query(
      `ALTER TABLE "chatroom" ALTER COLUMN "name" TYPE varchar(255)`,
    );
  }
}
