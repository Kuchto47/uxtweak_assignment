import { Query, Router, Input, Mutation } from 'nestjs-trpc';
import { ChatService } from './chat.service';
import { z } from 'zod';
import { chatroomDtoSchema } from './model/dto/chatroom.dto.schema';
import { ChatRoomDto } from './model/dto/chatroom.dto';
import {
  chatMessageDtoSchema,
  ChatMessageDtoType,
  getHistoricalMessagesRequestDtoSchema,
  type GetHistoricalMessagesRequestDtoType,
  sendChatMessageRequestDtoSchema,
  sendChatMessageResponseDtoSchema,
  SendChatMessageResponseDtoType,
} from './model/dto/chatMessage.dto.schema';
import { SendChatMessageRequestDto } from './model/dto/sendChatMessageRequest.dto';

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

  @Mutation({
    input: sendChatMessageRequestDtoSchema,
    output: sendChatMessageResponseDtoSchema,
  })
  sendMessage(
    @Input() param: SendChatMessageRequestDto,
  ): Promise<SendChatMessageResponseDtoType> {
    return this.chatService.sendMessage(param);
  }
}
