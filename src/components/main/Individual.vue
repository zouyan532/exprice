<!--个人中心页面-->
<template>
  <div >
    <div >
      <wv-swipe :height="175" :auto="4000" style="background-color: #1AAD19">
        <div>
          <wv-swipe-item style="float: none;width: 100%"><img src="https://cdn.pixabay.com/photo/2015/03/18/09/31/prairie-679014__340.jpg" class="lazyload-image" width="100" :height="100" style="border-radius:100px;margin-top: 25px;" ></wv-swipe-item>
        </div>
        <div>
          <span>登录/注册</span>
        </div>
      </wv-swipe>
    </div>
    <div style="float: left ;">
          <span>
            我的会员卡
          </span>
      <div>
        <img src="https://cdn.pixabay.com/photo/2015/03/18/09/31/prairie-679014__340.jpg" class="lazyload-image" width="25" :height="25" ><span>会员卡</span>
      </div>
      <span>
            我的优惠劵
          </span>
      <div style="">
        <img src="https://cdn.pixabay.com/photo/2015/03/18/09/31/prairie-679014__340.jpg" class="lazyload-image" width="25" :height="25" ><span>优惠劵</span>
      </div>
      <div style="">
        <img src="https://cdn.pixabay.com/photo/2015/03/18/09/31/prairie-679014__340.jpg" class="lazyload-image" width="25" :height="25" ><span>分享劵</span>
      </div>
      <div style="">
        <img src="https://cdn.pixabay.com/photo/2015/03/18/09/31/prairie-679014__340.jpg" class="lazyload-image" width="25" :height="25" ><span>实物奖品</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Individual',
    methods: {
      clickCancel(index){

      }
    },
    data() {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
