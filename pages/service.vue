<template>
  <div class="wrapper">
    <div class="banner">
      <span>WAG流量专家致力于提供高效的跨渠道在线流量转化服务。我们精通数字传媒工具，能够帮助您的品牌在网络世界中脱颖而出。每个项目配备专业团队，提供综合策划、为您量身定制最佳解决方案，全面推广您的品牌，确保您的品牌在竞争激烈的市场中取得卓越成果。</span>
    </div>
    <div class="content">
      <div class="title">服務項目</div>
      <div v-for="(item, index) in dataList" :key="index" class="contentItem">
        <img :src="item.img" alt="" v-if="index % 2 !== 0">
        <div class="textItem">
          <div class="textTitle">{{ item.title }}</div>
          <div class="text">{{ item.context }}</div>
          <button class="button">了解更多</button>
        </div>
        <img :src="item.img" alt="" v-if="index % 2 === 0">
      </div>
    </div>
    <div class="form">
      <img src="../assets/img/service/img1.png" alt="">
      <el-form
        :model="tableForm"
        ref="ruleFormRef"
        :rules="rules"
        require-asterisk-position="right">
        <div class="title">想要拓展您的生意吗？</div>
        <div class="text">
          <span>随着越来越多中小型企业希望融入网络营销，很多人困惑于如何着手。除了各种社交媒体平台，拥有一个高效的网站是您网络营销的核心资产。</span>
          <hr>
          <span>让我们为您提供一次免费基础咨询，为您指明下一步的方向。我们的专业团队将为您量身定制最适合的网络营销策略，助您实现业务的持续增长。</span>
        </div>
        <el-form-item prop="name">
          <el-input clearable v-model="tableForm.name" size="default" placeholder="姓名"/>
        </el-form-item>
        <div class="chooseList">
          <el-form-item prop="phone">
            <el-input clearable v-model="tableForm.phone" size="default" placeholder="联络电话"/>
          </el-form-item>
          <el-form-item prop="email">
            <el-input clearable v-model="tableForm.email" size="default" placeholder="电子邮件"/>
          </el-form-item>
        </div>
        <el-form-item>
          <div>感兴趣产品</div>
          <el-checkbox-group prop="product" v-model="tableForm.product" size="large">
            <el-checkbox v-for="(item, index) in checkboxList" :key="index" :label="item"/>
          </el-checkbox-group>
        </el-form-item>
        <div class="submitBtn" @click="submitForm(ruleFormRef)">提交</div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { FormInstance, FormRules } from 'element-plus'
  const ruleFormRef = ref<FormInstance>()
  const dataList = reactive([
  {title: '社群平台运营管理', context: '熟悉并掌握了拥有数十亿用户的社交媒体平台，包括Facebook、Instagram、Yelp和Google+等。通过深入分析您潜在客户的活动，制定精准的定位营销策略，以扩大您在潜在客户生活圈内的影响力，与受众群体和粉丝保持密切互动，建立牢固的关系。致力于全面的社交媒体营销和管理，目标是帮助与潜在客户建立持久的连接。', img: '/img/service/img1.png'},
  {title: '在地商家推广计划', context: '熟悉并掌握了拥有数十亿用户的社交媒体平台，包括Facebook、Instagram、Yelp和Google+等。通过深入分析您潜在客户的活动，制定精准的定位营销策略，以扩大您在潜在客户生活圈内的影响力，与受众群体和粉丝保持密切互动，建立牢固的关系。致力于全面的社交媒体营销和管理，目标是帮助与潜在客户建立持久的连接。', img: '/img/service/img2.png'},
  {title: '电子邮件 & 短信营销', context: '熟悉并掌握了拥有数十亿用户的社交媒体平台，包括Facebook、Instagram、Yelp和Google+等。通过深入分析您潜在客户的活动，制定精准的定位营销策略，以扩大您在潜在客户生活圈内的影响力，与受众群体和粉丝保持密切互动，建立牢固的关系。致力于全面的社交媒体营销和管理，目标是帮助与潜在客户建立持久的连接。', img: '/img/service/img3.png'},
  {title: '付费广告投放', context: '熟悉并掌握了拥有数十亿用户的社交媒体平台，包括Facebook、Instagram、Yelp和Google+等。通过深入分析您潜在客户的活动，制定精准的定位营销策略，以扩大您在潜在客户生活圈内的影响力，与受众群体和粉丝保持密切互动，建立牢固的关系。致力于全面的社交媒体营销和管理，目标是帮助与潜在客户建立持久的连接。', img: '/img/service/img4.png'},
  {title: '网页设计开发维护', context: '熟悉并掌握了拥有数十亿用户的社交媒体平台，包括Facebook、Instagram、Yelp和Google+等。通过深入分析您潜在客户的活动，制定精准的定位营销策略，以扩大您在潜在客户生活圈内的影响力，与受众群体和粉丝保持密切互动，建立牢固的关系。致力于全面的社交媒体营销和管理，目标是帮助与潜在客户建立持久的连接。', img: '/img/service/img5.png'},
  {title: '媒体公关服务', context: '熟悉并掌握了拥有数十亿用户的社交媒体平台，包括Facebook、Instagram、Yelp和Google+等。通过深入分析您潜在客户的活动，制定精准的定位营销策略，以扩大您在潜在客户生活圈内的影响力，与受众群体和粉丝保持密切互动，建立牢固的关系。致力于全面的社交媒体营销和管理，目标是帮助与潜在客户建立持久的连接。', img: '/img/service/img6.png'},
  {title: '小红书 & TIKTOK运营', context: '熟悉并掌握了拥有数十亿用户的社交媒体平台，包括Facebook、Instagram、Yelp和Google+等。通过深入分析您潜在客户的活动，制定精准的定位营销策略，以扩大您在潜在客户生活圈内的影响力，与受众群体和粉丝保持密切互动，建立牢固的关系。致力于全面的社交媒体营销和管理，目标是帮助与潜在客户建立持久的连接。', img: '/img/service/img7.png'},
  ])
  const checkboxList = ref([
    '在地商家推广计划', '电子邮件 & 短信营销', '社群平台运营', '付费广告投放', '网站设计开发维护', '小红书＆Tiktok运营', '媒体公关服务'
  ])
  const tableForm = ref({
    name: '',
    phone: '',
    email: '',
    product: []
  })
  const rules = reactive<FormRules<typeof tableForm>>({
    name: [{ required: true, message: '請輸入姓名', trigger: 'blur' }],
    phone: [{ required: true, message: '請輸入联络电话', trigger: 'blur' }],
    email: [{ required: true, message: '請輸入电子邮件', trigger: 'blur' }],
    product: [{ required: true, message: '請選擇產品', trigger: 'blur' }],
  })
  const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>  

<style scoped lang="scss">
.wrapper{
  min-height: calc(100vh - 390px);
  padding-top: 90px;
  .banner{
    height: 324px;
    background-color: #efeeff;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
      width: 60%;
      text-align: center;
    }
  }
  .content{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title{
      margin-top: 50px;
      font-weight: bold;
      font-size: 24px;
    }
    .contentItem{
      display: flex;
      gap: 50px;
      width: 70%;
      margin: 70px 0;
      .textItem{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        .textTitle{
          font-size: 20px;
          font-weight: bold;
          &::after{
            margin-top: 20px;
            width: 50%;
            height: 1px;
            content: '';
            background-color: #333;
            display: block;
          }
        }
        .text{
          line-height: 40px;
        }
        .button{
          width: 100px;
          background-color: #ff479f;
          border-radius: 20px;
          color: #fff;
          padding: 5px 10px;
        }
      }
    }
  }
  .form{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    img{
      width: 35%;
      height: 450px;
      justify-self: flex-end;
    }
    :deep(.el-form){
      width: 50%;
      height: 100%;
      background-color: #efeeff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title{
        font-size: 20px;
        font-weight: bold;
      }
      .text{
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin: 20px 0;
      }
      .el-form-item{
        width: 80%;
        border-radius: 100px;
        display: flex;
        --el-border-radius-base: 100px;
        --el-fill-color-blank: #efeeff;
        --el-border-color: #888888;
        --el-color-primary: #B15601;
        .el-checkbox__inner{
          border-color: #333;
        }
      }
      .chooseList{
        display: flex;
        gap: 10px;
        width: 80%;
      }
      .submitBtn{
        background-color: #E8750A;
        color: #fff;
        padding: 5px 25px;
        border-radius: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>