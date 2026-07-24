import { Injectable } from '@nestjs/common';
import { ChatMessageDtoType } from './model/dto/chatMessage.dto.schema';
import { EventEmitter, on } from 'events';
import { tracked } from '@trpc/server';

type ChatRoomId = string;
type ChatMessageEvents = {
  [K in `newMessage:${ChatRoomId}`]: [ChatMessageDtoType];
};

@Injectable()
export class ChatMessageEventingService {
  private readonly eventEmitter = new EventEmitter<ChatMessageEvents>();

  emit(chatroomId: ChatRoomId, message: ChatMessageDtoType) {
    this.eventEmitter.emit(`newMessage:${chatroomId}`, message);
  }

  async *onNewMessage(chatroomId: ChatRoomId, signal?: AbortSignal) {
    const eventName = `newMessage:${chatroomId}` as const;
    const iterable = on(this.eventEmitter, eventName, { signal });

    for await (const [message] of iterable) {
      const typedMessage = message as ChatMessageDtoType;
      yield tracked(String(typedMessage.id), typedMessage);
    }
  }
}
