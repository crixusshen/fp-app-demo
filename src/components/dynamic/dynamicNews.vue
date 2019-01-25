<template>
  <div class="dn-wrap">
    <div class="dn-text">
      <div class="ta-justify">
        <slot name="content"></slot>
      </div>
      <div class="dm-bottom">
        <div>
          <slot name="b-left"></slot>
        </div>
        <div class="ta-right">
          <slot name="b-right"></slot>
        </div>
      </div>
    </div>
    <div class="dn-img" v-if="hasImage">
      <slot name="image"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hasImage: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.dn-wrap {
  display: flex;
  .ta-justify {
    text-align: justify;
  }
  .ta-right {
    text-align: right;
  }
  .dn-text {
    flex: auto;
  }
  .dn-img {
    flex: 0 0 105px;
    margin-left: 10px;
  }
  .dm-bottom {
    display: flex;
    margin-top: 10px;
    > * {
      flex: auto;
    }
  }
}
</style>
