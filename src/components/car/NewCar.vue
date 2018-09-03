<template>
  <div class="section">
    <wv-datetime-picker
      type="date"
      ref="datePicker"
      v-model="date"
      @confirm="onConfirm"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
    />
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
      <div class="timeItem">
        <span>新车上路时间</span>
        <div @click="openDatePicker">选择时间</div>
      </div>
      <div style="height: 80px;width: 1px;background-color: #eeeeee"></div>
      <div class="timeItem">
        <span>当前里程</span>
        <span>选择里程</span>
      </div>
    </div>
    <div style="height: 10px;background-color: #eeeeee"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: '',
        date:"",
      }
    },
    mounted() {
      this.name = this.$route.params.name
    },
    methods:{
      onConfirm(value){
        let date = this.Utils.getDateFormat1(new Date(value))
        console.log(date)

      },
      openDatePicker () {
        this.$refs.datePicker.open()
      },
    }
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
      margin-top:7rem;
      .timeItem{
        flex: 1;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
