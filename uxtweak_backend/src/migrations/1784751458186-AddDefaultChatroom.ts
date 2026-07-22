import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDefaultChatroom1784751458186 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "chatroom" (name) VALUES ('UXTweak Chatroom')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM "chatroom" WHERE name = 'UXTweak Chatroom'`,
    );
  }
}
