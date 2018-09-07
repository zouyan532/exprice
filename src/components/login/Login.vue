<!--个人中心页面-->
<template>
  <div id="Login" style="margin-top: 30%">
    <wv-header title="登录">
      <div class="btn-back" slot="left">
        <i class="iconfont icon-back" @click="$router.push('/')"><</i>
      </div>
    </wv-header>
    <wv-group title="">
      <wv-input label="+86 " placeholder="请输入手机号码" type="number" v-model:value="phoneNumber" ></wv-input>
      <wv-button type="default" :mini="true" id="sendVerificationCode" @click="sendVerificationCode" :disabled="sendDisabled"  :style="sendMsgStyle"><span>{{sendMsg}}</span></wv-button>
      <wv-input  placeholder="请输入验证码" type="number" v-model:value="vCode">
      </wv-input>

      <wv-input  placeholder="请输入您的姓名" v-model:value="name" ></wv-input>
    </wv-group>

    <wv-button type="default" :plain="true" class="loginBtn" @click="login">登录</wv-button>

    <div style="margin-top:10%" @click="oauth">
      <span >一键登录</span>
      <div>
        <img src="https://cdn.pixabay.com/photo/2015/03/18/09/31/prairie-679014__340.jpg" class="lazyload-image" width="100" :height="100" style="border-radius:100px;margin-top: 25px;" >
      </div>

    </div>
  </div>

</template>

<script>
  import {mapMutations,mapState,mapActions} from "vuex"
  export default {
    name: 'Login',
    methods: {
      ...mapActions([
        "login"
      ]),
      ...mapMutations([
        "updateUserInfo",
      ]),
      sendVerificationCode(){
        var i = 15;
        let that = this;
        var timer = setInterval(function(){
          if(i== -1){
            clearInterval(timer);
            that.sendDisabled=false;
            that.sendMsg = "发送验证码";
            that.sendMsgStyle="background-color: green;"

          }else{
            that.sendDisabled=true;
            that.sendMsg = i+"s重新发送";
            that.sendMsgStyle="background-color:#9c9c9c;color:#fff ;"
            --i;
          }
        },1000);

      },
      oauth(){

      }
    },
    data() {
      return {
        sendDisabled:false,
        sendMsg:"发送验证码",
        sendMsgStyle:"background-color: green;color:black "
      }
    },
    computed:{
      ...mapState({
        // phoneNumber:state=>state.login.phoneNumber,
        // vCode:state=>state.login.vCode,
        // name:state=>state.login.name
        userInfo:state=>state.userInfo
      }),
      phoneNumber:{
        get(){
          return this.userInfo?this.userInfo.phoneNumber:""
        },
        set(value){
          this.updateUserInfo({phoneNumber:value})
        }
      },
      vCode:{
        get(){
          return this.userInfo?this.userInfo.vCode:""
        },
        set(value){
          this.updateUserInfo({vCode:value})
        }
      },
      name:{
        get(){
          return this.userInfo?this.userInfo.name:""
        },
        set(value){
          this.updateUserInfo({name:value})
        }
      },

    }
  }
</script>

<style lang="scss">
  .weui-label{
    width: 100% !important;
    padding: 0 30px 0 0;
  }
  .loginBtn{
    margin-top: 10%;
    background-color: red !important;
    border: 1px solid red;
    width:80%  !important;
    border-radius:25px;
  }

  .weui-cell{
    /*border: 1px solid blue;*/
    width: 50%;
  }
  #sendVerificationCode{
    width: 30%;
    float: right;
    margin-top: 10px;


    border-radius: 30px;
  }



</style>
