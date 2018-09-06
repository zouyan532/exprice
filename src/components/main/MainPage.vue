<template>
  <div style="display: flex;flex-direction: column;height: 100%">
    <div id="tabs">
      <div v-if="currentTab==0">
        <wv-header title="微店首页">
        </wv-header>
        <SmallShop></SmallShop>
      </div>
      <div v-else-if="currentTab==1">
        <wv-header title="车中心">
        </wv-header>
        <CarCenter></CarCenter>
      </div>
      <div v-else-if="currentTab==2">
        <wv-header title="个人中心">
        </wv-header>
        <Individual></Individual>
      </div>
    </div>

    <!--底部tab页面切换 -->
    <!--<div class="bottomTabs">-->
    <wv-tabbar style="position: fixed">
      <!--is-on 为当前选中项-->
      <wv-tabbar-item to="/" :is-on="currentTab==0" @click="clickTab(0)">
      <span slot="icon" style="display: inline-block; position: relative;">
        <img class="weui-tabbar__icon" src="https://cdn.pixabay.com/photo/2015/03/18/09/31/prairie-679014__340.jpg"
             slot="icon">
      </span>
        店铺首页
      </wv-tabbar-item>
      <wv-tabbar-item to="/" :is-on="currentTab==1" @click="clickTab(1)">
      <span slot="icon" style="display: inline-block; position: relative;">
        <img class="weui-tabbar__icon" src="https://cdn.pixabay.com/photo/2015/03/18/09/29/the-scenery-679011__340.jpg"
             slot="icon">
      </span>
        车中心
      </wv-tabbar-item>
      <wv-tabbar-item to="/" :is-on="currentTab==2" @click="clickTab(2)">
      <span slot="icon" style="display: inline-block; position: relative;">
        <img class="weui-tabbar__icon" src="https://cdn.pixabay.com/photo/2015/03/28/16/40/lake-696098__340.jpg"
             slot="icon">
      </span>
        个人中心
      </wv-tabbar-item>
    </wv-tabbar>
    <!--</div>-->
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import CarCenter from '@/components/main/CarCenter';
  import SmallShop from '@/components/main/SmallShop';
  import Individual from '@/components/main/Individual';

  export default {
    name: 'MainPage',
    components: {
      'CarCenter': CarCenter,
      "SmallShop": SmallShop,
      "Individual": Individual
    },
    methods: {
      ...mapMutations([
        "clickTab"
      ])
    },
    data() {
      return {}
    },
    computed: {
      localComputed() {
      },
      ...mapState({
        currentTab:state=>state.mainPage.currentTab
      })
    },
    created() {
    }
  }
</script>
<style lang="scss" scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

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
    /*.bottomTabs {*/
    /*display: flex;*/
    /*position: fixed;*/
    /*bottom: 0;*/
    /*width: 100%;*/
    /*}*/
  }
</style>
