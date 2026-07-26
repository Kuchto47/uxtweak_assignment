<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> UXTweak Chat </q-toolbar-title>

        <q-space />

        <div v-if="activeChatroom">
          {{ activeChatroom }}
        </div>

        <q-space />

        <div>v0.0.1</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQueryClient } from '@tanstack/vue-query'

const _queryClient = useQueryClient()
// TODO activeChatroom will be name of chatroom based on ID in URL
const activeChatroom = ref('');
</script>
