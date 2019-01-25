<template>
  <fp-scroll ref="scroll" direction="horizontal" class="horizontal-scroll-list-wrap">
    <div id="headerCenter">
      <div v-for="tab in tabs" :key="tab.id" v-on:click="goPage">
        <div class="imgdiv">
          <img v-bind:src="tab.icon">
        </div>
        <span>{{tab.name}}</span>
      </div>
    </div>
  </fp-scroll>
</template>

<script>
export default {
  name: "headerCenter",
  props: ["tabs"],
  methods: {
    goPage() {
      __api__.goPage("calendar");
    }
  }
};
</script>

<style lang="scss">
#headerCenter {
  display: flex;
  padding-top: 4vw;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 3vw;
    color: #fff;
    width: 20vw;
    flex-shrink: 0;
    .imgdiv {
      width: 10vw;
      img {
        width: 100%;
      }
    }
  }
}
.cube-scroll-content {
  display: inline-block;
}
</style>