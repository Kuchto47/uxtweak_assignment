import { MigrationInterface, QueryRunner } from 'typeorm';

type ChatroomAdded = { id: string };

export class AddSecondChatRoom1785057810530 implements MigrationInterface {
  private assertHasIds(values: unknown): asserts values is ChatroomAdded[] {
    if (!Array.isArray(values)) {
      throw new Error('Expected an array of objects with ids');
    }

    for (const value of values) {
      if (
        typeof value !== 'object' ||
        value === null ||
        !('id' in value) ||
        typeof (value as Record<string, unknown>).id !== 'string'
      ) {
        throw new Error('Expected an array of objects with ids of type string');
      }
    }
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    const chatroomsAdded: unknown = await queryRunner.query(
      `INSERT INTO "chatroom" (name) VALUES ('Private Chatroom 3:>') RETURNING id`,
    );

    this.assertHasIds(chatroomsAdded);

    const chatroomId = chatroomsAdded[0].id;

    await queryRunner.query(
      `INSERT INTO "message" (chatroom_fk_id, sender_name, body) VALUES ('${chatroomId}', 'Martin Kuchar', 'Did you expect to find something crazy in here?')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM "chatroom" WHERE name = 'Private Chatroom 3:>'`,
    );
  }
}
