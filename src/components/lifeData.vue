// 生活指数
<template>
    <div class='lifeDataBox'>
        <div class='lifeData' v-for=" item in msgData" :key='item.name'>
          <div class='iconBox iconfont'>
            {{item.icon}}
          </div>
          <div class='text'>
            <div class='little'>
              <span class='little-title'>{{item.name}}</span>&nbsp;&nbsp;
              <span class='little-cen'>{{item.brf}}</span>
            </div>
            <div class="more">
              <span>{{item.txt}}</span>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "lifeData",
  props: ["msgData"],
  data() {
    return {};
  },
  created() {},
  mounted() {
    let iconBoxArr = document.querySelectorAll(".iconBox");
    let iconColor = [
      "rgb(39, 216, 83)",
      "blue",
      "green",
      "red",
      "skyblue",
      "gold"
    ];
    for (let i = 0; i < iconBoxArr.length; i++) {
      iconBoxArr[i].style.color = iconColor[i];
    }
  }
};
</script>

<style scoped lang='less'>
@import "../baseStyle/base.less";
.lifeDataBox {
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  overflow: hidden;
  padding: 5px 10px 5px 5px;
  border-radius: 10px;
  box-shadow: @boxShadow;
  .lifeData {
    width: 100%;
    padding-bottom: 2px;
    overflow: hidden;
    box-sizing: border-box;
    margin-top: 20px;
    .iconBox {
      width: 20%;
      float: left;
      text-align: center;
      font-size: 2.5em;
      margin: auto 0;
    }
    .text {
      width: 80%;
      float: left;
      border-bottom: 1px solid rgba(225, 225, 225, 0.6);
      .little {
        margin-bottom: 5px;
        .little-title {
          display: inline-block;
          padding-left: 8px;
          font-size: 1em;
          border-left: 5px solid @topcenBackgroundColor;
          line-height: 1;
        }
        .little-cen {
          font-size: 1em;
        }
      }
      .more {
        font-size: 0.7em;
        margin-bottom: 20px;
      }
    }
    &:last-child .text {
      border-bottom: none;
    }
  }
}
</style>