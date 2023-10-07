<template>
  <div class="wrapper">
    <div class="banner">
      <img src="../assets/icon/logo2.png" alt="">
      <div class="subtitle">全球商家信任首選NO.1</div>
      <div class="text">服务于全球各地超过500+华商，忠誠、專注、用心，贏得各行商家信任，一站式的线上营销服务帮您解除营销管理烦恼，开拓市场引流量至浅在客户群体，高口碑建立带起客户100%好评 ！</div>
    </div>
    <div class="featureList">
      <div class="featureItem" v-for="(item, index) in featureItem" :key="index">
        <img src="../assets/icon/feature.png" alt="">
        <div v-html="item.text" />
      </div>
    </div>
    <div class="serviceContainer">
      <div class="subtitle">服務項目</div>
      <div class="serviceList">
        <div class="serviceItem" v-for="(item, index) in serviceItem" :key="index">
          <img class="img1" :src='item.img' alt="">
          <div class="title">{{ item.title }}</div>
          <div v-html="item.text" />
          <img class="img2" src="../assets/icon/arrowRightRed.png" alt="">
        </div>
      </div>
    </div>
    <div class="company">
      <img v-for="(item, index) in companyList" :key="index" :src="item.img" alt="">
    </div>
    <div class="consult">
      <div class="section">
        <div class="subtitle">
          <div>全球超过500+公司信任</div>
          <div><span>一站式</span>推广服务+公司信任</div>
        </div>
        <div class="text">WAG流量專家始于美国纽约，服务于全球各地超过500+华商，一站式的线上营销服务帮您解除管理烦恼，透過最新的數位行銷技術，內部科技開發，建立品牌管理策略，在數位市場上協助客戶擴展業務、提升品牌形象，开拓市场及引流至浅在客户群体，高口碑建立带起客户100%好评 ！</div>
        <div class="dotText">
          <div v-for="(item, index) in consultTextList" :key="index"> 
            <img src="../assets/icon/dotPink.png" alt="">
            {{ item.text }}
          </div>
        </div>
        <div class="button">
          专业谘询
        </div>
      </div>
      <div class="img"><img src="../assets/img/indexConsult.jpg" alt=""></div>
    </div>
    <div class="glow">
      <div class="title1">WORLDWIDE AND GLOW</div>
      <div class="title2">我们一起携手合作，让您的品牌曝光率不断提升！</div>
      <div class="title3">了解为什么超過500+家企业选择 WAG</div>
      <div class="btnList">
        <div class="button1">
          专业谘询
        </div>
        <div class="button2">
          专业谘询
        </div>
      </div>
    </div>
  </div>
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
const serviceItem = reactive([
  {title: '社群运营管理', text:'社交平台运营维护<br>24小时内差评回覆', img:'Img/icon/Shop.png'},
  {title: '关键字广告投放', text:'新媒体广告曝光<br>精准受重分析 多方面曝光', img:'Img/icon/Chart.png'},
  {title: '邮件＆简讯营销', text:'活動構想<br>数据分析报告', img:'Img/icon/Message.png'},
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
  {text:'一站式从策划至执行服务'},
  {text:'客制化独特和高成效营销方案'},
  {text:'配有多个24小时丰富营销经验技术'},
  {text:'嵌入式营销团队，与您携手精准推广品牌'}
])
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
    height: 676px;
    background-size: cover;
    background-image: linear-gradient(rgba(8, 26, 133, 0.8),rgba(7, 30, 131, 0.8)), url('../assets/img/indexBanner.jpg');
    opacity: .9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    img{
      width: 200px;
      height: 130px;
      object-fit: contain;
      margin-bottom: 20px;
    }
    .subtitle{
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .text{
      font-size: 20px;
      width: 623px;
      text-align: center;
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
  .glow{
    padding: 100px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background-color: #b25600;
    .title1{
      color: #d8aa7f;
      font-size: 36px;
    }
    .title2{
      color: #fff;
      font-size: 32px;
      font-weight: bold;
    }
    .title3{
      color: #fff;
      font-size: 24px;
    }
    .btnList{
      display: flex;
      gap: 20px;
      margin-top: 30px;
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
        width: 111px;
        height: 41px;
        text-align: center;
        padding: 16px 24px;
        border-radius: 50px;
        font-size: 15px;
        color: #d96800;
        cursor: pointer;
      }
    }
  }
}
</style>