<template>
  <div id="download">
    <div class="text-content">
      <div class="title">销大师客户端</div>
      <div class="version">
        <div class="center">
          <span>Windows版</span>
          <span>{{versionInfo.outsideVersion}}</span>
          <span>{{versionInfo.publishTime}}</span>
        </div>
      </div>
      <div class="down-img">
        <img src="@/assets/images/download/img_load.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import {queryCurrVersion} from '@/api/query';
  export default {
    name: 'download',
    data() {
      return {
        versionInfo: {
          outsideVersion: '1.3.6',
          publishTime: '2019.3.15'
        }
      }
    },
    created() {
      this.queryCurrVersion()
    },
    methods: {
      async queryCurrVersion() {
        let res = await queryCurrVersion()
        if (res.code === 1) {
          this.versionInfo = res.data
          this.versionInfo.publishTime = (this.versionInfo.publishTime || '').split(' ')[0].replace(/-{1}/g, '.')
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  #download
    padding-top 200px
    display flex
    justify-content center
    text-align center
    background-image url(../../assets/images/download/img_bg.png)
    background-size cover
    .text-content
      user-select none
      .down-img
        margin-top 67px
        width 472px // 截图有投影边距
        height 590px
        overflow hidden
        text-align center
        img
          width 100%

    .title
      height: 72px;
      font-size 72px
      color #0c0c0d
    .version
      margin-top 29px
      align-items center
      span
        border-right solid 1px #303133
        color: #303133;
        font-weight 400
        font-size 24px
        padding 0 20px
        &:nth-last-of-type(1)
          border none
</style>