<template>
  <div class="module-title">
    <h2 class="text">{{text}}</h2>
    <i class="arror-right" v-if="path"></i>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
  .module-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    .text { line-height: 1.5; color: #464646; font-size: 18px; font-weight: bold;}
    .arror-right { display: inline-block; width: 8px; height: 8px; border-top: #bbb solid 2px; border-right: #bbb solid 2px; transform: rotate(45deg);
    }
  }
</style>
