import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/main/MainPage'
import SelectCar from '@/components/car/SelectCar'
import NewCar from '@/components/car/newCar'
import Login from '@/components/login/Login'
import MembershipCard from '@/components/login/Membership'
import Coupon from '@/components/login/Coupon'
import ShareStock from '@/components/login/ShareStock'
import UseHistory from '@/components/login/UseHistory'
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

    {
      path:'/Login',
      name:"Login",
      component: Login
    }
    //��¼ҳ��
    ,{path:'/Login',name:"Login", component: Login},
    //��Ա��
    , {path:'/MembershipCard', name:"MembershipCard", component: MembershipCard}
    //�Żݾ�
    , {path:'/Coupon', name:"Coupon", component: Coupon}
    //���턻
    , {path:'/ShareStock', name:"ShareStock", component: ShareStock}
    //��Ա��ʹ�ü�¼
    , {path:'/UseHistory', name:"UseHistory", component: UseHistory}
  ]
})
