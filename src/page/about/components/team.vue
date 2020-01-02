<template>
  <div id="team">
    <div class="paddingTB100 paddingLR30 card-1" >
      <h1 class="big60 marginB30">星客互联</h1>
      <h3 class="big28 marginB48">行业领先的企业移动社交营销解决方案服务商</h3>
      <p class="marginB30 gray team-prag">杭州星客互联科技有限公司成立于2013年8月，总部位于美丽的杭州西子湖畔。</p>
      <p class="marginB30 gray team-prag">星客互联是一家专注于企业服务(To B)，以社交营销和智慧营销为发展方向，行业领先的企业移动社交营销解决方案服务商，具备自主研发和运营能力。</p>
      <p class="marginB30 gray team-prag">公司坚持以技术驱动创新，围绕微信生态，为企业提供智慧营销解决方案，帮助企业解决获客难、销售难、沟通难、成交转化难等问题，帮助企业利用微信生态运营私域流量，发掘培养用户价值，提升销售增长。先后成功开发或运营了企业直播、社交化CRM系统的SAAS平台，取得了优秀的成绩，与国内众多的各行业中小型企业建立了长期良好的合作关系，累计服务了数千家企业客户。</p>
      <p class="marginB30 gray team-prag">在未来，公司将在该市场持续加大投入，与生活服务、连锁零售企业、营销型互联网公司等众多企业共同探索构建基于互联网和移动互联网的营销型企业级产品的生态。</p>
    </div>

    <div class="paddingTB50 paddingLR30 card-2">
      <h4 class="big36 marginB40 light">销大师</h4>
      <div class="marginB40 blue-line"></div>
      <p class="marginB26 light gray team-prag">
        销大师为星客互联旗下专注于解决企业在微信生态内进行智慧营销转型的SAAS互联网产品。销大师基于微信生态，特别是公众号和小程序，为企业构建起了基于微信的一整套成熟的轻量级社交营销的模式和工具，企业客户可一键授权、快速对接销大师，利用销大师丰富的营销功能和内置营销应用，可以方便快捷的完成企业与客户之间的营销、沟通、成交转化等一系列营销闭环，帮助企业掘金10亿微信用户价值。
      </p>
      <p class="marginB26 light gray team-prag">
        销大师目前正服务于互联网、教育培训、婚纱摄影、医疗美容、生活服务、金融投资和房地产等众多行业的客户和商家。</p>
      <div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) of banner" :key="index">
            <div class="slide-inner">
              <div class="swiper-i2mg"><img :src="item.src"></div>
              <div class="font28">{{item.title}}</div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>

    <div class="paddingTB100 paddingLR30 card-3">
      <h4 class="big36 marginB40">团队介绍</h4>
      <div class="marginB40 blue-line"></div>
      <p class="marginB26 gray team-prag">
        星客互联现有团队成员50多人，是一个年轻又拥有丰富经验的团队。核心团队成员来自多家业内知名的互联网公司，平均拥有10年以上的技术研发或运营营销行业的经验，是业内资深的技术专家和营销专家。我们的团队平均年龄27岁，是一个朝气蓬勃、富有创造力的团队，我们拥有共同的梦想，致力于为客户提供最具价值的社交营销产品和服务。
      </p>
      <div class="flex-container spb">
        <div>
          <div class="smnall24">员工(人)</div>
          <div class="big108">50 <span class="plus">+</span></div>
        </div>
        <div>
          <div class="smnall24">核心团队经验(年)</div>
          <div class="big108">10 <span class="plus">+</span></div>
        </div>
        <div>
          <div class="smnall24">平均年龄(岁)</div>
          <div class="big108">28</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: [
        {
          src: require("../../../assets/images/about/img1_1.png"),
          title: "教育培训行业"
        },
        {
          src: require("../../../assets/images/about/img1_2.png"),
          title: "金融投资行业"
        },
        {
          src: require("../../../assets/images/about/img1_3.png"),
          title: "医疗美容行业"
        }
      ],
      swiperOption: {
        centeredSlides: true,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: false
        },
        autoplay:  {
          delay:1500,
          disableOnInteraction: false,
        }
      },
      currentIndex: 0,
      swiper: {}
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus">
#team
  .card-2
    background-image: url(../../../assets/images/about/img1_bg.png)
    background-size: cover
   .team-prag
    font-size: 28px;
    line-height: 40px;
  
  .swiper-container
    height 315px
    margin-top 80px !important
    .swiper-wrapper
      height 315px
      text-align center
      .swiper-slide:not(.swiper-slide-active) 
        transform: scale(0.8);
        opacity 0.6
      .swiper-slide
        transition: 300ms;
      .swiper-i2mg
        display inline-block
        width 156px
        height 196px
        img
          width 100%
      .font28
        margin-top -15px
        height: 29px;
        font-size: 28px;
        color: #ffffff;
    .swiper-pagination
      position absolute
      .swiper-pagination-bullet
        width 40px
        height 3px
        background-color #ffffff
        border-radius 2px
        opacity 0.5
        &.swiper-pagination-bullet-active
          opacity 1
</style>
