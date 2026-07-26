import { queryOptions, useQuery } from '@tanstack/vue-query';
import { trpcClient } from '@/trpc/trpc';

const GET_CHATROOMS_QUERY_KEY = 'chatrooms';

export const getChatRoomsQueryOptions = () => {
  return queryOptions({
    queryKey: [GET_CHATROOMS_QUERY_KEY],
    queryFn: () => trpcClient.chatRouter.getChatRooms.query(),
  })
}

export const useGetChatRooms = () => {
  return useQuery(getChatRoomsQueryOptions());
}

