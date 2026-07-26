import { watchEffect } from 'vue';
import { useQueryClient } from '@tanstack/vue-query';
import { trpcClient } from '@/trpc/client';
import { getMessagesQueryOptions } from '@/features/chatrooms/api/useGetRecentMessagesForRoom';
import { assertIsChatMessageDto } from '@/features/chatrooms/utils/assertIsChatMessageDto';
import { Notify } from 'quasar';

export function useSubscribeToChatroom(chatroomId: string) {
  const queryClient = useQueryClient();

  watchEffect((onCleanup) => {
    const sub = trpcClient.chatRouter.onNewMessageSent.subscribe(
      { chatroomId },
      {
        onData(newData) {
          assertIsChatMessageDto(newData);
          const queryKey = getMessagesQueryOptions(chatroomId).queryKey
          const currentData = queryClient.getQueryData(queryKey)

          queryClient.setQueryData(
            queryKey,
            currentData === undefined ? [newData] : [...currentData, newData]
          );
        },
        onError(err) {
          console.error(err);
          Notify.create({
            type: 'warning',
            message: 'Connection to messages server interrupted',
            position: 'top-right',
            timeout: 5_000,
            progress: true,
          });
        },
      },
    );

    onCleanup(() => sub.unsubscribe());
  });
}
