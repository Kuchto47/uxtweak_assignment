import { z } from 'zod';

export const chatroomDtoSchema = z.object({
  name: z.string(),
  id: z.string().uuid(),
});

export type ChatroomDtoType = z.infer<typeof chatroomDtoSchema>;
