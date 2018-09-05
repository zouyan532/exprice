<!--我的会员卡-->
<template>
  <div id="MembershipCard" >
    <wv-header title="我的会员卡" >
      <div class="btn-back" slot="left">
        <i class="iconfont icon-back" @click="$router.push('/')"><</i>
      </div>
    </wv-header>
    <div>
      <ul class="rollContent">
        <li style="margin: 10px;color: white;">
          <div class="membershipCard">
            <h4 style="padding: 10px 0 10px 0;margin-left: -100px">你好，尊敬的黄金会员！</h4>
            <div class="rightBox" style="position: inherit;margin-left: 15px">
              <div class="firstS">
                <div style="float: left">
                  <span style="font-size: 18px;line-height: 18px">99999</span> <p style="float: left">金额：</p>
                  <p>卡号：6222022615555559422</p>
                </div>
                <div style="clear: both"></div>
              </div>
              <div class="secondS">
                <p>有效期:2018</p> <span style=" width: 60px; font-size: 12px;text-align: center;float: right;color: black;    margin-top: -18px;    margin-right: 10px;border: 1px solid #bbb6b0; border-radius: 10px;background-color:  #bbb6b0" @click="useHistory">使用记录</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <h5 style="float: left;margin-left: 10px">| 套餐项目</h5>
    <div>
      <ul class="rollContent" style="margin-top:45px">
        <li style="margin: 10px;color: white;" v-for="(item,index) in menuData">
          <div class="membershipCard_item">
            <h4 style="padding: 2px;">{{ item.a }}</h4>
            <h5>{{ item.b }}</h5>
          </div>
          <!--详细信息-->
          <div class="membershipCard_item_list" v-if="detailShow">
            <div>
              <ul>
                <li v-for="(items) in item.c" class="repeatLi">
                  <div class="firstS">
                    <div style="float: left;color: black">
                      <p>{{items.e}}</p>
                      <p style="font-size: 10px;margin-left: 12px;">{{items.f}}</p>
                    </div>
                    <div  class="chancePoint">
                      <span style="float: left;margin-left: 10px;">共{{items.g}}次，剩余{{items.h}}次</span>
                      <span class="useButton" v-if="items.h>0">使用</span>
                    </div>
                    <div style="clear: both"></div>
                  </div>
                </li>
              </ul>
            </div>

          </div>
          <!--信息信息展开收起-->
          <div class="membershipCard_item_hide" @click="detailDataShow(item.id)" >
            <span  style="line-height: 14px;font-size: 14px" v-if="!detailShow">展开详情</span>
            <img  style="margin-left: 0.3rem;width: 14px;height: 10px" src="../../assets/images/yellow_arrow_down.png" v-if="!detailShow"/>
            <span  style="line-height: 14px;font-size: 14px"  v-if="detailShow">收起</span>
            <img  style="margin-left: 0.3rem;width: 14px;height: 10px" src="../../assets/images/yellow_arrow_up.png"  v-if="detailShow"/>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'MembershipCard',
    methods: {
      detailDataShow(){
        if(this.detailShow){
          this.detailShow=false;
        }else{
          this.detailShow=true;

        }
      },
      useHistory(){
        this.$router.push({
          path:'UseHistory'
        })
      }
    },
    data() {
      return {
        detailShow:false,
        menuData:[{id:1,a:"超值节日套餐",b:"2018.01.01至2020.0101",c:[{e:"更换变速机箱",f:"变速箱品牌：路途乐",g:"3",h:"1"},{e:"更换防冻液",f:"防冻液品牌：韦斯特",g:"2",h:"0"}]},{id:2,a:"春节套餐",b:"2018.01.01至2020.0101",c:[{e:"更换悬架弹簧",f:"悬架弹簧品牌：慕贝尔",g:"3",h:"1"},{e:"更换稳定杆",f:"稳定杆品牌：克恩里伯斯",g:"2",h:"0"}]}],
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
  .membershipCard{
    /*background-image: url("https://cdn.pixabay.com/photo/2015/03/28/16/40/lake-696098__340.jpg");*/
    background-color:#675a4a;
    width: 100%;
    height: 128px;
  }
  .membershipCard_item{
    background-color:#675a4a;
    width: 100%;
    height: 52px;
    color: #b39e74;
    h7{
      color: #7e746a;
    }
  }
  .membershipCard_item_list{
    border: 1px  white solid;
    width: 100%;
  }
  .membershipCard_item_hide{
    background-color:#bbb6b0;
    width: 100%;
    height: 20px;
    color: white;
  }
  .repeatLi{
    background-color: #bbb6b0;
    margin-bottom: 2px;
    list-style: none;
    height: 50px;
    overflow: hidden;
  }
  #MembershipCard .firstS{
    position: relative;
  }
  .chancePoint{
    position: absolute;
    font-size: 12px;
    line-height: 42px;
    left: 55%;
  }
  .useButton{
    margin-left: 10px;
    width: 100%;
    padding: 5px 10px;
    background-color: yellowgreen;
    letter-spacing: 0.43px;
    border-radius: 10px;
  }
</style>
