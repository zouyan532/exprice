<template>
  <div class="section">
    <div class="head">
      <div class="carcantainer" @click="navigateToCar">
        <img class="icon" src="../../assets/images/icon_tabbar.png"/>
        <div class="carInfo">
          <span class="carType">长安福特-蒙迪欧</span>
          <span class="carTypeInfo">2013款 2.0L 时尚型</span>
        </div>
        <!--<div class="right">-->
        <div class="carNo">
          <span class="textCarNo">苏XXXXXX</span>
        </div>
        <div class="cardistance">
          <span class="textCarNo">5000公里</span>
        </div>

        <!--</div>-->
      </div>
    </div>
    <wv-tabs v-model="active" class="tabs" line-width="100">
      <wv-tab title="检测报告">
        <div class="report">
          <div class="nextCheck">
            <div class="nextCheckItem">
              <img class="checkIcon" src="../../assets/images/icon_tabbar.png"/>
              <div class="itemdiv">
                <span style="color: #c0bfc4;font-size: 8px">下次</span>
                <span style="color: #2c3e50;font-size: 12px">保养里程数：500KM</span>
              </div>
            </div>
            <div class="nextCheckItem">
              <img class="checkIcon" src="../../assets/images/icon_tabbar.png"/>
              <div class="itemdiv">
                <span style="color: #c0bfc4;font-size: 8px">下次</span>
                <span style="color: #2c3e50;font-size: 12px">保养时间：2018.01</span>
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div class="carStatus">
            <span class="carStatusText">| 车辆状况</span>
            <div class="states">
              <span class="stateText">{{`紧急处理(${states.A})`}}</span>
              <span class="stateText">{{`密切关注(${states.B})`}}</span>
              <span class="stateText">{{`状态良好(${states.C})`}}</span>
            </div>
          </div>
          <div class="stateDetailList">
            <div v-for="(item,index) in statusDetail" :key="index">
              <div class="StatusItemName" @click="clickExpand(index)">
                <span style="margin-left:0.1rem;width: 70px;font-size: 12px">{{`· ${item.itemName}`}}</span>
                <img style="margin-left: 0.3rem;width: 14px;height: 10px" :src="expandImageList[index]"/>
                <div style="flex: 1"></div>
                <div class="dotdiv">
                  <span style="color: #e64340;flex:1;text-align: center">{{item.ACount==0?"":item.ACount}}</span>
                  <span style="color: #ffbe00;flex:1;text-align: center">{{item.BCount==0?"":item.BCount}}</span>
                  <span style="color: #0bb20c;flex:1;text-align: center">{{item.CCount==0?"":item.CCount}}</span>
                </div>
              </div>
              <div v-if="item.isExpand">
                <table style="margin-right: 10px; border:1px solid #eeeeee; border-collapse: collapse;" width="100%">
                  <tr v-for="(part,partIndex) in item.itemList" :key="partIndex">
                    <td style="border:1px solid #eeeeee;font-size: 12px;text-align: center">{{part.name}}</td>
                    <td style="color: #e64340;border:1px solid #eeeeee;width: 76.6px;text-align: center;font-weight:900">{{part.status==0?"·": ""}}</td>
                    <td style="color: #ffbe00;border:1px solid #eeeeee;width: 76.6px;text-align: center;font-weight:900">{{part.status==1?"·": ""}}</td>
                    <td style="color: #0bb20c;border:1px solid #eeeeee;width: 76.6px;text-align: center;font-weight:900">{{part.status==2?"·": ""}}</td>
                  </tr>

                </table>
              </div>
            </div>
          </div>
        </div>
      </wv-tab>
      <wv-tab title="车辆提醒">
        <div class="remind">
          <div class="illgelRemind">
            <span style="margin-left: 0.7rem;margin-top: 22px">| 违章提醒</span>
            <div class="refreshTimeDiv">
              <span style="font-size: 10px">{{`上次刷新:${refreshTime}`}}</span>
              <img src="../../assets/images/logo.png"
                   style="width: 20px;height: 20px;margin-left: 10px;margin-right: 20px"/>
            </div>
          </div>
          <div class="illgelDetail">
            <div class="illgelItem">
              <span style="font-size: 15px;color: #c0bfc4">违章次数</span>
              <span style="font-size: 15px;color: #e64340;margin-top: 5px">3</span>
            </div>
            <div class="illgelItem">
              <span style="font-size: 15px;color: #c0bfc4">扣分</span>
              <span style="font-size: 15px;color: #e64340;margin-top: 5px">6</span>
            </div>
            <div class="illgelItem">
              <span style="font-size: 15px;color: #c0bfc4">罚款金额</span>
              <span style="font-size: 15px;color: #e64340;margin-top: 5px">600</span>
            </div>
          </div>
          <div style="height: 10px;background-color: #eeeeee"></div>
          <div class="illgelRemind">
            <span style="margin-left: 0.7rem;margin-top: 22px">| 车辆保险</span>
          </div>
          <div class="illgelDetail">
            <div class="illgelItem">
              <span style="font-size: 15px;color: #c0bfc4">保险名称</span>
              <span style="font-size: 17px;color: #666666;margin-top: 5px">平安车险</span>
            </div>
            <div class="illgelItem">
              <span style="font-size: 15px;color: #c0bfc4">保险时间</span>
              <span style="font-size: 17px;color: #666666;margin-top: 5px">2016.02.05</span>
            </div>
          </div>
          <div style="height: 10px;background-color: #eeeeee"></div>
        </div>
      </wv-tab>
      <wv-tab title="服务记录">
        <div class="service">
          <div class="all" @click="clickExpandAll">
            <span style="margin-left: 0.7rem;margin-top: 13px">全部</span>
            <img :src="isExpandAllImage" style="margin-left: 0.8rem;width: 18px;height: 14px;align-self: center"/>
          </div>
          <div style="height: 10px;background-color: #eeeeee"></div>
          <div v-if="isExpandAll">
            <div v-for="(item,index) in orderList" :key="index" class="orderListItem">
              <div class="orderListItemDetail">
                <div v-if="item.type==0" style="height: 7rem;background-color: #e64340;width: 5px"></div>
                <div v-else-if="item.type==1" style="height: 7rem;background-color: #10aeff;width: 5px"></div>
                <div v-else="item.type==2" style="height: 7rem;background-color: #1AAD19;width: 5px"></div>
                <div class="orderInfo">
                  <div class="nameAndType">
                    <span>{{item.name}}</span>
                    <div class="typediv">
                      <span
                        style="color: #c0bfc4;font-size: 8px;margin-top: 0;text-align: center">{{item.status}}</span>
                    </div>
                    <div
                      style="height: 1px;background-color: #eeeeee;position: absolute;left: 0;right: 0px;top: 2.5rem;"></div>
                  </div>
                  <div class="timeAndengineer">
                    <span style="margin-top: 3rem">{{`时间：${item.time}`}}}</span>
                    <div style="display: flex;flex-direction: row;justify-content: space-between">
                      <span>{{`技师：${item.engineer}`}}</span>
                      <div @click="clickCancel(index)"
                        style="">{{item.type==0?"撤销":item==2?"立即点评":""}}</div>
                    </div>
                  </div>

                </div>
              </div>
              <div style="height: 10px;background-color: #eeeeee"></div>
            </div>
          </div>
        </div>
      </wv-tab>
    </wv-tabs>
    <div style="height: 50px;width: 100%;background-color: transparent"></div>
  </div>
</template>

<script>
  export default {
    name: 'CarCenter',
    methods: {
      clickExpandAll() {
        this.isExpandAll = !this.isExpandAll
        this.isExpandAllImage = this.isExpandAll ? require("../../assets/images/yellow_arrow_down.png") : require("../../assets/images/yellow_arrow_up.png")
      },
      clickExpand(index) {
        let {expandImageList, statusDetail} = this
        expandImageList[index] = statusDetail[index].isExpand ?
          require("../../assets/images/yellow_arrow_down.png") :
          require("../../assets/images/yellow_arrow_up.png")
        statusDetail[index].isExpand = !statusDetail[index].isExpand
        this.$forceUpdate()
      },
      clickCancel(index){

      },
      navigateToCar(){
        this.$router.push({
          path:'SelectCar'
        })
      }
    },
    data() {
      return {
        // tabs:["检测报告","车辆提醒","服务记录"]
        isExpandAllImage: require("../../assets/images/yellow_arrow_down.png"),
        isExpandAll: true,
        refreshTime: "0704 14:00",
        states: {
          A: "2",
          B: "2",
          C: "11"
        },
        orderList: [{
          name: "保养，洗车",
          status: "预约",
          time: "2017-12-12",
          engineer: "张小二",
          type: 0
        }, {
          name: "保养，洗车",
          status: "未完成",
          time: "2017-12-12",
          engineer: "张小二",
          type: 1
        }, {
          type: 2,
          name: "保养，洗车",
          status: "已完成",
          time: "2017-12-12",
          engineer: "张小二"
        }, {
          type: 2,
          name: "保养，洗车",
          status: "已完成",
          time: "2017-12-12",
          engineer: "张小二"
        }, {
          type: 2,
          name: "保养，洗车",
          status: "已完成",
          time: "2017-12-12",
          engineer: "张小二"
        },],
        expandImageList: [
          require("../../assets/images/yellow_arrow_down.png"),
          require("../../assets/images/yellow_arrow_down.png"),
          require("../../assets/images/yellow_arrow_down.png"),
        ],
        statusDetail: [{
          itemName: "舱内部件",
          isExpand: false,
          ACount: 0,
          BCount: 2,
          CCount: 7,
          itemList: [{
            name: "部件A",
            status: 0
          }, {
            name: "部件B",
            status: 1
          }, {
            name: "部件C",
            status: 2
          }, {
            name: "部件D",
            status: 2
          },
          ]
        }, {
          itemName: "轮胎制动",
          ACount: 1,
          BCount: 3,
          isExpand: false,
          CCount: 0,
          itemList: [{
            name: "部件A",
            status: 1
          }, {
            name: "部件B",
            status: 1
          }, {
            name: "部件C",
            status: 2
          }, {
            name: "部件D",
            status: 2
          },
          ]
        }, {
          itemName: "变速箱系统",
          ACount: 0,
          isExpand: false,
          BCount: 0,
          CCount: 7,
          itemList: [{
            name: "部件A",
            status: 1
          }, {
            name: "部件B",
            status: 1
          }, {
            name: "部件C",
            status: 2
          }, {
            name: "部件D",
            status: 2
          },
          ]
        }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .section {
    text-align: left;
    .head {
      position: absolute;
      top: 50px;
      background-color: #e64340;
      width: 100%;
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
        .carNo {
          top: 2rem;
          position: absolute;
          right: 1rem;
          background-color: #ffbe00;
          border-bottom-left-radius: 20px;
          border-top-left-radius: 20px;
          padding-left: 12px;
          display: flex;
          align-items: center;
          .span {
            font-size: 20px;
          }
        }
        .cardistance {
          top: 4rem;
          position: absolute;
          right: 1rem;
          background-color: #ffbe00;
          border-bottom-left-radius: 20px;
          border-top-left-radius: 20px;
          padding-left: 12px;
          display: flex;
          align-items: center;
          .span {
            font-size: 20px;
          }
        }

        /*}*/
      }
    }
    .tabs {
      margin-top: 8rem;
      .tabText {
        color: #0d0d0d;
      }
      .report {
        flex-direction: column;
        display: flex;
        .nextCheck {
          flex-direction: row;
          display: flex;
          .nextCheckItem {
            display: flex;
            flex-direction: row;
            align-items: center;
            flex: 1;
            margin-left: 1rem;
            margin-right: 1rem;
            height: 5rem;
            .itemdiv {
              display: flex;
              flex-direction: column;
              margin-left: 10px;
            }
            .checkIcon {
              height: 30px;
              width: 30px;
            }
          }
        }
      }
    }
    .line {
      height: 1px;
      width: 100%;
      background-color: #eeeeee;
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
      .states {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 0.7rem;
        width: 230px;
        .stateText {
          font-size: 12px;
          flex: 1;
          text-align: center;
        }
      }
    }
    .stateDetailList {
      margin-left: 10px;
      margin-right: 10px;
      .StatusItemName {
        background-color: #eeeeee;
        display: flex;
        flex-direction: row;
        align-items: center;
        .dotdiv {
          width: 230px;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
      }
    }
    .remind {
      flex-direction: column;
      display: flex;
      .illgelRemind {
        height: 3rem;
        flex-direction: row;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eeeeee;
        .refreshTimeDiv {
          align-self: center;
          align-items: center;
          flex-direction: row;
          display: flex;
        }
      }
      .illgelDetail {
        flex-direction: row;
        display: flex;
        height: 6rem;
        align-items: center;
        .illgelItem {
          flex-direction: column;
          display: flex;
          align-items: center;
          flex: 1;
        }
      }
    }
    .service {
      flex-direction: column;
      display: flex;
      .all {
        height: 3rem;
        flex-direction: row;
        display: flex;
      }
      .orderListItem {
        height: 140px;
        flex-direction: column;
        display: flex;
        .orderListItemDetail {
          height: 110px;
          flex-direction: row;
          display: flex;
          .orderInfo {
            flex-direction: column;
            margin-left: 30px;
            display: flex;
            .nameAndType {
              position: absolute;
              left: 35px;
              right: 20px;
              flex-direction: row;
              display: flex;
              align-items: center;
              height: 2.5rem;
              justify-content: space-between;
              .typediv {
                border-radius: 8px;
                background-color: #edff66;
                width: 40px;
                height: 20px;
                padding: 1px;
                align-items: center;
                display: flex;
                justify-content: center;
              }
            }
            .timeAndengineer {
              position: absolute;
              left: 35px;
              right: 20px;
              flex-direction: column;
              display: flex;
            }
          }
        }
      }
    }

  }
</style>
