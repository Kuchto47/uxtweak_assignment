import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Chatroom } from './chatroom.entity';
import { BaseSerialEntityEntity } from '../../../../db/base-serial-entity.entity';

@Entity('message')
export class ChatMessage extends BaseSerialEntityEntity {
  @Column({ name: 'chatroom_fk_id' })
  chatroomFkId: string;

  @Column()
  sender_name: string;

  @Column()
  body: string;

  @ManyToOne(() => Chatroom, (chatroom) => chatroom.messages, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'chatroom_fk_id' })
  chatroom: Chatroom;
}
