<template>
  <q-page class="flex justify-center">
    <div
      class="column q-pb-xl"
      :style="{
        width: '100%',
        maxWidth: '1000px',
        minWidth: '300px',
        paddingBottom: '40px',
      }"
    >
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

      <div class="q-px-md">
        <q-input v-model="message" placeholder="Type a message" dense outlined>
          <template v-slot:append>
            <q-btn round dense flat icon="send" />
          </template>
        </q-input>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { nextTick, ref, watch } from 'vue';
import { useGetRecentMessagesForRoom } from '@/features/chatrooms/api/useGetRecentMessagesForRoom';
import { useNickname } from '@/features/chatrooms/utils/useNickname';
import ChatroomSkeleton from '../../features/chatrooms/components/ChatroomSkeleton.vue';
import ChatroomMessagesLoadingError from '../../features/chatrooms/components/ChatroomMessagesLoadingError.vue';
import { formatDate } from '@/features/chatrooms/utils/formatDate';

const route = useRoute('/room/[chatroomId]');
const { isPending, isError, data: messages } = useGetRecentMessagesForRoom(route.params.chatroomId);
const { nickname } = useNickname();

const message = ref('');

const scrollContainer = ref<HTMLElement | null>(null);

const scrollToBottom = async () => {
  await nextTick();
  if (scrollContainer.value) {
    scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
  }
};

watch(
  messages,
  () => {
    void scrollToBottom();
  },
  { immediate: true },
);
</script>
