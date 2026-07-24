import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chatroom } from './model/entity/chatroom.entity';
import { ChatMessage } from './model/entity/chatMessage.entity';
import { ChatRouter } from './chat.router';
import { ChatService } from './chat.service';
import { ChatMessageEventingService } from './chatMessageEventing.service';

@Module({
  imports: [TypeOrmModule.forFeature([Chatroom, ChatMessage])],
  controllers: [],
  providers: [ChatRouter, ChatService, ChatMessageEventingService],
  exports: [TypeOrmModule],
})
export class ChatModule {}
