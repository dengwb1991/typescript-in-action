import React from 'react'
import { Route } from 'react-router-dom'
import { Layout, Button } from 'antd'
import Menu from '@components/menu'

import Employee from './pages/employee'
import Setting from './pages/setting'

import '@assets/css/app.less'

const { Header, Content, Sider } = Layout

const App = (props: any) => {
  // const defaultKey = match.url.replace('/', '') || 'employee'
  const accessToken = localStorage.getItem('accessToken')
  if (!accessToken) {
    props.history.push('login')
  }
  const exit = () => {
    localStorage.removeItem('accessToken')
    props.history.push('login')
  }

  return (
    <Layout>
      <Header style={{ textAlign: "right" }}>
        <Button type="primary" onClick={ exit } >退出登录</Button>
      </Header>
      {/* <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={ [defaultKey] }
          className="menu"
        >
          <Menu.Item key="employee"><Link to="/employee">员工管理</Link></Menu.Item>
          <Menu.Item key="setting"><Link to="/setting">系统设置</Link></Menu.Item>
        </Menu>
      </Header> */}
      <Layout>
        <Sider>
          <Menu></Menu>
        </Sider>
        <Content className="content-wrap">
          <div className="content">
            <Route path="/" exact component={ Employee } />
            <Route path="/employee" exact component={ Employee } />
            <Route path="/setting" exact component={ Setting } />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App