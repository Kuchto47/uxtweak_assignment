<template>
  <q-page class="q-pa-md flex flex-center">
    <div class="column" style="width: 100%; max-width: 400px">
      <div class="text-h6 q-mb-md">Your Nickname:</div>
      <q-input outlined v-model="nickname" placeholder="Enter your nickname" style="margin-bottom: 100px" />

      <div class="text-h6 q-mb-sm">Chatrooms available:</div>
      <q-list bordered separator rounded>
        <q-item v-for="room in chatrooms" :key="room.id">
          <q-item-section>
            <q-item-label>{{ room.name }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-btn color="primary" label="Join" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const nickname = ref('');
const chatrooms = ref([
  { id: 1, name: 'UXTweak Chatroom' },
]);
</script>
