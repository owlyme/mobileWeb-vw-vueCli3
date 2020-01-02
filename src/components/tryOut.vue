<template>
  <!-- 底部免费试用组件 -->
  <div class="try-out flex-center">
      <h2>立即领取免费试用机会</h2>
      <div>
        <span>免费试用</span>
      </div>
    </div>
</template>

<script>
  export default {
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
  .try-out
    height: 160px
    background: url($baseImg'/home/img_bg_shiying.png') no-repeat center bottom
    background-size: cover
    >h2
      color: #fff
      font-size: 48px 
      line-height: 66px
      font-weight: 700
      margin-right: 18px
    >div 
      width: 180px 
      line-height: 66px 
      text-align: center 
      border-radius: 3px 
      background-color: #fff 
      >span
        background-image:-webkit-linear-gradient(right,#0070ff,#00c2ff); 
        -webkit-background-clip:text; 
        -webkit-text-fill-color:transparent; 
</style>