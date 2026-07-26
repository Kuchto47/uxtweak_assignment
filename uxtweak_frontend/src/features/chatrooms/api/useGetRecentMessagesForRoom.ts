import { queryOptions, useQuery } from '@tanstack/vue-query';
import { trpcClient } from '@/trpc/client';

const GET_MESSAGES_QUERY_KEY = 'messages';

export const getMessagesQueryOptions = (roomId: string) => {
  return queryOptions({
    queryKey: [GET_MESSAGES_QUERY_KEY, roomId],
    queryFn: () => trpcClient.chatRouter.getAllMessagesForRoom.query({ chatroomId: roomId }),
    staleTime: Infinity,
  });
};

export const useGetRecentMessagesForRoom = (roomId: string) => {
  return useQuery(getMessagesQueryOptions(roomId));
};
