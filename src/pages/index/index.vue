<template>
  <div class="container">
    <div class="header-wrap">
      <MainHeader></MainHeader>
    </div>
    <div class="tap-wrap">
      <fp-tab-bar v-model="topTab.defaultTab" show-slider>
        <fp-tab v-for="(item) in topTab.tabs" :label="item.label" :key="item.label"></fp-tab>
      </fp-tab-bar>
      <fp-tab-panels v-model="topTab.defaultTab">
        <fp-tab-panel label="动态">
          <Dynamic></Dynamic>
        </fp-tab-panel>
        <fp-tab-panel label="大势">
          <TabTrend></TabTrend>
        </fp-tab-panel>
        <fp-tab-panel label="选股">
          <StockPicking></StockPicking>
        </fp-tab-panel>
      </fp-tab-panels>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import MainHeader from "../../components/mainHead/index.vue";
import Dynamic from "../../components/dynamic/index.vue";
import StockPicking from "../../components/stock-picking/index.vue";
import TabTrend from "../../components/tab-trend/index.vue";
export default {
  components: {
    MainHeader,
    Dynamic,
    StockPicking,
    TabTrend
  },
  data() {
    return {
      topTab: {
        defaultTab: "动态",
        tabs: [
          {
            label: "动态"
          },
          {
            label: "大势"
          },
          {
            label: "选股"
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
.container {
  width: 100%;
  padding: 0;
  background-color: #f7f7f7;
  .header-wrap {
    margin-bottom: 44vw;
  }
  .tap-wrap {
    background: #fff;
  }
}
</style>
