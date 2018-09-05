<!--个人中心页面-->
<template>
  <div id="Individual">
    <div >
      <wv-swipe :height="175" :auto="4000" style="background-color: #1AAD19">
        <div id="register" @click="register">
          <div>
           <wv-swipe-item style="float: none;width: 100%"><img src="https://cdn.pixabay.com/photo/2015/03/18/09/31/prairie-679014__340.jpg" class="lazyload-image" width="100" :height="100" style="border-radius:100px;margin-top: 25px;" ></wv-swipe-item>
         </div>
         <div>
            <h3 >登录/注册</h3>
          </div>
        </div>
      </wv-swipe>
    </div>
    <div style="width: 100%;text-align: -webkit-auto;padding: 10px 0 10px 0px">
      <h3 style="padding: 10px 10px 10px 10px">我的会员卡</h3>
      <div class="coupon" @click="membershipCard">
        <img src="https://cdn.pixabay.com/photo/2015/03/18/09/31/prairie-679014__340.jpg" class="lazyload-image" width="25" :height="25">
        <span class="cardName">会员卡</span><span class="pageCount">0张</span>
      </div>
      <h3 style="padding: 10px 10px 10px 10px">我的优惠劵</h3>
      <div class="coupon" @click="cupon">
        <img src="https://cdn.pixabay.com/photo/2015/03/18/09/31/prairie-679014__340.jpg" class="lazyload-image" width="25" :height="25" >
        <span class="cardName">优惠劵</span><span class="pageCount">0张</span>
      </div>
      <div class="coupon" @click="shareStock">
        <img src="https://cdn.pixabay.com/photo/2015/03/18/09/31/prairie-679014__340.jpg" class="lazyload-image" width="25" :height="25" >
        <span class="cardName">分享劵</span><span class="pageCount">0张</span>
      </div>
      <div class="coupon">
        <img src="https://cdn.pixabay.com/photo/2015/03/18/09/31/prairie-679014__340.jpg" class="lazyload-image" width="25" :height="25" >
        <span class="cardName">实物奖品</span><span class="pageCount">0张</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Individual',
    methods: {
      clickCancel(index){

      },
      register(){
        this.$router.push({
          path:'Login'
        })
      },
      /*查看会员卡*/
      membershipCard(){
        this.$router.push({
          path:'MembershipCard'
        })
      }
      ,
      /*查看优惠劵*/
      cupon(){
        this.$router.push({
          path:'Coupon'
        })
      }
      ,
      /*查看分享劵*/
      shareStock(){
        this.$router.push({
          path:'ShareStock'
        })
      }
    },
    data() {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  .pageCount{
    float: right
  }
  .wv-header[data-v-4dfc0ef2]{
    height: 60px;
  }

  .coupon{
    /*border: #1AAD19 solid 1px ;*/
    width: 100% ;
    padding: 10px 10px 10px 0px;
    box-sizing: border-box;
  }

  .coupon .lazyload-image{
    margin-left: 10px ;
    position: absolute
  }
  .cardName{
    position: relative;
    left:  10%;
  }
</style>
