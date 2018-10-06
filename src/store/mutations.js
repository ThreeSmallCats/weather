export var mutations = {
    setLocationData(state, obj) {
        // 基础信息更新
        // console.log(obj);
        state.locationData.basic.parent_city = obj.basic.parent_city;
        state.locationData.basic.location = obj.basic.location;
        state.locationData.basic.lon = obj.basic.lon;
        // console.log(obj.basic.lon + '111111111111111111');
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
        state.locationData.daily_forecast[0].cond_txt_n = obj.daily_forecast[0].cond_txt_n
        state.locationData.daily_forecast[0].tmp_max = obj.daily_forecast[0].tmp_max
        state.locationData.daily_forecast[0].tmp_min = obj.daily_forecast[0].tmp_min

        state.locationData.daily_forecast[1].date = obj.daily_forecast[1].date
        state.locationData.daily_forecast[1].cond_code_d = obj.daily_forecast[1].cond_code_d
        state.locationData.daily_forecast[1].cond_code_n = obj.daily_forecast[1].cond_code_n
        state.locationData.daily_forecast[1].cond_txt_d = obj.daily_forecast[1].cond_txt_d
        state.locationData.daily_forecast[1].cond_txt_n = obj.daily_forecast[1].cond_txt_n
        state.locationData.daily_forecast[1].tmp_max = obj.daily_forecast[1].tmp_max
        state.locationData.daily_forecast[1].tmp_min = obj.daily_forecast[1].tmp_min

        state.locationData.daily_forecast[2].date = obj.daily_forecast[2].date
        state.locationData.daily_forecast[2].cond_code_d = obj.daily_forecast[2].cond_code_d
        state.locationData.daily_forecast[2].cond_code_n = obj.daily_forecast[2].cond_code_n
        state.locationData.daily_forecast[2].cond_txt_d = obj.daily_forecast[2].cond_txt_d
        state.locationData.daily_forecast[2].cond_txt_n = obj.daily_forecast[2].cond_txt_n
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

    },
}