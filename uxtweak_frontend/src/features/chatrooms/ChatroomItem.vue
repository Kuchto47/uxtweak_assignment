<script setup lang="ts">
import { useGetChatRooms } from '@/features/chatrooms/useGetChatRooms';

const { data: chatrooms } = useGetChatRooms()

</script>

<template>
  <q-item v-for="room in chatrooms" :key="room.id">
    <q-item-section>
      <q-item-label>{{ room.name }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-btn color="primary" label="Join" :to="`/room/${room.id}`" />
    </q-item-section>
  </q-item>
</template>
