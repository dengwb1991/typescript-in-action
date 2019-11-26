import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

const MenuHooks = () => {
  return (
    <div>
      <Menu defaultSelectedKeys={ ['1'] }
            defaultOpenKeys={ ['sub1'] }
            mode="inline"
            theme="dark">
        <Menu.SubMenu key="sub1"
                      title={
                        <span>
                          <Icon type="mail" />
                          <span>Navigation One</span>
                        </span>
                      }>
          <Menu.Item key="1"><Link to="/employee">employee</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/setting">setting</Link></Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="sub2"
                      title={
                        <span>
                          <Icon type="desktop" />
                          <span>Navigation Two</span>
                        </span>
                      }>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  )
}

export default MenuHooks