// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
// import './assets/style/demo.scss'
// import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false
Vue.use(WeVue)
/* eslint-disable no-new */
import utils from "@/utils/Utils"
Vue.prototype.Utils = utils

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
