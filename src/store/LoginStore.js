import http from "../utils/http"
export default {
  state:{
    userInfo:{
      phoneNumber:"",
      vCode:"",
      name:"",
    },
    isLogin:false,
    token:""
  },
  mutations:{
    changeLoginType(state,{isLogin,token}){
      state.isLogin = isLogin
      state.token = token
      console.log(state)
    },
    updateUserInfo(state,value){
      state.userInfo = {
        ...state.userInfo,
        ...value
      }
    }
  },
  actions:{
    login({commit,state}){
      // console.log(state.userInfo)
      let userInfo = state.userInfo
      let requestData = {
        mac:"6C:8D:CE:E3:F0:8D",
        phoneNumber:userInfo.phoneNumber,
        password:"a111111"
      }
      http.post("/rest/app/login/userlogin/userLogin",requestData)
        .then(response=>{
          console.log(response)
          if(response.status&&response.data.status){
            commit("changeLoginType",{isLogin:true,token:response.data.data.token})
          }

        })
    }
  }
}
