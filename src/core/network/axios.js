import axios from 'axios'
import qs from 'qs'

const debug = process.env.NODE_ENV !== 'production'

// axios 配置
axios.defaults.timeout = 60000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = debug ? '/api' : '/'

// POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
  if (res.data.code) {
    // Message.error(res.data.msg || '未知错误，请联系系统管理员')
    return Promise.reject(res.data)
  }
  if (res.data.hasOwnProperty('msg')) {
    return Promise.resolve(res.data.msg)
  } else {
    return Promise.resolve(res.data)
  }
}, (error) => {
  // Message.error(error.data || error.message || '未知错误，请联系系统管理员')
  return Promise.reject(error.data || error.data)
})
export default axios
