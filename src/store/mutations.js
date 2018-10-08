export var mutations = {
    setLocationData(state, obj) {
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

        // 未来7天天气更新
        for (let i = 0; i < 7; i++) {
            state.locationData.daily_forecast[i].date = obj.daily_forecast[i].date
            state.locationData.daily_forecast[i].cond_code_d = obj.daily_forecast[i].cond_code_d
            state.locationData.daily_forecast[i].cond_code_n = obj.daily_forecast[i].cond_code_n
            state.locationData.daily_forecast[i].cond_txt_d = obj.daily_forecast[i].cond_txt_d
            state.locationData.daily_forecast[i].cond_txt_n = obj.daily_forecast[i].cond_txt_n
            state.locationData.daily_forecast[i].tmp_max = obj.daily_forecast[i].tmp_max
            state.locationData.daily_forecast[i].tmp_min = obj.daily_forecast[i].tmp_min
        }


        // 生活指数更新
        for (let i = 0; i < 6; i++) {
            state.locationData.lifestyle[i].brf = obj.lifestyle[i].brf
            state.locationData.lifestyle[i].txt = obj.lifestyle[i].txt
        }

        // 逐小时天气更新
        for (let i = 0; i < 8; i++) {
            state.locationData.hourly[i].cond_code = obj.hourly[i].cond_code
            state.locationData.hourly[i].cond_txt = obj.hourly[i].cond_txt
            state.locationData.hourly[i].time = obj.hourly[i].time
            state.locationData.hourly[i].tmp = obj.hourly[i].tmp
        }

        // 更新时间
        state.locationData.update.loc = obj.update.loc
        state.locationData.update.utc = obj.update.utc

    },
}