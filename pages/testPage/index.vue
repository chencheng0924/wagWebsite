<template>
  <div>
    測試活動頁
  </div>
</template>
<script setup lang="ts">
const testapi = usetestPage()
onMounted(async() => {
  const data = {
    searchKeyIdentity: 'first'
  }
  await testapi.getList(data)
})
</script>