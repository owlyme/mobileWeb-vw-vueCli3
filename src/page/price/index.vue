<template>
  <div class="price" @touchend="touchEnd">
    <div class="header-container">
      <div class="gradient-text">领取免费试用机会</div>
      <div class="sub-text">开 · 启 · 营 · 销 · 增 · 长</div>
    </div>
    
    <div class="shadow-box">
      <div class="shadow-item">
        <div class="inner"></div>
      </div>
      <div class="shadow-item2" v-show="show">
        <div class="inner1"></div>
        <div class="inner2"></div>
      </div>

      <div class="sticky" :style="bg" ref="sticky"> 
        <div class="">
          <div class="table-header flex-between">
            <div class="tui_jian"></div>
            <div class="header-item header-i-1 flex-column">
              <div class="big-t">试用版</div>
              <!-- <div class="small-t">一起来体验别人的公司怎么做营销</div> -->
            </div>
            <div class="header-item header-i-2 flex-column">
              <div class="big-t">入门版</div>
              <!-- <div class="small-t">适合橱窗企业，满足基本营销需求</div> -->
            </div>
            <div class="header-item header-i-3 flex-column">
              <div class="big-t">专业版</div>
              <!-- <div class="small-t">适合1~100粉丝团队</div> -->
            </div>
            <div class="header-item header-i-4 flex-column">
              <div class="big-t">旗舰版</div>
              <!-- <div class="small-t">适合1~100粉丝团队</div> -->
            </div>
          </div>
          <!-- <div>
            <div class="table-header-price flex-between trbg-f" :style="{'box-shadow': show ? '0px 1px 0px 0px #e3e4e5' : ''}">
              <template v-for="(item, index) in price" >
                <div :key="index">
                  <span class="cplain">¥</span>
                  <strong :class="[item.class]">{{item.price}}</strong>
                  <span class="cunit">/年</span>
                  <div class="clinethrough">
                    <template v-if="item.discountPrice">
                      ¥{{item.discountPrice}}/年
                    </template>
                  </div> 
                </div>
              </template>
            </div>
          </div> -->
        </div>
      </div>
      
      
      <table>
        <tbody>
          <tr v-for="(item, index) in services" :class="[item.trbg]" :key="index">
            <td>
              <div v-html="item.label1"></div>
            </td>
            <td>
              <div v-html="item.label2"></div>
            </td>
            <td>
              <div v-html="item.label3"></div>
            </td>
            <td>
              <div v-html="item.label4"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import {price, services} from './price.js'
export default {
  data() {
    return {
      price: price,
      services: services,
      top: 100,
      sticky: null
    }
  },
  components: {
    // tryOut: () => import('@/components/tryOut')
  },
  computed: {
    bg() {
      return {
        "background-color": this.top <= 0 ? "#ffffff" : ""
      }
    },
    show() {
      return this.top <= 0
    }
  },
  mounted() {
    let sticky = this.sticky = this.$refs.sticky
    this.scroll(sticky)
  },
  methods: {
    scroll(ele){
      window.addEventListener("scroll", () => {
        this.top = ele.getBoundingClientRect().top
      });
    },
    touchEnd() {
      this.top = this.sticky.getBoundingClientRect().top
    }
  }
}
</script>

<style lang="stylus">
  .price
    background-image: url(../../assets/images/price/img_bg.png)
    background-position-y -130px
    background-size: 100%    
    background-color #fafafa
    background-repeat no-repeat
    padding-bottom: 80px
    .header-container
      width: 750px
      height: 429px
      background-size: cover
      text-align center 
      .gradient-text
        padding-top 196px
        font-size 72px
        -webkit-background-clip text 
        background-image: -webkit-linear-gradient(0deg, #40bfff 0, #266eff 100%);
        background-blend-mode hard-light
        -webkit-text-fill-color transparent 
      .sub-text
        font-size: 36px;
        line-height: 48px;
        letter-spacing: 10px;
        color: #303133;
    .sticky
      position sticky      
      top -1px
      // height 241px
      padding-top 8px

    .table-header
      height: 120px;
      align-items flex-end
      color #ffffff
      .tui_jian
        position absolute
        top 0
        left 394px
        width: 39px;
        height: 50px;
        background-image: url(../../assets/images/price/img_jian.png)
        background-repeat no-repeat
        background-size cover
      .header-item
        width 25%
        height: 100px;
        border-radius: 5px 5px 0px 0px;
        padding 0 10px
        justify-content center
        box-sizing border-box
        overflow: hidden
        background-size cover
      .header-i-1
        background-image: url(../../assets/images/price/img1_1.png)
      .header-i-2
        background-image: url(../../assets/images/price/img1_2.png)
      .header-i-3
        padding-top 20px
        height: 120px;
        background-image: url(../../assets/images/price/img1_3.png)
      .header-i-4
        background-image: url(../../assets/images/price/img1_4.png)
      .big-t
        height: 27px
        font-size: 28px
        line-height: 28px
      .small-t
        height: 20px
        font-size: 18px;
        line-height: 28px
        overflow: hidden
        white-space: nowrap
        -ms-text-overflow: ellipsis
        text-overflow: ellipsis

    .table-header-price
      > div
        // box-sizing content-box
        padding-top 30px
        width 25%
        vertical-align middle
        text-align center
        height 113px
        &:first-child
          width calc(25% + 1px)
          border-right 1px solid #ebecee
        .cplain
          font-size: 18px;
          color: #303133;            
          zoom 0.8
        .cunit
          font-size: 18px;
          line-height: 28px;
          color: #303133;
        .cgreen
          font-family: Arial-BoldMT;
          font-size: 36px;
          line-height: 28px;
          color: #66cc33;
        .cyellow
          font-family: Arial-BoldMT;
          font-size: 36px;
          line-height: 28px;
          color: #f5ad05;
        .cblue
          font-family: Arial-BoldMT;
          font-size: 36px;
          line-height: 28px;
          color: #15a0f9;
        .cred
          font-family: Arial-BoldMT;
          font-size: 36px;
          line-height: 28px;s
          color: #e6352d;
        .clinethrough
          height 17px
          font-size: 18px;
          line-height: 28px;
          color: #606366;
          text-decoration line-through
    table
      width 100%
      box-shadow:0px 3px 16px 0px rgba(31, 41, 51, 0.3)
      tbody 
        td
          width 25%
          text-align center
          > div
            margin 30px 0
            font-size: 20px;
            line-height: 28px;
            color: #606366;
            height 100%
          &:first-child
            border-right 1px solid #ebecee
    .trbg-f
      background-color: #ffffff;        
    .trbg-g
      background-color: #f7f7f8;
    .shadow-box
      position relative
      padding-bottom 20px
      .shadow-item
        position absolute
        z-index: 1;
        height calc(100% - 128px)
        top 128px
        left 50%
        width 25%
        box-shadow:0px 3px 16px 0px rgba(31, 41, 51, 0.3)
        border-radius: 5px;
        .inner
          position absolute
          bottom 0
          left 0
          width 100%
          height 20px
          background #ffffff
          border-radius: 0 0 5px 5px;
      .shadow-item2
        position sticky
        top -1px
        width 100%
        height 8px
        top -1px
        left 0
        z-index 5
        .inner1
          position absolute
          top 0
          left 0
          background #ffffff
          height 29px
          width 50%
        .inner2
          position absolute
          top 0
          right 0
          background #ffffff
          height 29px
          width 25%
</style>
