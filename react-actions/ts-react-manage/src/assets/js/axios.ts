import axios from 'axios'
import { message } from 'antd'

axios.defaults.timeout = 10000

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  if (response.status === 200) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
}, error => {
  if (error.response.status) {
    switch (error.response.status) {
      case 404:
        message.error('not found')
        break;
    }
    return Promise.reject(error.response)
  }
})

const convertQuery = (params: any): string => {
  if (!params) {
    return ''
  }
  return Object.keys(params).reduce((pre, key) => (pre + `${key}=${encodeURIComponent(params[key])}&`), '').slice(0, -1)
}

async function get (url: string, params: any) {
  const res = await axios.get(url, { params })
  return res.data
}

async function post (url: string, params: any) {
  const res = await axios.post(url, convertQuery(params))
  return res.data
}

export default {
  ...axios,
  get,
  post
}