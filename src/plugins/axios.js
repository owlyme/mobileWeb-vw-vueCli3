import axios from 'axios'
import md5 from 'md5'
import _ from "lodash";
import {
  getCookieSession,
  setCookieSession,
  getToken,
  setToken
} from '@/utils/cookies'
import {
  queryToString,
  apiGetSessionId
} from '@/utils/util'
// 普通请求
const saveTime = 0.5
const service = axios.create({
  withCredentials: false, // 允许携带cookie
  timeout: 60000,
  baseURL: process.env.VUE_APP_API_ROOT
})
// respone interceptor
service.interceptors.response.use(
  response => {
    let data = response.data
    if (data.code === 200) {
      /*eslint-disable */
    } else if (data.code >= 201 && data.code <= 299) {
    } else if (data.code === 1) {}
    /* eslint-enable */
    return response
  },
  error => {
    // Message.error({ content: error, duration: 10 })
    return Promise.reject(error)
  })
service.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
function filterNull(o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return _.cloneDeep(o);
}
function getData(url, paramsData) {
  return new Promise((resolve, reject) => {
    paramsData.carry = md5(queryToString(paramsData) + process.env.VUE_APP_MD5_DISTURB)
    service.get(url, {
      params: paramsData
    }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      let res = err.response
      if (res) {
        reject(err)
      }
    })
  })
}
function getPostData(url, paramsData) {
  return new Promise((resolve, reject) => {
    paramsData.carry = md5(queryToString(paramsData) + process.env.VUE_APP_MD5_DISTURB)
    service.post(url, paramsData).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      let res = err.response
      if (res) {
        reject(err)
      }
    })
  })
}
// get 请求
function getApiAxios(url, params, isSaveToken) {
  if (params) {
    params = filterNull(params)
  } else {
    params = {}
  }
  let obj = {}
  let sessionId = getCookieSession()
  let timestamp = new Date()
  obj.timestamp = timestamp.getTime()
  let token = getToken()
  if (token) {
    setToken(token, saveTime)
  }
  if (sessionId) {
    obj.sessionId = sessionId
    if (!isSaveToken) {
      setCookieSession(sessionId , saveTime)
    }
    let paramsData = Object.assign({}, params, obj)
    return getData(url, paramsData)
  } else {
    return apiGetSessionId().then(data => {
      if (data.sessionId) {
        setCookieSession(data.sessionId, saveTime)
        obj.sessionId = data.sessionId
        let paramsData = Object.assign({}, params, obj)
        return getData(url, paramsData)
      }
    })
  }
}
// post 请求
function postApiAxios(url, params) {
  if (params) {
    params = filterNull(params)
  } else {
    params = {}
  }
  let obj = {}
  let sessionId = getCookieSession()
  let token = getToken()
  if (token) {
    setToken(token, saveTime)
  }
  if (sessionId) {
    obj.sessionId = sessionId
    setCookieSession(sessionId, saveTime)
    let paramsData = Object.assign({}, params, obj)
    return getPostData(url, paramsData)
  } else {
    return apiGetSessionId().then(data => {
      setCookieSession(data.sessionId, saveTime)
      obj.sessionId = data.sessionId
      let paramsData = Object.assign({}, params, obj)
      return getPostData(url, paramsData)
    })
  }
}

export default {
  get: function(url, params, isSaveToken) {
    return getApiAxios(url, params, isSaveToken)
  },
  post: function(url, params) {
    return postApiAxios(url, params)
  }
}
