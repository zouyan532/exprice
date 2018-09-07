import http from "../utils/http"
export default {
  state:{
    currentTab:0
  },
  mutations:{
    clickTab(state,payload){
      state.currentTab = payload
    }
  },
  actions:{
  }
}
