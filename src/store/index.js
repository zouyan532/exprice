import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
import MainPage from './MainPageStore';//引入某个store对象
import Login  from './LoginStore'
export default new vuex.Store({
  modules:{
    mainPage:MainPage,
    login:Login
  }
})
