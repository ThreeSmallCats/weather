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
              &nbsp;&nbsp;<span>{{item.txt}}</span>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "lifeData",
  props : ['msgData'],
  data() {
    return {};
  },
  created(){
     
  },
  mounted(){
    let iconBoxArr = document.querySelectorAll('.iconBox')
    let iconColor = ['rgb(39, 216, 83)','blue','green','red','skyblue','gold']
    for (let i = 0; i < iconBoxArr.length; i++) {
      iconBoxArr[i].style.color = iconColor[i]
      
    }
  }
};
</script>

<style scoped lang='less'>
@import "../baseStyle/base.less";
.lifeDataBox{
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  overflow: hidden;
  padding: 5px;
  border-radius: 10px;
  box-shadow: @boxShadow;
  .lifeData{
    width: 100%;
    padding-bottom: 2px;
    border-bottom: 1px solid rgba(225, 225, 225, 0.6);
    overflow: hidden;
    box-sizing: border-box;
    .iconBox{
      width: 20%;
      float: left;
      text-align: center;
      font-size: 2.5em;
      margin: auto 0;
    }
    .text{
      width: 80%;
      float: left;
      .little{
        .little-title{
          font-size: 1em;
        }
        .little-cen{
          font-size: 1em;
        }
      }
      .more{
        font-size: 0.7em;
      }
    }
  }
}
</style>