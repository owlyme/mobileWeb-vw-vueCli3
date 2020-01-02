<template>
  <div id="app" @click.stop="$root.Bus.$emit('clickBody')">
    <div class="header-wrapper">
      <HeaderCommon></HeaderCommon>
    </div>
    <div class="content" @click.stop="$root.Bus.$emit('clickBody')">
      <transition name="fade">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    </div>
    <div class="footer">
      <FooterCommon @freeUse="freeUse"></FooterCommon>
    </div>
  </div>
</template>
<script>
import HeaderCommon from '@/layouts/HeaderCommon'
import FooterCommon from '@/layouts/FooterCommon'
import wxSdk from '@/utils/wxSdk.js'
import {isWeiXin} from '@/utils/util'
import { getUserCorpAuthMulti } from '@/api/query'
export default {
  components: {
    HeaderCommon,
    FooterCommon
  },
  watch: {
  },
  mounted() {
    wxSdk.getShareUrl()
    wxSdk.getWXShareConfig()
    this.getPageUrlQuery()
  },
  methods: {
    getPageUrlQuery() {
      this.pageUrlQuery = this.$route.query
    },
    async getOpenId() {
      // 微信获取openId
      let redirect_uri = process.env.VUE_APP_URL + '/companywap/usingProcess'
      redirect_uri = encodeURIComponent(redirect_uri)
      location.replace(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${process.env.VUE_APP_APPID}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=STATE&component_appid=${process.env.VUE_APP_COMPONENT_APPID}#wechat_redirect`)
    },
    async freeUse() {
      if (isWeiXin()) {
        this.getOpenId()
        let res = await this.getUserCorpAuthMulti()
        if (res === 'nosession') {
          this.getOpenId()
        } else if (res.corpLength === 0) {
          location.href = process.env.VUE_APP_URL + '/companywap/usingProcess'
        } else {
          location.href = process.env.VUE_APP_URL + '/companywap/usingProcess'
        }
      } else {
        location.href = process.env.VUE_APP_FORMURL
      }
    },
    async getUserCorpAuthMulti() {
      let data = await getUserCorpAuthMulti()
      switch (data.code) {
        case 1:{
          let corpData = (data.data && data.data.filter((item) => {
            return item.agentEmployeeIdentity === 1
          })) || []
          let corpLength = corpData.length
          return {
            corpLength: corpLength || 0
          }
        }
        case 200:
          return 'nosession'
        default:
          return 'nosession'
      }
    }
  }
}
</script>
<style lang="stylus">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .header-wrapper {
    z-index: 300;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%
  }
  .content {
    flex: 1;
  }  
}
</style>
