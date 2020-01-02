<template>
  <div id="about">
    <div class="header-container relative">
      <div class="abs abs-1">关于我们</div>
      <div class="abs abs-2">ABOUT US</div>
      <div class="abs abs-3">技术驱动创新</div>
      <div class="abs abs-4">
        <div class="border-1"></div>
        <div class="border-2"></div>
        <div class="border-3"></div>
        <div class="border-4"></div>
        <div class="border-5"></div>
      </div>
    </div>
    <subNav :navList="nav"></subNav>
    <router-view></router-view>
  </div>
</template>

<script>
import subNav from "@/components/subNav"

export default {
  name: "about",
  components: {
    subNav,
  },
  data() {
    return {
      nav: [
        {
          text: '关于团队',
          path: 'team',
          img1: require('@/assets/images/about/icon2_1.png'),
          img2: require('@/assets/images/about/icon1_1.png')
        },
        {
          text: '企业文化',
          path: 'company',
          img1: require('@/assets/images/about/icon1_2.png'),
          img2: require('@/assets/images/about/icon2_2.png')
        },
        {
          text: '加入我们',
          path: 'joinus',
          img1: require('@/assets/images/about/icon1_3.png'),
          img2: require('@/assets/images/about/icon3_1.png')
        }
      ],
    }
  }
}
</script>

<style lang="stylus">
@import "./about.styl" 
</style>
