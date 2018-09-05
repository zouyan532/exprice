<!--我的优惠劵-->
<template>
  <div id="Coupon">
    <wv-header title="我的优惠劵">
      <div class="btn-back" slot="left">
        <i class="iconfont icon-back" @click="$router.push('/')"><</i>
      </div>
    </wv-header>
    <div>
        <div class="demo-tabs-wrap">
          <wv-tabs>
            <wv-tab  :key="1" title="未使用">
              <div>
                <ul class="rollContent">
                  <li class='coupon-li' v-for="item in untapped">
                    <div>
                      <h1 class="leftIcon">{{item.a}}</h1>
                      <div class="rightBox">
                        <div class="firstS">
                          <div style="float: left">
                            <h2>{{item.b}}</h2>
                            <p>适用项目:{{item.c}}</p>
                          </div>
                          <div class="buttonSection"  style="float: right">
                            <span class="btnUse">立即使用</span>
                          </div>
                          <div style="clear: both"></div>
                        </div>
                        <div class="secondS">
                          <p>有效期:{{item.d}}</p>
                        </div>
                      </div>
                  </div>
                  </li>
                </ul>
              </div>
            </wv-tab>
            <wv-tab  :key="2" title="已失效">
              <div>
                <ul class="rollContent">
                  <li class='coupon-li' v-for="item in revoke">
                    <div>
                      <h1 class="leftIcon">{{item.a}}</h1>
                      <div class="rightBox">
                        <div class="firstS">
                          <div style="float: left">
                            <h2>{{item.b}}</h2>
                            <p>适用项目:{{item.c}}</p>
                          </div>
                          <div class="buttonSection"  style="float: right">
                          </div>
                          <div style="clear: both"></div>
                        </div>
                        <div class="secondS">
                          <p>有效期:{{item.d}}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </wv-tab>
          </wv-tabs>
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
        revoke:[
          {
            a:"￥200",b:"抵用券",c:"空气滤清",d:"2018/01/01-2020/01/01"
          },
          {
            a:"￥200",b:"减免劵",c:"空气滤清",d:"2018/01/01-2020/01/01"
          }],
        untapped:[
          {
            a:"免费",b:"免费券",c:"空气滤清",d:"2018/01/01-2020/01/01"
          },
          {
            a:"￥200",b:"抵用券",c:"空气滤清",d:"2018/01/01-2020/01/01"
          },
          {
            a:"￥200",b:"减免劵",c:"空气滤清",d:"2018/01/01-2020/01/01"
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
  html{
    background-color:#eeeeee;
  }

</style>
