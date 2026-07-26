<template>
  <q-header elevated>
    <q-toolbar>
      <q-toolbar-title> UXTweak Chat </q-toolbar-title>

      <q-space />

      <div
        v-if="activeChatroom"
        class="absolute-center"
      >
        {{ activeChatroom }}
      </div>

      <q-space />

      <div>v0.0.1</div>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useQueryClient } from '@tanstack/vue-query';
import { getChatRoomsQueryOptions } from '@/features/chatrooms/api/useGetChatRooms';

const route = useRoute('/room/[chatroomId]');
const queryClient = useQueryClient();

const activeChatroom = computed(() => {
  const roomId = route.params.chatroomId;
  if (!roomId) return '';
  const chatrooms = queryClient.getQueryData(getChatRoomsQueryOptions().queryKey);
  return chatrooms?.find((room) => room.id === roomId)?.name ?? roomId;
});
</script>
