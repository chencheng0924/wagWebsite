<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const emit = defineEmits(['update:backStep'])
const props = defineProps({
  ifBack: {
    type: Boolean,
    required: true
  },
  backTarget: {
    type: String,
    required: false
  },
  backStep: {
    type: Number,
    required: false
  },
  backStatus: {
    type: Boolean,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  isRedirect: {
    type: Boolean,
    required: true
  }
})
const back = (url, step, status) => {
  if (url) {
    if(status){
      window.location.href = url
    } else {
      router.push(url)
    }
  } else if(step) {
    step = step - 1
    emit('update:backStep', step)
  } else {
    router.back()
  }
}
</script>
<template>
  <div class="navHeader" :class="{ isRedirect: props.isRedirect }">
    <div class="navHeader--inside">
      <div class="navHeader--inside--back" @click="back(backTarget, backStep, backStatus)">
        <img src="@/assets/arrowwhite.svg" v-if="props.ifBack">
      </div>
      <div class="navHeader--inside--title">
        <span>{{ props.title }}</span>
      </div>
      <div class="navHeader--inside--leave"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  :root {
    --safe-area-inset-top: 0px; 
    @supports (top: constant(safe-area-inset-top)){
        --safe-area-inset-top: constant(safe-area-inset-top);    
    }
    @supports (top: env(safe-area-inset-top)){
        --safe-area-inset-top: env(safe-area-inset-top);         
    }
  }
  .navHeader {
    position: fixed; 
    top: 0;
    background-color: #2eb6c7;
    width: 100vw;
    z-index: 100000;
    padding-top: calc(var(--safe-area-inset-top) + 5px);
    padding-bottom: 5px;
    // padding-top: var(--safe-area-inset-top);
    max-height: 45px;
    // height: 56px;
    // border: 1px solid red;
    .navHeader--inside {
      max-height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      // height: 80px;
      // height: 45.5px;
      padding-left: 20px;
      padding-right: 20px;
      // padding-top: var(--safe-area-inset-top);
      // padding-top: calc(var(--safe-area-inset-top) + 8px);
      // padding-bottom: 8px;
      // padding-top: unquote(var(--safe-area-inset-top));
      .navHeader--inside--back {
        width: 35px;
        display: flex;
        align-items: center;
        >img {
          width: 24px;
          transform: rotate(180deg);
        }
      }
      .navHeader--inside--title {
        width: 280px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: center;
        color: #FFFFFF;
        font-weight: 500;
        font-size: 16px;
        font-stretch: normal;
        font-style: normal;
        font-family: PingFangTC;
      }
      .navHeader--inside--leave {
        width: 30px;
        height: 30px;
      }
    }
  }
  .isRedirect {
    display: none;
  }
</style>
<!-- <style lang="less" scoped>
  :root {
    --safe-area-inset-top   : 0px;
    @supports (top: constant(safe-area-inset-top)){
        --safe-area-inset-top   : constant(safe-area-inset-top);    
    }
    @supports (top: env(safe-area-inset-top)){
        --safe-area-inset-top   : env(safe-area-inset-top);         
    }
  }
  .navHeader {
    &.isRedirect {
      display: none;
    }
    position: fixed; 
    top: 0;
    background-color: #2eb6c7;
    width: 100vw;
    z-index: 100000;
    max-height: 46px;
    &--inside {
      display: flex;
      justify-content: space-between;
      align-items: center;
      // height: 80px;
      // height: 45.5px;
      padding-left: 20px;
      padding-right: 20px;
      // padding-top: var(--safe-area-inset-top);
      padding-top: calc(var(--safe-area-inset-top) + 8px);
      padding-bottom: 8px;
      // padding-top: unquote(var(--safe-area-inset-top));
      &--back {
        width: 35px;
        transform: translateY(2px);
        >img {
          width: 30px;
          transform: rotate(180deg);
        }
      }
      &--title {
        width: 280px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: center;
        color: #FFFFFF;
        font-weight: 500;
        font-size: 16px;
        font-stretch: normal;
        font-style: normal;
        font-family: PingFangTC;
      }
      &--leave {
        width: 30px;
        height: 30px;
      }
    }
  }
</style> -->
