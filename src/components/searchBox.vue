<template>
    <div class='search-box'>
        <div class='back-and-inp'>
            <div class='back iconfont' v-on:click='goBack'>
                &#xe605;
            </div>
            <div class='inp'>
                <label for="inp" class='iconfont'>&#xe664;
                <input type="text" id="inp" v-on:input='toSearch(value)' v-model="value" placeholder="   搜索地名">
                </label>
            </div>
        </div>
        <div class='hot-city' v-if="show">
            <span class='txt'>热门搜索</span>
            <ul class='hot-city-box'  >
                <li class='hot-city-item' v-for="item in hot" :key='item.cid' v-on:click='getId(item.cid)'>{{item.location}}</li>
            </ul>
        </div>
        <div class='citys'>
            <ul class='city-box'>
                <li class='city-box-item' v-for="item in searchData" :key='item.cid' v-on:click='getId(item.cid)'>{{item.location}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { hotCity,weatherData,searchCity } from "../api/ajax.js";
import BScroll from 'better-scroll'
import { mapMutations } from "vuex";
    export default {
        name:'searchBox',
        data(){
            return{
                hot : [],
                show : true,
                value : '',
                searchData: [],
                scroll : {},
                searchBox : '',
                back : '',
                inp : ''
            }
        },
        created(){
            // 获取常用城市列表
            hotCity().then((res)=>{
                this.hot = res.HeWeather6["0"].basic;
            })
        },
        mounted(){
            this.back = document.querySelector('.back')
            this.searchBox = document.querySelector('.search-box')
            let citys = document.querySelector('.citys')
            this.scroll = new BScroll(citys,{
                click : true
            })
            this.scroll.refresh()

        },
        methods:{
            // 输入搜索事件
            toSearch(val){
                searchCity(val).then((data)=>{
                    this.searchData = data.HeWeather6['0'].basic
                    this.show = false
                    this.scroll.refresh()
                    if (val == '') {
                        this.show = true
                    }
                })
            },
            // 点击后获取位置id  且进行数据请求
            getId(a){
                weatherData(a).then((data)=>{
                this.setLocationData(data.HeWeather6["0"])
                this.searchBox.style.transform = `translateX(100%)`
                this.searchData = []
                    this.value = ''
                    this.show = true
                    // 为了手机键盘收回
                    // 不收回，如果点击键盘，回发生页面错误
                    setTimeout(() => {
                        
                        this.searchBox.style.display = 'none'
                    }, 500);
                })
       
            },
            ...mapMutations([
                'setLocationData'
            ]),
            // 返回按钮
            goBack(){
                this.searchBox.style.transform = `translateX(100%)`
                
                    
                    this.searchData = []
                    // console.log(1111111111);
                    this.value = ''
                    this.show = true
                    // console.log(22222222222);
                    // console.log(this.inp.value);
                    // 为了手机键盘收回
                    // 不收回，如果点击键盘，回发生页面错误
                    setTimeout(() => {
                        
                        this.searchBox.style.display = 'none'
                    }, 500);
                
            },
        }
    }
</script>

<style scoped lang='less'>
@import '../baseStyle/base.less';
.search-box{
    transition: all .5s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:250%;
    z-index: 1000;
    background: white;
    overflow: hidden;
    .back-and-inp{
        box-sizing: border-box;
        width: 100%;
        padding: 10px;
        border-bottom : 1px solid #b1b1b1;
        height: 8%;
        .back{
            display: inline-block;
            margin-right: 10px;
        }
        .inp{
            position: relative;
            display: inline-block;
            width: 80%;
            border: 1px solid white;
            border-radius: 10px;
            padding-left: 10px;
            background: @bottomcenBackgroundColor;
            #inp{
                width: 80%;
                border: none;
                border-radius: 5px;
                background: @bottomcenBackgroundColor;
                vertical-align: bottom;
                &:focus{
                    outline: none;
                }
            }
        }
    }
    .hot-city{
        width: 90%;
        margin: 10px auto 0 auto; 
        overflow: hidden;
        .txt{
            color : rgba(126, 124, 124, 0.8);
        }
        .hot-city-box{
            margin-top: 10px;
            overflow: hidden;
            .hot-city-item{
                float: left;
                font-size: .8em;
                margin: 0 5px 5px 0;
                padding: 0 10px;
                border-radius: 10px;
                border: 1px solid rgba(128, 128, 128, 0.432);
                background: white;
            }
        }
    }
    .citys{
        width: 100%;
        height: 92%;
        overflow: hidden;
        .city-box{
            margin: 10px auto 10px auto;
            width: 100%;
            padding-bottom: 30px;
            overflow: hidden;
            .city-box-item{
                width: 100%;
                padding : 10px 0 10px 10px;
                border-bottom: 1px solid rgba(128, 128, 128, 0.432);   
            }
        }
    }
}
</style>