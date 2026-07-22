import { Column, Entity, OneToMany } from 'typeorm';
import { ChatMessage } from './chatMessage.entity';
import { BaseUuidEntity } from '../../../../db/base-uuid-entity';

@Entity('chatroom')
export class Chatroom extends BaseUuidEntity {
  @Column()
  name: string;

  @OneToMany(() => ChatMessage, (message) => message.chatroom)
  messages: ChatMessage[];
}
