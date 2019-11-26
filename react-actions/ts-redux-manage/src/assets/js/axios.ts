import axios from 'axios'
import { message } from 'antd'
import { isEmpty } from './utils'

axios.defaults.timeout = 10000

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  if (response.status === 200) {
    if (+response.data.successful === 0) {
      return {}
    }
    return response.data
  }
}, error => {
  if (error.response.status) {
    switch (error.response.status) {
      case 404:
        message.error('not found')
        break;
    }
    return {}
  }
})

const getToken = () => {
  return {
    accessToken: localStorage.getItem('accessToken')
  }
}

const convertQuery = (params: any): string => {
  if (!params) {
    return ''
  }
  return Object.keys(params).reduce((pre, key) => (pre + `${key}=${encodeURIComponent(params[key])}&`), '').slice(0, -1)
}

function get (url: string, params: any, { headers }: any = {}) {
  return new Promise((resolve) => {
    axios.get(url, { params, headers: {
      ...headers,
      ...getToken()
    }}).then(res => {
      if (!isEmpty(res)) {
        resolve(res.data)
      }
    })
  })
}

function post (url: string, params: any, { headers }: any = {}) {
  return new Promise((resolve) => {
    axios.post(url, convertQuery(params), {
      headers: {
        ...headers,
        ...getToken()
      }
    }).then(res => {
      if (!isEmpty(res)) {
        resolve(res.data)
      }
    })
  })
}

export default {
  ...axios,
  get,
  post
}