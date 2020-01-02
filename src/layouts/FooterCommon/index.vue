<template>
  <div class="footer-common">
    <!-- 悬浮球 -->
    <!-- 我是底部 -->
    <div class="footer-link">
      <div class="link-item" @click.stop="goRouter(item)" v-for="(item, index) in footerLinkList" :key="index">
        {{item.title}}
      </div>
    </div>
    <div class="footer-info">
      <div class="erweima">
        <div class="erweima-icon">
          <img src="@/assets/images/home/footer_qrcode.png" alt="">
        </div>
        <div class="text">扫码关注销大师</div>
      </div>
      <div class="basic-info">
        <div class="basic-item">
          <span>咨询热线：</span>
          <span v-if="isAndroid" @click.stop="skipUrl" class="footer-phone">400-1622-800</span>
          <a v-else class="footer-phone" href="tel:4001622800">400-1622-800</a>
        </div>
        <div class="basic-item">
          <span>咨询邮箱：</span>
          <span>zx@xiaodashi.com</span>
        </div>
        <div class="basic-item">
          <span>公司地址：</span>
          <span class="address">杭州市绍兴路文源创意产业园6号楼1层</span>
        </div>
      </div>
    </div>
    <div class="footer-copyrigth">
      <div class="copyright-item">Copyright @ 2016-2019</div>
      <div class="copyright-item">杭州星客互联科技有限公司 All Rights Resvered</div>
      <div class="copyright-item">浙ICP备16035416号</div>
    </div>
    <div class="footer-fixed">
      <div class="flex-center" @click="freeUse">
        <div class="free-use">
          <div class="img">
            <img src="@/assets/images/footer/freeuse.png" alt="" srcset="">
          </div>
          <div class="text">
            免费使用
          </div>
        </div>
      </div>
      <div class="flex-center">
        <div class="phone">
          <a class="phone-wrapper" v-if="!isAndroid" href="tel:4001622800"></a>
          <div  class="phone-wrapper" v-else @click.stop="skipUrl"></div>
          <div class="img">
            <img src="@/assets/images/footer/phone.png" alt="" srcset="">
          </div>
          <div class="text">
            电话咨询
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {skipUrl, isAndroid} from '@/utils/util'
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      footerLinkList: [
        {
          title: '首页',
          name: 'home'
        },
        {
          title: '产品',
          name: 'product'
        },
        {
          title: '服务套餐',
          name: 'price'
        },
        {
          title: '下载',
          name: 'download'
        },
        {
          title: '关于我们',
          name: 'about'
        }
      ]
    }
  },
  watch: {},
  computed: {
    isAndroid() {
      return isAndroid()
    }
  },
  created() {},
  mounted() {},
  methods:{
    goRouter(item) {
      this.$router.push({
        name: item.name
      })
    },
    freeUse() {
      this.$emit('freeUse')
    },
    skipUrl() {
      skipUrl('tel:4001622800')
    }
  }
}
</script>
<style lang="stylus">
.footer-common
  background-color #021033
  padding 40px
  padding-bottom 137px
  font-size 28px
  color #cacbcc
  .footer-fixed
    position fixed
    display flex
    background-color #ffffff
    z-index 1000
    align-items center
    width 100%
    height 120px
    left 0
    bottom 0px
    .flex-center
      width 50%
      height 45px
      position relative
      display flex
      justify-content center
      align-items center
      &:nth-last-of-type(1)
        border-left 1px solid #cccccc
      &:nth-of-type(1)
        height 100%
    .free-use, .phone
      position relative
      display flex
      justify-content center
      align-items center
      .img
        width 36.5px
        margin-right 19.5px
        margin-top 10px
        img 
          width 100%
      .text
        font-size 30.5px
        color #0c0c0d
        font-weight bold 
    .phone-wrapper
      width 100%
      position absolute
      height 100%
      left 0
      top 0
      z-index 10
  .footer-link
    display flex
    padding-bottom 40px
    border-bottom solid 1px #1e2c4d
    .link-item
      padding-left 30px
      padding-right 30px
      height 28px
      line-height 30px
      border-left solid 1px #fff
      &:nth-of-type(1)
        border none
        padding-left 0
  .footer-info
    display flex
    margin-top 40px
    padding-bottom 35px
    border-bottom solid 1px #1e2c4d
    .erweima
      margin-right 30px
      .erweima-icon
        width 140px
        img 
          width 100%
      .text
        font-size 20px
        color #909499
        margin-top 10px
    .basic-info
      padding-left 30px
      border-left solid 1px #1e2c4d
      .basic-item
        display flex
        margin-bottom 25px
        line-height: 28px;
        &:last-child
          margin-bottom 0px
        .footer-phone
          font-size 36px
        span:nth-of-type(1)
          flex-shrink 0
        .address
          position relative
          top -10px
          line-height: 48px !important
          
  .footer-copyrigth
    margin 40px 0 0
    line-height: 24px;
    font-size 24px
    font-family: MicrosoftYaHeiLight;
    .copyright-item
      margin-top 15px
</style>