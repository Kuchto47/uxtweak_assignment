import { Column, Entity, OneToMany } from 'typeorm';
import { ChatMessage } from './chatMessage.entity';
import { BaseUuidEntityEntity } from '../../../../db/base-uuid-entity.entity';

@Entity('chatroom')
export class Chatroom extends BaseUuidEntityEntity {
  @Column()
  name: string;

  @OneToMany(() => ChatMessage, (message) => message.chatroom)
  messages: ChatMessage[];
}
