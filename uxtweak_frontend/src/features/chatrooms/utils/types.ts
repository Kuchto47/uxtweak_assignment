import type { RouterOutput } from '../../../../../uxtweak_backend/src/trpc/@generated/helperTypes';

export type ChatMessageDto = RouterOutput['chatRouter']['getAllMessagesForRoom'][number];
