<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const routerData = reactive([
  { linkName: '关于ＷＡＧ', link: '/about' },
  { linkName: '服务项目', link: '/service' },
  { linkName: '成功案例', link: '/example' },
  { linkName: '营销博客', link: '/blog' },
  { linkName: '招聘资讯', link: '/info' },
  { linkName: '联系我们', link: '/contact' }
])
</script>
<template>
  <div class="flex pt-[22px] pl-[90px] pr-[90px] pb-[22px] justify-between items-center">
    <div class="flex items-end">
      <img src="@/assets/icon/logo2.png" alt="logo" class="w-[65px]">
      <span class="font-bold text-xl text-main-yellow">流量专家</span>
    </div>
    <div class="flex gap-[32px] text-text-black">
      <NuxtLink v-for="(link, idx) in routerData" :key="idx + 'router'" :to="link.link">{{ link.linkName }}</NuxtLink>
    </div>
    <div class="rounded-[40px] w-[189px] h-[41px] bg-main-yellow flex items-center justify-center text-white font-normal">
      <span>领取Demo</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  
</style>
