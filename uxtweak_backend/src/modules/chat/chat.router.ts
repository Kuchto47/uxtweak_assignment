import { Query, Router } from 'nestjs-trpc';
import { ChatService } from './chat.service';
import { z } from 'zod';
import { chatroomDtoSchema } from './model/dto/chatroom.dto.schema';
import { ChatRoomDto } from './model/dto/chatroom.dto';
import { ChatMessage } from './model/entity/chatMessage.entity';

@Router()
export class ChatRouter {
  constructor(private readonly chatService: ChatService) {}

  @Query({ output: z.array(chatroomDtoSchema) })
  getChatRooms(): Promise<ChatRoomDto[]> {
    return this.chatService.getChatRooms();
  }

  @Query({})
  getHistoricalMessages(): Promise<ChatMessage[]> {
    return this.chatService.getAllMessagesForRoom('TODO');
  }
}
