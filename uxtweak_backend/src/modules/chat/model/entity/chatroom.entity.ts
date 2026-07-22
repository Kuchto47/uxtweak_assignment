import { Column, Entity, OneToMany } from 'typeorm';
import { MessageEntity } from './message.entity';
import { BaseUuidEntity } from '../../../../db/base-uuid-entity';

@Entity('chatroom')
export class ChatroomEntity extends BaseUuidEntity {
  @Column()
  name: string;

  @OneToMany(() => MessageEntity, (message) => message.chatroom)
  messages: MessageEntity[];
}
