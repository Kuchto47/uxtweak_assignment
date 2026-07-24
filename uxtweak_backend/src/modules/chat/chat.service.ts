import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chatroom } from './model/entity/chatroom.entity';
import { Repository } from 'typeorm';
import { ChatMessage } from './model/entity/chatMessage.entity';
import { ChatRoomDto } from './model/dto/chatroom.dto';
import {
  ChatMessageDtoType,
  SendChatMessageResponseDtoType,
} from './model/dto/chatMessage.dto.schema';
import { ChatMessageDto } from './model/dto/chatMessage.dto';
import { SendChatMessageRequestDto } from './model/dto/sendChatMessageRequest.dto';
import { ChatMessageEventingService } from './chatMessageEventing.service';

@Injectable()
export class ChatService {
  private readonly logger: Logger = new Logger(ChatService.name);

  constructor(
    @InjectRepository(Chatroom)
    private readonly chatroomRepository: Repository<Chatroom>,
    @InjectRepository(ChatMessage)
    private readonly messageRepository: Repository<ChatMessage>,
    private readonly chatMessageEventing: ChatMessageEventingService,
  ) {}

  async getChatRooms(): Promise<ChatRoomDto[]> {
    const chatRoomsEntities = await this.chatroomRepository.find();
    return chatRoomsEntities.map((cre) => ChatRoomDto.fromEntity(cre));
  }

  async getAllMessagesForRoom(roomId: string): Promise<ChatMessageDtoType[]> {
    const messages = await this.messageRepository
      .createQueryBuilder('messages')
      .where('messages.chatroomFkId = :roomId', { roomId })
      .getMany();
    return messages.map((message) => ChatMessageDto.fromEntity(message));
  }

  async sendMessage(
    msg: SendChatMessageRequestDto,
  ): Promise<SendChatMessageResponseDtoType> {
    try {
      const savedMsg = await this.messageRepository.save(
        ChatMessage.fromSendMessageDto(msg),
      );
      this.chatMessageEventing.emit(
        msg.chatroomId,
        ChatMessageDto.fromEntity(savedMsg),
      );
      return { success: true };
    } catch (e) {
      this.logger.error(e);
      return { success: false };
    }
  }
}
