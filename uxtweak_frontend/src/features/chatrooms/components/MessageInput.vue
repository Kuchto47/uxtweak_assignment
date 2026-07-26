<script setup lang="ts">
import { ref } from 'vue';
import { useSendMessageToRoom } from '@/features/chatrooms/api/useSendMessageToChatRoom';

const props = defineProps<{
  chatroomId: string;
}>();

const { mutateAsync: sendMessage } = useSendMessageToRoom(props.chatroomId);
const message = ref('');

const handleSendMessage = async () => {
  await sendMessage(message);
};
</script>

<template>
  <div class="q-px-md">
    <q-input
      v-model="message"
      placeholder="Type a message"
      dense
      outlined
      @keyup.enter="handleSendMessage"
    >
      <template v-slot:append>
        <q-btn
          round
          dense
          flat
          :text-color="message.length ? 'primary' : 'grey'"
          icon="send"
          :disabled="!message.length"
          @click="handleSendMessage"
        />
      </template>
    </q-input>
  </div>
</template>
