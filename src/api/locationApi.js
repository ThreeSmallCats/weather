// location api 

// 获取所在经纬度
var option = {
  // 是否精确获取
  enableHighAccuracy: true,
  //   超时时间
  timeout: 5000,
  // maximumAge: 0
}

export var LApi = {
  getLocation() {
    return new Promise(function (resolve, reject) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          resolve(position)
        }, function (err) {
          reject(err)
        }, option)
      }

    })
  },
}
