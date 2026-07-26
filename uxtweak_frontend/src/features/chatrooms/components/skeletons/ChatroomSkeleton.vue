<script setup lang="ts">
</script>

<template>
  <div v-for="n in 5" :key="n" class="q-mb-md">
    <q-skeleton
        type="text"
        width="100px"
        class="q-mb-xs"
        :style="{ marginLeft: n % 2 === 0 ? 'auto' : '0' }"
    />
    <q-skeleton
        :type="n % 2 === 0 ? 'QBadge' : 'QBtn'"
        height="40px"
        :width="n % 2 === 0 ? '60%' : '70%'"
        :style="{ marginLeft: n % 2 === 0 ? 'auto' : '0' }"
    />
  </div>
</template>