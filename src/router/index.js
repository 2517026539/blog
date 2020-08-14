import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './../layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('./../views/home'),
        name: '首页',
        meta: { title: '首页-小贤-个人博客'}
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
