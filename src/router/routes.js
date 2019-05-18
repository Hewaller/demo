import Vue from 'vue'
import Home from '../views/Home.vue'
import Test from '../views/Home.vue'
const isDev = process.env.NODE_ENV === 'development'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

if (isDev) {
  // 开发环境引入测试页面
  routes.push({
    path: '/test',
    name: 'test',
    meta: {
      title: 'test',
      needLogin: true
    },
    component: Test
  })
}

export default routes
