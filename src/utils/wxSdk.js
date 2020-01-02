/* eslint-disable no-console */
// import wx from "weixin-js-sdk";
import { getSdkConfig } from '@/api/query'
/*eslint-disable */
class WXSDK {
    constructor() {
      this.title = ""
      this.desc = ""
      this.shareLink = ""
      this.imgUrl = ""
    }
    registerEvent() {
      let wx = window.wx
      wx.ready(() => {
        wx.checkJsApi({
          jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"],
          success: function(res) {
            console.log(res)
          }
        });
        wx.onMenuShareAppMessage({
          title: this.title,
          desc: this.desc,
          link: this.shareLink,
          imgUrl: this.imgUrl,
          success: () => {
            setTimeout(() => {
              alert(`
              ${this.title} 
              ${this.desc} 
              ${this.shareLink} 
              ${this.imgUrl}
              `)
            }, 5000)
          }
        });
        wx.onMenuShareTimeline({
          title: this.title,
          desc: this.desc,
          link: this.shareLink,
          imgUrl: this.imgUrl,
          success: () => {
            setTimeout(() => {
              alert(`
              ${this.title} 
              ${this.desc} 
              ${this.shareLink} 
              ${this.imgUrl}
              `)
            }, 5000)
            
          }
        });
      });

      wx.error(function(res){
        console.log(res)
      });
    }
    async setConfig(config = {}) {
      let wx = window.wx
      if (!wx) {
        setTimeout(() => {
          this.setConfig(config)
        }, 1000)
        return 
      }
      const {
        appId,
        timestamp,
        nonceStr,
        signature
      } = config

      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId, // 必填，公众号的唯一标识
        timestamp, // 必填，生成签名的时间戳
        nonceStr, // 必填，生成签名的随机串
        signature, // 必填，签名，见附录1
        jsApiList: [
          "checkJsApi",
          "onMenuShareTimeline",
          "onMenuShareAppMessage"
        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
        
      // 注册事件
      this.registerEvent();
    }
    getShareUrl(url) {
      this.shareLink = url || location.href
      return this.shareLink
    }
    // 页面分享获取配置
    async getWXShareConfig() {
      let res = await getSdkConfig({
        shareUrl: this.shareLink
      })
      if (res.code === 1) {
        try {
          let data = res.data
          let sign = JSON.parse(data.sign)
          this.title = data.title
          this.desc = data.desc
          this.shareLink = data.url
          this.imgUrl = data.shareImg
          if (data.shareImg && data.shareImg.includes("myqcloud.com")) {
            if (!data.shareImg.includes("https://") && !data.shareImg.includes("http://")) {
              this.imgUrl = "https://" + data.shareImg;
            }
          }
          this.setConfig({
            appId: data.appid,
            timestamp: sign.timestamp,
            nonceStr: sign.nonceStr,
            signature: sign.signature
          })
        } catch (err) {
          console.error(err)
        }
      }
    }
}

export default new WXSDK()