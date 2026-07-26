<script setup lang="ts">
import { useGetChatRooms } from '@/features/chatrooms/useGetChatRooms';
import { useNickname } from '@/features/chatrooms/useNickname';

const { data: chatrooms } = useGetChatRooms()
const { nickname } = useNickname();
</script>

<template>
  <q-item v-for="room in chatrooms" :key="room.id">
    <q-item-section>
      <q-item-label>{{ room.name }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-btn
        color="primary"
        label="Join"
        :to="`/room/${room.id}`"
        :disable="nickname.length < 3"
      />
    </q-item-section>
  </q-item>
</template>
