// 将状态码转对应iconfont
export function icondate(key) { 
    switch (key) {
        // 其中带 n 的为晚间
        // 晴
        case  '100' : return '\ue622';
        case '100n' : return '\ue624';
        // 多云
        case  '101' : return '\ue603';  
        // 少云
        case  '102' : return '\ue631';  
        // 晴间多云
        case  '103' : return '\ue60a';  
        case  '103n': return '\ue611';  
        // 阴
        case  '104' : return '\ue606';  
        case '104n' : return '\ue606';  
        // 有风
        case  '200' : return '\ue609';  
        // 平静
        case  '201' : return '\ue608';  
        // 微风
        case  '202' : return '\ue609';  
        // 和风
        case  '203' : return '\ue609';  
        // 清风
        case  '204' : return '\ue609';  
        // 强风
        case  '205' : return '\ue796';  
        // 疾风
        case  '206' : return '\ue796';  
        // 大风
        case  '207' : return '\ue796';  
        // 烈风
        case  '208' : return '\ue610';  
        // 风暴
        case  '209' : return '\ue610';  
        // 狂爆风
        case  '210' : return '\ue610';  
        // 飓风
        case  '211' : return '\ue610';  
        // 龙卷风
        case  '212' : return '\ue610';  
        // 热带风暴
        case  '213' : return '\ue610';  
        // 阵雨
        case  '300' : return '\ue7de';  
        case '300n' : return '\ue7de';  
        // 强阵雨
        case  '301' : return '\ue6da';  
        case '301n' : return '\ue6da';  
        // 雷阵雨
        case  '302' : return '\ue617';  
        // 强雷阵雨
        case  '303' : return '\ue618';  
        // 雷阵雨伴有冰雹
        case  '304' : return '\ue619';  
        // 小雨
        case  '305' : return '\ue625';  
        // 中雨
        case  '306' : return '\ue62e';  
        // 大雨
        case  '307' : return '\ue61f';  
        // 极端降雨
        case  '308' : return '\ue61d';
        // 毛毛雨
        case  '309' : return '\ue61e';  
        // 暴雨
        case  '310' : return '\ue61b';  
        // 大暴雨
        case  '311' : return '\ue61c';  
        // 特大暴雨
        case  '312' : return '\ue626';  
        // 冻雨
        case  '313' : return '\ue630';  
        // 小到中雨
        case  '314' : return '\ue615';  
        // 中到大雨
        case  '315' : return '\ue60f';  
        // 大到暴雨
        case  '316' : return '\ue616';  
        // 暴雨到大暴雨
        case  '317' : return '\ue614';  
        // 大暴雨到特大暴雨
        case  '318' : return '\ue612';  
        // 雨
        case  '399' : return '\ue6f6';  
        // 小雪
        case  '400' : return '\ue627';  
        // 中雪
        case  '401' : return '\ue632';  
        // 大雪
        case  '402' : return '\ue620';  
        // 暴雪
        case  '403' : return '\ue621';  
        // 雨夹雪
        case  '404' : return '\ue629';  
        // 雨雪天气
        case  '405' : return '\ue636';  
        // 阵雨夹雪
        case  '406' : return '\ue637';  
        case '406n' : return '\ue637';  
        // 阵雪
        case  '407' : return '\ue62b';  
        case '407n' : return '\ue62c';  
        // 小到中雪
        case  '408' : return '\ue60b';  
        // 中到大雪
        case  '409' : return '\ue60e';  
        // 大到暴雪
        case  '410' : return '\ue613';  
        // 雪
        case  '499' : return '\ue644';  
        // 薄雾
        case  '500' : return '\ue639';  
        // 雾
        case  '501' : return '\ue63a';  
        // 霾
        case  '502' : return '\ue623';  
        // 扬沙
        case  '503' : return '\ue63c';  
        // 浮尘
        case  '504' : return '\ue63d';  
        // 沙尘暴
        case  '507' : return '\ue63f';  
        // 强沙尘暴
        case  '508' : return '\ue640';  
        // 浓雾
        case  '509' : return '\ue645';  
        // 强浓雾
        case  '510' : return '\ue645';  
        // 中度霾
        case  '511' : return '\ue62d';  
        // 重度霾
        case  '512' : return '\ue62f';  
        // 严重霾
        case  '513' : return '\ue628';  
        // 大雾
        case  '514' : return '\ue645';  
        // 特强浓雾
        case  '515' : return '\ue645';  
        // 热
        case  '900' : return '\ue641';  
        // 冷
        case  '901' : return '\ue642';  
        // 未知
        case  '999' : return '\ue643'; 
        default :  return '\ue643';
    }
}
