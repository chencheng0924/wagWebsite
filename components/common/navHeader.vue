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
const showHamburger = ref(false)
</script>
<template>
  <div class="flex pt-[22px] pl-[90px] pr-[90px] pb-[22px] justify-between items-center laptop:justify-center tablet:justify-center laptop:pt-[10px] laptop:pb-[10px] tablet:pt-[10px] tablet:pb-[10px]">
    <div class="flex items-end">
      <img src="@/assets/icon/logo2.png" alt="logo" class="w-[65px]">
      <span class="font-bold text-xl text-main-yellow">流量专家</span>
    </div>
    <div class="flex gap-[32px] text-text-black laptop:hidden tablet:hidden">
      <NuxtLink v-for="(link, idx) in routerData" :key="idx + 'router'" :to="link.link">{{ link.linkName }}</NuxtLink>
    </div>
    <div class="rounded-[40px] w-[189px] h-[41px] bg-main-yellow flex items-center justify-center text-white font-normal laptop:hidden tablet:hidden">
      <span>领取Demo</span>
    </div>
    <img src="@/assets/img/menu.svg" class="fixed top-[16px] right-4 cursor-pointer desktop:hidden" @click="showHamburger = true">
  </div>
  <Transition name="slide-fade">
    <div class="w-full h-full fixed top-0 left-0 bg-white z-50 flex items-center pt-[75px] flex-col" v-if="showHamburger">
      <img src="@/assets/img/close.svg" class="fixed top-[16px] right-4 cursor-pointer desktop:hidden" @click="showHamburger = false">
      <div class="flex gap-[24px] text-text-black flex-col items-center">
        <NuxtLink v-for="(link, idx) in routerData" :key="idx + 'router'" :to="link.link">{{ link.linkName }}</NuxtLink>
      </div>
      <div class="rounded-[40px] w-[111px] h-[41px] bg-main-yellow flex items-center justify-center text-white font-normal mt-[24px]">
        <span>专业谘询</span>
      </div>
    </div>
  </Transition>
</template>
<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
