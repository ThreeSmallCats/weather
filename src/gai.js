import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        locationData: {
            // 基础信息
            basic: {
                // 所在城市的上级市
                parent_city: '佛山',
                // 所在城市
                location: '三水',
                // 所在经度
                lon: 0,
                // 所在纬度
                lat: 0,
                // 城市id
                cid: 'CN101280805'
            },
            // 实时天气
            now: {
                // 温度
                tmp: 20,
                // 实况天气状况代码
                cond_code: 100,
                // 实况天气状况描述
                cond_txt: '晴'
                // 
            },
            // 未来3天天气
            daily_forecast: {
                0: {
                    // 预报日期
                    date: '2018-10-01',
                    // 白天天气状态码
                    cond_code_d: 100,
                    // 晚间天气状态码
                    cond_code_n: 100,
                    // 白天天气状态描述
                    cond_txt_d: '晴',
                    // 晚间天气状态描述
                    cond_txt_n: '晴',
                    // 最高温度
                    tmp_max: 1,
                    // 最低温度
                    tmp_min: 1,
                },
                1: {
                    // 预报日期
                    date: '2018-10-02',
                    // 白天天气状态码
                    cond_code_d: 100,
                    // 晚间天气状态码
                    cond_code_n: 100,
                    // 白天天气状态描述
                    cond_txt_d: '晴',
                    // 晚间天气状态描述
                    cond_txt_n: '晴',
                    // 最高温度
                    tmp_max: 1,
                    // 最低温度
                    tmp_min: 1,
                },
                2: {
                    // 预报日期
                    date: '2018-10-03',
                    // 白天天气状态码
                    cond_code_d: 100,
                    // 晚间天气状态码
                    cond_code_n: 100,
                    // 白天天气状态描述
                    cond_txt_d: '晴',
                    // 晚间天气状态描述
                    cond_txt_n: '晴',
                    // 最高温度
                    tmp_max: 1,
                    // 最低温度
                    tmp_min: 1,
                },
            },
            // 生活指数
            lifestyle: {
                // 舒适度指数
                0: {
                    type: 'comf',
                    brf: '很好',
                    txt: '详解'
                },
                // 穿衣指数
                1: {
                    type: 'drsg',
                    brf: '很好',
                    txt: '详解'
                },
                // 感冒指数
                2: {
                    type: 'flu',
                    brf: '很好',
                    txt: '详解'
                },
                // 旅游指数
                3: {
                    type: 'trav',
                    brf: '很好',
                    txt: '详解'
                },
                // 运动指数
                4: {
                    type: 'sport',
                    brf: '很好',
                    txt: '详解'
                },
                // 紫外线指数
                5: {
                    type: 'uv',
                    brf: '很好',
                    txt: '详解'
                },
            },
            // 刷新时间
            update: {
                // 当地时间
                loc: '2018-10-01 00:00',
                // UTC时间
                utc: '2018-10-01 00:00'
            }
        }
    },
    mutations: {
        locationData(state, obj) {
            // 基础信息更新
            state.locationData.basic.parent_city = obj.basic.parent_city;
            state.locationData.basic.location = obj.basic.location;
            state.locationData.basic.lon = obj.basic.lon;
            state.locationData.basic.lat = obj.basic.lat;
            state.locationData.basic.cid = obj.basic.cid;

            // 实时天气更新
            state.locationData.now.tmp = obj.now.tmp
            state.locationData.now.cond_code = obj.now.cond_code
            state.locationData.now.cond_txt = obj.now.cond_txt

            // 未来3天天气更新
            state.locationData.daily_forecast[0].date = obj.daily_forecast[0].date
            state.locationData.daily_forecast[0].cond_code_d = obj.daily_forecast[0].cond_code_d
            state.locationData.daily_forecast[0].cond_code_n = obj.daily_forecast[0].cond_code_n
            state.locationData.daily_forecast[0].cond_txt_d = obj.daily_forecast[0].cond_txt_d
            state.locationData.daily_forecast[0].cond_txt_n = obj.daily_forecast[0].date
            state.locationData.daily_forecast[0].tmp_max = obj.daily_forecast[0].tmp_max
            state.locationData.daily_forecast[0].tmp_min = obj.daily_forecast[0].tmp_min

            state.locationData.daily_forecast[1].date = obj.daily_forecast[1].date
            state.locationData.daily_forecast[1].cond_code_d = obj.daily_forecast[1].cond_code_d
            state.locationData.daily_forecast[1].cond_code_n = obj.daily_forecast[1].cond_code_n
            state.locationData.daily_forecast[1].cond_txt_d = obj.daily_forecast[1].cond_txt_d
            state.locationData.daily_forecast[1].cond_txt_n = obj.daily_forecast[1].date
            state.locationData.daily_forecast[1].tmp_max = obj.daily_forecast[1].tmp_max
            state.locationData.daily_forecast[1].tmp_min = obj.daily_forecast[1].tmp_min

            state.locationData.daily_forecast[2].date = obj.daily_forecast[2].date
            state.locationData.daily_forecast[2].cond_code_d = obj.daily_forecast[2].cond_code_d
            state.locationData.daily_forecast[2].cond_code_n = obj.daily_forecast[2].cond_code_n
            state.locationData.daily_forecast[2].cond_txt_d = obj.daily_forecast[2].cond_txt_d
            state.locationData.daily_forecast[2].cond_txt_n = obj.daily_forecast[2].date
            state.locationData.daily_forecast[2].tmp_max = obj.daily_forecast[2].tmp_max
            state.locationData.daily_forecast[2].tmp_min = obj.daily_forecast[2].tmp_min

            // 生活指数更新
            state.locationData.lifestyle[0].brf = obj.lifestyle[0].brf
            state.locationData.lifestyle[0].txt = obj.lifestyle[0].txt

            state.locationData.lifestyle[1].brf = obj.lifestyle[1].brf
            state.locationData.lifestyle[1].txt = obj.lifestyle[1].txt

            state.locationData.lifestyle[2].brf = obj.lifestyle[2].brf
            state.locationData.lifestyle[2].txt = obj.lifestyle[2].txt

            state.locationData.lifestyle[3].brf = obj.lifestyle[3].brf
            state.locationData.lifestyle[3].txt = obj.lifestyle[3].txt

            state.locationData.lifestyle[4].brf = obj.lifestyle[4].brf
            state.locationData.lifestyle[4].txt = obj.lifestyle[4].txt

            state.locationData.lifestyle[5].brf = obj.lifestyle[5].brf
            state.locationData.lifestyle[5].txt = obj.lifestyle[5].txt

            // 更新时间
            state.locationData.update.loc = obj.update.loc
            state.locationData.update.utc = obj.update.utc

        }
    },
    actions: {

    }
})