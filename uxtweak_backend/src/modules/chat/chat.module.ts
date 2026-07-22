import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatroomEntity } from './model/entity/chatroom.entity';
import { MessageEntity } from './model/entity/message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatroomEntity, MessageEntity])],
  controllers: [],
  providers: [/*router*/, /*service*/],
  exports: [TypeOrmModule],
})
export class ChatModule {}
