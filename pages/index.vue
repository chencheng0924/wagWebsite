<template>
  <div class="wrapper pt-[64px]">
    <div class="banner pt-[6rem] bg-[#e7750a]">
      <div class="flex flex-col justify-center items-center mb-5">
        <img class="mb-5" src="../assets/img/logo.svg" alt="wag">
        <div class="text-black font-bold text-[36px]">全球商家信任首選NO.1</div>
        <div class="text-black font-bold text-[36px]">线上行销谘询公司</div>
      </div>
      <div class="w-[65%] font-normal text-center text-[20px]">服务于全球各地超过500+华商，忠誠、專注、用心，贏得各行商家信任，一站式的线上营销服务帮您解除营销管理烦恼，开拓市场引流量至浅在客户群体，高口碑建立带起客户100%好评 ！</div>
      <div class="flex justify-center flex-wrap py-[50px] px-0 bg-black mt-10">
        <div class="flex justify-center w-[33%] my-5" v-for="(item, index) in featureItemPhone" :key="index">
          <img class="!w-[36px] !h-[36px]" src="@/assets/icon/checked.png" alt="wag">
          <div class="w-[150px] whitespace-nowrap" v-html="item.text" />
        </div>
      </div>
    </div>
    <div class="w-full h-[100px] bg-black"></div>
    <div class="flex h-[45rem] border-b-[2px] border-black border-solid">
      <div class="w-[50%] pr-[5rem] bg-[#e7750a] flex justify-end items-center border-r-[2px] border-black border-solid">
        <div class="flex flex-col gap-4">
          <div class="text-[32px] font-bold">WHAT WE DO</div>
          <div class="text-[24px] font-semibold">策略性行销服务项目</div>
          <div class="text-[24px] font-semibold">全方位配合您的需要</div>
        </div>
      </div>
      <div class="w-[50%] bg-[#efede4] flex flex-col items-start justify-center">
        <div class="flex flex-col justify-center pl-[5rem] gap-3">
          <div v-for="(item, index) in serviceItem" :key="index" class="flex justify-between items-center bg-black px-5 h-[73px]">
            <div class="w-[230px] text-white">{{ item.title }}</div>
            <img :src="item.img" alt="">
            <div>{{  }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="company bg-[#efede4]">
      <img v-for="(item, index) in companyList" :key="index" :src="item.img" alt="">
    </div>
    <div class="bg-black flex flex-col justify-center items-center py-[8rem]">
      <div class="text-white text-[32px] font-bold">为何选择WAG做为您的行销顾问?</div>
      <div class="flex gap-5 py-[5rem]">
        <div v-for="(item, index) in consultTextList" :key="index" class="text-black bg-[#e7750a] relative w-[21rem] h-[15rem] flex flex-col justify-center items-center">
          <div class="absolute top-[-25%] left-[42%] text-white font-bold text-[65px]">{{ index + 1 }}</div>
          <div class="text-[22px] font-bold">{{ item.text }}</div>
          <div class="flex flex-col justify-center items-center my-3 gap-1">
            <div v-for="(item2, index2) in item.content" :key="index2" class="text-[18px]">{{ item2 }}</div>
          </div>
        </div>
      </div>
      <div class="text-white border-[2px] border-solid border-white py-2 px-4">立即免费谘询</div>
    </div>
    <div class="h-[22rem] bg-[#e7750a] border-b-[2px] border-black border-solid flex flex-col justify-center items-center">
      <div class="flex justify-center items-center w-[75%]">
        <div v-for="(item, index) in conutList" :key="index" class="w-full flex flex-col justify-center items-center gap-10">
          <div class="text-white font-bold text-[48px]">{{ item.conut }}</div>
          <div class="text-white font-medium text-[24px]">{{ item.text }}</div>
        </div>
      </div>
      <div class="w-[75%] h-[2px] mt-[3rem] bg-white relative">
        <div v-for="(item, index) in 4" class="absolute top-[-25px] w-[2px] h-[25px] bg-white" :style="{left: `${33.3 * index}%`}"></div>
      </div>
    </div>
    <div class="consultPhone">
      <img src="../assets/img/indexConsult.jpg" alt="">
      <div class="text1">营销</div>
      <div class="text2">销售</div>
      <div class="text3">设计</div>
    </div>
    <div class="w-full pt-[103px] pb-[131px] desktop:bg-bg-purple flex flex-col items-center">
      <span class="text-black font-semibold text-2xl mb-[30px]">适用于各行业的解决方案</span>
      <div class="bg-white rounded-[50px] py-[6px] px-[10px] flex gap-[12px] border-black border-2 laptop:gap-[4px] tablet:gap-[2px] laptop:text-[8px] tablet:text-[8px] whitespace-nowrap">
        <div @click="tabChange(idx)" v-for="(tab, idx) in tabs" :key="idx + 'tab'" class="px-[28px] py-[10px] cursor-pointer laptop:px-[10px] tablet:px-[10px] tablet:py-[5px] laptop:py-[5px]" :class="{'bg-bg-tab': tab.active, 'rounded-[40px]': tab.active}">{{ tab.tab }}</div>
      </div>
      <div class="mt-[85px] bg-white flex rounded-[50px] laptop:bg-bg-purple tablet:bg-bg-purple laptop:w-[305px] tablet:w-[305px] laptop:h-[181px] tablet:h-[181px]">
        <img :src="commonStore.useAsset(`picc${nowIdx}.png`)" alt="" class="object-cover rounded-[50px] laptop:w-[147px] tablet:w-[147px] laptop:h-[181px] tablet:h-[181px]">
        <div class="px-[73px] py-[105px] flex flex-col items-start laptop:px-[0px] tablet:px-[0px] laptop:py-[0px] tablet:py-[0px] laptop:items-center tablet:items-center">
          <div class="flex">
            <img src="@/assets/img/star.svg" alt="star" v-for="i in 5" class="laptop:w-[14px] tablet:w-[14px]">
          </div>
          <div class="w-[300px] mt-[30px] leading-10 font-semibold laptop:text-[8px] tablet:text-[8px] laptop:w-[139px] tablet:w-[139px] laptop:mt-[5px] tablet:mt-[5px]">{{ tabs[nowIdx].txt }}</div>
          <div class="bg-bg-yellow px-[10px] mt-[20px] laptop:mt-[5px] tablet:mt-[5px] laptop:text-[8px] tablet:text-[8px]">{{ tabs[nowIdx].type }}</div>
          <div v-if="tabs[nowIdx].use.length == 0" class="flex mt-[36px] gap-[52px]">
            <div class="flex flex-col items-center laptop:text-[8px] tablet:text-[8px]">
              <span>好评率</span>
              <span class="font-semibold text-[32px] laptop:text-[8px] tablet:text-[8px]">＋22%</span>
            </div>
            <div class="flex flex-col items-center laptop:text-[8px] tablet:text-[8px]">
              <span>新客率</span>
              <span class="font-semibold text-[32px] laptop:text-[8px] tablet:text-[8px]">＋47%</span>
            </div>
          </div>
          <div class="flex mt-[36px] gap-[24px]" v-else>
            <span class="font-semibold text-[14px]">使用产品</span>
            <div class="flex flex-col gap-[12px]">
              <div v-for="use in tabs[nowIdx].use" class="bg-bg-blue text-white px-[10px]">{{ use }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="glow">
      <div class="title1">了解为什么超過500+家企业选择 WAG</div>
      <div class="btnList">
        <div class="button2">
          专业谘询
        </div>
        <div class="button2">
          专业谘询
        </div>
      </div>
      <div class="title3">WORLDWIDE AND GLOW</div>
      <div class="title2">我们一起携手合作，让您的品牌曝光率不断提升！</div>
    </div>
  </div>
  <!-- <Transition name="slide-fade">
    <get-mail v-if="showGetMail" @updateStatus="close()"/>
  </Transition>
  <Transition name="slide-fadetd">
    <div v-if="showGetMailBtn" class="fixed bottom-0 left-[20px] border-2 px-[28px] py-[18px] rounded-[8px] bg-white cursor-pointer" @click="open()">
      FREE Website
    </div>
  </Transition> -->
</template>
<script setup lang="ts">
const commonStore = useCommon()
const featureItem = reactive([
  {text:'3+以上<br>专属客户经理'},
  {text:'24小時全年无休<br>服务团队'},
  {text:'品牌出海<br>最有效全平台推广'},
  {text:'年轻创意团队<br>专业在美华人'},
  {text:'20+<br>规模性合作伙伴'},
  {text:'多方公关媒体<br>服务资源'},
])
const featureItemPhone = reactive([
  {text:'3+以上专属客户经理'},
  {text:'24小時专业服务团队'},
  {text:'品牌出海最有效全平台推广'},
  {text:'年轻创意团队在美华人'},
  {text:'20+规模性合作伙伴'},
  {text:'多方公关媒体服务资源'},
])
const serviceItem = reactive([
  {title: '社群运营管理', text:'社交平台运营维护<br>24小时内差评回覆', img:'Img/icon/Shop.png'},
  {title: '广告投放', text:'新媒体广告曝光<br>精准受重分析 多方面曝光', img:'Img/icon/Chart.png'},
  {title: '电子邮件 & 短信营销', text:'活動構想<br>数据分析报告', img:'Img/icon/Message.png'},
  {title: '活动策划与地推', text:'邮寄卡片服务<br>专业客户经理', img:'Img/icon/Date.png'},
  {title: '网站设计开发', text:'预约系统页面<br>立即优化管理服务', img:'Img/icon/Shop.png'},
  {title: 'PR公关媒体服务', text:'海外媒体合作关系<br>对接推广资讯', img:'Img/icon/Calendar.png'},
])
const companyList = reactive([
  {img:'Img/company/google.png'},
  {img:'Img/company/yelp.png'},
  {img:'Img/company/fb.png'},
  {img:'Img/company/ig.png'},
  {img:'Img/company/meta.png'},
  {img:'Img/company/maps.png'},
  {img:'Img/company/trip.png'},
])
const consultTextList = reactive([
  {text:'实现可持续性的营收增长', content: ['专业分析后的精准营销策略', '灵活的服务项目搭配', '增加行业竞争优势']},
  {text:'完全值得您信任的专属团队', content: ['24小时在线的客户经理' , '免费谘询的各领域专家', '弹性的合作模式']},
  {text:'减少大量时间与花费成本', content: ['整合多领域专家团队', '总结多年经验减少试错成本', '导入AI科技的行销工具']},
])
const conutList = reactive([
  {text: '总客户数超过', conut: '500+'},
  {text: '行业覆盖超过', conut: '20+'},
  {text: '进行营销企划超过', conut: '645+'},
])
const tabs = reactive([
  { tab: '餐馆', active: true, txt: '“提升季节性淡季客流量的问题，客人回头率提高，增加近4成新客流量”', type: '知名连锁餐厅品牌', use: [] },
  { tab: '奶茶店', active: false, txt: '“提供合适性优惠活动建议以及高效的线上点单网页，增加旧客口碑推广，吸引不少周边新客人”', type: '知名连锁奶茶品牌', use: ['预约系统', '活动策划地推'] },
  { tab: '美甲沙龙', active: false, txt: '“通过高度有针对性的宣传手段，成功触击了超过1200位新客户，为店铺注入了繁忙的人潮，同时也在市场中创造出一波口碑流量”', type: '搜索排行NO.1美甲店', use: ['网页设计', '活动策划地推'] },
  { tab: '按摩', active: false, txt: '“在线展示介紹服务和設施，建立信任和专业形象，吸引客户更容易找到店，增加知名度并建立强大的在线社区，經常与客户分享有关Spa服务、护理和健康建议的内容”', type: '地区热门Spa店', use: ['网页设计', '社群媒体运营'] },
  { tab: '医美', active: false, txt: '“提高和现有客户互动，经常性发宣传促销和特别优惠，以旧客口碑推荐来的新客人比以前高更多”', type: '西岸医美集团', use: ['邮件＆简讯营销', '社群媒体运营'] },
  { tab: '房地产', active: false, txt: '“增加一倍在市场上曝光度和知名度，宣传新项目、特别优惠和房源，成功利用广告来推动我们的业务”', type: '房地产集团', use: ['关键字广告投放', 'PR公关服务'] },
  { tab: '装修建材', active: false, txt: '“媒体平台上互动让我们更了解客户，做针对性广告策略，将信息传达给真正有兴趣的客户”', type: '美东老字号品牌', use: ['关键字广告投放', '社群媒体运营'] },
  { tab: '室内设计', active: false, txt: '“每天都有顾客谘询，触及率提高，准确吸引到正在寻找室内设计服务的客户，完善网页提高客户对我们的品牌的认知”', type: '初创室内设计新品牌', use: ['关键字广告投放', '社群媒体运营', '网站设计维护'] }
])
const nowIdx = ref(0)
const tabChange = (idx: number) => {
  tabs.forEach(el => el.active = false)
  tabs[idx].active = true
  nowIdx.value = idx
}
const showGetMail = ref(false)
const showGetMailBtn = ref(false)
const close = () => {
  showGetMail.value = false
  setTimeout(() => {
    showGetMailBtn.value = true
  }, 300)
}
const open = () => {
  showGetMail.value = true
  showGetMailBtn.value = false
}
onMounted(() => {
  setTimeout(() => {
    showGetMail.value = true
  }, 1100)
})
// type eventItem = {
//   title: string;
//   router: string;
//   type: string;
// } 
// const saveToken = (item: eventItem) => {
//   if(item.type === 'app'){
//     commonStore.token = token.value
//   }
// }
</script>
<style lang="scss" scoped>
.wrapper{
  width: 100%;

  .banner{
    width: 100%;
    // background-size: cover;
    // background-image: linear-gradient(rgba(8, 26, 133, 0.8),rgba(7, 30, 131, 0.8)), url('../assets/img/indexBanner.jpg');
    // opacity: .9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    img{
      width: 320px;
      height: 130px;
    }
    .subtitle{
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
  .featureList {
    display: flex;
    justify-content: space-evenly;
    margin: 70px 0;
    .featureItem{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 5px;
      div{
        font-weight: 600;
      }
    }
  }
  .serviceContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F1F0F9;
    padding: 70px 0;
    .subtitle{
      font-weight: bold;
      margin-bottom: 30px;
    }
    .serviceList{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      gap: 60px 20px;
      .serviceItem{
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #fff;
        box-shadow:0px 2px 3px rgb(70, 69, 69);
        border-radius: 10px;
        padding: 16px;
        cursor: pointer;
        .title{
          font-size: 19px;
          font-weight: bold;
          margin-bottom: 5px;
        }
        div{
          font-weight: 600;
        }
        .img1{
          width: 43px;
          height: 43px;
          object-fit: cover;
          align-self: flex-start;
        }
        .placeImg{
          display: none;
        }
        .img2{
          align-self: flex-end;
        }
      }
    }
  }
  .company{
    display: flex;
    padding: 32px 24px;
    img{
      object-fit: contain;
      width: 14%;
      height: 60px;
    }
  }
  .consult{
    display: flex;
    justify-content: space-between;
    padding: 70px 24px;
    background-color: #F6F6F6;
    .section{
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 30px;
      .subtitle{
        color: #1B18A3;
        font-size: 24px;
        font-weight: bold;
        span{
          font-size: 32px;
        }
      }
      .text{
        font-weight: bold;
        text-shadow: 1px 1px 4px rgb(19, 19, 19);
      }
      .dotText{
        display: flex;
        flex-direction: column;
        gap: 15px;
        div{
          display: flex;
          gap: 10px;
        }
      }
      .button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #d96800;
        width: 111px;
        height: 41px;
        text-align: center;
        padding: 16px 24px;
        border-radius: 50px;
        font-size: 15px;
        color: #fff;
        cursor: pointer;
      }
    }
    .img{
      width: 50%;
      display: flex;
      align-items: center;
    }
  }
  .consultPhone{
    display: none;
  }
  .glow{
    padding: 100px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background-color: #b25600;
    .title1{
      font-size: 32px;
    }
    .title2{
      font-weight: bold;
      font-size: 32px;
    }
    .title3{
      font-size: 36px;
    }
    .btnList{
      display: flex;
      gap: 20px;
      margin-top: 10px;
      .button1{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #d96800;
        width: 111px;
        height: 41px;
        text-align: center;
        padding: 16px 24px;
        border-radius: 50px;
        font-size: 15px;
        color: #fff;
        cursor: pointer;
      }
      .button2{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        width: 184px;
        height: 72px;
        text-align: center;
        padding: 16px 24px;
        border-radius: 50px;
        font-size: 15px;
        border: 1px solid black;
        cursor: pointer;
      }
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fadetd-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
.slide-fadetd-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fadetd-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fadetd-enter-from,
.slide-fadetd-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

@media screen and (max-width: 420px) { 
  .wrapper{
    .banner{
      height: 345px;
      padding: 16px 24px;
      >img{
        display: none;
      }
      .subtitle{
        font-size: 14px;
        font-weight: normal;
      }
      .text{
        font-size: 8px;
        width: 100%;
      }
    }
    .featureList{
      display: none;
    }
    .serviceContainer{
      padding: 30px 0;
      background-color: #ffffff;
      .serviceList{
        padding: 0 16px ;
        .serviceItem{
          width: 28%;
          height: 100px;
          background-color: #efeeff;
          padding: 5px;
          .img1{
            display: none;
          }
          .placeImg{
            display: block;
            align-self: flex-start;
          }
          .img2{
            width: 20px;
            height: 20px;
            margin-top: 5px;
          }
          div, .title{
            font-size: 8px;
          }
        }
      }
    }
    .company{
      padding: 0 5px 20px;
    }
    .consult{
      display: none;
    }
    .consultPhone{
      display: block;
      position: relative;
      img{
        width: 100%;
        height: 100%;
      }
      .text1{
        position: absolute;
        top: -10px;
        left: 60%;
        background-color: #ff479f;
        color: #fff;
        padding: 5px 20px;
        font-size: 10px;
      }
      .text2{
        position: absolute;
        top: 55%;
        left: 35%;
        background-color: #fdf300;
        padding: 5px 20px;
        font-size: 10px;
      }
      .text3{
        position: absolute;
        bottom: -10px;
        left: 70%;
        background-color: #e8750a;
        color: #fff;
        padding: 5px 20px;
        font-size: 10px;
      }
    }
    .glow{
      padding: 50px 24px;
      .title1{
        font-size: 12px;
        font-weight: normal;
        margin: 20px 0;
      }
      .title2, .title3{
        font-size: 12px;
      }
    }
  }
}
@media screen and (min-width: 950px) and (max-width: 1130px) { 
    /* STYLES HERE */
}
@media screen and (min-width: 1131px) { 
    /* STYLES HERE */
}
</style>