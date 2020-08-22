import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './styles/index.scss'  //全局化css
import './permissions'        //组件初始化控制
import './icons/aliicon/iconfont.css'  //引入阿里icon

Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
