import { ChatroomDtoType } from './chatroom.dto.schema';
import { Chatroom } from '../entity/chatroom.entity';

export class ChatRoomDto implements ChatroomDtoType {
  id: string;
  name: string;

  static fromEntity(chatroomEntity: Chatroom): ChatRoomDto {
    return {
      id: chatroomEntity.id,
      name: chatroomEntity.name,
    };
  }
}
