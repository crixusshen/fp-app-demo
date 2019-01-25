<template>
  <div id="headerTop">
    <div>
      <div>
        <img src="../../../res/images/mainhead-sms.jpg">
      </div>
    </div>
    <div>
      <div>
        <img src="../../../res/images/mainhead-search.png">
      </div>
      <div id="inputDiv">输入股票代码或拼音字母</div>
    </div>
    <div>
      <span id="newFlag">NEW</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerTop"
};
</script>

<style lang="scss">
#headerTop {
  display: flex;
  align-items: center;
  padding: 3vw 5vw;
  > div:nth-child(1) {
    width: 13vw;
    > div {
      width: 11vw;
      img {
        width: 100%;
      }
    }
  }
  > div:nth-child(2) {
    display: flex;
    flex: 1;
    align-items: center;
    padding: 2vw 0;
    background: rgba(212, 212, 212, 0.5);
    border-radius: 1.5vw;
    > div:first-child {
      width: 5vw;
      padding-left: 4vw;
      box-sizing: content-box;
      img {
        width: 100%;
      }
    }
    > div:last-child {
      flex: 1;
    }
  }
  > div:nth-child(3) {
    display: flex;
    justify-content: center;
    position: relative;
    width: 15vw;
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 5vw;
      height: 0.5vw;
      background: #fff;
      border-radius: 0.5vw;
    }
    &::after {
      transform: rotateZ(90deg);
    }
    #newFlag {
      position: absolute;
      background: #fff;
      color: #f61f18;
      font-size: 2vw;
      right: -0.8vw;
      top: -3.5vw;
      border-radius: 3vw;
      padding: 0 1vw;
    }
  }
  #inputDiv {
    font-size: 3vw;
    padding-left: 2vw;
    color: #fbbbb4;
  }
}
</style>