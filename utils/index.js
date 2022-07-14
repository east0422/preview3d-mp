import http from './https'

http.interceptor.request = (config) => { // 请求前拦截器
  // 若需要设置通用token请求参数等可以再此处操作
  return config
}

http.interceptor.response = (response) => { // 请求结束后拦截器
  const res = response.data
  if (res.code && res.code != 200) { // 请求失败(替换为实际业务代码code)
    uni.showToast({
      title: res.msg,
      icon: 'none',
      duration: 2000
    })
  }
  return res;
}

http.interceptor.error = (response) => {
  uni.showModal({
    title: '温馨提示',
    content: response.data || '请求错误，请稍后再试！'
  })
  return Promise.reject(response)
}

export function get(url, data, options) {
  return http.get(url, data, options).then(res => {
    return res
  })
}

export function post(url, data, options) {
  return http.post(url, data, options).then(res => {
    return res
  })
}

export function put(url, data, options) {
  return http.put(url, data, options).then(res => {
    return res
  })
}

export function del(url, data, options) {
  return http.delete(url, data, options).then(res => {
    return res
  })
}

export function upload(url, filePath, fileName, formData) {
	return http.upload(url, filePath, fileName, formData).then(res => {
	  return JSON.parse(res)
	})
}
