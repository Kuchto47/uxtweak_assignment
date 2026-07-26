import { queryOptions, useQuery, useQueryClient } from '@tanstack/vue-query';
import { trpcClient } from '@/trpc/trpc';

const GET_CHATROOMS_QUERY_KEY = 'chatrooms';

export const getChatRoomsQueryOptions = (options?: { isEnabled: boolean }) => {
  return queryOptions({
    queryKey: [GET_CHATROOMS_QUERY_KEY],
    queryFn: () => trpcClient.chatRouter.getChatRooms.query(),
    staleTime: 1_000,
    enabled: options === undefined || options.isEnabled,
  });
};

export const useGetChatRooms = (options?: { desiredRoomId: string }) => {
  const queryClient = useQueryClient();
  const isEnabled = options === undefined ||
    queryClient
      .getQueryData(getChatRoomsQueryOptions().queryKey)
      ?.find((cr) => cr.id === options.desiredRoomId) === undefined;

  return useQuery(getChatRoomsQueryOptions({ isEnabled }));
};

