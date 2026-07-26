<template>
  <q-page class="flex flex-center">
    <div class="text-h4">Chatroom ID: {{ chatroomId }}</div>
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
const route = useRoute('/room/[chatroomId]');
const chatroomId = computed(() => route.params.chatroomId);
</script>
