import Axios from 'axios'
import qs from 'qs'
if (process.env.NODE_ENV === 'production') {
  Axios.defaults.baseURL = 'http://47.100.121.23:8080'
  Axios.defaults.withCredentials = true // 指示是否跨站点访问控制请求
} else {
  // Axios.defaults.baseURL = 'http://result.eolinker.com/c7mXjQA0595a41b6e4fe2be8c8abb632214a3c2951a357d?uri='
  Axios.defaults.baseURL = 'http://47.100.121.23:8080'
  Axios.defaults.withCredentials = true
}
Axios.timeout = 30000 // 设置超时时间
Axios.defaults.transformRequest = [ function (data) {
  data = qs.stringify(data)
  return data
}]
// http request拦截器通过这个我们就可以把token传到后台，拦截请求
Axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.timeout = 30000
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor 拦截响应
Axios.interceptors.response.use(function (response) {
  let { data } = response
  if (data.errcode === 4003) {
    location.href = '/'
    return
  }
  if (data.errcode === 0 && data.description !== '') {
    console.log(data.description)
  }
  return response
}, function (error) {
  // Do something with response error
  alert('服务器请求失败')
  return Promise.reject(error)
})

export default Axios
