<template>
  <div class="stock-picking">
    <div class="toptic-stock">
      <Module-title text="主题选股" path="../path" />
      <fp-scroll ref="scroll" :data="topticStocks" direction="horizontal" class="horizontal-scroll-list-wrap">
        <div class="scroller-wrapper">
          <div class="toptic-stock-item list-item" v-for="(item, index) in topticStocks" :key="index">
            <Toptic-stock-panel :stock="item" />
          </div>
        </div>
      </fp-scroll>
    </div>
    <div class="quota-stock">
      <Module-title text="指标选股" path="../path" />
      <fp-scroll ref="scroll2" :data="quotaStocks" direction="horizontal" class="horizontal-scroll-list-wrap">
        <div class="scroller-wrapper">
          <div class="quota-stock-item" v-for="(item, index) in quotaStocks" :key="index">
            <Quota-stock-panel :stock="item" />
          </div>
        </div>
      </fp-scroll>
    </div>
    <div class="stock-rank">
      <Module-title text="龙虎榜" path="../path" />
      <div class="stock-rank-item" v-for="(item, index) in stockRank" :key="index">
        <Stock-rank-panel :rank="item" />
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ModuleTitle from '../../base/module-title/index.vue'
  import TopticStockPanel from '../../base/topic-stock/index.vue'
  import QuotaStockPanel from '../../base/quota-stock/index.vue'
  import StockRankPanel from '../../base/stock-rank/index.vue'

  export default {
    name: 'StockPicking',
    data() {
      return {
        topticStocks: [
          {
            title: '期货概念',
            percent: 4.98,
            desc: '昨日，中金所宣布下调股指期货保证金及其他货币基金',
            list: [
              {
                name: '德赛西威',
                percent: 1.13
              },
              {
                name: '中原协和',
                percent: -0.52
              },
              {
                name: '浙江医药',
                percent: 2.83
              }
            ]
          },
          {
            title: '期货概念2',
            percent: 1.34,
            desc: '昨日，中金所宣布下调股指期货保证金及其他货币基金',
            list: [
              {
                name: '德赛西威',
                percent: 1.13
              },
              {
                name: '中原协和',
                percent: -0.52
              },
              {
                name: '浙江医药',
                percent: 2.83
              }
            ]
          },
          {
            title: '期货概念3',
            percent: -0.11,
            desc: '昨日，中金所宣布下调股指期货保证金及其他货币基金',
            list: [
              {
                name: '德赛西威',
                percent: 1.13
              },
              {
                name: '中原协和',
                percent: -0.52
              },
              {
                name: '浙江医药',
                percent: 2.83
              }
            ]
          },
          {
            title: '期货概念4',
            percent: -0.11,
            desc: '昨日，中金所宣布下调股指期货保证金及其他货币基金',
            list: [
              {
                name: '德赛西威',
                percent: 1.13
              },
              {
                name: '中原协和',
                percent: -0.52
              },
              {
                name: '浙江医药',
                percent: 2.83
              }
            ]
          },
          {
            title: '期货概念5',
            percent: -0.11,
            desc: '昨日，中金所宣布下调股指期货保证金及其他货币基金',
            list: [
              {
                name: '德赛西威',
                percent: 1.13
              },
              {
                name: '中原协和',
                percent: -0.52
              },
              {
                name: '浙江医药',
                percent: 2.83
              }
            ]
          }
        ],
        quotaStocks: [
          {
            chart: '../../../res/images/index-chart.png',
            name: '双底',
            percent: 2.35,
            desc: '当价格在某时段内连续2次下跌至相约低点时而形成的走势',
            list: [
              {
                name: '德赛西威',
                percent: 1.13
              },
              {
                name: '森特股份',
                percent: 1.13
              }
            ]
          },
          {
            chart: '../../../res/images/index-chart.png',
            name: '双底',
            percent: 2.35,
            desc: '当价格在某时段内连续2次下跌至相约低点时而形成的走势',
            list: [
              {
                name: '德赛西威',
                percent: 1.13
              },
              {
                name: '森特股份',
                percent: 1.13
              }
            ]
          },
          {
            chart: '../../../res/images/index-chart.png',
            name: '双底',
            percent: 2.35,
            desc: '当价格在某时段内连续2次下跌至相约低点时而形成的走势',
            list: [
              {
                name: '德赛西威',
                percent: 1.13
              },
              {
                name: '森特股份',
                percent: 1.13
              }
            ]
          },
          {
            chart: '../../../res/images/index-chart.png',
            name: '双底',
            percent: 2.35,
            desc: '当价格在某时段内连续2次下跌至相约低点时而形成的走势',
            list: [
              {
                name: '德赛西威',
                percent: 1.13
              },
              {
                name: '森特股份',
                percent: 1.13
              }
            ]
          },
          {
            chart: '../../../res/images/index-chart.png',
            name: '双底',
            percent: 2.35,
            desc: '当价格在某时段内连续2次下跌至相约低点时而形成的走势',
            list: [
              {
                name: '德赛西威',
                percent: 1.13
              },
              {
                name: '森特股份',
                percent: 1.13
              }
            ]
          },
          {
            chart: '../../../res/images/index-chart.png',
            name: '双底',
            percent: 2.35,
            desc: '当价格在某时段内连续2次下跌至相约低点时而形成的走势',
            list: [
              {
                name: '德赛西威',
                percent: 1.13
              },
              {
                name: '森特股份',
                percent: 1.13
              }
            ]
          }
        ],
        stockRank: [
          {
            title: '信达证券大石桥交通街营业部',
            percent: 61.23,
            desc: '买入后5日平均涨幅',
            stocks: ['奥飞娱乐', '亚翔集成']
          },
          {
            title: '信达证券大石桥交通街营业部',
            percent: 61.23,
            desc: '买入后5日平均涨幅',
            stocks: ['奥飞娱乐', '亚翔集成']
          }
        ]
      }
    },
    components: {
      ModuleTitle,
      TopticStockPanel,
      QuotaStockPanel,
      StockRankPanel
    }
  };
</script>

<style lang="scss" scoped>
  .toptic-stock, .quota-stock, .stock-rank {
    margin-bottom: 10px; padding: 17px 0 20px 0; background-color: #fff;
    .module-title { margin-bottom: 13px;}
    .horizontal-scroll-list-wrap /deep/ .cube-scroll-content { display: inline-block;}
    .scroller-wrapper { white-space: nowrap; padding: 0 7px;}
    .toptic-stock-item,
    .quota-stock-item { display: inline-block; margin: 0 7px;}
    .toptic-stock-panel { width: 280px;}
    .quota-stock-panel { width: 210px;}
    .stock-rank-item { margin-bottom: 15px;}
    .stock-rank-panel { margin: 0 auto; width: calc(100% - 28px);}
  }
  .stock-rank { padding-bottom: 0;}
</style>
