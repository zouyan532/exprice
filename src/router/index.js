import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/main/MainPage'
import SelectCar from '@/components/car/SelectCar'
import NewCar from '@/components/car/newCar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path:'/SelectCar',
      name:"SelectCar",
      component: SelectCar
    },
    {
      path:'/NewCar',
      name:"NewCar",
      component: NewCar
    },

  ]
})
