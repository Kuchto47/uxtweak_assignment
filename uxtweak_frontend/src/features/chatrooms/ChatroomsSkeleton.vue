<script setup lang="ts">
</script>

<template>
  <q-list bordered separator rounded>
    <q-item v-for="n in 3" :key="n">
      <q-item-section>
        <q-item-label>
          <q-skeleton type="text" width="60%"/>
        </q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-skeleton type="QBtn"/>
      </q-item-section>
    </q-item>
  </q-list>
</template>