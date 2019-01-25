<template>
  <div class="dt-wrap">
    <div class="title">
      <div>
        <slot name="t-left"></slot>
      </div>
      <div class="ta-right">
        <slot name="t-right"></slot>
      </div>
    </div>
    <div class="ta-justify">
      <slot name="content"></slot>
    </div>
    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.dt-wrap {
  .ta-right {
    text-align: right;
  }
  .ta-justify {
    text-align: justify;
  }
  .title {
    display: flex;
    margin-bottom: 10px;
    > * {
      flex: auto;
    }
  }
  .flex {
    display: flex;
    > * {
      flex: auto;
    }
  }
}
</style>
