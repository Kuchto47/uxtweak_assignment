import { SendChatMessageRequestDtoType } from './chatMessage.dto.schema';

export class SendChatMessageRequestDto implements SendChatMessageRequestDtoType {
  chatroomId: string;
  messageText: string;
  senderName: string;
}
