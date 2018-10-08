// 未来7天天气
<template>
    <div class='futureWeather'>
        <div class='control'>
       <div class='iconAndstate'>
           <div class='iconAndstate-one' v-for="item in futureData" :key='item.date'>
                <span class="iconAndstate-one-icon iconfont">{{getIcon(item.cond_code_d)}}</span>&nbsp;{{item.cond_txt_d}}
           </div>
           <div class='iconAndstate-one iconfont'>
                <span class="iconAndstate-one-icon iconfont">&#xe643;</span>&nbsp;不详
           </div>
       </div>
    <div class='icon'>
        <div class='icon-one iconfont' v-for="item in futureData" :key="item.date">
            {{item.tmp_max}} &#xe6ce;
        </div>
        <div class='icon-one iconfont'>
            {{futureData[0].tmp_max}} &#xe6ce;
        </div>
    </div>
    <div class='svgBox'>
        <svg class='svgData'>
            <path class='path-one' d='M0 0 0 0 0 0'></path>
            <path class='path-two' d='M0 0 0 0 0 0'></path>
            <circle class='circleTop'></circle>
            <circle class='circleTop'></circle>
            <circle class='circleTop'></circle>
            <circle class='circleTop'></circle>
            <circle class='circleTop'></circle>
            <circle class='circleTop'></circle>
            <circle class='circleTop'></circle>
            <circle class='circleTop'></circle>
            <circle class='circleBottom'></circle>
            <circle class='circleBottom'></circle>
            <circle class='circleBottom'></circle>
            <circle class='circleBottom'></circle>
            <circle class='circleBottom'></circle>
            <circle class='circleBottom'></circle>
            <circle class='circleBottom'></circle>
            <circle class='circleBottom'></circle>
        </svg>
    </div>
    <div class='tmp-min'>
        <div class='tmp-min-one iconfont' v-for="item in futureData" :key='item.date'>
            {{item.tmp_min}} &#xe6ce;
        </div>
        <div class='tmp-min-one iconfont'>
            {{futureData[0].tmp_min}} &#xe6ce;
        </div>
    </div>
    <dir class='day-name-box'>
        <div class='day-name'>
            今天
        </div>
        <div class='day-name'>
            明天
        </div>
        <div class='day-name'>
            {{day(2)}}
        </div>
        <div class='day-name'>
             {{day(3)}}
        </div>
        <div class='day-name'>
             {{day(4)}}
        </div>
        <div class='day-name'>
            {{day(5)}}
        </div>
        <div class='day-name'>
            {{day(6)}}
        </div>
        <div class='day-name'>
            {{day(7)}}
        </div>
    </dir>
    </div>
    </div>
</template>

<script>
import { icondate } from "../api/icondate.js";
import BScroll from "better-scroll";
export default {
  name: "futureWeather",
  props: ["futureData"],
  data() {
    return {
      data: this.futureData,
      pathOne: "",
      pathTwo: "",
      iconAndstate: "",
      scroll: "",
      iconAndstateOneArr: [],
      boxX: [],
      boxY: [],
      bottomBoxY: [],
      topTmpArr: [],
      bottomTmpArr: [],
      topTmpMax: [],
      topTmpMin: [],
      bottomTmpMax: [],
      bottomTmpMin: [],
      Dvalue: "",
      bottomDvalue: "",
      interval: "",
      bottomInterval: "",
      x: "",
      y: "",
      circleTopArr: [],
      circleBottomArr: [],
      dayArr: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      week: {},
      num: ""
    };
  },
  created() {
    this.week = new Date();
    this.num = this.week.getDay();
  },
  mounted() {
    this.circleTopArr = document.querySelectorAll(".circleTop");
    this.circleBottomArr = document.querySelectorAll(".circleBottom");
    this.pathOne = document.querySelector(".path-one");
    this.pathTwo = document.querySelector(".path-two");
    this.iconAndstate = document.querySelector(".iconAndstate");
    let svgDataHeight = this.iconAndstate.clientHeight * 7;
    let svgData = document.querySelector(".svgData");

    svgData.setAttribute("height", svgDataHeight);
    // 计算折线坐标
    this.aa();
    let futureWeather = document.querySelector(".futureWeather");
    this.scroll = new BScroll(futureWeather, {
      scrollX: true,
      scrollY: false,
      bounce: false
    });
  },
  //    监听更换城市后     实现折线刷新
  watch: {
    data: {
      handler() {
        this.aa();
      },
      deep: true
    }
  },
  methods: {
    // 计算折线坐标
    aa() {
      // 重置数组  防止更换城市后无法刷新折线图
      this.topTmpArr = [];
      this.bottomTmpArr = [];

      this.iconAndstateOneArr = document.querySelectorAll(".iconAndstate-one");
      this.x = this.iconAndstateOneArr[0].clientWidth;
      this.y = this.iconAndstateOneArr[0].clientHeight;
      this.boxX = [this.x / 2];
      this.boxY = [this.y * 2];
      this.bottomBoxY = [this.y * 5];
      for (let i = 0; i < this.iconAndstateOneArr.length; i++) {
        if (i == 7) {
          // 最后一个不处理
        } else {
          // 开始七个处理
          // 生成 x 坐标
          let xx = this.boxX[i] + this.x;
          this.boxX.push(xx);

          // 未来7天温度（包括第八天不详）
          this.topTmpArr[i] = Number(this.futureData[i].tmp_max);
          this.bottomTmpArr[i] = Number(this.futureData[i].tmp_min);

          if (this.topTmpArr.length >= 7) {
            // 加上最后不详的温度
            this.topTmpArr[7] = Number(this.futureData[0].tmp_max);
            this.bottomTmpArr[7] = Number(this.futureData[0].tmp_min);

            // 获取温度数组最大最小值
            this.topTmpMax = Math.max(...this.topTmpArr);
            this.topTmpMin = Math.min(...this.topTmpArr);
            this.bottomTmpMax = Math.max(...this.bottomTmpArr);
            this.bottomTmpMin = Math.min(...this.bottomTmpArr);

            // 温度最大差值
            this.Dvalue = Math.max(
              Math.abs(this.topTmpArr[0] - this.topTmpMin),
              Math.abs(this.topTmpMax - this.topTmpArr[0])
            );
            this.bottomDvalue = Math.max(
              Math.abs(this.bottomTmpArr[0] - this.bottomTmpMin),
              Math.abs(this.bottomTmpMax - this.bottomTmpArr[0])
            );

            // 每一度间隔
            this.interval = this.y / this.Dvalue;
            this.bottomInterval = this.y / this.bottomDvalue;

            for (let v = 0; v < 8; v++) {
              if (v == 0) {
                // 第一项不处理
              } else {
                // 生成上下折线的 Y 坐标数组
                this.boxY[v] =
                  this.boxY[0] +
                  (this.topTmpArr[0] - this.topTmpArr[v]) * this.interval;
                this.bottomBoxY[v] =
                  this.bottomBoxY[0] +
                  (this.bottomTmpArr[0] - this.bottomTmpArr[v]) *
                    this.bottomInterval;
              }
              // 上下折线坐标打点
              this.circleTopArr[v].setAttribute("cx", this.boxX[v]);
              this.circleTopArr[v].setAttribute("cy", this.boxY[v]);
              this.circleTopArr[v].setAttribute("fill", "gray");
              this.circleTopArr[v].setAttribute("r", 2);

              this.circleBottomArr[v].setAttribute("cx", this.boxX[v]);
              this.circleBottomArr[v].setAttribute("cy", this.bottomBoxY[v]);
              this.circleBottomArr[v].setAttribute("fill", "gray");
              this.circleBottomArr[v].setAttribute("r", 2);
            }

            setTimeout(() => {
              // 折线动画
              this.pathOne.classList.add("active");
              this.pathTwo.classList.add("active");
            }, 500);
            // 设置上下折线坐标
            this.pathOne.setAttribute(
              "d",
              `M${this.boxX[0]},${this.boxY[0]} 
                    ${this.boxX[1]},${this.boxY[1]} 
                    ${this.boxX[2]},${this.boxY[2]} 
                    ${this.boxX[3]},${this.boxY[3]} 
                    ${this.boxX[4]},${this.boxY[4]} 
                    ${this.boxX[5]},${this.boxY[5]} 
                    ${this.boxX[5]},${this.boxY[5]} 
                    ${this.boxX[6]},${this.boxY[6]} 
                    ${this.boxX[7]},${this.boxY[7]} `
            );
            this.pathTwo.setAttribute(
              "d",
              `M${this.boxX[0]},${this.bottomBoxY[0]} 
                    ${this.boxX[1]},${this.bottomBoxY[1]} 
                    ${this.boxX[2]},${this.bottomBoxY[2]} 
                    ${this.boxX[3]},${this.bottomBoxY[3]} 
                    ${this.boxX[4]},${this.bottomBoxY[4]} 
                    ${this.boxX[5]},${this.bottomBoxY[5]} 
                    ${this.boxX[5]},${this.bottomBoxY[5]} 
                    ${this.boxX[6]},${this.bottomBoxY[6]} 
                    ${this.boxX[7]},${this.bottomBoxY[7]} `
            );
          }
        }
      }
    },
    getIcon(key) {
      return icondate(key);
    },
    day(a) {
      let n = this.num + a;
      if (n > 6) {
        n = n - 7;
      }
      return this.dayArr[n];
    }
  }
};
</script>

<style scoped lang='less'>
@import "../baseStyle/base.less";
.futureWeather {
  border-radius: 10px;
  background-color: #fff;
  box-shadow: @boxShadow;
  margin-bottom: 10px;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding: 5px;
  .control {
    width: 200%;
    .iconAndstate {
      .iconAndstate-one {
        display: inline-block;
        width: 12.5%;
        text-align: center;
        padding: 5px 0;
        color: rgba(0, 0, 0, 0.6);
        // border-right: 1px solid @futureWeatherBorder;
        box-sizing: border-box;
        &:last-child {
          border: none;
        }
        .iconAndstate-one-icon {
          color: rgb(69, 156, 238);
        }
      }
    }
    .icon {
      .icon-one {
        display: inline-block;
        width: 12.5%;
        text-align: center;
        padding: 5px 0;
        color: rgba(0, 0, 0, 0.6);
        box-sizing: border-box;
        border-bottom: 1px solid  @futureWeatherBorder;
        &:last-child {
          border-right: none;
        }
      }
    }
    .tmp-min {
      .tmp-min-one {
        display: inline-block;
        width: 12.5%;
        text-align: center;
        padding: 5px 0;
        color: rgba(0, 0, 0, 0.6);
        box-sizing: border-box;
        border-top: 1px solid  @futureWeatherBorder;

        &:last-child {
          border-right: none;
        }
      }
    }
    .svgBox {
      .svgData {
        width: 100%;
        .path-one,
        .path-two {
          transition: all 5s;
          stroke: @pathColor;
          stroke-width: 1px;
          fill: none;
          stroke-dasharray: 3000 3000;
          stroke-dashoffset: 3000;
          &.active {
            stroke-dashoffset: 0;
          }
        }
      }
    }
    .day-name-box {
      .day-name {
        display: inline-block;
        width: 12.5%;
        text-align: center;
        padding: 5px 0;
        color: rgba(0, 0, 0, 0.6);
        box-sizing: border-box;
        &:last-child {
          border: none;
        }
      }
    }
  }
}
</style>