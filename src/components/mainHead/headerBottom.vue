<template>
  <div id="headerbottom">
    <div>
      <div>
        <div id="title">{{prodName}}</div>
        <div id="prodImg">
          <div>
            <img :src="prodUrl">
          </div>
        </div>
        <div id="prodNum">{{prodNum}}人围观</div>
      </div>
      <div>
        <span>{{tipText}}</span>
      </div>
      <div class="color_style1">
        <span>{{tipText2}}</span>
      </div>
      <div class="color_style1">
        <span>{{tipText3}}</span>
      </div>
      <div>
        <span>查看{{smsNum}}条消息</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerBottom",
  data() {
    return {
      prodName: "天玑说",
      prodUrl: require("../../../res/images/mainhead-head.jpg"),
      prodNum: 8888,
      tipText: "开户免费送Level2十档行情",
      tipText2: "持仓股早报已更新，请点击查看",
      tipText3: "知识产权保护概念股票",
      smsNum: 1000000
    };
  }
};
</script>

<style lang='scss' scoped>
#headerbottom {
  position: relative;
  height: 25vw;
  display: flex;
  justify-content: center;
  color: #333;
  padding-top: 13vw;
  > div {
    position: absolute;
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 2vw 4vw;
    border-radius: 2vw;
    box-shadow: 0 0 4vw #d4d4d4;
    width: 89%;
    top: 8vw;
    z-index: 1;
    background: url("../../../res/images/mainhead-main.png") #fff no-repeat;
    background-size: 100% 100%;
    > div:nth-child(1) {
      display: flex;
      > div {
        flex: 1;
      }
      #title {
        padding-left: 4vw;
        font-size: 4vw;
        font-weight: 600;
      }
      #prodImg {
        display: flex;
        position: relative;
        justify-content: center;
        > div {
          position: absolute;
          width: 14vw;
          background: #fff;
          top: -6vw;
          padding: 10px;
          box-sizing: content-box;
          border-radius: 50%;
        }
        img {
          width: 100%;
        }
      }
      #prodNum {
        text-align: right;
        font-size: 4vw;
      }
    }
    > div:nth-child(2) {
      background-color: #fcf8ec;
      margin-top: 8vw;
      padding: 2vw 4vw;
      font-size: 4vw;
      color: #a68c3b;
      border-radius: 0.8vw;
    }
    > div:nth-child(3) {
      padding-top: 3vw;
    }
    > div:nth-child(5) {
      font-size: 3vw;
      color: #a9a9a9;
      padding-left: 4vw;
      > span:after {
        content: "";
        display: inline-block;
        width: 1vw;
        height: 1vw;
        background: #fff;
        border: 1px solid;
        border-left-color: #fff;
        border-bottom-color: #fff;
        transform: rotateZ(45deg);
        margin-left: 1vw;
      }
    }
    .color_style1 {
      font-size: 4vw;
      padding: 0 4vw;
      padding-bottom: 4vw;
    }
  }
  #emptyBg {
    position: absolute;
    height: 30vw;
    width: 100%;
    background: #f61f18;
  }
  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 10vw;
    height: 28vw;
    background: #f61f18;
    left: 0;
    -webkit-transform: rotateZ(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotateZ(-45deg);
  }
  &::after {
    content: "";
    display: inline-block;
    background: #f04117;
    width: 18vw;
    height: 18vw;
    right: 3.4vw;
    position: absolute;
    -webkit-transform: rotateZ(60deg);
    -ms-transform: rotate(60deg);
    transform: rotateZ(60deg);
  }
}
</style>