export default {
  state:{
    currentTab:0
  },
  mutations:{
    clickTab(state,payload){
      state.currentTab = payload
    }
  }
}
