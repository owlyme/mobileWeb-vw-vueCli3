export function skipUrl(url) {
  let newLink = document.createElement('a')
  newLink.href = url
  document.body.appendChild(newLink)
  newLink.click()
  document.body.removeChild(newLink)
}
export function genUUID(len) {
  len = len || 6
  len = parseInt(len, 10)
  len = isNaN(len) ? 6 : len
  var seed = '0123456789abcdefghijklmnopqrstubwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ'
  var seedLen = seed.length - 1
  var uuid = ''
  while (len--) {
    uuid += seed[Math.round(Math.random() * seedLen)]
  }
  return uuid
}
export function isWeiXin(){
  var ua = window.navigator.userAgent.toLowerCase();
  if(ua.match(/MicroMessenger/i) == 'micromessenger'){
  return true;
  }else{
  return false;
  }
}
export function apiGetSessionId() {
  return new Promise((resolve) => {
    let obj = {
      sessionId: genUUID(32)
    }
    resolve(obj)
  })
}
export function isAndroid() {
  let u = navigator.userAgent
  let android = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //如果输出结果是true就判定是android终端或者uc浏览器
  return android
}

export function queryToString(args) {
  var keys = Object.keys(args)
  keys = keys.sort()
  var newArgs = {}
  keys.forEach(function(key) {
    newArgs[key] = args[key];
  });
  let str = '?'
  for (let k in newArgs) {
    if (k === 'carry') {
      continue
    }
    if (newArgs[k] !== null && newArgs[k] !== undefined) {
      str += k + '=' + newArgs[k] + '&'
    }
  }
  str = str.slice(0, -1)
  return str
}