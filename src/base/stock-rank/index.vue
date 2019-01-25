<template>
  <div class="stock-rank-panel">
    <div class="row">
      <div class="left-area">
        <p class="title">{{rank.title}}</p>
      </div>
      <div class="right-area">
        <div class="percent">{{stockPercent(rank.percent)}}%</div>
        <div class="desc">{{rank.desc}}</div>
      </div>
    </div>
    <div class="row">
      <div class="today-buy">
        <span class="text">今日买入：</span>
        <em class="stock" v-for="(item, index) in rank.stocks" :key="index">{{item}}</em>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { stockPercentMixin } from '../../common/js/mixin'

  export default {
    name: 'StockRank',
    mixins: [stockPercentMixin],
    props: {
      rank: {
        type: Object,
        default() {
          return {
            title: '',
            percent: 0,
            desc: '',
            stocks: []
          }
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .stock-rank-panel {
    border-radius: 5px;
    padding: 15px;
    background-color: #f8f8f8;
    .row {
      .left-area .title { line-height: 1.3; color: #000; font-size: 18px;}
      .right-area {
        width: 150px;
        text-align: right;
        .percent { line-height: 1.5; color: #f62635; font-size: 18px;}
        .desc { line-height: 1.5; color: #a2a2a2; font-size: 12px;}
      }
      .today-buy {
        margin-top: 17px;
        line-height: 1.3;
        font-size: 12px;
        .text { color: #a2a2a2;}
        .stock { margin-right: 15px; color: #b09a55; font-style: normal;}
      }
      &:first-child { display: flex; justify-content: space-between; align-items: center;}
    }
  }
</style>
