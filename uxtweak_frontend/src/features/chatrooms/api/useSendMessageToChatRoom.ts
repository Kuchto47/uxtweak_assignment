import { mutationOptions, useMutation } from '@tanstack/vue-query';
import { trpcClient } from '@/trpc/client';
import { useNickname } from '@/features/chatrooms/utils/useNickname';
import { Notify } from 'quasar';
import { type Ref } from 'vue';

const SEND_MESSAGE_QUERY_KEY = 'sendMessage';

const errorSendingMessageNotification = () => {
  Notify.create({
    type: 'negative',
    message: 'Failed to send the message :(',
    position: 'top-right',
    timeout: 5_000,
    progress: true,
  });
}

const warnSendingMessageNotification = (messageTryingToBeSent: string) => {
  Notify.create({
    type: 'warning',
    message: `Cannot send empty message "${messageTryingToBeSent}"`,
    position: 'top-right',
    timeout: 5_000,
    progress: true,
  });
};

export const sendMessageMutationOptions = (roomId: string) => {
  const { nickname } = useNickname();
  return mutationOptions({
    mutationKey: [SEND_MESSAGE_QUERY_KEY, roomId, nickname],
    mutationFn: (messageRef: Ref<string>): Promise<{ success: boolean } | null> => {
      if (messageRef.value.trim().length === 0) {
        warnSendingMessageNotification(messageRef.value);
        return Promise.resolve(null);
      }

      return trpcClient.chatRouter.sendMessage.mutate({
        senderName: nickname.value,
        messageText: messageRef.value,
        chatroomId: roomId,
      });
    },
    onError: () => {
      errorSendingMessageNotification();
    },
    onSuccess: (data, messageRef) => {
      if (data === null) return;

      if (!data.success) {
        errorSendingMessageNotification();
      } else {
        messageRef.value = '';
      }
    },
  });
};

export const useSendMessageToRoom = (roomId: string) => {
  return useMutation(sendMessageMutationOptions(roomId));
};
