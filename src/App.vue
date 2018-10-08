<template>
  <div id="app">
    <all-box :msg-data="location" v-if="show"></all-box>
    <div class='loading' v-else>
      <svg class='svg' >
        <defs>
          <linearGradient id='linearColor' x1="0" y1="0" x2="1" y2="1">
            <stop offset='0' stop-color='rgba(0,0,0,1)'></stop>
            <stop offset='1' stop-color='rgba(0,0,0,0)'></stop>
          </linearGradient>
        </defs>
        <path id="path" d="m4.14873,50.584622l17.732931,-0.139876l2.505534,-17.538736l4.676996,40.589646l2.505534,-22.883875l7.850672,0.167036l3.173676,-31.068618l6.013281,61.469094l2.505534,-30.400476l7.015494,-0.167036l1.002213,-10.857313l4.509961,25.556444l2.505534,-14.699131l16.369487,0.167036">
          <animate
            id="one"
            attributeType='XML'
            attributeName='stroke-dashoffset'
            begin='0;two.end'
            from='1050'
            to='350'
            dur='2s'
            repeatCount='indefinite'
          ></animate>
        </path>
        
      </svg>
      <div class='text'>
        ...loading...
      </div>
    </div>
  </div>
</template>
<script>
import { LApi } from "./api/locationApi.js";
import { weatherData } from "./api/ajax.js";
import { mapGetters, mapMutations } from "vuex";
import allBox from "./components/allBox.vue";
export default {
  data() {
    return {
      location: "什么都没有",
      locationOne: "什么都没有",
      locationTwo: "什么都没有",
      locationThree: "什么都没有",
      locationFour: "什么都没有",
      show: false,
      lon: "",
      lat: ""
    };
  },
  created() {
    LApi.getLocation().then(
      loc => {
        // 经度
        this.lon = loc.coords.longitude;
        // 纬度
        this.lat = loc.coords.latitude;
        // 获取定位
        weatherData(this.lon, this.lat).then(data => {
          this.location = data.HeWeather6["0"];
          this.setLocationData(this.location);
          this.location = this.getLocationData;
          this.show = true;
        });
      },
      err => {
        // 错误后处理（定位失败）
        // 直接读取三水天气
        weatherData("CN101280802").then(data => {
          this.location = data.HeWeather6["0"];
          this.setLocationData(this.location);
          this.location = this.getLocationData;
          this.show = true;
        });
      }
    );
  },
  mounted() {},
  components: {
    allBox
  },
  computed: {
    ...mapGetters(["getLocationData"])
  },
  methods: {
    ...mapMutations(["setLocationData"])
  }
};
</script>
<style lang="less">
@import "./baseStyle/index.less";
#app {
  position: relative;
  width: 100%;
  height: 100%;
  #search {
    transform: translateX(100%);
  }
  .loading {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: @topcenBackgroundColor;
    .svg {
      position: absolute;
      left: 53%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 120px;
      height: 120px;
      #path {
        stroke: rgb(55, 102, 173);
        stroke-width: 2px;
        fill: transparent;
        stroke-dasharray: 350 350 350 350;
        stroke-dashoffset: 1050;
      }
    }
    .text {
      position: absolute;
      top: 60%;
      left: 50%;
      font-size: 1.5em;
      transform: translate(-50%, 0);
      color: @dataFontColor;
    }
  }
}
</style>
