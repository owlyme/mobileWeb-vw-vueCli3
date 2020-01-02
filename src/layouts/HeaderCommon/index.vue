<template>
  <div class="header-common" :class="{'bg-change': showMenuList}">
    <div class="header-nav">
      <div class="header-icon">
        <router-link :to="{name: 'home'}">
          <img class="img-icon" :src="imgSrc.logo" alt="">
        </router-link>
      </div>
      <div class="menu-icon" :class="{'menu-close': showMenuList}" @click.stop="showMenuList = !showMenuList">
        <img class="img-caidan" v-show="!showMenuList" :src="imgSrc.menu" alt="">
        <img class="img-caidan" v-show="showMenuList" src="@/assets/images/home/icon4_guanbi.png" alt="">
      </div>
    </div>
    <transition name="menuList">
      <MenuList @emitParams="emitParams" v-show="showMenuList"  :list="list"></MenuList>
    </transition>
  </div>  
</template>

<script>
import MenuList from '@/components/MenuList'
export default {
  name: 'headerCommon',
  components: {
    MenuList
  },
  data() {
    return {
      showMenuList: false,
      list: [
        {
          title: '首页',
          name: 'home'
        },
        {
          title: '产品',
          children: [
            {
              title: '社交营销系统',
              name: 'marketing'
            },
            {
              title: '智能客服系统',
              name: 'service'
            }
          ]
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
          children: [
            {
              title: '关于团队',
              name: 'team'
            },
            {
              title: '企业文化',
              name: 'company'
            },
            {
              title: '加入我们',
              name: 'joinus'
            }
          ]
        },
      ]
    }
  },
  computed: {
    imgSrc() {
      let pageName = this.$route.name
      if ((pageName === 'price' || pageName === 'download') && !this.showMenuList) {
        return {
          logo: require('@/assets/images/home/top_logo1.png'),
          menu: require('@/assets/images/home/top_caidan1.png'),
        }
      } else {
        return {
          logo: require('@/assets/images/home/top_logo.png'),
          menu: require('@/assets/images/home/top_caidan.png'),
        }
      }
    }
  },
  mounted() {
    document.addEventListener('click', (e) => {
      e.stopPropagation()
      this.showMenuList = false
    })
    this.$root.Bus.$on('clickBody', () => {
      this.showMenuList = false
    })
  },
  methods: {
    emitParams(item) {
      this.showMenuList = false
      this.$router.push({name: item.name})
    }
  }
}
</script>
<style lang="stylus">
.header-common
  width 100%
  transition background 0.2s linear
  padding-top 26px
  &.bg-change
    background #000000
  .menuList-enter-active, .menuList-leave-active
    transition opacity  0.2s
  .menuList-enter, .menuList-leave-to
    opacity 0   
  .header-nav
    display flex
    justify-content space-between
    align-items center
    .header-icon
      width 290px
      margin-left 40px
      .img-icon
        width 100%
    .menu-icon
      margin-right 40px
      width 36px
      &.menu-close
        margin-right 35px
        width 45px
      .img-caidan
        width 100%
      .img-close
        width 100%  
  .menu-wrapper
    color #ffffff
    padding 20px 40px
    >.menu-item  
      font-size 28px
      padding-top 30px
      padding-bottom 25px
      border-bottom solid 0.5px #323333
      &:nth-last-of-type(1)
        border none
      &.fold-panel
        .collapse-wrap
          padding-top 15px
          padding-left 40px
          .menu-item 
            font-size 24px
            padding 15px 0
            &:nth-last-of-type(1)
              padding-bottom 0
</style>