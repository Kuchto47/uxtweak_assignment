import { z } from 'zod';

const CHATROOM_ID = z.string().uuid();

export const getHistoricalMessagesRequestDtoSchema = z.object({
  chatroomId: CHATROOM_ID,
});

export const chatMessageDtoSchema = z.object({
  id: z.number(),
  timestamp: z.number(),
  senderName: z.string(),
  message: z.string(),
});

export const sendChatMessageRequestDtoSchema = z.object({
  chatroomId: CHATROOM_ID,
  senderName: z.string(),
  messageText: z.string(),
});

export const sendChatMessageResponseDtoSchema = z.object({
  success: z.boolean(),
});

export type GetHistoricalMessagesRequestDtoType = z.infer<
  typeof getHistoricalMessagesRequestDtoSchema
>;

export type ChatMessageDtoType = z.infer<typeof chatMessageDtoSchema>;

export type SendChatMessageRequestDtoType = z.infer<
  typeof sendChatMessageRequestDtoSchema
>;

export type SendChatMessageResponseDtoType = z.infer<
  typeof sendChatMessageResponseDtoSchema
>;
