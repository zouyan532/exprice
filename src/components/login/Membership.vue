<!--我的会员卡-->
<template>

  <div id="MembershipCard" >
    <!--数据-->
    <div>
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
            <div class="membershipCard_item_list" :id="'detailShow' + item.id+''" hidden=true>
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
                        <span class="useButton" v-if="items.h>0" @click="showQRCode">使用</span>
                      </div>
                      <div style="clear: both"></div>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
            <!--信息信息展开收起-->
            <div class="membershipCard_item_hide" @click="detailDataShow(item.id)" >
              <span :id="'span' + item.id+''" style="line-height: 14px;font-size: 14px">展开详情</span>
              <img  :id="'img' + item.id+''" style="margin-left: 0.3rem;width: 14px;height: 10px" src="../../assets/images/yellow_arrow_down.png" />
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!--弹窗-->
    <div class="Dialog" style="background-color: rgb(156, 156, 156)">
      <el-dialog
        title=""
        :visible.sync="dialogVisible"
        width="80%"
        :show-close="false"
        :before-close="handleClose">
        <i class="el-icon-circle-close closeButton" @click="closeDialog"></i>
        <div class="fakeLine"></div>
        <img src="https://cdn.pixabay.com/photo/2015/03/18/09/31/prairie-679014__340.jpg"  style="border-top-left-radius:5px;border-top-right-radius:5px;" width=100% height=80% >
        <div style="background-color: white ;margin-top: -5px;border-bottom-right-radius:5px;border-bottom-left-radius:5px;">
          <h3>会员二维码</h3>
          <p>请向店家出示二维码</p>
        </div>

      </el-dialog>

    </div>


  </div>


</template>

<script>
  export default {
    name: 'MembershipCard',
    methods: {
      detailDataShow(id){
        var msg=document.getElementById('span'+id).innerText;
        if(msg=="收起"){
          document.getElementById('span'+id).innerText="展开详情";
          document.getElementById('detailShow'+id).hidden=true;
          document.getElementById("img"+id).attr=("src","../../assets/images/yellow_arrow_down.png");
        }else{
          this.detailShow=true;
          document.getElementById('span'+id).innerText="收起";
          document.getElementById('detailShow'+id).hidden=false;
          document.getElementById("img"+id).attr=("src","../../assets/images/yellow_arrow_up.png");

        }
      },
      useHistory(){
        this.$router.push({
          path:'UseHistory'
        })
      },
      showQRCode(){
        this.dialogVisible=true;
      },
      handleClose(done) {
        done();
      },
      closeDialog(){
        this.dialogVisible=false;
      }
    },
    data() {
      return {
        showMsg:"展开详情",
        dialogVisible: false,
        QRCode:false,
        menuData:[{id:1,a:"超值节日套餐",b:"2018.01.01至2020.0101",c:[{e:"更换变速机箱",f:"变速箱品牌：路途乐",g:"3",h:"1"},{e:"更换防冻液",f:"防冻液品牌：韦斯特",g:"2",h:"0"}]},{id:2,a:"春节套餐",b:"2018.01.01至2020.0101",c:[{e:"更换悬架弹簧",f:"悬架弹簧品牌：慕贝尔",g:"3",h:"0"},{e:"更换稳定杆",f:"稳定杆品牌：克恩里伯斯",g:"2",h:"0"}]}],
      }
    }
  }
</script>

<style lang="scss">

  .el-dialog__headerbtn .el-dialog__close {
    color: white;
  }
  .el-dialog{
    background-color: transparent;
    box-shadow:none;
    border-radius: 0;
  }
  @import url("//unpkg.com/element-ui@2.4.6/lib/theme-chalk/index.css");
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
  .el-dialog__body{
    position: relative;
  }
  .fakeLine{
    width: 1px;
    background-color: white;
    height: 40px;
    opacity: 0.5;
    text-align: right;
    position: absolute;
    top: -10px;
    right: 40px;
  }
  .closeButton{
    position: absolute;
    right: 28px;
    font-size: 24px;
    top: -30px;
    color: white;
  }
</style>
