<template>
  <div class="toptic-stock-panel">
    <div class="top-area">
      <div class="row">
        <h3 class="title">{{stock.title}}</h3>
        <div class="percent">{{stockPercent(stock.percent)}}%</div>
      </div>
      <div class="row">
        <div class="desc">{{stock.desc}}</div>
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
    name: 'TopticStock',
    mixins: [stockPercentMixin],
    props: {
      stock: {
        type: Object,
        default() {
          return {
            title: '',
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
  .toptic-stock-panel {
    border: #e6e6e6 solid 1px;
    border-radius: 5px;
    .top-area {
      padding: 15px;
      background-color: #fefaed;
      .row {
        .title, .percent { line-height: 1.5; color: #a68c3b; font-size: 18px;}
        .title { border-bottom: #f5ecd2 solid 1px; font-weight: bold;}
        .desc { overflow: hidden; margin-top: 14px; line-height: 1.5; color: #bfab6c; font-size: 14px; white-space: nowrap; text-overflow: ellipsis;}
        &:first-child {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
    .bottom-area {
      padding: 15px 0;
      ul {
        display: flex;
        li {
          position: relative;
          flex: 1;
          text-align: center;
          .name, .percent { line-height: 1; font-size: 16px;}
          .name { color: #777;}
          .percent { margin-top: 9px; color: #f62635;}
          &:after { position: absolute; top: 50%; right: 0; margin-top: -13px; width: 1px; height: 26px; background-color: #f7f7f7; content: '';}
          &:last-child:after { display: none;}
        }
      }
    }
  }
</style>
