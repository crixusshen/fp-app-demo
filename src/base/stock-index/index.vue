<template>
  <div class="index-items">
    <h4>{{stock.title}}</h4>
    <h3>{{stock.indexData}}</h3>
    <h5>{{stock.percent}}</h5>
  </div>
</template>

<script type="text/ecmascript-6">
import { stockPercentMixin } from '../../common/js/mixin'
export default {
  name: 'StockIndex',
  mixins: [stockPercentMixin],
  props: {
    stock: {
        type: Object,
        default() {
          return {
            title: '',
            indexData: '',
            percent:''
          }
        }
      }
  }
};
</script>

<style lang="scss">
.h3{
  color:#f73c49;
  font-weight: 500;
}
</style>
