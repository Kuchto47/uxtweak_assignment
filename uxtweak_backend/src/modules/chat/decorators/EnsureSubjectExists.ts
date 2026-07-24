import { type ChatRoomId } from '../types';
import { ChatMessageEventingService } from '../chatMessageEventing.service';
import { Subject } from 'rxjs';
import { type ChatMessageDtoType } from '../model/dto/chatMessage.dto.schema';

export function EnsureSubjectExists() {
  return function <
    T extends (chatroomId: ChatRoomId, ...args: unknown[]) => unknown,
  >(
    _target: unknown,
    _propertyKey: string,
    descriptor: TypedPropertyDescriptor<T>,
  ): TypedPropertyDescriptor<T> {
    const originalMethod = descriptor.value!;

    descriptor.value = function (
      this: ChatMessageEventingService,
      ...args: Parameters<T>
    ): ReturnType<T> {
      const chatroomId = args[0];

      if (!this['subjectsMap'].has(chatroomId)) {
        this['subjectsMap'].set(chatroomId, new Subject<ChatMessageDtoType>());
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return originalMethod.apply(this, args);
    } as T;

    return descriptor;
  };
}
