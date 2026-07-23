import { ChatMessageDtoType } from './chatMessage.dto.schema';
import { ChatMessage } from '../entity/chatMessage.entity';

export class ChatMessageDto implements ChatMessageDtoType {
  id: number;
  timestamp: number;
  senderName: string;
  message: string;

  static fromEntity(entity: ChatMessage): ChatMessageDto {
    return {
      id: entity.id,
      timestamp: entity.createdAt.getTime(),
      senderName: entity.sender_name,
      message: entity.body,
    };
  }
}
