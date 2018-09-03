<template>
  <div class="section">
    <wv-datetime-picker
      type="date"
      ref="datePicker"
      @confirm="onConfirm"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
    />
    <wv-popup
      :visible.sync="isShowSelectPronicePop"
      :close-on-click-mask="true"
    >
      <div class="proviceShort">
        <div class="proviceShortItem" v-for="(item,index) in listProniceShort" @click="clickproviceShort(item)"
             :key="index" :class="{'isNull' : index+1 === listProniceShort.length}">
          <span>{{item}}</span>
        </div>
      </div>
    </wv-popup>
    <!--<wv-popup>-->
      <!--<div class="proviceShortItem" v-for="(item,index) in pacList" @click="clickproviceShort(item)"-->
           <!--:key="index" :class="{'isNull' : index+1 === listProniceShort.length}">-->
        <!--<span>{{item}}</span>-->
      <!--</div>-->
    <!--</wv-popup>-->
    <div class="head">
      <div class="carcantainer">
        <img class="icon" src="../../assets/images/icon_tabbar.png"/>
        <div class="carInfo">
          <span class="carType">长安福特-蒙迪欧</span>
          <span class="carTypeInfo">2013款 2.0L 时尚型</span>
        </div>
      </div>
    </div>
    <div class="timeAndDistance">
      <div class="timeItem" @click="openDatePicker">
        <span>新车上路时间</span>
        <span>{{date}}</span>
      </div>
      <div style="height: 80px;width: 1px;background-color: #eeeeee"></div>
      <div class="timeItem">
        <span>当前里程</span>
        <span>选择里程</span>
      </div>
    </div>
    <div style="height: 10px;background-color: #eeeeee"></div>
    <div class="carStatus">
      <span class="carStatusText">| 违章提醒需要的信息</span>
    </div>
    <div class="CarNoAndCity">
      <div class="timeItem" @click="isShowSelectPronicePop=true">
        <span>车牌</span>
        <span>{{carNoProvince}}</span>
      </div>
      <div style="height: 80px;width: 1px;background-color: #eeeeee"></div>
      <div class="timeItem">
        <span>当前里程</span>
        <span>选择里程</span>
      </div>
    </div>
  </div>
</template>
<script>
  import pacList from '../../assets/pca-code'
  export default {
    data() {
      return {
        name: '',
        date: "选择时间",
        carNoProvince: "苏",
        carNoNumber: "",
        isShowSelectPronicePop: false,
        listProniceShort: ["京", "津", "冀", "晋", "蒙", "辽", "吉", "黑", "沪", "苏", "浙", "皖", "闽", "赣", "鲁", "豫", "鄂", "湘", "粤", "桂", "琼", "川", "贵", "云", "渝", "藏", "陕", "甘", "青", "宁", "新", "港", "澳", "台", ""],
        pacList: []
      }
    },
    mounted() {
      this.name = this.$route.params.name
    },
    methods: {
      onConfirm(value) {
        this.date = this.Utils.getDateFormat1(new Date(value))
      },
      openDatePicker() {
        this.$refs.datePicker.open()
      },
      clickproviceShort(item) {
        this.carNoProvince = item
        this.isShowSelectPronicePop = false
      },
      getPacList() {
        this.pacList = pacList
      }
    },
    created() {
      this.getPacList()
    },
  }
</script>
<style lang="scss">
  .section {
    text-align: left;
    .head {
      background-color: #e64340;
      width: 100%;
      position: absolute;
      top: 0px;
      display: flex;
      flex: 1;
      height: 7rem;
      /*padding: 1rem;*/
      .carcantainer {
        background-color: #ffffff;
        flex-direction: row;
        align-items: center;
        display: flex;
        flex: 1;
        border-radius: 8px;
        /*width: 100%;*/
        height: 5rem;
        padding-left: 1rem;
        margin: 1rem;
        .icon {
          width: 3rem;
          height: 3rem;
        }
        .carInfo {
          display: flex;
          flex-direction: column;
          padding-left: 1rem;
          .carType {
            font-size: 1rem;
          }
          .carTypeInfo {
            font-size: 0.7rem;
          }
        }
      }
    }
    .timeAndDistance {
      display: flex;
      flex-direction: row;
      height: 90px;
      align-items: center;
      justify-content: center;
      margin-top: 7rem;
      .timeItem {
        flex: 1;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
      }
    }
    .CarNoAndCity {
      display: flex;
      flex-direction: row;
      height: 80px;
      align-items: center;
      justify-content: center;
      .timeItem {
        flex: 1;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
      }
    }
    .carStatus {
      flex-direction: row;
      display: flex;
      align-items: center;
      height: 2.5rem;
      justify-content: space-between;
      .carStatusText {
        margin-left: 0.7rem;
      }
    }
    .proviceShort {
      flex-wrap: wrap;
      display: flex;
      flex: 1;
      flex-direction: row;
      .proviceShortItem {
        width: 20%;
        height: 30px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 0.5px solid #eeeeee;
        background-color: #ffffff;
        &.isNull {
          background-color: #eeeeee;
        }
      }
    }
  }
</style>
