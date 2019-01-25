<template>
  <div>
    <div class="panel__bd">
        <div class="media-box media-box_appmsg" v-for="(item,index) in list" :key="index">
            <div class="media-box__hd">
              <div class="background" :style="{background:item.bgColor}">
                 <i class="media-box__thumb" :class="[item.iconClass]" ></i>
              </div>
            </div>
            <div class="media-box__bd">
                <div class="media-box__title">{{item.title}}</div>
                <div class="media-box__desc">
                  <!-- <div class="desc"> -->
                    {{item.desc}}
                  <!-- </div> -->
                  </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data:function(){
    return{
      list:[
        {
          bgColor:'#fd8278',
          iconClass:'icon-mail',
          title:'在线客服',
          desc:'东方证券24小时为您服务'
        },
        {
          bgColor:'#fd8278',
          iconClass:'icon-mail',
          title:'新股速递',
          desc:'为您播报最新信息'
        },
        {
          bgColor:'#72a5ee',
          iconClass:'icon-star-empty',
          title:'市场资讯',
          desc:'午后市场维持震荡走势，沪指继续围绕2600点上午后市场维持震荡走势，沪指继续围绕2600点上'
        },
        {
          bgColor:'#fea638',
          iconClass:'icon-flag-empty',
          title:'热门活动',
          desc:'“2018养好基“活动正在火热进行中，成功参与就'
        },
        {
          bgColor:'#fd8278',
          iconClass:'icon-time',
          title:'交易提醒',
          desc:'午后市场维持震荡走势，沪指继续围绕2600点上'
        },
        {
          bgColor:'#72a5ee',
          iconClass:'icon-chat',
          title:'理财助手',
          desc:'周末将至，抓住最后理财好机会'
        },
        {
           bgColor:'#fea638',
          iconClass:'icon-th-large-outline',
          title:'系统公告',
          desc:'尊敬的客户，为了更好提供服务，我司本周进'
        },
        {
          bgColor:'#fd8278',
          iconClass:'icon-chat-1',
          title:'其他',
          desc:'尊敬的客户，为了更好提供服务，我司本周进'
        }
      ]
    }
  }
};
</script>
<style lang="scss">
@import './font.css';
.media-box {
    padding: 15px;
    position: relative;
}
.media-box_appmsg {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.media-box_appmsg .media-box__bd {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
}
.media-box_appmsg .media-box__hd {
    margin-right: .8em;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
}
.media-box:first-child:before {
    display: none;
}
.media-box:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #e5e5e5;
    color: #e5e5e5;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    left: 0px;
}
.media-box__hd>.background {
    background: red;
    border-radius: 30px;
}
.media-box_appmsg .media-box__thumb {
  color:white;
}


.media-box__title {
    font-weight: 400;
    font-size: 17px;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    word-wrap: break-word;
    word-break: break-all;
}
.media-box__desc {
    color: #999;
    font-size: 13px;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
