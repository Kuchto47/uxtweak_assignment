import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';
import { type ChatMessageDtoType } from './model/dto/chatMessage.dto.schema';
import { type ChatRoomId } from './types';
import { EnsureSubjectExists } from './decorators/EnsureSubjectExists';

@Injectable()
export class ChatMessageEventingService {
  private readonly subjectsMap: Map<ChatRoomId, Subject<ChatMessageDtoType>> =
    new Map();

  @EnsureSubjectExists()
  emit(chatroomId: ChatRoomId, message: ChatMessageDtoType) {
    return this.subjectsMap.get(chatroomId)!.next(message);
  }

  @EnsureSubjectExists()
  asObservable(chatroomId: ChatRoomId) {
    return this.subjectsMap.get(chatroomId)!.asObservable();
  }
}
