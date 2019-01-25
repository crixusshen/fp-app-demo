<template>
  <div class="mh-container">
    <headerTop/>
    <headerCenter v-bind:tabs="tabs"/>
    <headerBottom/>
    <div></div>
  </div>
</template>

<script>
import headerTop from "./headerTop.vue";
import headerCenter from "./headerCenter.vue";
import headerBottom from "./headerBottom.vue";
export default {
  data() {
    return {
      tabs: [
        {
          id: "1",
          name: "新股",
          icon: require("../../../res/images/mainhead-tab1.jpg")
        },
        {
          id: "2",
          name: "热门活动",
          icon: require("../../../res/images/mainhead-tab2.jpg")
        },
        {
          id: "3",
          name: "资讯",
          icon: require("../../../res/images/mainhead-tab3.jpg")
        },
        {
          id: "4",
          name: "东方天玑",
          icon: require("../../..//res/images/mainhead-tab4.jpg")
        },
        {
          id: "5",
          name: "资产视图",
          icon: require("../../../res/images/mainhead-tab5.jpg")
        },
        {
          id: "6",
          name: "资产视图",
          icon: require("../../../res/images/mainhead-tab5.jpg")
        },
        {
          id: "7",
          name: "资产视图",
          icon: require("../../../res/images/mainhead-tab5.jpg")
        }
      ]
    };
  },
  components: {
    headerTop,
    headerCenter,
    headerBottom
  }
};
</script>

<style lang="scss">
.mh-container {
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #f41818 50%, #f04117 100%);
}
</style>