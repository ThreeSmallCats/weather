<template>
  <div class="allbox">
    <div class="topcen">
      <div class='topbar'>
        <span class='location'>{{getLocation}}</span>
      </div>

      <div class='search-icon' v-on:click='showSearchBox'>
      <span>更换城市</span>
    </div>
    <search-box id='search'></search-box>
      <div class='timeBox'>
        <span class='updateTime'>{{getUpdate}} 更新</span>
      </div>
      <div class='weatherBox'>
        <span class='weatherNow'>{{getTmp}}<i class='iconfont'>&#xe6ce;</i></span>
        <div class='weatherIcon'>
        </div>
      </div>
    </div>
    <div class="bottomcen">
      <div class='dataBox'>
        <div class='refresh-loading' v-show="LShow"><span>加载中</span></div>
        <!-- 逐小时天气 -->
        <hourly :hourlyData='hourly'></hourly>
        <!-- 未来天气模块 -->
        <future-weather :futureData='daily_forecast' ></future-weather>
        <!-- 生活指数模块 -->
        <life-data :msgData='lifestyle'></life-data>
        <!-- 数据来源 -->
        <div class='floot'>
          <span>天气来源：&nbsp;和风天气</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import futureWeather from "./futureWeather";
import lifeData from "./lifeData";
import hourly from "./hourly";
import { icondate } from "../api/icondate.js";
import { weatherData } from "../api/ajax.js";
import searchBox from "../components/searchBox";
import BScroll from "better-scroll";
export default {
  name: "allBox",
  props: ["msgData"],
  data() {
    return {
      now: {},
      daily_forecast: {},
      lifestyle: {},
      update: {},
      lon: "",
      lat: "",
      LShow: false,
      search: "",
      value: "",
      hourly: ""
    };
  },
  created() {
    this.now = this.msgData.now;
    this.daily_forecast = this.msgData.daily_forecast;
    this.lifestyle = this.msgData.lifestyle;
    this.hourly = this.msgData.hourly;
    this.lon = this.msgData.basic.lon;
    this.lat = this.msgData.basic.lat;
  },
  mounted() {
    let icon = icondate(this.msgData.now.cond_code);
    let weather = this.msgData.now.cond_txt;
    // 上部分天气图标
    let a = document.querySelector(".weatherIcon");
    a.innerHTML = `
          <i class='iconfont'>${icon}</i>&nbsp;
          <span>${weather}&nbsp;</span>
    `;
    this.dataBox = document.querySelector(".dataBox");
    this.bottomcen = document.querySelector(".bottomcen");
    this.topcen = document.querySelector(".topcen");
    this.search = document.querySelector("#search");
    let scroll = new BScroll(this.bottomcen, {
      pullDownRefresh: {
        threshold: 50,
        stop: 20
      }
    });
    // 下拉刷新
    scroll.on("pullingDown", () => {
      this.LShow = true;
      weatherData(this.getLocationData.basic.cid).then(data => {
        let locationData = data.HeWeather6["0"];
        this.setLocationData(locationData);
        scroll.finishPullDown();
        this.LShow = false;
        // 重新计算滑动高度
        scroll.refresh();
      });
    });
  },
  components: {
    futureWeather,
    lifeData,
    searchBox,
    hourly
  },
  computed: {
    // 处理更新时间str
    getUpdate() {
      let update = this.msgData.update.loc.slice(10);
      return update;
    },
    // 获取位置
    getLocation() {
      let location = this.msgData.basic.location;
      return location;
    },
    // 获取温度
    getTmp() {
      let tmp = this.msgData.now.tmp;
      return tmp;
    },
    // 获取vuex数据
    ...mapGetters(["getLocationData"])
  },
  methods: {
    // 修改vuex数据
    ...mapMutations(["setLocationData"]),
    // 显示搜索模块
    showSearchBox() {
      // 为了手机键盘收回
      // 不收回，如果点击键盘，回发生页面错误
      this.search.style.display = `block`;
      setTimeout(() => {
        this.search.style.transform = `translateX(0%)`;
      }, 100);
    }
  }
};
</script>
<style scoped lang="less">
@import "../baseStyle/base.less";
.allbox {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .topcen {
    position: relative;
    transition: all 1s;
    width: 100%;
    height: 40%;
    background-color: @topcenBackgroundColor;
    &.active {
      width: 70%;
      height: 50%;
      margin: 0 auto;
      transform: translateY(50%);
    }
    .search-icon {
      position: absolute;
      top: 10%;
      left: 10px;
      box-sizing: border-box;
      text-align: center;
      width: 25%;
      height: 5%;
      z-index: 99;
      color: white;
    }
    .topbar {
      position: relative;
      width: 100%;
      height: 10%;
      text-align: center;
      color: @fontColor;
      .location {
        position: absolute;
        font-size: 1em;
        width: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .timeBox {
      position: relative;
      width: 100%;
      height: 10%;
      color: @fontColor;
      .updateTime {
        position: absolute;
        right: 10px;
      }
    }
    .weatherBox {
      position: relative;
      width: 100%;
      height: 80%;
      text-align: center;
      .weatherNow {
        color: @fontColor;
        position: relative;
        font-size: 5em;
      }
      .weatherIcon {
        padding: 3px;
        position: absolute;
        left: 50%;
        margin-top: 10px;
        transform: translate(-50%, -50%);
        background-color: @weatherIconBackgroundColor;
        border-radius: 10px;
        color: @dataFontColor;
      }
    }
  }
  .bottomcen {
    transition: all 1s;
    box-sizing: border-box;
    width: 100%;
    height: 60%;
    background-color: @bottomcenBackgroundColor;
    padding-top: 10px;
    overflow: hidden;
    .dataBox {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      padding: 10px 5%;
      .refresh-loading {
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        transition: all 1s;
        background: #f6f6f6;
        color: rgba(0, 0, 0, 0.5);
      }
      .floot {
        margin-top: 20px;
        font-size: 0.7em;
        text-align: center;
      }
    }
  }
}
</style>
