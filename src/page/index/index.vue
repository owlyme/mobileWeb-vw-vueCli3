<template>
  <div id="home">
    <div class="banner">
      <swiper :options="swiperBannerOption">
        <swiper-slide>
          <img src="@/assets/images/home/banner.png" alt>
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/home/banner2@2x.png" alt>
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/home/banner3@2x.png" alt>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="nav">
        <ul>
          <li @click="scrollIntoView('socioMarkt')">
            <i class="icon"></i>
            <span>社会营销</span>
          </li>
          <li @click="scrollIntoView('wxScrm')">
            <i class="icon"></i>
            <span>微信SCRM</span>
          </li>
          <li @click="scrollIntoView('intelService')">
            <i class="icon"></i>
            <span>智能客服</span>
          </li>
          <li @click="scrollIntoView('teamManage')">
            <i class="icon"></i>
            <span>团队管理</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="socioMarkt">
        <div class="head">
          <h2>
            销大师帮您全方位
            <span>精准成交</span>每一位
            <span>粉丝</span>
          </h2>
          <p>销大师帮助客户从粉丝（私域流量池）中发掘大量精准有价值的客户群体，并实现快速触达客户、进行销售转化的目的，帮助用户从获取客户、激活客户、跟进客户、留存客户到转化客户和二次成交的全方位客户管理。</p>
        </div>
        <ul>
          <li>
            <img src="@/assets/images/home/icon2_1.png" alt>
            <p class="title">海量的客户资源</p>
            <p>强大的微信生态，日活亿级别的用户及庞大的的朋友圈社交网络</p>
          </li>
          <li>
            <img src="@/assets/images/home/icon2_2.png" alt>
            <p class="title">广泛有效的获取粉丝</p>
            <p>通过工具在不同渠道最大化的获取有效粉丝</p>
          </li>
          <li>
            <img src="@/assets/images/home/icon2_3.png" alt>
            <p class="title">精准的裂变式营销</p>
            <p>构建粉丝的裂变增长模型，让精准客户纷至沓来</p>
          </li>
          <li>
            <img src="@/assets/images/home/icon2_4.png" alt>
            <p class="title">快速连接粉丝</p>
            <p>快速分析来访粉丝/客户的着落点，不流失任何来访客户</p>
          </li>
          <li>
            <img src="@/assets/images/home/icon2_5.png" alt>
            <p class="title">高效的粉丝转化</p>
            <p>销售与客户1对1直接沟通洽谈，让客户更动心</p>
          </li>
          <li>
            <img src="@/assets/images/home/icon2_6.png" alt>
            <p class="title">精准的分发营销</p>
            <p>基于用户画像分析进行差异化营销，千人千面的精准触达</p>
          </li>
          <li>
            <img src="@/assets/images/home/icon2_7.png" alt>
            <p class="title">提升销售转化率</p>
            <p>发现粉丝群体中的目标客户，高效完成直接的销售转化</p>
          </li>
          <li>
            <img src="@/assets/images/home/icon2_8.png" alt>
            <p class="title">多员工协同办公</p>
            <p>全方位组织架构，员工坐席可协调处理问题</p>
          </li>
        </ul>
      </div>
      <div class="wxScrm">
        <div class="head">
          <h2>促进粉丝增长，激发销售转化的营销专家</h2>
          <p>微信生态专业的营销裂变增长，帮助企业高效率、低成本的获得精准目标用户。</p>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide>
            <img src="@/assets/images/home/img_1.png" alt>
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/home/img_2.1.png" alt>
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/home/img_3.png" alt>
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/home/img_4.png" alt>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="publicManage">
        <div class="head">
          <h2>多公众号管理，企业级微信SCRM营销平台</h2>
          <p>粉丝资产管理工具，从数据追踪和整合分析入手，强大的粉丝画像及管理功能，多维度智能化标签，挖掘更多有价值的销售信息。</p>
        </div>
        <img src="@/assets/images/home/img_SCRM.png" alt>
      </div>
      <div class="intelService">
        <div class="head">
          <h2>
            销售与粉丝一对一有效沟通<br/>
            促使粉丝转化为客户
          </h2>
          <p>多公众号接入，多客服协作，像微信聊天一样与客户沟通，唤醒沉默客户，激活潜在客户，运用AARRR模型，让销售智能，让沟通简单，营销更高效，真正做到精细化营销。</p>
        </div>
        <img src="@/assets/images/home/img_6.png" alt>
      </div>
      <div class="teamManage">
        <div class="head">
          <h2>
            专为多员工协同办公场景
            <br>提升团队管理能力和效率
          </h2>
          <p>用户通过邀请机制加入企业，企业分配员工权限，线上管理团队更灵活</p>
        </div>
        <img src="@/assets/images/home/img_7.png" alt>
      </div>
    </div>
    <!-- <try-out></try-out> -->
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      swiperBannerOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          disableOnInteraction: false
        }
      },
      swiperOption: {
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          delay:1500,
          disableOnInteraction: false
        }
      }
    };
  },
  components: {
    // tryOut: () => import('@/components/tryOut')
  },
  methods: {
    scrollIntoView(element) {
      document.querySelector("." + element).scrollIntoView();
    }
  }
};
</script>

<style lang="stylus">
#home
  box-sizing border-box
  .swiper-container
    height 480px
    .swiper-wrapper
      height 480px
      img
        width 100%
        height 100%
    .swiper-pagination
      position absolute
      bottom 80px
      .swiper-pagination-bullet
        width 40px
        height 3px
        background-color #ffffff
        border-radius 2px
        opacity 0.5
        &.swiper-pagination-bullet-active
          opacity 1
  .banner
    position relative
    height 480px
    background #1147d9
    .nav
      display flex
      align-items center
      position absolute
      bottom 0
      left 50px
      z-index 2
      transform translateY(50%)
      width 650px
      height 130px
      background-color #ffffff
      box-shadow 0px 8px 28px 2px rgba(2, 14, 39, 0.15)
      border-radius 3px
      ul
        display flex
        justify-content space-around
        width 100%
        li
          display flex
          flex-direction column
          align-items center
          font-size 22px
          color #303133
          &:nth-of-type(1)
            .icon
              background url('~@/assets/images/home/icon1_1.png') no-repeat center center
              background-size cover
          &:nth-of-type(2)
            .icon
              background url('~@/assets/images/home/icon1_2.png') no-repeat center center
              background-size cover
          &:nth-child(3)
            .icon
              background url('~@/assets/images/home/icon1_3.png') no-repeat center center
              background-size cover
          &:nth-child(4)
            .icon
              background url('~@/assets/images/home/icon1_4.png') no-repeat center center
              background-size cover
          .icon
            display inline-block
            width 42px
            height 42px
          span
            margin-top 14px
  .socioMarkt
    background #f2f4f5
    padding 170px 0 110px
    .head
      text-align center
      h2
        font-size 36px
        color #0c0c0d
        text-align center
        span
          font-weight bold
      p
        margin 26px 35px 0
        font-size 20px
        line-height 30px
        color #979899
    ul
      display flex
      flex-wrap wrap
      li
        margin-top 56px
        width 50%
        text-align center
        img
          width 66px
          height 66px
        p.title
          font-size 28px
          color #303133
        p
          margin 10px 50px 0
          font-size 20px
          color #979899
  .wxScrm
    height 826px
    background url('~@/assets/images/home/img_bg1.png') no-repeat center center
    background-size cover
    color #ffffff
    text-align center
    padding-top 100px
    .head
      h2
        font-size 36px
        line-height 48px
      p
        margin 18px 20px 0
        font-size 16px
        line-height 30px
        color #e3e4e5
    .swiper-container
      margin-top 50px
      height 546px
      .swiper-wrapper
        .swiper-slide
          width 660px
          height 480px
      .swiper-pagination
        bottom 16px
      img
        margin 0 auto
        width auto
  .publicManage
    background #f2f4f5
    padding 110px 10px 0
    .head
      text-align center
      h2
        font-size 36px
        color #0c0c0d
        text-align center
        span
          font-weight bold
      p
        margin 26px 35px 0
        font-size 20px
        line-height 30px
        color #979899
    img
      width 100%
      padding 48px 0 110px
  .intelService
    height 856px
    padding 94px 30px 0
    background url('~@/assets/images/home/img_bg2.png') no-repeat center center
    background-size cover
    color #ffffff
    .head
      text-align center
      h2
        text-align center
        font-size 36px
        line-height 48px
      p
        margin 18px 50px 0
        font-size 16px
        color #e3e4e5
    img
      margin-top 50px
      width 100%
      font-size 0
  .teamManage
    background #f2f4f5
    padding 110px 48px 100px
    .head
      margin 0 auto
      text-align center
      h2
        font-size 36px
        line-height 48px
        color #0c0c0d
      p
        margin 18px 50px 0
        font-size 16px
        color #979899
    img
      margin-top 50px
      width 100%
      font-size 0
  .phone
    position fixed
    top 48%
    right 30px
    z-index 200
    width 110px
    height 110px
    background url('~@/assets/images/home/icon3_1.png') no-repeat center center
    background-size 100% 100%
    a
      display block
      height 100%
      cursor pointer
</style>