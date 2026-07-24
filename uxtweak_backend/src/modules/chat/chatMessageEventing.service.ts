import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';
import { ChatMessageDtoType } from './model/dto/chatMessage.dto.schema';

type ChatRoomId = string;

@Injectable()
export class ChatMessageEventingService {
  private readonly subjectsMap: Map<ChatRoomId, Subject<ChatMessageDtoType>> =
    new Map();

  emit(chatroomId: ChatRoomId, message: ChatMessageDtoType) {
    this.ensureSubjectExists(chatroomId);
    return this.subjectsMap.get(chatroomId)!.next(message);
  }

  asObservable(chatroomId: ChatRoomId) {
    this.ensureSubjectExists(chatroomId);
    return this.subjectsMap.get(chatroomId)!.asObservable();
  }

  private ensureSubjectExists(chatroomId: ChatRoomId) {
    if (!this.subjectsMap.has(chatroomId)) {
      this.subjectsMap.set(chatroomId, new Subject<ChatMessageDtoType>());
    }
  }
}
