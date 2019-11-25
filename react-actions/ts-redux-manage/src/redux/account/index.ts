import axios from '@assets/js/axios'

import {
  LOGIN_URL
} from '@constants/urls'

import {
  LoginRequest,
  LoginResponse
} from '@interface/account'

const initialState: Readonly<LoginResponse> = {
  accessToken: ''
}

export function login (params: LoginRequest) {
  return () => {
    return new Promise((resolve) => {
      axios.get(LOGIN_URL, params).then(data => {
        resolve(data)
      })
    })
  }
}

export default function (state = initialState, action: any) {
  return state
}