<template>
  <div>
    <CommonNavHeader/>
    <NuxtPage />
    <CommonBottomFooter/>
    <commonRemindDialog v-if="apiStatus" :show="apiStatus" />
  </div>
</template>
<script setup>
const store = useApiStore();
const apiStatus = computed(() => store.apiStatus);
</script>
