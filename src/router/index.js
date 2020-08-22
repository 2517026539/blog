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
        meta: { title: '首页-小贤-个人博客', index: '/home'}
      },{
        path: 'place',
        component: () => import('./../views/placeToFile'),
        name: '归档',
        meta: { title: '归档-小贤-个人博客', index: '/place'}
      },{
        path: 'classify',
        name: '分类',
        component: () => import('./../views/classify'),
        meta: { title: '分类-小贤-个人博客', index: '/classify'}
      },{
        path: 'about',
        name: '关于',
        component: () => import('./../views/about'),
        meta: { title: '关于', index: '/about'}
      },{
        path: 'message',
        name: '留言',
        component: () => import('./../views/message'),
        meta: { title: '留言', index: '/message'}
      }, {
        path: 'article/:id',
        name: 'article',
        hidden: true,
        component: () => import('./../views/article'),
        meta: { title: '文章' }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
