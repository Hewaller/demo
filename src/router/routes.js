import Vue from 'vue'
import Home from '@/views/Home'
import Test from '@/views/test.vue'
import Sort from '@/views/sort'
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
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/sort',
    name: 'sort',
    component: Sort,
    meta: {
      title: '数组排序'
    }
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
