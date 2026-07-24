import { Query, Router, Input, Mutation, Subscription } from 'nestjs-trpc';
import { ChatService } from './chat.service';
import { z } from 'zod';
import { chatroomDtoSchema } from './model/dto/chatroom.dto.schema';
import { ChatRoomDto } from './model/dto/chatroom.dto';
import {
  chatMessageDtoSchema,
  ChatMessageDtoType,
  getMessagesForRoomRequestDtoSchema,
  type GetMessagesForRoomRequestDtoType,
  sendChatMessageRequestDtoSchema,
  sendChatMessageResponseDtoSchema,
  SendChatMessageResponseDtoType,
} from './model/dto/chatMessage.dto.schema';
import { SendChatMessageRequestDto } from './model/dto/sendChatMessageRequest.dto';
import { ChatMessageEventingService } from './chatMessageEventing.service';
import { Observable } from 'rxjs';

@Router()
export class ChatRouter {
  constructor(
    private readonly chatService: ChatService,
    private readonly chatMessageEventing: ChatMessageEventingService,
  ) {}

  @Query({ output: z.array(chatroomDtoSchema) })
  getChatRooms(): Promise<ChatRoomDto[]> {
    return this.chatService.getChatRooms();
  }

  @Query({
    input: getMessagesForRoomRequestDtoSchema,
    output: z.array(chatMessageDtoSchema),
  })
  getAllMessagesForRoom(
    @Input() param: GetMessagesForRoomRequestDtoType,
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

  @Subscription({
    input: getMessagesForRoomRequestDtoSchema,
    output: chatMessageDtoSchema,
  })
  onNewMessageSent(
    @Input() param: GetMessagesForRoomRequestDtoType,
  ): Observable<ChatMessageDtoType> {
    return this.chatMessageEventing.asObservable(param.chatroomId);
  }
}
