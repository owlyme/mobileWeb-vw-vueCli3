<template>
  <!-- 产品 -->
  <div class="center" id="product">
    <div class="bann relative">
      <img class="block" :src="loadImg('product/banner_bg.png')" alt="">
      <div class="bann-cont absolute">
        <h1>为企业营销赋能</h1>
        <h1>打通企业与客户的连接</h1>
      </div>
    </div>

    <sub-nav :navList="nav"></sub-nav>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <!-- <try-out></try-out> -->
  </div>
</template>

<script>
  export default {
    name: 'product',
    data() {
      return {
        nav: [
          {
            text: '社交营销系统',
            path: 'marketing',
            img1: require('@/assets/images/product/icon1_3.png'),
            img2: require('@/assets/images/product/icon1_1.png')
          },
          {
            text: '智能客服系统',
            path: 'service',
            img1: require('@/assets/images/product/icon1_2.png'),
            img2: require('@/assets/images/product/icon1_4.png')
          }
        ],
      }
    },
    components: {
      subNav: () => import('@/components/subNav'),
      // tryOut: () => import('@/components/tryOut')
    },
    computed: {},
    created() {},
    watch: {},
    mounted() {},
    methods: {},
  }
</script>

<style lang="stylus">
.mod 
  padding: 0 30px
  .mod-text 
    font-size: 20px 
    line-height: 30px
    text-align: center
    padding-bottom: 15px
#product
  background-color: #f2f4f5
  .bann 
    overflow: hidden
    >img 
      width: 100%
    .bann-cont
      width: 100% 
      height: 100%
      padding-left: 90px
      display: flex 
      flex-direction: column 
      justify-content: center
      >h1 
        color: #fff
        font-size: 42px
        line-height: 54px
  .tit 
    color: #0c0c0d
    font-size: 34px 
    font-weight: 600
    text-align: center
    padding: 80px 0 40px
</style>