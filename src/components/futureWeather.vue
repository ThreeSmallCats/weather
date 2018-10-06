// 未来3天天气
<template>
    <div class='futureWeather'>
       <div class='iconAndstate'>
           <div class='iconAndstate-one iconfont'>
                {{getIcon(futureData[0].cond_code_d)}} {{futureData[0].cond_txt_d}}
           </div>
           <div class='iconAndstate-one iconfont'>
                {{getIcon(futureData[1].cond_code_d)}} {{futureData[1].cond_txt_d}}
           </div>
           <div class='iconAndstate-one iconfont'>
                {{getIcon(futureData[2].cond_code_d)}} {{futureData[2].cond_txt_d}}
           </div>
           <div class='iconAndstate-one iconfont'>
                &#xe643; 不详
           </div>
       </div>
    <div class='icon'>
        <div class='icon-one iconfont'>
            {{futureData[0].tmp_max}} &#xe6ce;
        </div>
        <div class='icon-one iconfont'>
            {{futureData[1].tmp_max}} &#xe6ce;
        </div>
        <div class='icon-one iconfont'>
            {{futureData[2].tmp_max}} &#xe6ce;
        </div>
        <div class='icon-one iconfont'>
            {{futureData[0].tmp_max}} &#xe6ce;
        </div>
    </div>
    <div class='svgBox'>
        <svg class='svgData'>
            <circle class='circleTop'></circle>
            <circle class='circleTop'></circle>
            <circle class='circleTop'></circle>
            <circle class='circleTop'></circle>
            <path class='path-one' d='M0 0 0 0 0 0'></path>
            <circle class='circleBottom'></circle>
            <circle class='circleBottom'></circle>
            <circle class='circleBottom'></circle>
            <circle class='circleBottom'></circle>
            <path class='path-two' d='M0 0 0 0 0 0'></path>
        </svg>
    </div>
    <div class='tmp-min'>
        <div class='tmp-min-one iconfont'>
            {{futureData[0].tmp_min}} &#xe6ce;
        </div>
        <div class='tmp-min-one iconfont'>
            {{futureData[1].tmp_min}} &#xe6ce;
        </div>
        <div class='tmp-min-one iconfont'>
            {{futureData[2].tmp_min}} &#xe6ce;
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
            后天
        </div>
        <div class='day-name'>
            大后天
        </div>
    </dir>
    </div>
</template>

<script>
import { icondate } from "../api/icondate.js";
    export default {
        name : 'futureWeather',
        props : ['futureData'],
        data(){
            return{
              oneBoxX:'',
              oneBoxY:'',
              bottomOneBoxY: '',
              twoBoxX:'',
              twoBoxY:'',
              bottomTwoBoxY:'',
              threeBoxX:'',
              threeBoxY:'',
              bottomThreeBoxY:'',
              fourBoxX:'',
              fourBoxY:'',
              bottomFourBoxY:'',
              data: this.futureData,
              pathOne:'',
              pathTwo:'',
              iconAndstate : ''
            }
        },
        created(){
            
        },
        mounted(){
            this.pathOne = document.querySelector('.path-one')
            this.pathTwo = document.querySelector('.path-two')
            this.iconAndstate = document.querySelector('.iconAndstate')
            let svgDataHeight = this.iconAndstate.clientHeight * 7
            let svgData = document.querySelector('.svgData')

            svgData.setAttribute('height',svgDataHeight)
            // 计算折线坐标
            this.aa()
            
        },
    //    监听更换城市后     实现折线刷新
        watch : {
            data : {
                handler(){
            this.aa()
                },
                deep : true
            }
        },
        methods : {
            // 计算折线坐标
            aa(){

            let svgBoxWidth =  this.iconAndstate.offsetWidth;
            let svgBoxHeight = this.iconAndstate.offsetHeight;
            
            // 第一个盒子坐标
            this.oneBoxX = svgBoxWidth/8 
            this.oneBoxY = svgBoxHeight * 2
            this.bottomOneBoxY = svgBoxHeight * 5 

            // // 第二个盒子坐标
            this.twoBoxX = this.oneBoxX + svgBoxWidth/4
            this.twoBoxY = svgBoxHeight * 2
            this.bottomTwoBoxY = svgBoxHeight * 5

            // // 第三个盒子坐标
            this.threeBoxX = this.twoBoxX + svgBoxWidth/4
            this.threeBoxY = svgBoxHeight* 2
            this.bottomThreeBoxY = svgBoxHeight * 5

            // // 第四个盒子坐标
            this.fourBoxX = this.threeBoxX + svgBoxWidth/4
            this.fourBoxY = svgBoxHeight * 2
            this.bottomFourBoxY = svgBoxHeight * 5 
            

            // // 上坐标跨度计算
            let max_origin = Number(this.futureData[0].tmp_max)
            let max_two = Number(this.futureData[1].tmp_max)
            let max_three = Number(this.futureData[2].tmp_max)

            let max_max = Math.max(max_origin,max_two,max_three);
            let max_min = Math.min(max_origin,max_two,max_three);

            // 每一度跨度
            if (max_origin == max_max && max_origin == max_min) {
                // 当每一个度数相同
                let a = 0
                let b = 0
                this.twoBoxY = this.oneBoxY 
                this.threeBoxY = this.oneBoxY 
            }else{
                // 当度数不同
                let a = Math.max(Math.abs(max_max - max_origin),Math.abs(max_origin - max_min))
                // 每加1度跨度
                let b = this.oneBoxY/2/a
                this.twoBoxY = this.oneBoxY + (max_origin - max_two) * b 
                this.threeBoxY = this.oneBoxY + (max_origin - max_three) * b 
            }

            // // 下坐标跨度计算
            let min_origin = Number(this.futureData[0].tmp_min)
            let min_two = Number(this.futureData[1].tmp_min)
            let min_three = Number(this.futureData[2].tmp_min)

            let min_max = Math.max(min_origin,min_two,min_three);
            let min_min = Math.min(min_origin,min_two,min_three);
            if (min_origin == min_max && min_origin == min_min) {
                // 当每一个度数相同
                let a = 0
                let b = 0
                this.bottomTwoBoxY = this.bottomOneBoxY 
                this.bottomThreeBoxY = this.bottomOneBoxY 
            }else{
                // 当度数不同
                let a = Math.max(Math.abs(min_max - min_origin),Math.abs(min_origin - min_min))
                // 每加1度跨度
                let b = this.oneBoxY/2/a
                this.bottomTwoBoxY = this.bottomOneBoxY + (min_origin - min_two) * b 
                this.bottomThreeBoxY = this.bottomOneBoxY + (min_origin - min_three) * b 
            }
            
            // //  上坐标打点
            let topX = [this.oneBoxX,this.twoBoxX,this.threeBoxX,this.fourBoxX] 
            let topY = [this.oneBoxY,this.twoBoxY,this.threeBoxY,this.fourBoxY]
            let circleTopArr = document.querySelectorAll('.circleTop')
            for (let i = 0; i < circleTopArr.length; i++) {
                circleTopArr[i].setAttribute('cx',topX[i])
                circleTopArr[i].setAttribute('cy',topY[i])
                circleTopArr[i].setAttribute('fill','gray')
                circleTopArr[i].setAttribute('r',2)
            }

            // //  下坐标打点
            let bottomX = [this.oneBoxX,this.twoBoxX,this.threeBoxX,this.fourBoxX] 
            let bottomY = [this.bottomOneBoxY,this.bottomTwoBoxY,this.bottomThreeBoxY,this.bottomFourBoxY]
            let circleBottomArr = document.querySelectorAll('.circleBottom')
            for (let i = 0; i < circleBottomArr.length; i++) {
                circleBottomArr[i].setAttribute('cx',bottomX[i])
                circleBottomArr[i].setAttribute('cy',bottomY[i])
                circleBottomArr[i].setAttribute('fill','gray')
                circleBottomArr[i].setAttribute('r',2)  
            }

            setTimeout(() => {
                // 折线动画
                this.pathOne.classList.add('active')
                this.pathTwo.classList.add('active')
            }, 500);
            this.pathOne.setAttribute('d',`M${this.oneBoxX},${this.oneBoxY} ${this.twoBoxX},${this.twoBoxY} ${this.threeBoxX},${this.threeBoxY} ${this.fourBoxX},${this.fourBoxY}`)         
            this.pathTwo.setAttribute('d',`M${this.oneBoxX},${this.bottomOneBoxY} ${this.twoBoxX},${this.bottomTwoBoxY} ${this.threeBoxX},${this.bottomThreeBoxY} ${this.fourBoxX},${this.bottomFourBoxY}`)
            },
            getIcon(key){
                return icondate(key)
            }
           
        }
    }
</script>

<style scoped lang='less'>
@import '../baseStyle/base.less';
.futureWeather{
    border-radius: 10px;
    background-color: #fff;   
    box-shadow: @boxShadow ;
    margin-bottom: 10px;
    padding: 5px;
    .iconAndstate{
        .iconAndstate-one{
            display: inline-block;
            width: 25%;
            text-align: center;
        }
    }
    .icon{
        .icon-one{
            display: inline-block;
            width: 25%;
            text-align: center;
        }
    }
    .tmp-min{
        .tmp-min-one{
            display:inline-block;
            width:25%;
            text-align:center; 
        }
    }
    .svgBox{
        .svgData{
            width:100%;
            .path-one,.path-two{
                transition: all 5s;
                stroke: @dataFontColor;
                stroke-width: 1px;
                fill: none;
                stroke-dasharray: 2000 2000;
                stroke-dashoffset: 2000;
                &.active{
                    stroke-dashoffset: 0;
                }
            }
        }
    }
    .day-name-box{
        .day-name{
            display: inline-block;
            width: 25%;
            text-align: center;
        }
    }
}
</style>