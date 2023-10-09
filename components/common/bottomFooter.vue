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
const info = reactive([
  '美国电话 ❘ +1 929-545-4470', '邮箱 ❘ contact@wag.marketing', '微信 ❘ wagmarketing', '小红书 | WAG品牌营销'
])
</script>
<template>
<div class="w-full bg-black pt-[69px] pb-[38px] pl-[106px] pr-[170px] flex justify-between">
  <div class="flex flex-col text-white">
    <span class="font-bold text-[32px]">WAG流量专家</span>
    <span class="mt-[47px]">WAG流量專家始于纽约，</span>
    <span class="mt-[20px]">服务于全球各地超过500+华商</span>
    <div class="flex gap-[9px] mt-[26px]">
      <img src="@/assets/icon/fb.svg" alt="fblogo">
      <img src="@/assets/icon/ig.svg" alt="iglogo">
    </div>
    <div class="text-text-gray mt-[47px] text-[13px]">@2023 WAG MARKETING INC. ALL RIGHTS RESERVED.</div>
  </div>
  <div class="flex gap-[104px]">
    <div class="flex flex-col text-white gap-[24px]">
      <NuxtLink v-for="(link, idx) in routerData" :key="idx + 'router'" :to="link.link">{{ link.linkName }}</NuxtLink>
    </div>
    <div class="flex flex-col justify-start">
      <img src="@/assets/icon/logo2.png" alt="logo" class="w-[126px] mb-[15px]">
      <span v-for="(data, idx) in info" :key="idx + 'data'" class="text-white leading-loose">{{ data }}</span>
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>
  
</style>
