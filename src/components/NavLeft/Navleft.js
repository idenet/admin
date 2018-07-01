import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import MenuConfig from '../../config/menuConfig'
import './Navleft.less'

import { Menu } from 'antd'
const SubMenu = Menu.SubMenu

export default class Navleft extends Component {
  constructor() {
    super()
    this.state = {
      menuTreeNode: []
    }
  }

  componentDidMount() {
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode
    })
  }
  // 菜单渲染 递归
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="logo">
          <h1>react admin</h1>
        </div>
        <Menu theme="dark">{this.state.menuTreeNode}</Menu>
      </div>
    )
  }
}
