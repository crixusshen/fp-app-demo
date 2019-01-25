<template>
  <div class="tab-trend">
    <div class="sections">
      <div class="module-title-container">
        <Module-title text="沪深市场" path="../path"/>
      </div>
      <fp-scroll :data="stockIndexes" direction="horizontal" class="horizontal-scroll-list-wrap">
        <div class="scroll-wrapper">
          <div class="stock-indexes" v-for="item in stockIndexes">
            <h3>{{item.title}}</h3>
            <h2>{{item.indexData}}</h2>
            <h5>{{item.percent}}</h5>
          </div>
        </div>
      </fp-scroll>
      <div class="strip-diagram-container">
        <div class="strip-diagram">
          <span class="strip-parts increase" :style="{ width: increasedWidth + 'px' }"></span>
          <span class="strip-parts equal" :style="{ width: equalWidth + 'px' }"></span>
          <span class="strip-parts decrease" :style="{ width: decreasedWidth + 'px' }"></span>
        </div>
        <div class="diagram-text">
          <p class="increase-color">上涨{{increaseNum}}只</p>
          <p class="equal-color">平{{equalNum}}只</p>
          <p class="decrease-color">下跌{{decreaseNum}}只</p>
        </div>
      </div>

      <div class="trend-stop-container">
        <div class="increase-stop">
          <p class="equal-color title">涨停数量</p>
          <p class="increase-color">{{increaseStopNum}}</p>
        </div>
        <div class="decrease-stop">
          <p class="equal-color title">跌停数量</p>
          <p class="decrease-color">{{decreaseStopNum}}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
import ModuleTitle from "../../base/module-title/index.vue";
import StockIndex from "../../base/stock-index/index.vue";

export default {
  name: "TabTrend",
  data() {
    return {
      increaseNum: 2000,
      decreaseNum: 1800,
      equalNum: 200,
      totalNum:null,
      increaseStopNum: 35,
      decreaseStopNum: 18,
      stockIndexes: [
        {
          title: "上证指数",
          indexData: "3164.62",
          percent: "-0.31%"
        },
        {
          title: "深圳成指",
          indexData: "3164.62",
          percent: "-0.31%"
        },
        {
          title: "创业板指",
          indexData: "3164.62",
          percent: "-0.31%"
        },
        {
          title: "创业板指",
          indexData: "3164.62",
          percent: "-0.31%"
        },
        {
          title: "创业板指",
          indexData: "3164.62",
          percent: "-0.31%"
        },
        {
          title: "创业板指",
          indexData: "3164.62",
          percent: "-0.31%"
        }
      ]
    };
  },
  computed: {
    diagramTotal:function() {
      return this.increaseNum + this.decreaseNum + this.equalNum;
    },
    increasedWidth: function () {
      return this.increaseNum/this.diagramTotal*346
    },
    equalWidth: function () {
      return this.equalNum/this.diagramTotal*346
    },
    decreasedWidth: function () {
      return this.decreaseNum/this.diagramTotal*346
    }
  },
  components: {
    StockIndex,
    ModuleTitle
  }
};
</script>

<style lang="scss" scoped>
.tab-trend {
  background-color: #fff;
  font-size: 14px;
  .sections {
    padding-top: 15px;
  }
  .module-title {
    h2 {
      font-size: 16px;
    }
  }
  .horizontal-scroll-list-wrap /deep/ .cube-scroll-content { display: inline-block;}
  .scroll-wrapper {
    white-space: nowrap;
    padding-left: 6px;
  }
  .stock-indexes-container {
    display: flex;
    padding: 15px 16px;
    justify-content: space-between;
  }
  .stock-indexes {
    border: 1px solid #d5d5d5;
    border-radius: 2px;
    text-align: center;
    width: 108px;
    height: 82px;
    padding-top: 8px;
    display: inline-block;
    margin: 13px 0 10px 10px;
  }
  .strip-diagram-container {
    text-align: center;
    padding: 10px 15px;
    .strip-diagram {
      width: 346px;
      height: 8px;
      border-radius: 5px;
      display: inline-flex;
      justify-content: center;
      overflow: hidden;
      .strip-parts {
        height: inherit;
        display: block;
      }
      .increase {
        // width: 173px;
        background-color: #f83745;
      }
      .equal {
        // width: 17px;
        background-color: #e7e5e5;
      }
      .decrease {
        // width: 156px;
        background-color: #5ba245;
      }
    }
    .diagram-text {
      display: flex;
      .increase-color {
        color: #f83745;
        width: 148px;
        text-align: left;
      }
      .equal-color {
        color: #a1a1a1;
        width: 148px;
        text-align: center;
      }
      .decrease-color {
        color: #5ba245;
        width: 148px;
        text-align: right;
      }
    }
  }
  .trend-stop-container {
    width: 346px;
    background-color: #f8f8f8;
    text-align: left;
    padding: 15px 0;
    margin: 10px auto 10px 14px;
    display: inline-flex;
    .increase-stop {
      width: 50%;
      padding-left: 15px;
      color: #f83745;
      font-size: 16px;
      font-weight: 500;
    }
    .decrease-stop {
      width: 50%;
      padding-left: 15px;
      color: #5ba245;
      font-size: 16px;
      font-weight: 500;
    }
    .title {
      color: #a1a1a1;
      font-size: 14px;
      font-weight: 300;
    }
  }
}
h2 {
  line-height: 30px;
}
h3 {
  line-height: 23px;
}
h5 {
  line-height: 12px;
}
h2,
h3 {
  font-weight: 500;
}
h2,
h5 {
  color: #f73c49;
}
.toptic-stock,
.quota-stock,
.stock-rank {
  margin-bottom: 10px;
  padding: 17px 0 20px 0;
  background-color: #fff;
  .module-title {
    margin-bottom: 13px;
  }
  .scroll-wrapper {
    white-space: nowrap;
    padding: 0 7px;
  }
  .toptic-stock-item,
  .quota-stock-item {
    display: inline-block;
    margin: 0 7px;
  }
  .toptic-stock-panel {
    width: 280px;
  }
  .quota-stock-panel {
    width: 210px;
  }
  .stock-rank-item {
    margin-bottom: 15px;
  }
  .stock-rank-panel {
    margin: 0 auto;
    width: calc(100% - 28px);
  }
}
.toptic-stock .scroll-wrapper {
  width: 900px;
}
.quota-stock .scroll-wrapper {
  width: 460px;
}
.stock-rank {
  padding-bottom: 0;
}
</style>
