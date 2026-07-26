<template>
  <q-page class="q-pa-md flex flex-center">
    <div class="column" style="width: 100%; max-width: 400px">
      <div class="text-h6 q-mb-md">Your Nickname:</div>
      <q-input
        outlined
        v-model="nickname"
        placeholder="Enter your nickname"
        style="margin-bottom: 100px"
      />

      <div class="text-h6 q-mb-sm">Chatrooms available:</div>

      <div v-if="isPending">
        <ChatroomsSkeleton />
      </div>

      <div v-else-if="isError">
        <ChatroomsLoadingError />
      </div>

      <q-list v-else bordered separator rounded>
        <ChatroomItem />
      </q-list>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useGetChatRooms } from '@/features/chatrooms/useGetChatRooms';
import ChatroomsSkeleton from '../../features/chatrooms/ChatroomsSkeleton.vue';
import ChatroomsLoadingError from '../../features/chatrooms/ChatroomsLoadingError.vue';
import ChatroomItem from '../../features/chatrooms/ChatroomItem.vue';

const { isError, isPending } = useGetChatRooms();

const nickname = ref('');
</script>
