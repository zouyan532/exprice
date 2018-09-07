<!--优惠卷详情-->
<template>
  <div id="couponDetail" >
    <wv-header title="优惠卷详情">
      <div class="btn-back" slot="left">
        <i class="iconfont icon-back" @click="$router.push('/Coupon')"><</i>
      </div>
    </wv-header>
    <div>
      <div style="width: 100%; height: 80px;background-color:#d8b365;box-sizing: border-box;position: relative;margin-top: -10px;">
            <h1 style="font-size: 20px;line-height: 80px;position: absolute;width: 80px;top: 0;bottom: 0;">免费</h1>
            <div class="rightBox">
              <div class="firstS">
                <div style="float: left;margin-top: 15px;" >
                  <h2>美容抵用券</h2>
                  <p>有效期:2018.01.01-2020.02.02</p>
                </div>
                <div style="clear: both"></div>
              </div>
            </div>
          </div>
      <div>
        <p style="padding: 10px;">卷码：CHINA194910</p>
        <img src="https://cdn.pixabay.com/photo/2015/03/18/09/31/prairie-679014__340.jpg"  width=80% height=80% >
      </div>
      <div style="float: left;text-align: left;margin-left: 20px;    line-height: 30px;position: absolute;">
        <h4>适用项目</h4>
        <p>空气滤清、刹车片</p>
      </div>

      <div style="float: left;text-align: left;margin-left: 20px;    line-height: 30px; margin-top: 80px">
        <h4>使用说明</h4>
        <p style="font-size: 10px">1、领卷后凭劵码至门店进行使用，每个订单限用一张；
          <br>
          2、抵用券仅限对应服务项目板块使用；
          <br>
          3、所有优惠劵不可兑换现金，不找零，不与其他优惠活动共享；
          <br>
          4、用户需在有限期内使用劵，过期未到店使用将失效。
        </p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'ShareStock',
    methods: {

    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">

  ul,li{
    padding: 0;
    margin: 0;
    list-style: none;
  }

</style>
