import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // 顶部进度条
// import store from '@/store'

import Routes from './routes'

NProgress.configure({ showSpinner: false }) // 配置进度条，去除进度条loading

Vue.use(Router)

// 实例化路由
const router = new Router({
  base: '',
  mode: 'history', // require service support (另外默认支持hash)
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  },
  routes: Routes
})

// 路由声明周期
router.beforeEach(async (to, from, next) => {
  NProgress.start() // 顶部进度条开始
  // 登陆逻辑
  // console.log(to, from)
  next()
})

router.afterEach(route => {
  // 设置路由title
  document.title = route.meta && route.meta.title ? route.meta.title : 'demo'
  NProgress.done()
})

export default router
