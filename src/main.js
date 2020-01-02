import Vue from 'vue'
import App from './App.vue'
import router from './router'
import utils from './utils/index.js'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/css/index.styl'
import { Icon, Dialog, Toast, Button } from "vant";

Vue.use(Icon)
  .use(Dialog)
  .use(Toast)
  .use(Button)
Vue.use(VueLazyload)
Vue.use(utils)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  data: {
    Bus: new Vue()
  }
}).$mount('#app')
