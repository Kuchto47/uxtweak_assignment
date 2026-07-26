<template>
  <q-page class="flex justify-center">
    <div
      class="column q-pb-xl"
      :style="{
        width: '100%',
        maxWidth: '1000px',
        minWidth: '300px',
        paddingBottom: '40px',
      }"
    >
      <div id="chatmessagescontainer" class="col scroll q-pa-md">
        <!-- Messages will go here -->
      </div>

      <div class="q-px-md">
        <q-input v-model="message" placeholder="Type a message" dense outlined>
          <template v-slot:append>
            <q-btn round dense flat icon="send" />
          </template>
        </q-input>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';

const route = useRoute('/room/[chatroomId]');
const _chatroomId = computed(() => route.params.chatroomId);

const message = ref('');
</script>
