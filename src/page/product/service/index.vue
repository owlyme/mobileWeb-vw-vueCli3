<template>
  <!-- 智能客服系统 -->
  <div id="service">
    <div class="mod mod-userinfo">
      <div class="tit">采集用户信息</div>
      <div class="mod-text text-gray9">
        销大师为你采集每一个粉丝的动作，即粉丝的每一个触发菜单动作，发送的消息等行为，让您第一时间掌握粉丝行为，不错过任何一个粉丝。
      </div>
      <div class="mod-cont">
        <img :src="loadImg('product/img5_tezheng.png')" alt="">
      </div>
    </div>
    <div class="mod mod-client">
      <div class="tit">提升活跃度，留存客户</div>
      <div class="mod-text text-graye">
        通过文字、图文、语音、视频、文件等多种媒体消息方式与粉丝深度互动，更直观更深入的将粉丝带入客户场景。
      </div>
      <div class="mod-cont">
        <img :src="loadImg('product/img6_tx.png')" alt="">
      </div>
    </div>

    <div class="mod mod-manage">
      <div class="tit">管理客户</div>
      <div class="mod-text text-gray9">
        通过对采集和互动信息数据加工处理，帮助您进行信息查询，多维度高级筛选，用户自动归类，让您更高效更省心更省力。
      </div>
      <div class="mod-cont">
        <img :src="loadImg('product/img7_tux.png')" alt="">
      </div>
    </div>

    <div class="mod mod-func">
      <div class="tit">丰富的客服功能</div>
      <div class="mod-cont">
        <img :src="loadImg('product/img8_tux.png')" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'service',
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
  $baseImg = $baseImg + '/product'
  #service 
    .mod-cont 
      padding: 30px 0 60px
      >img 
        width: 100%
    .mod-client 
      background: url($baseImg'/img6_bg.png') no-repeat center
      background-size: cover 
      .tit 
        color: #fff
    .mod-func 
      background: url($baseImg'/img8_bg.png') no-repeat center
      background-size: cover
</style>