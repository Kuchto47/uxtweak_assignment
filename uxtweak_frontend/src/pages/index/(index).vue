<template>
  <q-page class="q-pa-md flex flex-center">
    <div class="column" style="width: 100%; max-width: 400px">
      <div class="text-h6 q-mb-md">Your Nickname:</div>
      <q-input
        outlined
        v-model="nickname"
        placeholder="Enter your nickname"
        hint="at least 3 characters are needed"
        style="margin-bottom: 100px"
      />

      <div class="text-h6 q-mb-sm">Chatrooms available:</div>

      <div v-if="isPending">
        <ChatroomsListSkeleton />
      </div>

      <div v-else-if="isError">
        <ChatroomsLoadingError />
      </div>

      <q-list v-else bordered separator rounded>
        <ChatroomListItem />
      </q-list>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useGetChatRooms } from '@/features/chatrooms/api/useGetChatRooms';
import { useNickname } from '@/features/chatrooms/utils/useNickname';
import ChatroomsListSkeleton from '../../features/chatrooms/components/skeletons/ChatroomsListSkeleton.vue';
import ChatroomsLoadingError from '../../features/chatrooms/components/errors/ChatroomsLoadingError.vue';
import ChatroomListItem from '../../features/chatrooms/components/ChatroomListItem.vue';

const { isError, isPending } = useGetChatRooms();
const { nickname } = useNickname();
</script>
