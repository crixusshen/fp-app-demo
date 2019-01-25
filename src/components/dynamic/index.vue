<template>
  <div class="container d-all fs-14">
    <DynamicTitle class="m-card">
      <img class="title-image" slot="t-left" src="../../../res/images/dynamic-kuaixun.png">
      <span slot="t-right">
        <img class="title-time" src="../../../res/images/dynamic-time.png">19:40
      </span>
      <p slot="content">这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是</p>
      <div class="tag-wrap-1" slot="bottom">
        <span class="tag">
          隆平高科
          <span class="t-green">-2.16%</span>
        </span>
      </div>
    </DynamicTitle>

    <div class="m-card">
      <div class="ad">
        <img class="aad" src="../../../res/images/dynamic-ad.png">
      </div>
    </div>

    <DynamicTitle class="m-card">
      <span slot="t-left">赢家金股</span>
      <span class="ta-right t-a1a1a1" slot="t-right">2340 已阅</span>
      <p slot="content">这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是</p>
      <div class="tag-wrap-1" slot="bottom">
        <span class="tag">光大银行
          <br>
          <span class="t-red">-2.16%</span>
        </span>
        <span class="tag">光大银行
          <br>
          <span class="t-red">-2.16%</span>
        </span>
        <span class="tag">光大银行
          <br>
          <span class="t-red">-2.16%</span>
        </span>
      </div>
    </DynamicTitle>

    <DynamicNews class="m-card">
      <p slot="content">这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是</p>
      <img class="new-icon" slot="b-left" src="../../../res/images/dynamic-icon.png">
      <span class="t-a1a1a1" slot="b-right">2340 已阅</span>
    </DynamicNews>

    <DynamicNews class="m-card">
      <p slot="content">这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是</p>
      <img class="new-icon" slot="b-left" src="../../../res/images/dynamic-icon.png">
      <span class="t-a1a1a1" slot="b-right">2340 已阅</span>
    </DynamicNews>

    <div class="tab-2 x-flex">
      <span>赢家金股</span>
      <span>赢家专题</span>
      <span>赢家日报</span>
    </div>

    <div class="d-card-2">
      <div class="title x-flex">
        <div class="fs-16">精选理财</div>
        <div class="ta-right t-a1a1a1">股票账户可直接购买</div>
      </div>
      <div class="dc2-item-wrap">
        <fp-scroll direction="horizontal" class="horizontal-scroll-list-wrap">
          <div class="scroll">
            <div class="dc2-item" v-for="index in 10" :key="index">
              <p class="fs-16 name">新意启程86号</p>
              <p class="fs-16 t-red rate">+6.60%</p>
              <p class="t-a1a1a1">预计年化收益率</p>
            </div>
          </div>
        </fp-scroll>
      </div>
    </div>

    <DynamicNews class="m-card" hasImage="true">
      <p slot="content">这是一段文字这是一段文字这是一段文字这是</p>
      <span slot="b-left">每日经济新闻</span>
      <span class="t-a1a1a1" slot="b-right">10 分钟前</span>
      <div class="new-image" slot="image">
        <img style="width:100%" src="../../../res/images/dynamic-new.png" alt>
      </div>
    </DynamicNews>

    <DynamicNews class="m-card" hasImage="true">
      <p slot="content">这是一段文字这是一段文字这是一段文字这是</p>
      <span slot="b-left">每日经济新闻</span>
      <span class="t-a1a1a1" slot="b-right">10 分钟前</span>
      <div class="new-image" slot="image">
        <img style="width:100%" src="../../../res/images/dynamic-new.png" alt>
      </div>
    </DynamicNews>

    <div class="d-card-2">
      <div class="title x-flex">
        <div class="fs-16">投资日历</div>
        <div class="ta-right t-a1a1a1">今日</div>
      </div>
      <div class="dc2-canlendar">
        <div class="dc2c-title x-flex">
          <div>3
            <br>新股申购
          </div>
          <div>11
            <br>限售解禁
          </div>
          <div>3
            <br>停牌复牌
          </div>
        </div>
        <div class="dc2c-content x-flex">
          <div class="col-1">
            <img src="../../../res/images/dynamic-bignew.png" alt>
          </div>
          <div class="col-2">
            <p class="fs-16 dc2cc2-title">这是一段文字这是一段文字这是一段文字这是</p>
            <p class="t-a1a1a1">这是一段文字这是一段文字这是一段文字这是这是一段文字这是一段文字这是一段文字这是</p>
          </div>
        </div>
      </div>
    </div>

    <DynamicNews class="m-card">
      <p slot="content">这是一段文字这是一段文字这是一段文字这是</p>
      <span slot="b-left">每日经济新闻</span>
      <span class="t-a1a1a1" slot="b-right">10 分钟前</span>
    </DynamicNews>
  </div>
</template>

<script type="text/ecmascript-6">
import DynamicTitle from "./dynamicTitle.vue";
import DynamicNews from "./dynamicNews.vue";

export default {
  components: {
    DynamicTitle,
    DynamicNews
  },
  data() {
    return {
      titleInfo: {
        title: ""
      }
    };
  }
};
</script>

<style lang="scss">
.x-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  > * {
    flex: auto;
  }
}
.t-green {
  color: #289e3e;
}
.t-red {
  color: #f61818;
}
.t-a1a1a1 {
  color: #a1a1a1;
}
.fs-14 {
  font-size: 14px;
}
.fs-16 {
  font-size: 16px;
}
.ta-right {
  text-align: right;
}
.title-image {
  width: 36px;
}
.title-time {
  width: 20px;
  vertical-align: text-bottom;
}
.m-card {
  padding: 20px 15px;
  border-bottom: 1px solid #e6e6e6;
  background: #fff;
}
.tag-wrap-1 {
  padding-top: 10px;
}
.tag {
  padding: 8px 10px;
  margin: 5px 10px 5px 0;
  border-radius: 4px;
  display: inline-block;
  background: #f8f8f8;
  text-align: center;
}
.ad {
  height: 120px;
  background: #e6e6e6;
  border-radius: 4px;
}
.aad {
  width: 100%;
  height: 100%;
}
.new-image {
  height: 100%;
  background: #000;
  border-radius: 4px;
}
.tab-2 {
  text-align: center;
  line-height: 50px;
  color: #699fe5;
  background: #fff;
}
.new-icon {
  height: 20px;
}

.d-card-2 {
  padding: 20px 15px;
  .title {
    align-items: flex-end;
    padding-bottom: 15px;
  }
  .dc2-canlendar {
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    .dc2c-title {
      height: 75px;
      text-align: center;
      background: linear-gradient(90deg, #f12929, #ed501e);
      color: #fff;
      padding: 0 20px;
    }
    .dc2c-content {
      background: #fff;
      padding: 15px 0;
      .col-1 {
        flex: 0 0 65px;
        text-align: center;
        img {
          width: 30px;
        }
      }
      .col-2 {
        flex: auto;
        padding-right: 10px;
        .dc2cc2-title {
          padding-bottom: 10px;
        }
      }
    }
  }
  .dc2-item-wrap {
    .cube-scroll-content {
      display: inline-block;
    }
    .scroll {
      margin: 10px;
      white-space: nowrap;
      display: inline-block;
    }
    .dc2-item {
      display: inline-block;
      padding: 15px 0;
      text-align: center;
      width: 150px;
      flex: 0 0 150px;
      background: #fff;
      border-radius: 4px;
      margin: 5px;
      box-shadow: 0 0 19px #ccc;
      .name {
        margin-bottom: 4px;
      }
      .rate {
        margin-bottom: 2px;
      }
    }
  }
}
</style>
