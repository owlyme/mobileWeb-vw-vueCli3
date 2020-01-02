// import Vue from 'vue'

export default {
  install(Vue) {
    const loadImg = (v) => { // 动态加载图片
      return require('@/assets/images/' + v)
    }

    Vue.prototype.loadImg = loadImg
  }
}

