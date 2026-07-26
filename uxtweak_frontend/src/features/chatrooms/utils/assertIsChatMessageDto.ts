import type { ChatMessageDto } from '@/features/chatrooms/utils/types';

// TODO rework this into zod schema validation!!
export function assertIsChatMessageDto(data: unknown): asserts data is ChatMessageDto {
  if (typeof data !== 'object' || data === null) {
    throw new Error('Data is not a ChatMessageDto');
  }

  if (
    !('id' in data) ||
    !('message' in data) ||
    !('timestamp' in data) ||
    !('senderName' in data)
  ) {
    throw new Error('Data is missing ChatMessageDto fields');
  }

  if (
    typeof data.id !== 'number' ||
    typeof data.message !== 'string' ||
    typeof data.timestamp !== 'number' ||
    typeof data.senderName !== 'string'
  ) {
    throw new Error('Data received in ChatMessageDto are of incorrect types');
  }
}
