<!--使用历史-->
<template>
  <div id="Coupon">
    <wv-header title="使用记录">
      <div class="btn-back" slot="left">
        <i class="iconfont icon-back" @click="$router.push('/MembershipCard')"><</i>
      </div>
    </wv-header>
    <div>
              <div>
                <ul class="rollContent">
                  <li class='coupon-li' v-for="item in useData" style="height: 70px">
                    <div>
                      <div style="width:auto;right: 0;font-size: 12px;text-align: left;margin-left: 20px;">
                        <div style="height: 50px; line-height: 25px;position: relative; ">
                          <div style="float: left ;margin-top: 12px">
                            <h2>{{item.a}}</h2>
                            <div v-if="item.b!=null && item.b !=''">
                              <p>{{item.b}}<span style="margin-left: 30px;">{{item.c}}</span></p>
                            </div>
                            <div v-if="item.b==null || item.b ==''">
                              <p>{{item.c}}</p>
                            </div>
                          </div>
                          <div class="buttonSection"  style="float: right">
                            <p v-if="item.d>0" style="font-size: 20px;color: #1AAD19">{{item.d}}{{item.e}}</p>
                            <p v-if="item.d<=0" style="font-size: 20px;color: red">{{item.d}}{{item.e}}</p>
                          </div>
                          <div style="clear: both"></div>
                        </div>
                        <div class="secondS">

                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

      </div>
  </div>

</template>

<script>
  export default {
    name: 'Coupon',
    methods: {

    },
    data() {
      return {
        useData:[
          {
            a:"普通洗车",b:"春节套餐",c:"2018.09.09",d:"-1",e:"次"
          },
          {
            a:"充值",b:"",c:"2018.10.10",d:"+1000",e:"元"
          },
          {
            a:"消费",b:"洗车、保养",c:"2018.09.10",d:"-2000",e:"元"
          }
        ]
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
