import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Chatroom } from './chatroom.entity';
import { BaseSerialEntityEntity } from '../../../../db/base-serial-entity.entity';
import { SendChatMessageRequestDto } from '../dto/sendChatMessageRequest.dto';

@Entity('message')
export class ChatMessage extends BaseSerialEntityEntity {
  @Column({ name: 'chatroom_fk_id' })
  chatroomFkId: string;

  @Column({ length: 25 })
  sender_name: string;

  @Column()
  body: string;

  @ManyToOne(() => Chatroom, (chatroom) => chatroom.messages, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'chatroom_fk_id' })
  chatroom: Chatroom;

  static fromSendMessageDto(
    dto: SendChatMessageRequestDto,
  ): Pick<ChatMessage, 'body' | 'chatroomFkId' | 'sender_name'> {
    return {
      body: dto.messageText,
      chatroomFkId: dto.chatroomId,
      sender_name: dto.senderName,
    };
  }
}
