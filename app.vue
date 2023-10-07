<template>
  <div>
    <NuxtPage />
    <commonRemindDialog v-if="apiStatus" :show="apiStatus" />
  </div>
</template>
<script setup>
const store = useApiStore();
const apiStatus = computed(() => store.apiStatus);
</script>
