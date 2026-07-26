<template>
  <q-header elevated>
    <q-toolbar>
      <q-toolbar-title> UXTweak Chat </q-toolbar-title>

      <q-space />

      <div v-if="activeChatroom" class="absolute-center">
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
import { useGetChatRooms } from '@/features/chatrooms/api/useGetChatRooms';

const route = useRoute('/room/[chatroomId]');
const roomId = route.params.chatroomId;

const { data: chatrooms } = useGetChatRooms({ desiredRoomId: roomId });

const activeChatroom = computed(() => {
  const roomId = route.params.chatroomId;
  if (!roomId) return '';
  return chatrooms.value?.find((room) => room.id === roomId)?.name ?? 'Unknown Room';
});
</script>
