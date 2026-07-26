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
        <q-list bordered separator rounded>
          <q-item v-for="n in 3" :key="n">
            <q-item-section>
              <q-item-label>
                <q-skeleton type="text" width="60%" />
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-skeleton type="QBtn" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <div v-else-if="isError">
        <q-banner class="bg-negative text-white rounded-borders">
          <template v-slot:avatar>
            <q-icon name="error" color="white" />
          </template>
          Failed to load chatrooms. Please try again later.
        </q-banner>
      </div>

      <q-list v-else bordered separator rounded>
        <q-item v-for="room in chatrooms" :key="room.id">
          <q-item-section>
            <q-item-label>{{ room.name }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-btn
              color="primary"
              label="Join"
              :to="`/room/${room.id}`"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useGetChatRooms } from '@/features/chatrooms/useGetChatRooms';

const { isError, isPending, data: chatrooms } = useGetChatRooms();

const nickname = ref('');
</script>
