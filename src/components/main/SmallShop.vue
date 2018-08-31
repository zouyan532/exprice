<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <div class="wv-swipe__indicators" id="TestOne" >
      <wv-swipe :height="130" :auto="4000" >
        <wv-swipe-item style="background-color: #4df43e"></wv-swipe-item>
        <wv-swipe-item style="background-color: #4b77ff"></wv-swipe-item>
        <wv-swipe-item style="background-color: #f47d97"></wv-swipe-item>
      </wv-swipe>
    </div>
    <div class="TestTwo" id="TestTwo">
      <div>
        <div class="demo-tabs-wrap">
          <wv-tabs v-model="activeIndex">
            <wv-tab  :key="1" title="基础信息">
              <p style="text-align: left">新维保汽修官方旗舰店</p>

              <div id="star" style="text-align: left">
                <span>店铺评价：</span>
                <span v-for="classn in starArrs" :class="classn" class="staritem"></span>
                <span style="margin-left: 1.0rem">{{score}}分</span></br>
                <div style="display: flex;
                              width: 4.0rem;
                              text-overflow: ellipsis;
                              white-space: nowrap;">
                  <span>店铺地址：江苏省苏州市太仓市人民南路</span>
                </div>

                <!--<span  class="staritem onstar"></span>-->
                <!--<span  class="staritem onstar"></span>-->
                <!--<span  class="staritem halfstar"></span>-->
                <!--<span  class="staritem offstar"></span>-->
                <!--根据传递过来的分数得到对应的星星
                    4.7     四颗半星
                    1个位数代表的是全里亮，
                    2，当分数大于等于0.5  是一个半星
                    3.当全星和半星不足五个的时候，剩下的都是灰色的星星

                -->

              </div>
            </wv-tab>
            <wv-tab  :key="2" title="技术展示">
              内容 {{ 2 }}
            </wv-tab>
            <wv-tab  :key="3" title="用户点评">
              内容 {{ 3 }}
            </wv-tab>
          </wv-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TestOneName',
    // props:['score'],
    data() {
      return {
        msg: 'a',
        activeIndex: 1,
        score:2.8,
      }
    },
    mounted:function(){


    },
    computed:{
      starArrs(){
        var starArr=[];    //3.9
//              全星星的个数
        let onstar = parseInt(this.score);
        console.log(onstar);
        console.log(this.score);
//              是否有半星
        let halfStar = Math.round(this.score-onstar)?true:false;
//              有多少课灰色的星星

        for (var i=0;i<onstar;i++) {
          starArr.push('onstar')
        }
        console.log(halfStar);
        if(halfStar){
          starArr.push('halfstar')
        }
        while(starArr.length<5){
          starArr.push('offstar')
        }
        console.log(starArr);
        return starArr;
      }
    },
    methods:{
      testButton:function () {
        this.$router.push({name:'TestOneName'})
      },
      testMounte:function () {

      },

    }
  }


</script>

<style scoped>
  /*独立作用域的样式*/
  .staritem{
    display: inline-block;
    width:  1.2rem;
    height:  1.2rem;

  }
  /*全星星*/
  .onstar{
    background: url(../../assets/images/star24_on@2x.png);
    /*background-size:  1.6rem;*/
  }
  .halfstar{
    background: url('../../assets/images/star24_half@2x.png');

  }
  .offstar{
    background: url('../../assets/images/star24_off@2x.png');

  }

</style>


