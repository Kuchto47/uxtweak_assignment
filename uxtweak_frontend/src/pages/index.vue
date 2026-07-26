<template>
  <q-layout view="lHh Lpr lFf">
    <navbar />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import Navbar from '@/features/navbar/navbar.vue';
</script>
