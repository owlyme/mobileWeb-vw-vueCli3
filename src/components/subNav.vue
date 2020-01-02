<template>
  <!-- 副导航 -->
  <ul id="sub-nav" class="flex-between">
    <template v-for="(v, i) in navList">
      <router-link :to="v.path" tag="li" :key="i">
        <div class="fit-cont center flex-between">
          <div class="nav-icon">
            <img class="img1" :src="v.img1" alt="">
            <img class="img2" :src="v.img2" alt="">
          </div>
          <span>{{v.text}}</span>
        </div>
      </router-link>
    </template>
  </ul>
</template>

<script>
  export default {
    props: {
      navList: {
        type: Array
      }
    },
    data() {
      return {}
    },
    components: {},
    computed: {},
    created() {},
    watch: {},
    mounted() {},
    methods: {},
  }
</script>

<style lang="stylus">
  #sub-nav 
    position: relative;
    z-index: 1;
    box-shadow: 0px 8px 28px 2px rgba(0, 14, 41, 0.15)
    >li 
      flex: 1
      >div 
        height: 100px
        line-height: 100px
        border-bottom: 3px solid transparent
        .nav-icon
          width: 40px 
          height: 40px
          margin-right: 20px
          >img
            height: 100%
        .img1 
          display: block
        .img2 
          display: none
    >li.router-link-active 
      >div 
        color: #00a2ff
        border-bottom: 3px solid #00a2ff
      .img1 
        display: none 
      .img2 
        display: block
</style>