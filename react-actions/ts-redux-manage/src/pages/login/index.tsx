import React, { useState } from 'react'
import { Input, Icon } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import './index.less'

const LoginHooks = () => {
  const [name, setName] = useState('')

  const changeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value)
  }
  return (
    <div className="login-wrap">
      <div className="login-container">
        <Input className="login-username" value={ name } onChange={ changeUserName } prefix={<Icon type="user" style={{ fontSize: 16 }}/>} />
      </div>
    </div>
  )
}

export default LoginHooks