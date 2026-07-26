<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useGetRecentMessagesForRoom } from '@/features/chatrooms/api/useGetRecentMessagesForRoom';
import { useNickname } from '@/features/chatrooms/utils/useNickname';
import { formatDate } from '@/features/chatrooms/utils/formatDate';
import ChatroomSkeleton from '@/features/chatrooms/components/skeletons/ChatroomSkeleton.vue';
import ChatroomMessagesLoadingError from '@/features/chatrooms/components/errors/ChatroomMessagesLoadingError.vue';
import { useSubscribeToChatroom } from '@/features/chatrooms/api/useSubscribeToChatroom';
import { useScrollContainer } from '@/features/chatrooms/utils/useScrollContainer';
import MessageInput from '@/features/chatrooms/components/MessageInput.vue';

const route = useRoute('/room/[chatroomId]');
const chatroomId = route.params.chatroomId;
const { isPending, isError, data: messages } = useGetRecentMessagesForRoom(chatroomId);
const { nickname } = useNickname();

useSubscribeToChatroom(chatroomId);

const { scrollContainer } = useScrollContainer(messages);
</script>

<template>
  <div id="chatmessagescontainer" ref="scrollContainer" class="col scroll q-pa-md">
    <template v-if="isPending">
      <ChatroomSkeleton />
    </template>

    <template v-else-if="isError">
      <ChatroomMessagesLoadingError />
    </template>

    <template v-else-if="messages">
      <q-chat-message
        v-for="msg in messages"
        :key="msg.id"
        :name="msg.senderName !== nickname ? msg.senderName : undefined"
        :stamp="formatDate(msg.timestamp)"
        :text="[msg.message]"
        :sent="msg.senderName === nickname"
        :bg-color="msg.senderName === nickname ? 'primary' : 'grey-4'"
        :text-color="msg.senderName === nickname ? 'white' : 'black'"
      />
    </template>
  </div>
  <MessageInput :chatroom-id="chatroomId" />
</template>
