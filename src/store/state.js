export var state = {
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
        daily_forecast: [{
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
            {
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
            {
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
            {
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
            {
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
            {
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
            {
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
        ],
        // 生活指数
        lifestyle: [
            // 舒适度指数
            {
                type: 'comf',
                brf: '很好',
                txt: '详解',
                name: '舒适度指数',
                icon: '\ue70b'
            },
            // 穿衣指数
            {
                type: 'drsg',
                brf: '很好',
                txt: '详解',
                name: '穿衣指数',
                icon: '\ue666'
            },
            // 感冒指数
            {
                type: 'flu',
                brf: '很好',
                txt: '详解',
                name: '感冒指数',
                icon: '\ue648'
            },
            // 运动指数
            {
                type: 'sport',
                brf: '很好',
                txt: '详解',
                name: '运动指数',
                icon: '\ue649'
            },
            // 旅游指数
            {
                type: 'trav',
                brf: '很好',
                txt: '详解',
                name: '旅游指数',
                icon: '\ue60c'
            },
            // 紫外线指数
            {
                type: 'uv',
                brf: '很好',
                txt: '详解',
                name: '紫外线指数',
                icon: '\ue74a'
            },
        ],
        hourly: [{
                cond_code: '100',
                cond_txt: '晴',
                time: '2018-10-08 16:00',
                tmp: 30,
            },
            {
                cond_code: '100',
                cond_txt: '晴',
                time: '2018-10-08 16:00',
                tmp: 30,
            },
            {
                cond_code: '100',
                cond_txt: '晴',
                time: '2018-10-08 16:00',
                tmp: 30,
            },
            {
                cond_code: '100',
                cond_txt: '晴',
                time: '2018-10-08 16:00',
                tmp: 30,
            },
            {
                cond_code: '100',
                cond_txt: '晴',
                time: '2018-10-08 16:00',
                tmp: 30,
            },
            {
                cond_code: '100',
                cond_txt: '晴',
                time: '2018-10-08 16:00',
                tmp: 30,
            },
            {
                cond_code: '100',
                cond_txt: '晴',
                time: '2018-10-08 16:00',
                tmp: 30,
            },
            {
                cond_code: '100',
                cond_txt: '晴',
                time: '2018-10-08 16:00',
                tmp: 30,
            },


        ],
        // 刷新时间
        update: {
            // 当地时间
            loc: '2018-10-01 00:00',
            // UTC时间
            utc: '2018-10-01 00:00'
        }
    },
}