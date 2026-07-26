import { z } from 'zod';

export const chatMessageDtoSchema = z.object({
  id: z.number(),
  message: z.string(),
  senderName: z.string(),
  timestamp: z.number()
})
