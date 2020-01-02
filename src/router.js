import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';
import Home from './page/index'
import Download from './page/download'
import wxSdk from '@/utils/wxSdk.js'
Vue.use(Router)

const router = new Router({
  // mode: "history",
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {title: '微信营销_公众号营销_小程序营销_活动营销_销大师'}, 
      component: Home
    },
    {
      path: '/product',
      name: 'product',
      redirect: '/product/marketing',
      component: () => import('./page/product'),
      children: [
        {
          path: '/product/marketing',
          name: 'marketing',
          meta: {title: '销大师_微信 公众号精准营销平台_低成本获客'}, 
          component: () => import('./page/product/marketing')
        },
        {
          path: '/product/service',
          name: 'service',
          meta: {title: '公众号多客服系统_销大师'}, 
          component: () => import('./page/product/service')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      redirect: "/about/team",
      component: () => import ("./page/about"),
      children: [
        {
          path: 'team',
          name: 'team',
          meta: {title: '销大师_团队介绍'},
          component: () => import ("./page/about/components/team"),
        },
        {
          path: 'company',
          name: 'company',
          meta: {title: '销大师-企业文化'},
          component: () => import ("./page/about/components/company"),
        },
        {
          path: 'joinus',
          name: 'joinus',
          meta: {title: '销大师-加入我们'},
          component: () => import ("./page/about/components/joinus"),
        }
      ]
    },  
    {
      path: '/price',
      name: 'price',
      component: () => import ("./page/price"),
      meta: {title: '销大师_价格详情'}
    },
    {
      path: '/download',
      name: 'download',
      meta: {title: '微信多客服软件下载_公众号营销系统软件下载_销大师'},
      component: Download
    },
    {
      path: '/usingProcess',
      name: 'usingProcess',
      component: () => import("@/page/usingProcess"),
      children: [
        {
          path: 'createCompany',
          name: 'createCompany',
          component: () => import("@/page/usingProcess/createCompany"),
          meta: {title: '开通销大师'}
        },
        {
          path: 'companyList',
          name: 'companyList',
          component: () => import("@/page/usingProcess/companyList"),
          meta: {title: '我的企业'}
        },
        {
          path: 'authorization',
          name: 'authorization',
          component: () => import("@/page/usingProcess/authorization"),
          meta: {title: '公众平台账号授权'}
        },
      ]
    }
  ]
})



router.beforeEach((to, from, next) => {
  document.title =  to.meta.title
  if (!!window.__wxjs_is_wkwebview) {
    // ios
    let authUrl = `${window.location.origin}/#${to.fullPath}`;
    let s = window.location.href
    let index1 = s.indexOf('?')
    let index2 = s.indexOf('#')
    if (index1 > -1 && index2 > -1 && index1 < index2)  {
      let arr = s.split(/#|\?/)
      window.location = `${arr[0]}#${arr[2]}?${arr[1]}`
    }
    wxSdk.getShareUrl(authUrl)
    //  wxSdk.getWXShareConfig()
  } else {
    // 安卓
    setTimeout(function () {
      wxSdk.getShareUrl(window.location.href.split('#')[0]+ '#' + window.location.href.split('#')[1])
      wxSdk.getWXShareConfig()
    }, 1000);
  }
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router