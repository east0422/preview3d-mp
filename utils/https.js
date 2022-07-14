/**
 * 通用uni-app网络请求
 *
 * 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
 */
export default {
  config: {
    baseUrl: 'http://localhost:8080',
    header: {'Content-Type': 'application/json'},
    data: {},
    method: 'GET',
    timeout: 60000,
    dataType: 'json',
    responseType: 'text',
    success() {},
    fail() {},
    complete() {},
    silence: false // 如设置为true 则不显示loading
  },
  interceptor: {
    request: null,
    response: null,
    error: null
  },
  request(options) {
    if (!options) {
      options = {}
    }
    options.baseUrl = options.baseUrl || this.config.baseUrl
    options.dataType = options.dataType || this.config.dataType
    options.url = options.baseUrl + options.url
    options.data = options.data || {}
    options.method = options.method || this.config.method
    options.timeout = options.timeout || this.config.timeout;
    options.silence = options.silence || this.config.silence
    options.header = options.header || this.config.header

    return new Promise((resolve, reject) => {
      options.complete = (response) => {
        if(!options.silence) {
          uni.hideLoading()
        }
        if (response.statusCode == 200) {
          if (this.interceptor.response) {
            response = this.interceptor.response(response)
          }
          if (response.data.code != 200) {
            uni.showToast({
              title: response.data.msg || response.errMsg,
              icon: 'none',
              duration: 3000
            })
            return
          } else {
            resolve(response)
          }
        } else {
          if (this.interceptor.error) {
            response = this.interceptor.error(response)
          }
          reject(response)
        }
      }

      const config = Object.assign({}, this.config, options)

      if (this.interceptor.request) {
        this.interceptor.request(config)
      }

      if(!options.silence) {
        uni.showLoading({
          title: '加载中...'
        })
      }

      uni.request(config);
    });
  },
  get(url, data, options) {
    if (!options) {
      options = {}
    }
    options.url = url
    options.data = data || {}
    options.method = 'GET'
    return this.request(options)
  },
  post(url, data, options) {
    if (!options) {
      options = {}
    }
    options.url = url
    options.data = data || {}
    options.method = 'POST'
    return this.request(options)
  },
  put(url, data, options) {
    if (!options) {
      options = {}
    }
    options.url = url
    options.data = data || {}
    options.method = 'PUT'
    return this.request(options)
  },
  delete(url, data, options) {
    if (!options) {
      options = {}
    }
    options.url = url
    options.data = data || {}
    options.method = 'DELETE'
    return this.request(options)
  },
	upload(url, filePath, fileName, formData) { // 上传文件
		var params = {
			url: this.config.baseUrl + url,
			filePath: filePath,
			name: fileName,
			header:{'Content-Type': 'multipart/form-data'}
		}
		if (formData) { // 请求其他额外的参数
			params.formData = formData
		}
		return new Promise((resolve, reject) => {
			params.complete = (response) => {
				uni.hideLoading()
				
				if (response.statusCode == 200) {
					if (this.interceptor.response) {
						response = this.interceptor.response(response)
					}
					resolve(response)
				} else {
					if (this.interceptor.error) {
						response = this.interceptor.error(response)
					}
					reject(response)
				}
			}
			
			uni.showLoading({
				title: '上传中...'
			})
			if (this.interceptor.request) {
			  this.interceptor.request(params)
			}
			uni.uploadFile(params);
		})
	}
}
