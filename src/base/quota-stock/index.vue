<template>
  <div class="quota-stock-panel">
    <div class="top-area">
      <div class="row">
        <img class="chart" src="../../../res/images/index-chart.png" alt="图表" />
      </div>
      <div class="row">
        <div class="name">{{stock.name}}</div>
        <div class="percent">{{stockPercent(stock.percent)}}%</div>
      </div>
      <div class="row">
        <p class="desc">{{stock.desc}}</p>
      </div>
    </div>
    <div class="bottom-area">
      <ul>
        <li v-for="(item, index) in stock.list" :key="index">
          <div class="name">{{item.name}}</div>
          <div class="percent">{{stockPercent(item.percent)}}%</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { stockPercentMixin } from '../../common/js/mixin'

  export default {
    name: 'QuotaStock',
    mixins: [stockPercentMixin],
    props: {
      stock: {
        type: Object,
        default() {
          return {
            chart: '',
            name: '',
            percent: 0,
            desc: '',
            list: [
              {
                name: '',
                percent: 0
              }
            ]
          }
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .quota-stock-panel {
    border: #e6e6e6 solid 1px;
    border-radius: 5px;
    .top-area {
      padding: 12px;
      .row {
        .chart { width: 100%;}
        .name { line-height: 1.5; color: #000; font-size: 16px; font-weight: bold;}
        .percent { line-height: 1.5; color: #f62635; font-size: 16px;}
        .desc { line-height: 1.4; color: #a1a1a1; font-size: 13px; white-space: normal;}
        &:nth-child(2) { display: flex; justify-content: space-between; align-items: center; margin: 7px 0;}
      }
    }
    .bottom-area {
      background-color: #f8f8f8;
      ul {
        display: flex;
        li {
          flex: 1;
          padding: 8px 0;
          text-align: center;
          .name { line-height: 1.5; color: #777; font-size: 15px;}
          .percent { line-height: 1.5; color: #f62635; font-size: 14px;}
        }
      }

    }
  }
</style>
