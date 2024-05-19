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
<div class="w-full bg-black desktop:pl-[106px] desktop:pr-[170px] flex justify-evenly laptop:justify-center tablet:justify-center laptop:pt-[10px] tablet:pt-[10px] laptop:pl-[10px] laptop:pr-[10px] tablet:pl-[10px] tablet:pr-[10px]">
  <div class="pt-[69px] pb-[38px] flex flex-col w-[33%] justify-center text-white laptop:hidden tablet:hidden">
    <span class="font-bold text-[32px]">WAG流量专家</span>
    <span class="mt-[47px]">WAG流量專家始于纽约，</span>
    <span class="mt-[20px]">服务于全球各地超过500+华商</span>
    <div class="flex gap-[9px] mt-[26px]">
      <img src="@/assets/icon/fb.svg" alt="fblogo">
      <img src="@/assets/icon/ig.svg" alt="iglogo">
    </div>
    <div class="text-text-gray mt-[47px] text-[13px]">@2023 WAG MARKETING INC. ALL RIGHTS RESERVED.</div>
  </div>
  <div class="pt-[69px] pb-[38px] flex flex-col justify-center items-center w-[33%] border-x-[1px] border-white border-solid text-white gap-[24px] laptop:hidden tablet:hidden">
    <NuxtLink v-for="(link, idx) in routerData" :key="idx + 'router'" :to="link.link">{{ link.linkName }}</NuxtLink>
  </div>
  <div class="pt-[69px] pb-[38px] flex justify-center w-[33%] desktop:gap-[104px]">
    <div class="flex flex-col justify-start laptop:items-center tablet:items-center">
      <img src="@/assets/img/logo2.svg" alt="logo" class="w-[126px] desktop:mb-[15px]">
      <span class="mt-[7px] text-white desktop:hidden">WAG流量專家始于纽约，服务于全球各地</span>
      <span class="text-white laptop:mb-[22px] tablet:mb-[22px] desktop:hidden">超过500+华商!</span>
      <span v-for="(data, idx) in info" :key="idx + 'data'" class="text-white leading-loose my-1">{{ data }}</span>
      <div class="flex gap-[9px] mt-[26px] desktop:hidden">
        <img src="@/assets/icon/fb.svg" alt="fblogo">
        <img src="@/assets/icon/ig.svg" alt="iglogo">
      </div>
      <div class="text-text-gray mt-[20px] text-[13px] desktop:hidden text-center">@2023 WAG MARKETING INC. ALL RIGHTS RESERVED.</div>
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>
  
</style>
