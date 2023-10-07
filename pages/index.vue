<template>
  <div class="list">
    <NuxtLink :to="item.type === 'app' ? `${item.router}/?token=${token}` : item.router" v-for="(item, index) in eventList" :key="index" @click="saveToken(item)">
      {{ item.title }}
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
const token = ref('eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIzZDI3ZmMyZC00OWM1LTQ0MDMtODZhYS05MGQ2NjQ4Y2Y0YzIiLCJzdWIiOiJ1c2VyX2dyYW50X3Rva2VuIiwiaXNzIjoiOTliZWQxYTg4ODYxZTczZTRiOGE5YjNiNjU5MTZlNTU1MiIsImlhdCI6MTY5NDU5NDY3MCwiZXhwIjoxNjk0NjgxMDcwLCJuYmYiOjE2OTQ1OTQ2NzAsInVpZCI6ImQxODEwY2M3LWZmZmYtNDhmNi05MGFlLTA5ZDk3YmQ4Yjg1ZCIsImV4dCI6eyJkZXZJZCI6IkZDQUExQTdCLUI5RjUtNDJEOC04RDk5LTdDOUMxMkFEREQwNyJ9fQ.KWYovXUTSr7zN-lG5oTE849O9nr697Tl8zakkyUffHKDsT9eZ3DBguBKx5jH4kMYCfCWbhWR1wvNAPvqaq2h-QEBfjH296ZCv6MWo-OeSV4PWqJGmSHlAvxvveDNR82fyyvU2dWPrNiR24Zqk7mySDuOBw8O-zaVEsofP64iWCJ1Wyh2AMsoEymHQv6rx9mkpfcIG0ieoLLMBZpgpoi1PknO3GfLVg9xppEIaUYD7G8MEOvMEHIpSK9m34xfDbkx0Ae5vXPd9q-pv3s0vl6s206O-nUQ49HWapF7J8fn_VFNlfUakQZctMgMhPHqCMZBXlJyrnCUCHBZF5QvY2V4iQ')
const eventList = ref([
  {title: '測試活動', router: '/testPage', type: 'app'}
])

const commonStore = useCommonStore()
type eventItem = {
  title: string;
  router: string;
  type: string;
} 
const saveToken = (item: eventItem) => {
  if(item.type === 'app'){
    commonStore.token = token.value
  }
}
</script>
<style lang="scss" scoped>
.list {
  width: 100%;
  height: 100vh;
  background-color: #2eb6c7;
  color: #fff;
  display: flex;
  flex-direction: column;
}
</style>