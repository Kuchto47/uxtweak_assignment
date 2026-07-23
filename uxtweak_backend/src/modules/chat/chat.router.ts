import { Query, Router, Input } from 'nestjs-trpc';
import { ChatService } from './chat.service';
import { z } from 'zod';
import { chatroomDtoSchema } from './model/dto/chatroom.dto.schema';
import { ChatRoomDto } from './model/dto/chatroom.dto';
import {
  chatMessageDtoSchema,
  ChatMessageDtoType,
  getHistoricalMessagesRequestDtoSchema,
  type GetHistoricalMessagesRequestDtoType,
} from './model/dto/chatMessage.dto.schema';

@Router()
export class ChatRouter {
  constructor(private readonly chatService: ChatService) {}

  @Query({ output: z.array(chatroomDtoSchema) })
  getChatRooms(): Promise<ChatRoomDto[]> {
    return this.chatService.getChatRooms();
  }

  @Query({
    input: getHistoricalMessagesRequestDtoSchema,
    output: z.array(chatMessageDtoSchema),
  })
  getAllMessagesForRoom(
    @Input() param: GetHistoricalMessagesRequestDtoType,
  ): Promise<ChatMessageDtoType[]> {
    return this.chatService.getAllMessagesForRoom(param.chatroomId);
  }
}
