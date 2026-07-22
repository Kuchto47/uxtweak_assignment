import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { ChatroomEntity } from './chatroom.entity';
import { BaseSerialEntity } from '../../../../db/base-serial-entity';

@Entity('message')
export class MessageEntity extends BaseSerialEntity {
  @Column({ name: 'chatroom_fk_id' })
  chatroomFkId: string;

  @Column()
  sender_name: string;

  @Column()
  body: string;

  @ManyToOne(() => ChatroomEntity, (chatroom) => chatroom.messages, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'chatroom_fk_id' })
  chatroom: ChatroomEntity;
}
