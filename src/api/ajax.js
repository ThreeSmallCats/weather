// weather data

// 引入城市列表
import {
  CNtoPY
} from './city'

// 异步请求
function ajax(url) {
  return new Promise(function (resolve, reject) {
    var Xml = new XMLHttpRequest()
    Xml.open('GET', url, true)
    Xml.send()
    Xml.onreadystatechange = function () {
      if (Xml.readyState == 4 & Xml.status == 200) {
        var a = Xml.responseText;
        var b = JSON.parse(a)
        resolve(b)
      }

    }
  })
}

// 实时天气，生活指数，    未来7天预报,逐小时天气（开发者）
export function weatherData(lon, lat) {
  var weatherUrl = ''
  if (arguments.length == 1) {
    weatherUrl = `https://free-api.heweather.com/s6/weather?key=ee5050739d9e42cf9bbe36dc30a7a053&location=${arguments[0]}`
  } else {
    weatherUrl = `https://free-api.heweather.com/s6/weather?key=ee5050739d9e42cf9bbe36dc30a7a053&location=${lon},${lat}`
  }
  return new Promise(function (resolve, reject) {
    ajax(weatherUrl).then((data) => {
      resolve(data)
    })
  })
}

// 空气质量
export function airData(lon, lat) {
  return new Promise(function (resolve, reject) {
    searchCity(lon, lat).then((data) => {
      var str = data.HeWeather6["0"].basic["0"].parent_city
      var PYstr = CNtoPY(str)
      var airUrl = `https://free-api.heweather.com/s6/air/now?key=ee5050739d9e42cf9bbe36dc30a7a053&location=${PYstr}`
      ajax(airUrl).then((data) => {
        resolve(data)
      })
    })
  })

}

// 逐小时播报  已经不行 要钱或在成为开发者 
// export function airData(lon,lat) {
// return new Promise(function (resolve,reject) {
//   var hourUrl = `https://free-api.heweather.com/s6/weather/hourly?key=ee5050739d9e42cf9bbe36dc30a7a053&location=${lon},${lat}`
//   ajax(hourUrl).then((data) => {
//     resolve(data)
//   })
// })
// }

// 城市搜索
export function searchCity(lon, lat) {
  var cityUrl = ''
  if (arguments.length == 1) {
    cityUrl = `https://search.heweather.com/find?key=ee5050739d9e42cf9bbe36dc30a7a053&group=cn&number=20&location=${arguments[0]}`
  } else {
    cityUrl = `https://search.heweather.com/find?key=ee5050739d9e42cf9bbe36dc30a7a053&group=cn&number=20&location=${lon},${lat}`
  }
  return new Promise(function (resolve, reject) {

    ajax(cityUrl).then((data) => {
      resolve(data)
    })
  })
}

// 热门城市
export function hotCity() {
  var url = `https://search.heweather.com/top?key=ee5050739d9e42cf9bbe36dc30a7a053&number=50&group=cn`
  return new Promise(function (resolve,reject) {
    ajax(url).then((data)=>{
      resolve(data)
    })
  })
}
