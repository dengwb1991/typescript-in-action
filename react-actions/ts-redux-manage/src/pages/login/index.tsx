import React, { useState } from 'react'
import { Input, Icon, Button } from 'antd'
import './index.less'
// import { FormComponentProps } from 'antd/lib/form'

import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import {
  login
} from '@redux/account'

import {
  LoginRequest
} from '@interface/account'

interface Props {
  onLogin (params: LoginRequest): any
}


const LoginHooks = (props: Props & RouteComponentProps ) => {
  const [name, setName] = useState('admin')
  const [password, setPassword] = useState('123456')

  const changeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value)
  }
  const changePassWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  const login = () => {
    props.onLogin({
      username: name,
      password: password
    }).then(({ accessToken }: any) => {
      localStorage.setItem('accessToken', accessToken)
      props.history.push('employee')
    })
  }
  return (
    <div className="login-wrap">
      <div className="login-container">
        <Input className="login-username" placeholder="username" value={ name } onChange={ changeUserName } prefix={<Icon type="user" style={{ fontSize: 16 }}/>} />
        <Input className="login-password" placeholder="password" type="password" value={ password } onChange={ changePassWord } prefix={<Icon type="lock" style={{ fontSize: 16 }}/>} />
        <Button className="login-submit" onClick={ login }>
          登录
        </Button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onLogin: login,
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(LoginHooks)