import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chatroom } from './model/entity/chatroom.entity';
import { ChatMessage } from './model/entity/chatMessage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chatroom, ChatMessage])],
  controllers: [],
  providers: [/*router*/, /*service*/],
  exports: [TypeOrmModule],
})
export class ChatModule {}
