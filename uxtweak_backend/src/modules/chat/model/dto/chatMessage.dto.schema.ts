import { z } from 'zod';

export const getHistoricalMessagesRequestDtoSchema = z.object({
  chatroomId: z.string().uuid(),
});

export const chatMessageDtoSchema = z.object({
  id: z.number(),
  timestamp: z.number(),
  senderName: z.string(),
  message: z.string(),
});

export type GetHistoricalMessagesRequestDtoType = z.infer<
  typeof getHistoricalMessagesRequestDtoSchema
>;

export type ChatMessageDtoType = z.infer<typeof chatMessageDtoSchema>;
