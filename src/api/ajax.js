import ENV from '../../config/index.js'
const base_url = ENV.API_ROOT
export function ajax({ method, url, body, headers }) {
  //ES6语法
  //进行Promise封装
  return new Promise((resolve, reject) => {
    //这句话是套路,记住
    let request = new XMLHttpRequest()
    request.open(method, base_url + url) //配置
    for (const key in headers) {
      //遍历header,设置响应头
      let value = headers[key]
      request.setRequestHeader(key, value)
    }
    request.send(body) //发送,并配置响应体

    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status) {
          resolve(JSON.parse(request.response)) //执行成功函数
        } else {
          reject(request) //执行失败函数
        }
      }
    }
  })
}