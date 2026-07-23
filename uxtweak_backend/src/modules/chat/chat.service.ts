import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chatroom } from './model/entity/chatroom.entity';
import { Repository } from 'typeorm';
import { ChatMessage } from './model/entity/chatMessage.entity';
import { ChatRoomDto } from './model/dto/chatroom.dto';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chatroom)
    private readonly chatroomRepository: Repository<Chatroom>,
    @InjectRepository(ChatMessage)
    private readonly messageRepository: Repository<ChatMessage>,
  ) {}

  async getChatRooms(): Promise<ChatRoomDto[]> {
    const chatRoomsEntities = await this.chatroomRepository.find();
    return chatRoomsEntities.map((cre) => ChatRoomDto.fromEntity(cre));
  }

  async getAllMessagesForRoom(roomId: string): Promise<ChatMessage[]> {
    return this.messageRepository
      .createQueryBuilder('messages')
      .where('messages.chatroomFkId = :roomId', { roomId })
      .getMany();
  }
}
