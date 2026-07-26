<template>
  <q-page class="flex justify-center">
    <div
      class="column q-pb-xl"
      :style="{
        width: '100%',
        maxWidth: '1000px',
        minWidth: '300px',
        paddingBottom: '40px',
        maxHeight: 'calc(100vh - 50px)',
      }"
    >
      <Chatroom />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import Chatroom from '@/features/chatrooms/components/Chatroom.vue';
</script>
